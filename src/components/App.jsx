import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {error && <h2>Error: {error}</h2>}
      <ContactList />
    </div>
  );
};
