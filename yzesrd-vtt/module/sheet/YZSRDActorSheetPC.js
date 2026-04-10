import YZSRDActorSheet from "./YZSRDActorSheet.js";

export default class YZSRDActorSheetPC extends YZSRDActorSheet {

    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
        classes: ["yzesrd-vtt", "sheet", "actor", "pc"],
        template: "systems/yzesrd-vtt/templates/sheets/character-sheet.hbs",
        width: 800,
        height: 800,
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