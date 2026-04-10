/**
 * Item sheet class for the Year Zero Engine Modular system.
 * Uses ApplicationV2 framework.
 */
const { ItemSheetV2, HandlebarsApplicationMixin } = foundry.applications.sheets;

export class YZEItemSheet extends HandlebarsApplicationMixin(ItemSheetV2) {
  /** @override */
  static DEFAULT_OPTIONS = {
    classes: ["yze-modular", "sheet", "item"],
    tag: "form",
    window: {
      resizable: true,
      title: "YZE Item Sheet"
    },
    form: {
      submitOnChange: true,
      closeOnSubmit: false
    }
  };

  /** @override */
  static PARTS = {
    main: { template: "templates/item/item-sheet.hbs" }
  };

  /** @override */
  static TABS = {
    primary: {
      tabs: [
        { id: "description", label: "YZE.TabDescription", icon: "fas fa-file-alt" },
        { id: "details", label: "YZE.TabDetails", icon: "fas fa-info-circle" }
      ],
      initial: "description"
    }
  };

  /** @override */
  async _prepareContext(options) {
    const item = this.document;
    
    return {
      item: item,
      system: item.system.toObject(),
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
}

