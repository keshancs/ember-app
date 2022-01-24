import Helper from '@ember/component/helper';

export default class currency extends Helper {
  compute(positional, named = {}) {
    const [number] = positional;
    const { sign = '€' } = named;

    const value = parseFloat(number).toFixed(2);

    return `${value} ${sign}`;
  }
}
