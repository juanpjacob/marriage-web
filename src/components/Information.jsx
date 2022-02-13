import Topbar from './Topbar';

import styles from '../styles/information.module.css';

export default function Information() {
  return (
    <>
      <Topbar />
      <div className={styles.container}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d458.05744751346623!2d-58.37118516044037!3d-34.61497842884823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9e163fd774d%3A0xed613cc8862288cf!2sSal%C3%B3n%20Garage%20Argentino%20(Garage%20Eventos)!5e0!3m2!1ses-419!2sar!4v1644703750838!5m2!1ses-419!2sar"
          className={styles.map}
          loading="eager"
        ></iframe>
      </div>
    </>
  );
}
