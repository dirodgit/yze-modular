/**
 * Define a set of partials for repetitive use
 * @return {Promise}
 */
export const preloadTemplates = async function() {
  const templatePaths = [
    // Actor partials
    "templates/actor/parts/header.hbs",
    "templates/actor/parts/main.hbs",
    "templates/actor/parts/skills.hbs",
    "templates/actor/parts/tabs.hbs",
    "templates/actor/parts/gear.hbs",
    "templates/actor/parts/bio.hbs",
    // Item partials
    "templates/item/item-sheet.hbs"
  ];

  return loadTemplates(templatePaths);
};
