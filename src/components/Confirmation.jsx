import Topbar from './Topbar';
import Option from './Option';
import useConfirmationForm from '../hooks/useConfirmationForm';
import supabase from '../lib/supabase';

import styles from '../styles/confirmation.module.css';

export default function Confirmation() {
  const form = useConfirmationForm();

  const submitForm = async () => {
    if (form.isValid()) {
      await supabase.from('confirmations').insert([form.data]);
    } else {
      alert('Por favor, completá todos los campos');
    }
  };

  const comingOptions = [
    { value: 'yes', text: 'Sí !!' },
    { value: 'No', text: 'No :(' },
  ];

  const menuOptions = [
    { value: 'all', text: 'Como de todo' },
    { value: 'vegan', text: 'Soy vegano' },
    { value: 'vegetarian', text: 'Soy vegetariano' },
    { value: 'celiac', text: 'Soy celíaco' },
  ];

  return (
    <>
      <Topbar />
      <div className={styles.form}>
        <div className={styles.row}>
          <p>¿Asistís a la fiesta?</p>
          <div className={styles.options}>
            {comingOptions.map(({ value, text }) => (
              <Option
                key={value}
                value={value}
                isSelected={form.data.coming === value}
                onSelect={form.setComing}
                className={styles.option}
              >
                {text}
              </Option>
            ))}
          </div>
        </div>
        <div className={styles.row}>
          <p>Nombre</p>
          <input
            type="text"
            value={form.data.firstName}
            className={styles.input}
            onChange={form.setFirstName}
          />
        </div>
        <div className={styles.row}>
          <p>Apellido</p>
          <input
            type="text"
            value={form.data.lastName}
            className={styles.input}
            onChange={form.setLastName}
          />
        </div>
        <div className={styles.row}>
          <p>Preferencia de menú</p>
          <div className={styles.menuOptions}>
            {menuOptions.map(({ value, text }) => (
              <Option
                key={value}
                value={value}
                isSelected={form.data.menuOption === value}
                onSelect={form.setMenuOption}
                className={styles.menuOption}
              >
                {text}
              </Option>
            ))}
          </div>
        </div>
        {form.data.menuOption !== 'all' && (
          <div className={styles.row}>
            <p>Me gustaría comer</p>
            <input
              type="text"
              value={form.data.menuSuggestion}
              className={styles.input}
              onChange={form.setMenuSuggestion}
            />
          </div>
        )}
      </div>
      <button className={styles.submit} onClick={submitForm}>
        Confirmar
      </button>
    </>
  );
}
