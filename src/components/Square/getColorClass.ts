import styles from './styles.module.css';

export function getColorClass(value: number): string {
  return colorClassMap[value] || styles.value0;
}

const colorClassMap: Record<number, string> = {
  2: styles.value2,
  4: styles.value4,
  8: styles.value8,
  16: styles.value16,
  32: styles.value32,
  64: styles.value64,
  128: styles.value128,
  256: styles.value256,
  512: styles.value512,
  1024: styles.value1024,
  2048: styles.value2048,
};
