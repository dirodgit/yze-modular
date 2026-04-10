/**
 * Modular Roll Engine for Year Zero Engine.
 */
export class YZEDice {
  /**
   * Main roll function.
   * @param {Object} options Options for the roll
   * @param {number} options.base Total dice (pool) or first die size (step)
   * @param {number} options.special (Optional) Second die size for Step Dice
   * @param {string} options.label Label for the chat message
   * @param {Actor} options.actor Actor performing the roll
   */
  static async roll({ base = 0, special = 0, label = "Rolagem YZE", actor = null } = {}) {
    const diceSystem = game.settings.get("yze-modular", "diceSystem");
    let formula = "";
    let successes = 0;

    if (diceSystem === "pool") {
      // Dice Pool Logic
      formula = `${base}d6`;
      const roll = await new Roll(formula).evaluate();
      
      // Count 6s
      successes = roll.terms[0].results.filter(r => r.result === 6).length;
      
      await roll.toMessage({
        speaker: ChatMessage.getSpeaker({ actor }),
        flavor: `<h3>${label}</h3><div class="roll-result">Sucessos: <b>${successes}</b></div>`
      });
      
    } else {
      // Step Dice Logic
      // base and special are the face values (6, 8, 10, 12)
      const dice = [];
      if (base >= 6) dice.push(`1d${base}`);
      if (special >= 6) dice.push(`1d${special}`);
      
      if (dice.length === 0) dice.push("1d6"); // Fallback

      formula = dice.join(" + ");
      const roll = await new Roll(formula).evaluate();

      // Count successes: 6-9 = 1, 10+ = 2
      successes = 0;
      roll.terms.filter(t => t.results).forEach(term => {
        term.results.forEach(r => {
            if (r.result >= 10) successes += 2;
            else if (r.result >= 6) successes += 1;
        });
      });

      await roll.toMessage({
        speaker: ChatMessage.getSpeaker({ actor }),
        flavor: `<h3>${label}</h3><div class="roll-result">Sucessos: <b>${successes}</b></div>`
      });
    }
  }
}

