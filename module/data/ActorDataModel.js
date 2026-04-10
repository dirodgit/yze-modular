/**
 * Data model for Characters and NPCs in the YZE Modular system.
 */
export class CharacterDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    const fields = foundry.data.fields;
    return {
      attributes: new fields.SchemaField({
        strength: new fields.SchemaField({
          value: new fields.NumberField({ initial: 2, min: 0, integer: true }),
          max: new fields.NumberField({ initial: 2, min: 0, integer: true })
        }),
        agility: new fields.SchemaField({
          value: new fields.NumberField({ initial: 2, min: 0, integer: true }),
          max: new fields.NumberField({ initial: 2, min: 0, integer: true })
        }),
        wits: new fields.SchemaField({
          value: new fields.NumberField({ initial: 2, min: 0, integer: true }),
          max: new fields.NumberField({ initial: 2, min: 0, integer: true })
        }),
        empathy: new fields.SchemaField({
          value: new fields.NumberField({ initial: 2, min: 0, integer: true }),
          max: new fields.NumberField({ initial: 2, min: 0, integer: true })
        })
      }),
      resources: new fields.SchemaField({
        willpower: new fields.SchemaField({
          value: new fields.NumberField({ initial: 0, min: 0, integer: true }),
          max: new fields.NumberField({ initial: 10, min: 0, integer: true })
        }),
        health: new fields.SchemaField({
          value: new fields.NumberField({ initial: 4, min: 0, integer: true }),
          max: new fields.NumberField({ initial: 4, min: 0, integer: true })
        })
      }),
      details: new fields.SchemaField({
        biography: new fields.HTMLField({ initial: "" }),
        archetype: new fields.StringField({ initial: "" })
      }),
      conditions: new fields.SchemaField({
        starving: new fields.BooleanField({ initial: false }),
        dehydrated: new fields.BooleanField({ initial: false }),
        sleepless: new fields.BooleanField({ initial: false }),
        freezing: new fields.BooleanField({ initial: false }),
        exhausted: new fields.BooleanField({ initial: false }),
        wounded: new fields.BooleanField({ initial: false }),
        scared: new fields.BooleanField({ initial: false }),
        angry: new fields.BooleanField({ initial: false }),
        broken: new fields.BooleanField({ initial: false })
      })
    };
  }
}

