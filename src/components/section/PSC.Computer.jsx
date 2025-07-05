// MUI Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// MUI Icons
import Engineering from '@mui/icons-material/Engineering';
import Computer from '@mui/icons-material/Computer';

import { Link } from 'react-router-dom';

const faculties = [
  { id: 'computerOperator', name: 'Computer Operator', icon: <Computer fontSize="large" />, color: 'success.main', count: 580 },

];

export default function FacultyPSC() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Typography variant="h4" textAlign="center" mb={6}>
        LOK SEWA
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