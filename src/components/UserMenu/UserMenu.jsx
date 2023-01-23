import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Typography, Box, Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box display="flex" sx={{ gap: 3, alignItems: 'center' }}>
      <Typography color="white">Welcome, {user.name}</Typography>
      <Button
        color="secondary"
        type="button"
        variant="contained"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Box>
  );
};
