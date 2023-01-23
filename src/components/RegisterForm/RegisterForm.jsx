import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, Button, TextField } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ mt: 1, width: 400 }}
    >
      <TextField
        margin="normal"
        type="text"
        required
        fullWidth
        id="name"
        label="Username"
        name="name"
        autoComplete="name"
        autoFocus
      />
      <TextField
        margin="normal"
        type="email"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Register
      </Button>
    </Box>
  );
};
