/**
 * @file Entry point for the Year Zero Engine Modular system.
 * @version 1.0.0
 */

import { YZEMODULAR } from "./module/config.js";
import { registerSettings } from "./module/settings.js";
import { preloadTemplates } from "./module/templates.js";
import { CharacterDataModel } from "./module/data/ActorDataModel.js";
import { YZEItemDataModel } from "./module/data/ItemDataModel.js";
import { YZEActor } from "./module/actor/Actor.js";
import { YZEItem } from "./module/item/Item.js";
import { YZActorSheet } from "./module/sheets/YZERoleplayingActorSheet.js";
import { YZEItemSheet } from "./module/sheets/YZEItemSheet.js";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", async function() {
  console.log("YZE Modular | Initializing Year Zero Engine Modular System");

  // Add configuration constants
  CONFIG.YZEMODULAR = YZEMODULAR;

  // Set custom classes
  CONFIG.Actor.documentClass = YZEActor;
  CONFIG.Item.documentClass = YZEItem;

  // Register Data Models
  CONFIG.Actor.dataModels = {
    character: CharacterDataModel,
    npc: CharacterDataModel
  };
  CONFIG.Item.dataModels = {
    skill: YZEItemDataModel,
    specialty: YZEItemDataModel,
    gear: YZEItemDataModel,
    weapon: YZEItemDataModel,
    armor: YZEItemDataModel
  };

  // Register System Settings
  registerSettings();

  // Preload Handlebars Templates
  preloadTemplates();

  // Register Sheet Classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("yze-modular", YZActorSheet, {
    types: ["character"],
    makeDefault: true,
    label: "YZE.SheetCharacter"
  });

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("yze-modular", YZEItemSheet, {
    makeDefault: true,
    label: "YZE.SheetItem"
  });
});

/* -------------------------------------------- */
/*  Ready Hook                                  */
/* -------------------------------------------- */

Hooks.once("ready", function() {
  console.log("YZE Modular | Ready");
});
