import YZSRDActorSheet from "./YZSRDActorSheet.js";

export default class YZSRDActorSheetAnimal extends YZSRDActorSheet {

    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
        classes: ["yzesrd-vtt", "sheet", "actor", "animal"],
        template: "systems/yzesrd-vtt/templates/sheets/animal-sheet.hbs",
        width: 800,
        height: 460,
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