import { LoginForm } from 'components/LoginForm/LoginForm';
import { Typography, Container } from '@mui/material';

export default function Login() {
  return (
    <Container maxWidth="lg" align="center">
      <Typography variant="h4" sx={{ mt: 3 }}>
        Log In
      </Typography>
      <LoginForm />
    </Container>
  );
}
