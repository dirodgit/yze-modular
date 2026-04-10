import YZSRDItemSheet from "./sheet/YZSRDItemSheet.js";
// import YZSRDActorSheet from "./sheet/YZSRDActorSheet.js";
import YZSRDActor from "./YZSRDActor.js";
import { preloadHandlebarsTemplates } from "./util/templates.js";
import { yzesrdvtt } from "../module/config.js";
import FoundryOverrides from "./util/overrides.js";
import { increaseThreatLevel, decreaseThreatLevel } from "./util/threat.js";
import { YearZeroRollManager } from "./util/yzur.js";
import { ThreatLevelDisplay } from "./util/threat.js";
import { registerGameSettings } from "./util/settings.js";
import { migrate } from "./util/migration.js";
import YZSRDActorSheetPC from "./sheet/YZSRDActorSheetPC.js";
import YZSRDActorSheetNPC from "./sheet/YZSRDActorSheetNPC.js";
import YZSRDActorSheetAnimal from "./sheet/YZSRDActorSheetAnimal.js";
import YZSRDActorSheetHaven from "./sheet/YZSRDActorSheetHaven.js";
import YZSRDActorSheetChallenge from "./sheet/YZSRDActorSheetChallenge.js";
import ChatMessageYZSRD from "./util/chat.js";
// import YZSRDActorSheetPCv2 from "./sheet/YZSRDActorSheetPCv2.js";

Hooks.once("init", async function () {
  console.log("YZSRD | Initializing YZSRD");
  CONFIG.yzesrdvtt = twdu;
  console.log("YZSRD | CONFIG.yzesrdvtt: ", CONFIG.yzesrdvtt);

  CONFIG.Actor.documentClass = YZSRDActor;
  CONFIG.ChatMessage.documentClass = ChatMessageYZSRD;

  

  //yzur init
  YearZeroRollManager.register("yzesrd-vtt", {
    "ROLL.chatTemplate": "systems/yzesrd-vtt/templates/dice/roll.hbs",
    "ROLL.tooltipTemplate": "systems/yzesrd-vtt/templates/dice/tooltip.hbs",
    "ROLL.infosTemplate": "systems/yzesrd-vtt/templates/dice/infos.hbs",
  });

  // Register custom system settings
  registerGameSettings();

  CONFIG.TextEditor.enrichers = CONFIG.TextEditor.enrichers.concat([
    {
      pattern: /@RAW\[(.+?)\]/gm,
      enricher: async (match, options) => {
        const myData = await $.ajax({
          url: match[1],
          type: "GET",
        });
        const doc = document.createElement("span");
        doc.innerHTML = myData;
        console.log("YZSRD | enricher: ", doc);
        return doc;
      },
    },
  ]);

  foundry.documents.collections.Items.unregisterSheet("core", foundry.appv1.sheets.ItemSheet);

  foundry.documents.collections.Items.registerSheet("yzesrd-vtt", YZSRDItemSheet, { makeDefault: true });

  foundry.documents.collections.Actors.unregisterSheet("core", foundry.appv1.sheets.ActorSheet);
  //TODO set up sheets for each actor type to be able to set default options correctly for each type
  // Actors.registerSheet("yzesrd-vtt", YZSRDActorSheet, { makeDefault: true });

  foundry.documents.collections.Actors.registerSheet("yzesrd-vtt", YZSRDActorSheetPC, { types: ["character"], makeDefault: true, label: "yzesrd-vtt.SheetClassCharacter" });
  foundry.documents.collections.Actors.registerSheet("yzesrd-vtt", YZSRDActorSheetNPC, { types: ["npc"], makeDefault: true, label: "yzesrd-vtt.SheetClassNPC" });
  foundry.documents.collections.Actors.registerSheet("yzesrd-vtt", YZSRDActorSheetAnimal, { types: ["animal"], makeDefault: true, label: "yzesrd-vtt.SheetClassAnimal" });
  foundry.documents.collections.Actors.registerSheet("yzesrd-vtt", YZSRDActorSheetHaven, { types: ["haven"], makeDefault: true, label: "yzesrd-vtt.SheetClassHaven" });
  foundry.documents.collections.Actors.registerSheet("yzesrd-vtt", YZSRDActorSheetChallenge, { types: ["challenge"], makeDefault: true, label: "yzesrd-vtt.SheetClassChallenge" });



  // Actors.registerSheet("dnd5e", ActorSheet5eCharacter, {
  //   types: ["character"],
  //   label: "DND5E.SheetClassCharacterLegacy"
  // });
  // DocumentSheetConfig.registerSheet(Actor, "dnd5e", ActorSheet5eCharacter2, {
  //   types: ["character"],
  //   makeDefault: true,
  //   label: "DND5E.SheetClassCharacter"
  // });

  // "Actor": {
  //   "types": [
  //       "character",
  //       "challenge",
  //       "haven",
  //       "npc",
  //       "animal"
        
  //   ],

  Hooks.on("renderChatMessageHTML", (app, html, data) => {
    ChatMessageyzesrdvtt.activateListeners(html);
    ChatMessageyzesrdvtt.hideChatActionButtons(app, html, data);
  });
  


  // Preload Handlebars Templates
  preloadHandlebarsTemplates();

  // Initialize the Threat Level
  ThreatLevelDisplay.initialize();

  Handlebars.registerHelper("parseActor", function (actorId, part) {
    let actor = game.actors.get(actorId);
    if(part === "name"){return actor.name;}
    else if(part === "img"){return actor.img;}
    else if(part === "archetype"){return actor.system.archetype;}
    else if(part === "background"){return actor.system.background;}
    else {return actorId;}
  
  });



  Handlebars.registerHelper("YZSRDconcat", function () {
    let outStr = "";
    for (let arg in arguments) {
      if (typeof arguments[arg] != "object") {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper("times", function (n, content) {
    let result = "";
    for (let i = 0; i < n; ++i) {
      content.data.index = i + 1;
      result = result + content.fn(i);
    }
    return result;
  });

  Handlebars.registerHelper("YZSRDinvert", function () {
    let keys = Object.keys(arguments[0]);
    keys.sort(function (a, b) {
      return b - a;
    });
    let sorted = [];
    for (let i = 0; i < keys.length; i++) {
      let k = keys[i];
      sorted.push(arguments[0][k]);
    }
    return sorted;
  });

  Handlebars.registerHelper("subtract", function () {
    return arguments[0] - arguments[1];
  });

  // returns a count of the number of items in an array that match specified parameters
  // the arguments are [0] = array, up to length-1 = parameters to match
  Handlebars.registerHelper("YZSRDEquippedCount", function () {
    let array = arguments[0];
    let count = 0;
    let parameter = arguments[1];

    let filteredArray = array.filter(function (item) {     
      return item[parameter];
    });

    for (let i = 0; i < filteredArray.length; i++) {
      let test = filteredArray[i];
      if (test.system.isEquipped) {
        count++;
      }
    }
    return count;
  });

  Handlebars.registerHelper("YZSRDunEquippedCount", function () {
    let array = arguments[0];
    let count = 0;
    let parameter = arguments[1];

    let filteredArray = array.filter(function (item) {
      return item[parameter];
    });
    for (let i = 0; i < filteredArray.length; i++) {
      let test = filteredArray[i];
      if (!test.system.isEquipped) {
        count++;
      }
    }
    return count;
  });

  Handlebars.registerHelper("YZSRD_checked", function (value, test) {
    // console.log("YZSRD | YZSRD_checked: ", value, test);
    if(value == undefined) return "";
    return value == test ? "checked" : "";
  });
});

Handlebars.registerHelper('lookupOrDefault', function (object, propertyName, defaultValue, options) {
  let result = options.lookupProperty(object, propertyName)
  if (result != '') {
      return result
  };
  return defaultValue;
});
  
Hooks.on("renderPause", (_app, html) => {
  html
    .find("img")
    .attr("src", "systems/yzesrd-vtt/assets/images/misc/hand.png");
});

Handlebars.registerHelper('lowercase', function (string){
  let result = string.toLowerCase();
  return result;
});



Hooks.on("getSceneControlButtons", (controls) => {

  const tokenControls = Array.isArray(controls)
				? controls.find((c) => c.name === "token")
				: controls.tokens;
	if (!tokenControls) return;

  const tools = tokenControls.tools;

    tools['threatLevelIncrease'] = {
      icon: "fas fa-plus",
      name: "threatLevelIncrease",
      order: 90,
      title: "CONTROL.addThreatLevel",
      visible: game.user.isGM,
      onClick: ()=> increaseThreatLevel(1),
       button: true
    }

        tools['threatLevelDecrease'] = {
      icon: "fas fa-minus",
      name: "threatLevelDecrease",
      order: 91,
      title: "CONTROL.subThreatLevel",
      visible: game.user.isGM,
      onClick: ()=> decreaseThreatLevel(1),
       button: true
    }

        tools['threatLevelVisibility'] = {
      icon: "fas fa-biohazard",
      name: "threatLevelVisibility",
      order: 92,
      title: "CONTROL.displayThreatLevel",
      visible: game.settings.get("yzesrd-vtt", "threatLevelVisibility")
        ? true
        : game.user.isGM,
      onClick: () => {
        ThreatLevelDisplay.render();
      },
       button: true
    }

});

Hooks.once("diceSoNiceReady", (dice3d) => {
  dice3d.addSystem({ id: "yzesrd-vtt", name: "The Walking Dead Universe" }, "true");
  dice3d.addColorset({
    name: "twduz",
    description: "The Walking Dead Stress Dice",
    category: "The Walking Dead Universe",
    foreground: "#000",
    background: "#ac1431",
    outline: "#ac1433",
    material: "plastic",
    default: true,
  });
  dice3d.addColorset({
    name: "yzesrd-vtt",
    description: "The Walking Dead Base Dice",
    category: "The Walking Dead Universe",
    foreground: "#fff",
    background: "#000",
    outline: "#000",
    material: "plastic",
    default: true,
  });
  dice3d.addDicePreset({
    type: "d6",
    labels: [
      "systems/yzesrd-vtt/assets/images/dsn/dsn-ds-1.png",
      "systems/yzesrd-vtt/assets/images/dsn/dsn-ds-2.png",
      "systems/yzesrd-vtt/assets/images/dsn/dsn-ds-3.png",
      "systems/yzesrd-vtt/assets/images/dsn/dsn-ds-4.png",
      "systems/yzesrd-vtt/assets/images/dsn/dsn-ds-5.png",
      "systems/yzesrd-vtt/assets/images/dsn/dsn-ds-6.png",
    ],
    colorset: "yzesrd-vtt",
    system: "yzesrd-vtt",
  });
  dice3d.addDicePreset(
    {
      type: "ds",
      labels: [
        "systems/yzesrd-vtt/assets/images/dsn/dsn-ds-1.png",
        "systems/yzesrd-vtt/assets/images/dsn/dsn-ds-2.png",
        "systems/yzesrd-vtt/assets/images/dsn/dsn-ds-3.png",
        "systems/yzesrd-vtt/assets/images/dsn/dsn-ds-4.png",
        "systems/yzesrd-vtt/assets/images/dsn/dsn-ds-5.png",
        "systems/yzesrd-vtt/assets/images/dsn/dsn-ds-6.png",
      ],
      colorset: "yzesrd-vtt",
      system: "yzesrd-vtt",
    },
    "d6"
  );
  dice3d.addDicePreset(
    {
      type: "dz",
      labels: [
        "systems/yzesrd-vtt/assets/images/dsn/dsn-dz-1.png",
        "systems/yzesrd-vtt/assets/images/dsn/dsn-dz-2.png",
        "systems/yzesrd-vtt/assets/images/dsn/dsn-dz-3.png",
        "systems/yzesrd-vtt/assets/images/dsn/dsn-dz-4.png",
        "systems/yzesrd-vtt/assets/images/dsn/dsn-dz-5.png",
        "systems/yzesrd-vtt/assets/images/dsn/dsn-dz-6.png",
      ],
      colorset: "twduz",
      system: "yzesrd-vtt",
    },
    "d6"
  );
});


Hooks.on('preCreateToken', async (document, tokenData, options, userID) => {

  const actor = game.actors.get(tokenData.actorId);
  const actorId = actor.id;
  console.log("test | preCreateToken", document, actor, actorId);
  
  if (actor.type === 'npc') {
    document.update({_id: actorId , disposition: CONST.TOKEN_DISPOSITIONS.HOSTILE, actorLink: false });
  }
});

Hooks.on('dropActorSheetData', async (actor, sheet, data) => {
  // When dropping something on a haven sheet.
  if (actor.type === 'haven' || actor.type === 'challenge') {
    // When dropping an actor on a haven sheet.
    if (data.type === 'Actor') {
      let survivor = await fromUuid(data.uuid);
      sheet._dropSurvivor(survivor.id);
    }

    // let survivor = await fromUuid(data.uuid);
    // if (data.type === 'Actor') sheet._dropSurvivor(survivor.id);
  }
});

Hooks.once("ready", async function () {
  migrate();
  //FoundryOverrides.override();
});
