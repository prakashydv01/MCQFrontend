import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import studentImage from '../../assets/images/student.jpg';

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '60vh', md: '70vh' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url(${studentImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
          opacity: 0.5
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)',
          zIndex: 1,
          [theme.breakpoints.down('md')]: {
            background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0) 100%)'
          }
        }
      }}
    >
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          py: { xs: 8, md: 12 },
          px: { xs: 2, sm: 4 }
        }}
      >
        <Box
          sx={{
            maxWidth: { xs: '100%', md: '60%', lg: '50%' },
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontSize: {
                xs: '2.5rem',
                sm: '3rem',
                md: '3.5rem'
              },
              lineHeight: 1.2,
              fontWeight: 700,
              color: theme.palette.text.primary
            }}
          >
            Ace Your Exams with <span style={{ color: '#2563eb' }}>Smart MCQs</span>
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            mb={4}
            sx={{
              fontSize: {
                xs: '1.1rem',
                sm: '1.25rem'
              }
            }}
          >
            Practice faculty-specific questions and track your progress.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 5,
              fontSize: '1rem',
              fontWeight: 600
            }}
          >
            Let's Practice
          </Button>
        </Box>
      </Container>
    </Box>
  );
}