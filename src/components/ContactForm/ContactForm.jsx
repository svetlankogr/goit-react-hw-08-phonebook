import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import { TextField, Box, Button } from '@mui/material';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const isAtContacts = contacts.find(contact => contact.name === name);
    if (isAtContacts) {
      alert('Already in Contacts');
      return;
    }
    if (!name && !number) {
      alert('Enter your name and phone number');
      return;
    }
    const newContact = { name, number };
    const action = addContact(newContact);
    dispatch(action);
    e.target.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ mt: 1, width: 400, margin: ' 0 auto' }}
    >
      <TextField
        margin="normal"
        id="outlined-basic"
        size="small"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        label="Name"
        variant="outlined"
        autoFocus
        fullWidth
      />
      <TextField
        margin="normal"
        id="outlined-basic"
        size="small"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        label="Number"
        variant="outlined"
        fullWidth
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add contact
      </Button>
    </Box>
  );
};
