import { Container, Typography } from '@mui/material';
import { TagFaces } from '@mui/icons-material';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" align="center" sx={{ mt: 20 }}>
        Welcome to your private Phonebook!
        <TagFaces sx={{ width: 50, height: 50 }} />
      </Typography>
    </Container>
  );
}
