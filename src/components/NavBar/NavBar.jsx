import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { AppBar } from '@mui/material';

export const NavBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar
      position="static"
      sx={{
        p: 2,
        pr: 6,
        pl: 6,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
};
