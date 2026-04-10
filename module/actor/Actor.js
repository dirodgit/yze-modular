export class YZEActor extends Actor {
  /** @override */
  prepareData() {
    super.prepareData();
  }

  /** @override */
  prepareDerivedData() {
    const system = this.system;
    const diceSystem = game.settings.get("yze-modular", "diceSystem");
    const vitalityMode = game.settings.get("yze-modular", "vitalityMode");

    // Auto-calculate Max Health/Resolve if in "points" mode
    if (vitalityMode === "points") {
      if (diceSystem === "pool") {
        system.resources.health.max = system.attributes.strength.value;
        system.resources.resolve.max = system.attributes.wits.value;
      }
    }
  }
}

