import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Box, Button } from '@mui/material';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Box display="flex" sx={{ gap: 2 }}>
      <Button
        color="inherit"
        component={NavLink}
        to="/"
        sx={{
          '&.active': {
            color: 'white',
            textDecoration: 'underline',
          },
        }}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          color="inherit"
          component={NavLink}
          to="/contacts"
          sx={{
            '&.active': {
              color: 'white',
              textDecoration: 'underline',
            },
          }}
        >
          Tasks
        </Button>
      )}
    </Box>
  );
};
