import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container, Typography } from '@mui/material';

export default function Register() {
  return (
    <Container maxWidth="lg" align="center">
      <Typography variant="h4" sx={{ mt: 3 }}>
        Sign In
      </Typography>
      <RegisterForm />
    </Container>
  );
}
