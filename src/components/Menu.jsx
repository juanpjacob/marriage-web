import styles from '../styles/menu.module.css';

function Menu() {
  return (
    <div className={styles.menu}>
      <span className={styles.item}>Ubicacion</span>
      <span className={styles.item}>Asistencia</span>
      <span className={styles.item}>Regalos</span>
    </div>
  );
}

export default Menu;
