import { useNavigate } from 'react-router-dom';

import styles from '../styles/title.module.css';

function Title() {
  const navigate = useNavigate();
  const navigateHome = () => navigate('/');

  return (
    <div role="button" onClick={navigateHome} className={styles.title}>
      <span className={styles.name}>Maca</span>
      <img src="/heart.svg" alt="heart" />
      <span className={styles.name}>Juampi</span>
    </div>
  );
}

export default Title;
