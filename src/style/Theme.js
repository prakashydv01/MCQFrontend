import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    primary: { main: '#2563eb' },   // Blue
    secondary: { main: '#7c3aed' }, // Purple
    error: { main: '#dc2626' },     // Red
    background: { default: '#F8F8F8' }
  },
   components: {
    MuiDrawer: {
      defaultProps: {
        disableScrollLock: true,
      },
    },
  },
  
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: { fontWeight: 700, fontSize: '2.5rem' },
    h2: { fontWeight: 600, fontSize: '2rem' }
  }
});
