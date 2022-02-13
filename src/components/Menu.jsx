import { Link } from 'react-router-dom';

import styles from '../styles/menu.module.css';

function Menu() {
  return (
    <div className={styles.menu}>
      <span className={styles.item}>
        <Link to="/location">Info</Link>
      </span>
      <span className={styles.item}>
        <Link to="/confirmation">Asistencia</Link>
      </span>
      <span className={styles.item}>
        <Link to="/gifts">Regalos</Link>
      </span>
    </div>
  );
}

export default Menu;
