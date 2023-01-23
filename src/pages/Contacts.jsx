import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getError } from 'redux/contacts/selectors';
import { Typography, Container } from '@mui/material';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" sx={{ mt: 3 }}>
        Phonebook
      </Typography>
      <ContactForm />
      <Typography variant="h3" align="center" sx={{ mt: 3 }}>
        Contacts
      </Typography>
      <Filter />
      {isLoading && <Loader />}
      {error && (
        <Typography variant="h3" align="center" sx={{ mt: 3 }}>
          Error: {error}
        </Typography>
      )}
      <ContactList />
    </Container>
  );
}
