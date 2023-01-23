import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { TextField, Box } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Box component="form" sx={{ mt: 1, width: 400, margin: '0 auto' }}>
      <TextField
        size="small"
        margin="normal"
        type="text"
        fullWidth
        placeholder="Find contacts by name"
        onChange={e => {
          const action = filterContacts(e.target.value);
          dispatch(action);
        }}
      />
    </Box>
  );
};
