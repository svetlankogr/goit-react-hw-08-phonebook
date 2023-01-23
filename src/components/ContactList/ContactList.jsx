import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import DeleteIcon from '@mui/icons-material/Delete';
import { AccountCircle } from '@mui/icons-material';
import {
  ListItemText,
  ListItemIcon,
  IconButton,
  List,
  ListItem,
} from '@mui/material';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List sx={{ width: 300, margin: '0 auto' }}>
      {filteredContacts.map(({ name, number, id }) => (
        <ListItem key={id}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary={name} secondary={number}></ListItemText>
          <IconButton
            edge="end"
            aria-label="delete"
            color="error"
            type="button"
            onClick={() => {
              const action = deleteContact(id);
              dispatch(action);
            }}
            variant="outlined"
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

// <Grid item xs={12} md={6}>
//   <List dense={dense}>
//     {generate(
//       <ListItem>
//         <ListItemText
//           primary="Single-line item"
//           secondary={secondary ? 'Secondary text' : null}
//         />
//       </ListItem>
//     )}
//   </List>
// </Grid>;
