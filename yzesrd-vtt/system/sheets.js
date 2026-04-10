/* eslint-disable max-len */
import YzeSRDCharacterSheet from '../actor/character/character-sheet.js';
import YzeSRDLootSheet from '../actor/loot/loot-sheet.js';
import YzeSRDVehicleSheet from '../actor/vehicle/vehicle-sheet.js';
import YzeSRDItemSheet from '../item/item-sheet.js';
import { ACTOR_TYPES, SYSTEM_ID, ITEM_TYPES } from './constants.js';

export function registerSheets() {
  const br = game.system.id || SYSTEM_ID;

  foundry.documents.collections.Actors.unregisterSheet('core', foundry.appv1.sheets.ActorSheet);
  foundry.documents.collections.Actors.registerSheet(br, YzeSRDCharacterSheet, { types: [ACTOR_TYPES.CHAR], makeDefault: true });
  foundry.documents.collections.Actors.registerSheet(br, YzeSRDVehicleSheet, { types: [ACTOR_TYPES.VEHICLE], makeDefault: true });
  foundry.documents.collections.Actors.registerSheet(br, YzeSRDLootSheet, { types: [ACTOR_TYPES.LOOT], makeDefault: true });

  foundry.documents.collections.Items.unregisterSheet('core', foundry.appv1.sheets.ItemSheet);
  foundry.documents.collections.Items.registerSheet(br, YzeSRDItemSheet, { types: [ITEM_TYPES.GENERIC], makeDefault: true });
  foundry.documents.collections.Items.registerSheet(br, YzeSRDItemSheet, { types: [ITEM_TYPES.SYNTHETIC_AUGMENTATION], makeDefault: true });
  foundry.documents.collections.Items.registerSheet(br, YzeSRDItemSheet, { types: [ITEM_TYPES.ARMOR], makeDefault: true });
  foundry.documents.collections.Items.registerSheet(br, YzeSRDItemSheet, { types: [ITEM_TYPES.WEAPON], makeDefault: true });
  foundry.documents.collections.Items.registerSheet(br, YzeSRDItemSheet, { types: [ITEM_TYPES.EXPLOSIVE], makeDefault: true });
  foundry.documents.collections.Items.registerSheet(br, YzeSRDItemSheet, { types: [ITEM_TYPES.SPECIALTY], makeDefault: true });
  foundry.documents.collections.Items.registerSheet(br, YzeSRDItemSheet, { types: [ITEM_TYPES.CRITICAL_INJURY], makeDefault: true });
}
