import YZSRDActorSheet from "./YZSRDActorSheet.js";

export default class YZSRDActorSheetNPC extends YZSRDActorSheet {

    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
        classes: ["yzesrd-vtt", "sheet", "actor", "npc"],
        template: "systems/yzesrd-vtt/templates/sheets/npc-sheet.hbs",
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