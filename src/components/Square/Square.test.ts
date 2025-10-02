import { getColorClass } from './getColorClass';
import styles from './styles.module.css';

describe('getColorClass', () => {
  it('returns correct class for known values', () => {
    expect(getColorClass(2)).toBe(styles.value2);
    expect(getColorClass(4)).toBe(styles.value4);
    expect(getColorClass(8)).toBe(styles.value8);
    expect(getColorClass(2048)).toBe(styles.value2048);
  });

  it('returns default class for unknown values', () => {
    expect(getColorClass(0)).toBe(styles.value0);
    expect(getColorClass(9999)).toBe(styles.value0);
    expect(getColorClass(-1)).toBe(styles.value0);
  });
});
