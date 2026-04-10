import YZSRDActorSheet from "./YZSRDActorSheet.js";

export default class YZSRDActorSheetChallenge extends YZSRDActorSheet {

    /** @override */
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
        classes: ["yzesrd-vtt", "sheet", "actor", "challenge"],
        template: "systems/yzesrd-vtt/templates/sheets/challenge-sheet.hbs",
        width: 850,
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