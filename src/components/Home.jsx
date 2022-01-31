import useTimeCounter from '../hooks/useTimeCounter';

import Title from './Title';
import CountRow from './CountRow';

import styles from '../styles/home.module.css';

function Home() {
  const date = new Date(2022, 3, 9, 19, 30, 0);
  const { days, hours, minutes, seconds } = useTimeCounter(date);

  return (
    <div className={styles.page}>
      <Title />
      <CountRow number={days} unit="d" />
      <CountRow number={hours} unit="h" />
      <CountRow number={minutes} unit="m" />
      <CountRow number={seconds} unit="s" />
    </div>
  );
}

export default Home;
