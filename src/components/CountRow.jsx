import styles from '../styles/countRow.module.css';

function CountRow({ number, unit }) {
  return (
    <p className={styles.countRow}>
      <span className={styles.countNumber}>
        {String(number).padStart(2, '0')}
      </span>
      <span className={styles.countUnit}>{unit}</span>
    </p>
  );
}

export default CountRow;
