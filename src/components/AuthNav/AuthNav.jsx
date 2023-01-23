import { NavLink } from 'react-router-dom';
import { Button, Box } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box display="flex" sx={{ gap: 3 }}>
      <Button
        color="secondary"
        component={NavLink}
        to="/register"
        variant="contained"
        sx={{
          width: 100,
          '&.active': {
            boxShadow: 'rgba(19, 53, 11, 0.855) 0px 7px 29px 0px',
          },
        }}
      >
        Register
      </Button>
      <Button
        color="secondary"
        component={NavLink}
        to="/login"
        variant="contained"
        sx={{
          width: 100,
          '&.active': {
            boxShadow: 'rgba(19, 53, 11, 0.671) 0px 7px 29px 0px',
          },
        }}
      >
        Log In
      </Button>
    </Box>
  );
};
