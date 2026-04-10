/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  // Define template paths to load
  const templatePaths = [
    // Actor Sheet Partials
    "systems/yzesrd-vtt/templates/sheets/parts/character-inventory.hbs",
    "systems/yzesrd-vtt/templates/sheets/parts/character-notes.hbs",
    "systems/yzesrd-vtt/templates/sheets/parts/character-talents.hbs",
    "systems/yzesrd-vtt/templates/sheets/parts/character-main.hbs",

    // sheet templates
    "systems/yzesrd-vtt/templates/sheets/character-sheet.hbs",
    "systems/yzesrd-vtt/templates/sheets/gear-sheet.hbs",
    "systems/yzesrd-vtt/templates/sheets/vehicle-sheet.hbs",
    "systems/yzesrd-vtt/templates/sheets/weapon-sheet.hbs",
    "systems/yzesrd-vtt/templates/sheets/armor-sheet.hbs",
    "systems/yzesrd-vtt/templates/sheets/challenge-sheet.hbs",
    "systems/yzesrd-vtt/templates/sheets/criticalInjury-sheet.hbs",
    "systems/yzesrd-vtt/templates/sheets/haven-sheet.hbs",
    "systems/yzesrd-vtt/templates/sheets/project-sheet.hbs",
    "systems/yzesrd-vtt/templates/sheets/talent-sheet.hbs",
    "systems/yzesrd-vtt/templates/sheets/tinyItem-sheet.hbs",

    // dice templates
    "systems/yzesrd-vtt/templates/dice/infos.hbs",
    "systems/yzesrd-vtt/templates/dice/roll.hbs",
    "systems/yzesrd-vtt/templates/dice/tooltip.hbs",

    //chat templates
    "systems/yzesrd-vtt/templates/ui/threat-level-display.html",
    "systems/yzesrd-vtt/templates/chat/chatWeapon.hbs",
    "systems/yzesrd-vtt/templates/chat/chatArmor.hbs",
    "systems/yzesrd-vtt/templates/chat/chatGear.hbs",
    "systems/yzesrd-vtt/templates/chat/chatSimpleItem.hbs",
    "systems/yzesrd-vtt/templates/chat/chatTalent.hbs",
    "systems/yzesrd-vtt/templates/chat/chatInjury.hbs",
    "systems/yzesrd-vtt/templates/chat/chatProject.hbs",
    "systems/yzesrd-vtt/templates/chat/chatVehicle.hbs",
  ];

  // Load the template parts
  return foundry.applications.handlebars.loadTemplates(templatePaths);
};
