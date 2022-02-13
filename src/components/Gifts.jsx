import Topbar from './Topbar';

import styles from '../styles/gifts.module.css';

export default function Gifts() {
  return (
    <>
      <Topbar />
      <div className={styles.container}>
        <p className={styles.text}>
          Nuestro mejor regalo es contar con ustedes en este dia, pero si
          deciden hacernos un presente les dejamos los datos de nuestra cuenta:
        </p>
        <p className={styles.text}>CBU : 0170305240000043215748</p>
        <p className={styles.text}>ALIAS : jpjacob</p>
        <p className={styles.text}>
          O también pueden consultar nuestra&nbsp;
          <a target="_blank" href="https://regalame.app/macayjuampi/casamiento">
            lista de regalos
          </a>
        </p>
      </div>
    </>
  );
}
