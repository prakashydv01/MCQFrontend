import { Box, Typography } from '@mui/material';
import { 
  Science, 
  MedicalServices, 
  Engineering, 
  AccountBalance,
  Gavel,
  Palette,
  Agriculture
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const faculties = [
  { name: 'Medical', icon: <MedicalServices fontSize="large" />,  color: 'error.main', count: 520 },
  { name: 'Engineering', icon: <Engineering fontSize="large" />, color: 'warning.main', count: 650 },
  { name: 'Science', icon: <Science fontSize="large" />, color: 'success.main', count: 580 },
  { name: 'Management', icon: <AccountBalance fontSize="large" />, color: 'info.main', count: 490 },
  { name: 'Law', icon: <Gavel fontSize="large" />, color: 'secondary.main', count: 320 },
  { name: 'Arts', icon: <Palette fontSize="large" />, color: 'primary.main', count: 210 },
  { name: 'Agriculture', icon: <Agriculture fontSize="large" />, color: 'success.dark', count: 180 }
];

export default function FacultyBoxes() {
  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Typography variant="h4" textAlign="center" mb={6}>
        Choose Your Faculty
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
            component={Link }
            to={`/${faculty.name.toLowerCase()}`}
            sx={{
              width: 200,
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