import styles from '../styles/counter.module.css';

function Counter({ number, unit }) {
  return (
    <p className={styles.counter}>
      <span className={styles.number}>{String(number).padStart(2, '0')}</span>
      <span className={styles.unit}>{unit}</span>
    </p>
  );
}

export default Counter;
