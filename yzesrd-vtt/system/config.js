import * as BR from './constants.js';

/** @typedef {string} KeyString */
/** @typedef {string} DieScoreString */
/** @typedef {number} DieSizeNumber */
/** @typedef {string} TranslationString */

/**
 * The Year Zero Engine SRD RPG configuration.
 * @constant
 * @enum {any}
 */
export const YZSRD = {};

YZSRD.systemMacroFolder = 'Year Zero Engine SRD Macros';

/** @type {Map.<DieScoreString, DieSizeNumber>} */
YZSRD.scoreMap = new Map();
YZSRD.scoreMap.set('–', 0);
for (const [k, v] of Object.entries(BR.DIE_SCORES)) {
  YZSRD.scoreMap.set(k, v);
}
/** @type {Map.<DieSizeNumber, DieScoreString>} */
YZSRD.dieMap = new Map(Array.from(YZSRD.scoreMap, ([n, v]) => [v, n]));

YZSRD.vehicleSkill = BR.SKILLS.DRIVING;
YZSRD.vehicleAttribute = BR.ATTRIBUTES.VEHICLE_MANEUVERABILITY;

YZSRD.attributes = Object.values(BR.ATTRIBUTES).filter(a => a !== YZSRD.vehicleAttribute);

YZSRD.skillMap = {
  [BR.SKILLS.CLOSE_COMBAT]: BR.ATTRIBUTES.STRENGTH,
  [BR.SKILLS.FORCE]: BR.ATTRIBUTES.STRENGTH,
  [BR.SKILLS.STAMINA]: BR.ATTRIBUTES.STRENGTH,
  [BR.SKILLS.FIREARMS]: BR.ATTRIBUTES.AGILITY,
  [BR.SKILLS.MOBILITY]: BR.ATTRIBUTES.AGILITY,
  [BR.SKILLS.STEALTH]: BR.ATTRIBUTES.AGILITY,
  [BR.SKILLS.MEDICAL_AID]: BR.ATTRIBUTES.INTELLIGENCE,
  [BR.SKILLS.OBSERVATION]: BR.ATTRIBUTES.INTELLIGENCE,
  [BR.SKILLS.TECH]: BR.ATTRIBUTES.INTELLIGENCE,
  [BR.SKILLS.CONNECTIONS]: BR.ATTRIBUTES.EMPATHY,
  [BR.SKILLS.INSIGHT]: BR.ATTRIBUTES.EMPATHY,
  [BR.SKILLS.MANIPULATION]: BR.ATTRIBUTES.EMPATHY,
  [BR.SKILLS.DRIVING]: BR.ATTRIBUTES.VEHICLE_MANEUVERABILITY,
};

YZSRD.skills = Object.keys(YZSRD.skillMap);

/** @type {Object.<KeyString, TranslationString>} */
YZSRD.archetypes = {};
for (const [k, v] of Object.entries(BR.ARCHETYPES)) {
  YZSRD.archetypes[v] = `YZSRD.ARCHETYPE.${k}`;
}

/** @type {Object.<KeyString, TranslationString>} */
YZSRD.archetypes_rebellion = {};
for (const [k, v] of Object.entries(BR.ARCHETYPES_REBELLION)) {
  YZSRD.archetypes_rebellion[v] = `YZSRD.ARCHETYPE.${k}`;
}

YZSRD.capacitiesMap = {
  [BR.CAPACITIES.HEALTH]: {
    attributes: [BR.ATTRIBUTES.STRENGTH, BR.ATTRIBUTES.AGILITY],
    max: 10,
  },
  [BR.CAPACITIES.RESOLVE]: {
    attributes: [BR.ATTRIBUTES.INTELLIGENCE, BR.ATTRIBUTES.EMPATHY],
    max: 10,
  },
};

YZSRD.natures = {
  [BR.NATURES.HUMAN]: 'YZSRD.NATURE.Human',
  [BR.NATURES.REPLICANT]: 'YZSRD.NATURE.Replicant',
};

YZSRD.naturesRebellion = {
  [BR.NATURES.HUMAN]: 'YZSRD.NATURE.Human',
  [BR.NATURES.N8]: 'YZSRD.NATURE.N8',
  [BR.NATURES.N9]: 'YZSRD.NATURE.N9',
};

YZSRD.natureModifierMap = {
  [BR.NATURES.HUMAN]: {
    [BR.CAPACITIES.HEALTH]: 0,
    [BR.CAPACITIES.RESOLVE]: 0,
  },
  [BR.NATURES.REPLICANT]: {
    [BR.CAPACITIES.HEALTH]: 2,
    [BR.CAPACITIES.RESOLVE]: -2,
  },
  [BR.NATURES.N8]: {
    [BR.CAPACITIES.HEALTH]: 1,
    [BR.CAPACITIES.RESOLVE]: -1,
  },
  [BR.NATURES.N9]: {
    [BR.CAPACITIES.HEALTH]: 2,
    [BR.CAPACITIES.RESOLVE]: -2,
  },
};

YZSRD.maxPushMap = {
  [BR.NATURES.HUMAN]: 1,
  [BR.NATURES.REPLICANT]: 2,
  [BR.NATURES.N8]: 2,
  [BR.NATURES.N9]: 2,
};

YZSRD.pushTraumaMap = {
  [BR.NATURES.HUMAN]: {
    [BR.ATTRIBUTES.STRENGTH]: BR.CAPACITIES.HEALTH,
    [BR.ATTRIBUTES.AGILITY]: BR.CAPACITIES.HEALTH,
    [BR.ATTRIBUTES.INTELLIGENCE]: BR.CAPACITIES.RESOLVE,
    [BR.ATTRIBUTES.EMPATHY]: BR.CAPACITIES.RESOLVE,
  },
  [BR.NATURES.REPLICANT]: {
    [BR.ATTRIBUTES.STRENGTH]: BR.CAPACITIES.RESOLVE,
    [BR.ATTRIBUTES.AGILITY]: BR.CAPACITIES.RESOLVE,
    [BR.ATTRIBUTES.INTELLIGENCE]: BR.CAPACITIES.RESOLVE,
    [BR.ATTRIBUTES.EMPATHY]: BR.CAPACITIES.RESOLVE,
  },
  [BR.NATURES.N8]: {
    [BR.ATTRIBUTES.STRENGTH]: BR.CAPACITIES.RESOLVE,
    [BR.ATTRIBUTES.AGILITY]: BR.CAPACITIES.RESOLVE,
    [BR.ATTRIBUTES.INTELLIGENCE]: BR.CAPACITIES.RESOLVE,
    [BR.ATTRIBUTES.EMPATHY]: BR.CAPACITIES.RESOLVE,
  },
  [BR.NATURES.N9]: {
    [BR.ATTRIBUTES.STRENGTH]: BR.CAPACITIES.RESOLVE,
    [BR.ATTRIBUTES.AGILITY]: BR.CAPACITIES.RESOLVE,
    [BR.ATTRIBUTES.INTELLIGENCE]: BR.CAPACITIES.RESOLVE,
    [BR.ATTRIBUTES.EMPATHY]: BR.CAPACITIES.RESOLVE,
  },
};

YZSRD.characterSubtypes = {
  [BR.ACTOR_SUBTYPES.PC]: 'ACTOR.SubtypePc',
  [BR.ACTOR_SUBTYPES.NPC]: 'ACTOR.SubtypeNpc',
  [BR.ACTOR_SUBTYPES.REPLICANT_REBELLION]: 'ACTOR.SubtypeReplicantRebellion',
};

YZSRD.physicalItems = [BR.ITEM_TYPES.GENERIC, BR.ITEM_TYPES.WEAPON, BR.ITEM_TYPES.ARMOR, BR.ITEM_TYPES.EXPLOSIVE];
YZSRD.allowedItems = {
  [BR.ACTOR_TYPES.CHAR]: [BR.ITEM_TYPES.SPECIALTY, BR.ITEM_TYPES.SYNTHETIC_AUGMENTATION, BR.ITEM_TYPES.CRITICAL_INJURY],
  [BR.ACTOR_TYPES.VEHICLE]: [],
  [BR.ACTOR_TYPES.LOOT]: [],
};

YZSRD.ranges = {
  [BR.RANGES.ENGAGED]: 'YZSRD.WEAPON_RANGE.Engaged',
  [BR.RANGES.SHORT]: 'YZSRD.WEAPON_RANGE.Short',
  [BR.RANGES.MEDIUM]: 'YZSRD.WEAPON_RANGE.Medium',
  [BR.RANGES.LONG]: 'YZSRD.WEAPON_RANGE.Long',
  [BR.RANGES.EXTREME]: 'YZSRD.WEAPON_RANGE.Extreme',
};

YZSRD.availabilities = {
  [BR.AVAILABILITIES.INCIDENTAL]: 'YZSRD.ITEM_AVAILABILITY.Incidental',
  [BR.AVAILABILITIES.STANDARD]: 'YZSRD.ITEM_AVAILABILITY.Standard',
  [BR.AVAILABILITIES.PREMIUM]: 'YZSRD.ITEM_AVAILABILITY.Premium',
  [BR.AVAILABILITIES.RARE]: 'YZSRD.ITEM_AVAILABILITY.Rare',
  [BR.AVAILABILITIES.LUXURY]: 'YZSRD.ITEM_AVAILABILITY.Luxury',
};

YZSRD.damageTypes = {
  [BR.DAMAGE_TYPES.NONE]: 'YZSRD.WEAPON_DAMAGE_TYPE.None',
  [BR.DAMAGE_TYPES.CRUSHING]: 'YZSRD.WEAPON_DAMAGE_TYPE.Crushing',
  [BR.DAMAGE_TYPES.PIERCING]: 'YZSRD.WEAPON_DAMAGE_TYPE.Piercing',
  [BR.DAMAGE_TYPES.STRESS]: 'YZSRD.WEAPON_DAMAGE_TYPE.Stress',
};

YZSRD.blastPowerMap = {
  12: { damage: 4, crit: 12 },
  10: { damage: 3, crit: 10 },
  8: { damage: 2, crit: 8 },
  6: { damage: 1, crit: 6 },
};

YZSRD.startingAttributeLevel = 8;
YZSRD.startingSkillLevel = 6;

YZSRD.deathSaveTest = BR.SKILLS.STAMINA;
YZSRD.baselineTest = BR.SKILLS.INSIGHT;

YZSRD.maxPromotionPoints = 20;
YZSRD.maxHumanityPoints = 20;
YZSRD.maxChinyenPoints = 20;
YZSRD.maxVehicleHull = 10;

YZSRD.maxRolledDice = 3;
YZSRD.itemSpecialInputMaxLength = 80;
YZSRD.vehicleCrashDamage = '1d3 + @altitude';
YZSRD.vehicleMassiveCrashDamage = '1d6 + @altitude';
YZSRD.vehicleExplosionBlastPower = 10;

/* ------------------------------------------ */

/** @type {Object.<string, TranslationString>} */
YZSRD.rollModes = {};
for (const [k, v] of Object.entries(CONST.DICE_ROLL_MODES)) {
  YZSRD.rollModes[v] = `CHAT.Roll${k.toLowerCase().capitalize()}`;
}

// TODO Implements Years On The Force on creation. Maybe move to a module
// YZSRD.yearsOnTheForce = {
//   [BR.YEARS_ON_THE_FORCE.ROOKIE]: {
//     years: [0, 1],
//     modifiers: {
//       attributes: 4,
//       skills: 8,
//       specialties: 0,
//       promos: 'D3',
//       chinyen: -1,
//     },
//   },
//   [BR.YEARS_ON_THE_FORCE.SEASONED]: {
//     years: [2, 7],
//     modifiers: {
//       attributes: 3,
//       skills: 10,
//       specialties: 1,
//       promos: 'D6',
//       chinyen: 0,
//     },
//   },
//   [BR.YEARS_ON_THE_FORCE.VETERAN]: {
//     years: [8, 15],
//     modifiers: {
//       attributes: 2,
//       skills: 12,
//       specialties: 2,
//       promos: 'D8',
//       chinyen: 1,
//     },
//   },
//   [BR.YEARS_ON_THE_FORCE.OLD_TIMER]: {
//     years: [16, 99],
//     modifiers: {
//       attributes: 1,
//       skills: 14,
//       specialties: 3,
//       promos: 'D10',
//       chinyen: 2,
//     },
//   },
// };

/* ------------------------------------------ */
/*  Actions                                   */
/* ------------------------------------------ */

/**
 * Action Map
 * - The action property name is added in "data-action"
 * - The callback takes the actor as an argument
 * @type {import('@components/actor-action').ActorActionData[]}
 */
YZSRD.Actions = [
  {
    id: BR.COMBAT_ACTIONS.SPRINT,
    label: 'YZSRD.COMBAT_ACTION.Sprint',
    hint: 'YZSRD.COMBAT_ACTION_HINT.Sprint',
    skill: BR.SKILLS.MOBILITY,
    attribute: null,
    callback: null,
    actorType: BR.ACTOR_TYPES.CHAR,
  },
  {
    id: BR.COMBAT_ACTIONS.CRAWL,
    label: 'YZSRD.COMBAT_ACTION.Crawl',
    hint: 'YZSRD.COMBAT_ACTION_HINT.Crawl',
    skill: null,
    callback: () => ui.notifications.warn('Not implemented yet.'),
    actorType: BR.ACTOR_TYPES.CHAR,
  },
  {
    id: BR.COMBAT_ACTIONS.UNARMED_ATTACK,
    label: 'YZSRD.COMBAT_ACTION.UnarmedAttack',
    hint: 'YZSRD.COMBAT_ACTION_HINT.UnarmedAttack',
    skill: BR.SKILLS.CLOSE_COMBAT,
    actorType: BR.ACTOR_TYPES.CHAR,
  },
  {
    id: BR.COMBAT_ACTIONS.MELEE_ATTACK,
    label: 'YZSRD.COMBAT_ACTION.MeleeAttack',
    hint: 'YZSRD.COMBAT_ACTION_HINT.MeleeAttack',
    skill: BR.SKILLS.CLOSE_COMBAT,
    actorType: BR.ACTOR_TYPES.CHAR,
  },
  {
    id: BR.COMBAT_ACTIONS.GRAPPLE,
    label: 'YZSRD.COMBAT_ACTION.Grapple',
    hint: 'YZSRD.COMBAT_ACTION_HINT.Grapple',
    skill: BR.SKILLS.CLOSE_COMBAT,
    actorType: BR.ACTOR_TYPES.CHAR,
  },
  {
    id: BR.COMBAT_ACTIONS.BREAK_FREE,
    label: 'YZSRD.COMBAT_ACTION.BreakFree',
    hint: 'YZSRD.COMBAT_ACTION_HINT.BreakFree',
    skill: BR.SKILLS.CLOSE_COMBAT,
    actorType: BR.ACTOR_TYPES.CHAR,
  },
  {
    id: BR.COMBAT_ACTIONS.SHOOT_FIREARM,
    label: 'YZSRD.COMBAT_ACTION.ShootFirearm',
    hint: 'YZSRD.COMBAT_ACTION_HINT.ShootFirearm',
    skill: BR.SKILLS.FIREARMS,
    actorType: BR.ACTOR_TYPES.CHAR,
  },
  {
    id: BR.COMBAT_ACTIONS.CAREFUL_AIM,
    label: 'YZSRD.COMBAT_ACTION.CarefulAim',
    hint: 'YZSRD.COMBAT_ACTION_HINT.CarefulAim',
    callback: () => ui.notifications.warn('Not implemented yet.'),
    actorType: BR.ACTOR_TYPES.CHAR,
  },
  {
    id: BR.COMBAT_ACTIONS.THROW_WEAPON,
    label: 'YZSRD.COMBAT_ACTION.ThrowWeapon',
    hint: 'YZSRD.COMBAT_ACTION_HINT.ThrowWeapon',
    skill: BR.SKILLS.FIREARMS,
    actorType: BR.ACTOR_TYPES.CHAR,
  },
  {
    id: BR.COMBAT_ACTIONS.FIRST_AID,
    label: 'YZSRD.COMBAT_ACTION.FirstAid',
    hint: 'YZSRD.COMBAT_ACTION_HINT.FirstAid',
    skill: BR.SKILLS.MEDICAL_AID,
    actorType: BR.ACTOR_TYPES.CHAR,
  },
  {
    id: BR.COMBAT_ACTIONS.MANIPULATE,
    label: 'YZSRD.COMBAT_ACTION.Manipulate',
    hint: 'YZSRD.COMBAT_ACTION_HINT.Manipulate',
    skill: BR.SKILLS.MANIPULATION,
    actorType: BR.ACTOR_TYPES.CHAR,
  },
  {
    id: BR.COMBAT_ACTIONS.USE_ITEM,
    label: 'YZSRD.COMBAT_ACTION.UseItem',
    hint: 'YZSRD.COMBAT_ACTION_HINT.UseItem',
    callback: () => ui.notifications.warn('Not implemented yet.'),
    actorType: BR.ACTOR_TYPES.CHAR,
  },
  {
    id: BR.COMBAT_ACTIONS.VEHICLE_SPEEDING,
    label: 'YZSRD.VEHICLE.Action.Speeding',
    hint: 'YZSRD.VEHICLE.Action.SpeedingHint',
    skill: BR.SKILLS.MOBILITY,
    actorType: BR.ACTOR_TYPES.VEHICLE,
    onCrew: true,
  },
  {
    id: BR.COMBAT_ACTIONS.VEHICLE_RAMMING,
    label: 'YZSRD.VEHICLE.Action.Ramming',
    hint: 'YZSRD.VEHICLE.Action.RammingHint',
    actorType: BR.ACTOR_TYPES.VEHICLE,
    callback: actor => actor.rollRamming(),
  },
  {
    id: BR.COMBAT_ACTIONS.VEHICLE_REPAIR,
    label: 'YZSRD.VEHICLE.Action.Repair',
    hint: 'YZSRD.VEHICLE.Action.RepairHint',
    skill: BR.SKILLS.TECH,
    actorType: BR.ACTOR_TYPES.VEHICLE,
    onCrew: true,
  },
  {
    id: BR.COMBAT_ACTIONS.VEHICLE_CRASH,
    label: 'YZSRD.VEHICLE.Action.Crash',
    hint: 'YZSRD.VEHICLE.Action.CrashHint',
    actorType: BR.ACTOR_TYPES.VEHICLE,
    callback: actor => actor.crashVehicle(),
  },
  {
    id: BR.COMBAT_ACTIONS.VEHICLE_MASSIVE_CRASH,
    label: 'YZSRD.VEHICLE.Action.MassiveCrash',
    hint: 'YZSRD.VEHICLE.Action.CrashHint',
    actorType: BR.ACTOR_TYPES.VEHICLE,
    callback: actor => actor.crashVehicle(true),
  },
  {
    id: BR.COMBAT_ACTIONS.VEHICLE_EXPLODE,
    label: 'YZSRD.VEHICLE.Action.Explode',
    hint: 'YZSRD.VEHICLE.Action.ExplodeHint',
    actorType: BR.ACTOR_TYPES.VEHICLE,
    callback: actor => actor.explodeVehicle(),
  },
];

/* ------------------------------------------ */
/*  Icons                                     */
/* ------------------------------------------ */

YZSRD.Icons = {
  tabs: {
    action: '<i class="fas fa-dice-six"></i>',
    bio: '<i class="fas fa-align-left"></i>',
    combat: '<i class="fas fa-fist-raised"></i>',
    features: '<i class="fas fa-briefcase"></i>',
    inventory: '<i class="fas fa-archive"></i>',
    mods: '<i class="fas fa-puzzle-piece"></i>',
    roll: '<i class="fas fa-dice-six"></i>',
    stats: '<i class="fas fa-horse-head"></i>',
  },
  boxes: {
    empty: '<i class="far fa-square"></i>',
    full: '<i class="fas fa-square"></i>',
    lost: '<i class="far fa-minus-square"></i>',
  },
  dice: {
    success: '<i class="fas fa-eye"></i>',
    failure: '<i class="fas fa-horse-head"></i>',
  },
  links: {
    choice: '<i class="fa-solid fa-list-ol"></i>',
    rolltable: '<i class="fas fa-dice-d20"></i>',
    drawtable: '<i class="fa-solid fa-pen"></i>',
  },
  buttons: {
    action: '<i class="fas fa-play"></i>',
    edit: '<i class="fas fa-edit"></i>',
    delete: '<i class="fas fa-trash"></i>',
    remove: '<i class="fas fa-times"></i>',
    plus: '<i class="fas fa-plus"></i>',
    minus: '<i class="fas fa-minus"></i>',
    advantage: '<i class="fas fa-plus-circle"></i>',
    disadvantage: '<i class="fas fa-minus-circle"></i>',
    // equip: '<i class="fas fa-star"></i>',
    // unequip: '<i class="far fa-star"></i>',
    // stash: '<i class="fas fa-shopping-bag"></i>',
    mount: '<i class="fas fa-wrench"></i>',
    unmount: '<i class="fas fa-thumbtack"></i>',
    attack: '<i class="fas fa-crosshairs"></i>',
    armor: '<i class="fas fa-shield-alt"></i>',
    bomb: '<i class="fas fa-bomb"></i>',
    melee: '<i class="fa-regular fa-sword"></i>',
    gun: '<i class="fa-regular fa-gun"></i>',
    crit: '<i class="fa-regular fa-droplet"></i>',
    crush: '<i class="fa-regular fa-bullseye"></i>',
    pierce: '<i class="fa-regular fa-burst"></i>',
    stress: '<i class="fa-regular fa-wave-pulse"></i>',
    range: '<i class="fa-regular fa-crosshairs-simple"></i>',
    damage: '<i class="fa-solid fa-burst"></i>',
    // reload: '<i class="fas fa-sync-alt"></i>',
    lethal: '<i class="fas fa-skull"></i>',
    // mental: '<i class="fas fa-brain"></i>',
    vehicle: '<i class="fas fa-car"></i>',
    wheel: '<i class="fa-regular fa-steering-wheel"></i>',
    seat: '<i class="fa-regular fa-person-seat-reclined"></i>',
    chat: '<i class="far fa-comment-dots"></i>',
    roll: '<i class="fas fa-dice-d20"></i>',
    onoff: '<i class="fas fa-power-off"></i>',
  },
};

// Allow modules to add custom item types
YZSRD.customItemTypesTemplates = {};
