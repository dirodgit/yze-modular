import YZSRDActorSheet from "./YZSRDActorSheet.js";

export default class YZSRDActorSheetHaven extends YZSRDActorSheet {

    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
        classes: ["yzesrd-vtt", "sheet", "actor", "haven"],
        template: "systems/yzesrd-vtt/templates/sheets/haven-sheet.hbs",
        width: 800,
        height: "min-content",
       tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "main",
        },
      ],
        dragDrop: [{ dragSelector: ".item-list .item", dropSelector: null }],
        });
    }

}