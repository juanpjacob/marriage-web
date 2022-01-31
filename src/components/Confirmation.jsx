import { useState } from 'react';

function Confirmation() {
  const [] = useState({
    coming: '',
    firstName: '',
    lastName: '',
    menuOption: 'all',
    menuSuggestion: '',
  });
  return (
    <div>
      <input />
      <input />
      <input />
      <input />
      <button>Confirmar</button>
    </div>
  );
  // si o no
  // name
  // apellido
  // menu option
  // todo, celiaco, vegetariano, vegano, que queres comer?
  //confirmar
}

export default Confirmation;
