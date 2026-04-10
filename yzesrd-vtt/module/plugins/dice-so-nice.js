export function registerDiceSoNice(dice3d) {
  dice3d.addSystem({
    id: 'yze-modular',
    name: 'Year Zero Engine SRD RPG',
  }, 'preferred');

  dice3d.addColorset({
    name: 'yze-modular-base-die',
    category: 'Year Zero Engine SRD RPG',
    description: 'Year Zero Engine SRD Base Die',
    foreground: '#fff',
    background: '#C53426',
    outline: 'none',
    // edge: '#000',
    texture: 'none',
    material: 'metal',
    font: 'AllertaStencil, Consolas, sans-Serif',
  }, 'default');

  dice3d.addDicePreset({
    type: 'd2',
    labels: range(2),
    system: 'yze-modular',
    colorset: 'yze-modular-base-die',
  }, 'd2');

  dice3d.addDicePreset({
    type: 'd3',
    labels: range(3),
    system: 'yze-modular',
    colorset: 'yze-modular-base-die',
  }, 'd3');

  dice3d.addDicePreset({
    type: 'd4',
    labels: range(4),
    system: 'yze-modular',
    colorset: 'yze-modular-base-die',
  }, 'd4');

  dice3d.addDicePreset({
    type: 'd6',
    labels: [
      'systems/yze-modular/assets/dice/d6/br_d6_1.webp',
      '2',
      '3',
      '4',
      '5',
      'systems/yze-modular/assets/dice/d6/br_d6_6.webp',
    ],
    // eslint-disable-next-line no-sparse-arrays
    bumpMaps: [
      'systems/yze-modular/assets/dice/d6/br_d6_1.webp',,,,,
      'systems/yze-modular/assets/dice/d6/br_d6_6.webp',
    ],
    system: 'yze-modular',
    colorset: 'yze-modular-base-die',
  }, 'd6');

  dice3d.addDicePreset({
    type: 'd8',
    labels: [
      'systems/yze-modular/assets/dice/d8/br_d8_1.webp',
      '2',
      '3',
      '4',
      '5',
      'systems/yze-modular/assets/dice/d8/br_d8_6.webp',
      'systems/yze-modular/assets/dice/d8/br_d8_7.webp',
      'systems/yze-modular/assets/dice/d8/br_d8_8.webp',
    ],
    // eslint-disable-next-line no-sparse-arrays
    bumpMaps: [
      'systems/yze-modular/assets/dice/d8/br_d8_1_bump.webp',,,,,
      'systems/yze-modular/assets/dice/d8/br_d8_6_bump.webp',
      'systems/yze-modular/assets/dice/d8/br_d8_7_bump.webp',
      'systems/yze-modular/assets/dice/d8/br_d8_8_bump.webp',
    ],
    system: 'yze-modular',
    colorset: 'yze-modular-base-die',
  }, 'd8');

  dice3d.addDicePreset({
    type: 'd10',
    labels: [
      'systems/yze-modular/assets/dice/d10/br_d10_1.webp',
      '2',
      '3',
      '4',
      '5',
      'systems/yze-modular/assets/dice/d10/br_d10_6.webp',
      'systems/yze-modular/assets/dice/d10/br_d10_7.webp',
      'systems/yze-modular/assets/dice/d10/br_d10_8.webp',
      'systems/yze-modular/assets/dice/d10/br_d10_9.webp',
      'systems/yze-modular/assets/dice/d10/br_d10_10.webp',
    ],
    // eslint-disable-next-line no-sparse-arrays
    bumpMaps: [
      'systems/yze-modular/assets/dice/d10/br_d10_1_bump.webp',,,,,
      'systems/yze-modular/assets/dice/d10/br_d10_6_bump.webp',
      'systems/yze-modular/assets/dice/d10/br_d10_7_bump.webp',
      'systems/yze-modular/assets/dice/d10/br_d10_8_bump.webp',
      'systems/yze-modular/assets/dice/d10/br_d10_9_bump.webp',
      'systems/yze-modular/assets/dice/d10/br_d10_10_bump.webp',
    ],
    system: 'yze-modular',
    colorset: 'yze-modular-base-die',
  }, 'd10');

  dice3d.addDicePreset({
    type: 'd12',
    labels: [
      'systems/yze-modular/assets/dice/d12/br_d12_1.webp',
      '2',
      '3',
      '4',
      '5',
      'systems/yze-modular/assets/dice/d12/br_d12_6.webp',
      'systems/yze-modular/assets/dice/d12/br_d12_7.webp',
      'systems/yze-modular/assets/dice/d12/br_d12_8.webp',
      'systems/yze-modular/assets/dice/d12/br_d12_9.webp',
      'systems/yze-modular/assets/dice/d12/br_d12_10.webp',
      'systems/yze-modular/assets/dice/d12/br_d12_11.webp',
      'systems/yze-modular/assets/dice/d12/br_d12_12.webp',
    ],
    // eslint-disable-next-line no-sparse-arrays
    bumpMaps: [
      'systems/yze-modular/assets/dice/d12/br_d12_1_bump.webp',,,,,
      'systems/yze-modular/assets/dice/d12/br_d12_6_bump.webp',
      'systems/yze-modular/assets/dice/d12/br_d12_7_bump.webp',
      'systems/yze-modular/assets/dice/d12/br_d12_8_bump.webp',
      'systems/yze-modular/assets/dice/d12/br_d12_9_bump.webp',
      'systems/yze-modular/assets/dice/d12/br_d12_10_bump.webp',
      'systems/yze-modular/assets/dice/d12/br_d12_11_bump.webp',
      'systems/yze-modular/assets/dice/d12/br_d12_12_bump.webp',
    ],
    system: 'yze-modular',
    colorset: 'yze-modular-base-die',
  }, 'd12');

  dice3d.addDicePreset({
    type: 'd20',
    labels: range(20),
    system: 'yze-modular',
    colorset: 'yze-modular-base-die',
  }, 'd20');

  dice3d.addDicePreset({
    type: 'd100',
    labels: range(9).map(i => `${(+i) * 10}`).concat('00'),
    system: 'yze-modular',
    colorset: 'yze-modular-base-die',
  }, 'd100');
}

/**
 * Creates a range of labels between two numbers.
 * @param {number}  size       Maximum
 * @param {number} [startAt=1] Minimum
 * @returns {string[]}
 */
function range(size, startAt = 1) {
  return [...Array(size).keys()].map(i => `${i + startAt}`);
}
