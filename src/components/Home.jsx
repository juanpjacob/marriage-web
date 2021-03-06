import useTimeCounter from '../hooks/useTimeCounter';

import Topbar from './Topbar';
import Counter from './Counter';

import styles from '../styles/home.module.css';

function Home() {
  const date = new Date(2022, 3, 9, 20, 30, 0);
  const { days, hours, minutes, seconds } = useTimeCounter(date);

  return (
    <>
      <Topbar />
      <div className={styles.content}>
        <Counter number={days} unit="d" />
        <Counter number={hours} unit="h" />
        <Counter number={minutes} unit="m" />
        <Counter number={seconds} unit="s" />
      </div>
    </>
  );
}

export default Home;
