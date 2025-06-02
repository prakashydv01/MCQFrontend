import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { 
  Science, 
  MedicalServices, 
  Engineering, 
  AccountBalance,
  Gavel,
  Palette,
  Agriculture,
  Computer
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const faculties = [
  { id: 'Pcsit', name: 'Bsc.Csit', icon: <Computer fontSize="large" />, color: 'success.main', count: 580 },
  { id: "Pmedical",name: 'Medical', icon: <MedicalServices fontSize="large" />,  color: 'error.main', count: 520 },
  { name: 'Engineering', icon: <Engineering fontSize="large" />, color: 'warning.main', count: 650 },
];

export default function FacultyPractice() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Typography variant="h4" textAlign="center" mb={6}>
        Choose Your Faculty for Practice
      </Typography>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 3,
        justifyContent: 'center'
      }}>
        {faculties.map((faculty) => (
          <Box
            key={faculty.name}
            component={Link}
            to={`/${faculty.id}`}
            sx={{
              width: isMobile ? '45%' : 200, // Two columns on mobile, fixed width on larger screens
              p: 3,
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              textAlign: 'center',
              textDecoration: 'none',
              color: 'inherit',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: 2,
                transition: 'all 0.3s ease',
                borderColor: faculty.color
              }
            }}
          >
            <Box sx={{ color: faculty.color, mb: 2 }}>
              {faculty.icon}
            </Box>
            <Typography variant="h6" fontWeight="bold">
              {faculty.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {faculty.count}+ Questions
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}