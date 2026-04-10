export const registerSettings = function() {
  game.settings.register("yze-modular", "diceSystem", {
    name: "YZE.SettingsDiceSystemName",
    hint: "YZE.SettingsDiceSystemHint",
    scope: "world",
    config: true,
    type: String,
    choices: {
      "pool": "YZE.SettingsDicePool",
      "step": "YZE.SettingsDiceStep"
    },
    default: "pool",
    onChange: () => window.location.reload()
  });

  game.settings.register("yze-modular", "vitalityMode", {
    name: "YZE.SettingsVitalityModeName",
    hint: "YZE.SettingsVitalityModeHint",
    scope: "world",
    config: true,
    type: String,
    choices: {
      "attribute": "YZE.SettingsVitalityAttribute",
      "points": "YZE.SettingsVitalityPoints",
      "conditions": "YZE.SettingsVitalityConditions"
    },
    default: "points",
    onChange: () => window.location.reload()
  });

  game.settings.register("yze-modular", "customConditions", {
    name: "YZE.SettingsCustomConditionsName",
    hint: "YZE.SettingsCustomConditionsHint",
    scope: "world",
    config: true,
    type: String,
    default: "Faminto, Sedento, Exausto, Congelando, Ferido, Assustado",
    onChange: () => window.location.reload()
  });
};
