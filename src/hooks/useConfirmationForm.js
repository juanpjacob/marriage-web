import { useState } from 'react';

function useConfirmationForm() {
  const [data, setData] = useState({
    coming: '',
    firstName: '',
    lastName: '',
    menuOption: 'all',
    menuSuggestion: '',
  });

  const setComing = (value) => setData({ ...data, coming: value });
  const setFirstName = ({ target }) =>
    setData({ ...data, firstName: target.value });
  const setLastName = ({ target }) =>
    setData({ ...data, lastName: target.value });
  const setMenuOption = (value) => setData({ ...data, menuOption: value });
  const setMenuSuggestion = ({ target }) =>
    setData({ ...data, menuSuggestion: target.value });

  const isValid = () =>
    ['coming', 'firstName', 'lastName', 'menuOption'].every(
      (prop) => data[prop].length
    );

  return {
    setComing,
    setFirstName,
    setLastName,
    setMenuOption,
    setMenuSuggestion,
    isValid,
    data,
  };
}

export default useConfirmationForm;
