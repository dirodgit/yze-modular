import { displayThreatLevel, getThreatLevel } from "./threat.js";


export const registerGameSettings = function () {
  game.settings.register("yzesrd-vtt", "threatLevel", {
    name: game.i18n.localize("yzesrdvtt.threatLevel"),
    hint: game.i18n.localize("yzesrdvtt.threatLevel"),
    scope: "world",
    config: false,
    type: Number,
    default: 1,
    onChange: () => {
      displayThreatLevel(getThreatLevel());
    },
  });



  game.settings.register("yzesrd-vtt", "threatLevelVisibility", {
    name: game.i18n.localize("yzesrdvtt.threatDisplay"),
    hint: game.i18n.localize("yzesrdvtt.threatDisplayHint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
    onChange: foundry.utils.debouncedReload,
  });

  game.settings.register("yzesrd-vtt", "defaultTokenSettings", {
    name: "yzesrdvtt.prototypeTokenSettings",
    hint: "yzesrdvtt.prototypeTokenSettingsHint",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
    onChange: foundry.utils.debouncedReload,
  });

  game.settings.register("yzesrd-vtt", "havenSurvivorDisplaySetting", {
    name: "yzesrdvtt.havenSurvivorDisplay",
    hint: "yzesrdvtt.havenSurvivorDisplayHint",
    scope: "client",
    config: true,
    restricted: false,
    type: Boolean,
    default: true,
    onChange: foundry.utils.debouncedReload,
  });

  game.settings.register("yzesrd-vtt", "systemMigrationVersion", {
    config: false,
    scope: "world",
    type: String,
    default: "",
  });
};
