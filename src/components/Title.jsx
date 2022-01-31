import styles from '../styles/title.module.css';

function Title() {
  return (
    <div className={styles.title}>
      <span className={styles.name}>Maca</span>
      <img src="/heart.svg" alt="heart" />
      <span className={styles.name}>Juampi</span>
    </div>
  );
}

export default Title;
