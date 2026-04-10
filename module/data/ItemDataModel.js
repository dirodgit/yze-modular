/**
 * Data model for Items in the YZE Modular system.
 */
export class YZEItemDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
      description: new fields.HTMLField({ initial: "" }),
      // Specific fields for different item types
      value: new fields.NumberField({ initial: 0, integer: true }),
      attribute: new fields.StringField({ initial: "strength" }),
      quantity: new fields.NumberField({ initial: 1, integer: true, min: 0 }),
      weight: new fields.NumberField({ initial: 0 }),
      damage: new fields.NumberField({ initial: 1, integer: true }),
      bonus: new fields.NumberField({ initial: 0, integer: true }),
      range: new fields.StringField({ initial: "short" }),
      rating: new fields.NumberField({ initial: 1, integer: true })
    };
  }
}
