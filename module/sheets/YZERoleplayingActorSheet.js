const { ActorSheetV2, HandlebarsApplicationMixin } = foundry.applications.sheets;

export class YZActorSheet extends HandlebarsApplicationMixin(ActorSheetV2) {
  /** @override */
  static DEFAULT_OPTIONS = {
    classes: ["yze-modular", "sheet", "actor"],
    tag: "form",
    window: {
      resizable: true,
      title: "YZE Character Sheet"
    },
    actions: {
      rollAttribute: YZActorSheet.#onRollAttribute,
      rollSkill: YZActorSheet.#onRollSkill,
      createItem: YZActorSheet.#onCreateItem,
      deleteItem: YZActorSheet.#onDeleteItem,
      editItem: YZActorSheet.#onEditItem
    },
    form: {
      submitOnChange: true,
      closeOnSubmit: false
    }
  };

  /** @override */
  static PARTS = {
    header: { template: "templates/actor/parts/header.hbs" },
    tabs: { template: "templates/actor/parts/tabs.hbs" },
    main: { 
        template: "templates/actor/parts/main.hbs",
        visible: (context) => context.tabs.primary.active === "main"
    },
    skills: { 
        template: "templates/actor/parts/skills.hbs",
        visible: (context) => context.tabs.primary.active === "skills"
    },
    gear: { 
        template: "templates/actor/parts/gear.hbs",
        visible: (context) => context.tabs.primary.active === "gear"
    },
    bio: { 
        template: "templates/actor/parts/bio.hbs",
        visible: (context) => context.tabs.primary.active === "bio"
    }
  };

  /** @override */
  static TABS = {
    primary: {
      tabs: [
        { id: "main", label: "YZE.TabMain", icon: "fas fa-user" },
        { id: "skills", label: "YZE.TabSkills", icon: "fas fa-tasks" },
        { id: "gear", label: "YZE.TabGear", icon: "fas fa-briefcase" },
        { id: "bio", label: "YZE.TabBio", icon: "fas fa-book" }
      ],
      initial: "main"
    }
  };

  /** @override */
  async _prepareContext(options) {
    const context = await super._prepareContext(options);
    const actor = this.document;
    
    // Sort items by type
    const skills = actor.items.filter(i => i.type === "skill");
    const specialties = actor.items.filter(i => i.type === "specialty");
    const gear = actor.items.filter(i => i.type === "gear");
    const tracks = actor.items.filter(i => i.type === "track");
    const criticalInjuries = actor.items.filter(i => i.type === "criticalInjury");

    // Get settings for template logic
    const diceSystem = game.settings.get("yze-modular", "diceSystem");
    const vitalityMode = game.settings.get("yze-modular", "vitalityMode");
    const customConditionsString = game.settings.get("yze-modular", "customConditions") || "";
    const customConditions = customConditionsString.split(",").map(c => c.trim()).filter(c => c.length > 0);

    const system = actor.system.toObject();
    
    // Dice Step Mapping
    const stepLabel = {
        12: "A",
        10: "B",
        8: "C",
        6: "D",
        0: "-"
    };

    return {
      ...context,
      system: system,
      skills,
      specialties,
      gear,
      tracks,
      criticalInjuries,
      isStepDice: diceSystem === "step",
      vitalityMode,
      customConditions,
      stepLabel,
      config: CONFIG.YZEMODULAR,
      tabs: this.#getTabsContext()
    };
  }

  #getTabsContext() {
    const tabs = {};
    for (const [name, config] of Object.entries(this.constructor.TABS)) {
      tabs[name] = {
        active: this.tabGroups[name] || config.initial,
        tabs: config.tabs.map(t => ({
          ...t,
          active: t.id === (this.tabGroups[name] || config.initial),
          label: game.i18n.localize(t.label)
        }))
      };
    }
    return tabs;
  }

  /* -------------------------------------------- */
  /*  Action Handlers                             */
  /* -------------------------------------------- */

  static async #onCreateItem(event, target) {
    const type = target.dataset.type;
    const actor = this.document;
    const itemData = {
      name: `Novo(a) ${type}`,
      type: type
    };
    return actor.createEmbeddedDocuments("Item", [itemData]);
  }

  static async #onDeleteItem(event, target) {
    const id = target.dataset.itemId;
    return this.document.deleteEmbeddedDocuments("Item", [id]);
  }

  static async #onEditItem(event, target) {
    const id = target.dataset.itemId;
    const item = this.document.items.get(id);
    if (item) item.sheet.render(true);
  }

  static async #onRollAttribute(event, target) {
    const attrId = target.dataset.attribute;
    const actor = this.document;
    const attrValue = actor.system.attributes[attrId].value;
    const diceSystem = game.settings.get("yze-modular", "diceSystem");

    import("../dice.js").then(m => {
      m.YZEDice.roll({
        base: attrValue,
        label: game.i18n.localize(CONFIG.YZEMODULAR.attributes[attrId]),
        actor
      });
    });
  }

  static async #onRollSkill(event, target) {
    const skillId = target.dataset.itemId;
    const actor = this.document;
    const skill = actor.items.get(skillId);
    if (!skill) return;

    const attrId = skill.system.attribute;
    const attrValue = actor.system.attributes[attrId].value;
    const skillValue = skill.system.value;
    const diceSystem = game.settings.get("yze-modular", "diceSystem");

    import("../dice.js").then(m => {
      m.YZEDice.roll({
        base: attrValue,
        special: diceSystem === "step" ? skillValue : 0,
        // For pool, we combine them
        ...(diceSystem === "pool" && { base: attrValue + skillValue }),
        label: skill.name,
        actor
      });
    });
  }
}


