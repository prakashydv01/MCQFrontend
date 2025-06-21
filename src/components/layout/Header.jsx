import { useState } from 'react';
// MUI Components
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';

// MUI Icons
import MenuIcon from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import Home from '@mui/icons-material/Home';
import Login from '@mui/icons-material/Login';
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Book from '@mui/icons-material/Book';
// Add more icons here as needed


import { Link } from 'react-router-dom';


// 1. Define your navigation items in a config array
const NAV_ITEMS = [
  { 
    path: '/', 
    label: 'Home', 
    icon: 'Home',
    showInMobile: true
  },
  { 
    path: '/blog', 
    label: 'Blog', 
    icon: 'LibraryBooks', // Change to appropriate icon
    showInMobile: true
  },
  
  // Add more items here as needed
];

const SIGNUP_ITEM = {
  path: '/signup', 
  label: 'Sign Up', 
  icon: 'PersonAdd',
  isSignUp: true
};

// 2. Styled components
const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const SignUpButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

// 3. Icon mapping
const iconComponents = {
  Home: Home,
  Login: Login,
  LibraryBooks: LibraryBooks,
  PersonAdd: PersonAdd,
  // Add more icon mappings here
};

// 4. Dynamic icon component
const DynamicIcon = ({ iconName }) => {
  const IconComponent = iconComponents[iconName];
  return IconComponent ? <IconComponent /> : null;
};

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // 5. Render desktop menu items
  const renderDesktopMenu = (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
      {NAV_ITEMS.map((item) => (
        <StyledButton 
          key={item.path}
          component={Link} 
          to={item.path} 
          startIcon={<DynamicIcon iconName={item.icon} />}
        >
          {item.label}
        </StyledButton>
      ))}
      
      <SignUpButton 
        component={Link}
        to={SIGNUP_ITEM.path}
        variant="contained" 
        sx={{ px: 3, ml: 1 }}
        startIcon={<DynamicIcon iconName={SIGNUP_ITEM.icon} />}
      >
        {SIGNUP_ITEM.label}
      </SignUpButton>
    </Box>
  );

  // 6. Render mobile menu items
  const renderMobileMenu = (
    <Drawer
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: '300px',
          bgcolor: 'background.paper',
        }
      }}
    >
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Box>
      <Divider />
      
      <List>
        {NAV_ITEMS.filter(item => item.showInMobile).map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton 
              component={Link} 
              to={item.path} 
              onClick={handleDrawerToggle}
            >
              <ListItemIcon>
                <DynamicIcon iconName={item.icon} color="primary" />
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
        
        <Divider sx={{ my: 1 }} />
        
        <ListItem disablePadding>
          <ListItemButton 
            component={Link} 
            to={SIGNUP_ITEM.path} 
            onClick={handleDrawerToggle}
            sx={{
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              '&:hover': {
                backgroundColor: 'primary.dark',
              }
            }}
          >
            <ListItemIcon>
              <DynamicIcon 
                iconName={SIGNUP_ITEM.icon} 
                sx={{ color: 'primary.contrastText' }} 
              />
            </ListItemIcon>
            <ListItemText primary={SIGNUP_ITEM.label} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <AppBar 
      position="sticky" 
      color="default" 
      elevation={1}
      sx={{
        bgcolor: 'background.default',
        borderBottom: `1px solid ${theme.palette.divider}`
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
        {/* Logo */}
        <Box component={Link} to="/" display="flex" alignItems="center" gap={1} sx={{ textDecoration: 'none', color: 'inherit' }}>
          <Avatar 
            src="https://res.cloudinary.com/backendsrc/image/upload/v1750496030/Hamro-Exam_dvxxum.png"
            alt="MCQMaster Logo" 
            sx={{ width: 40, height: 40 }}
          />
          <Typography variant="h6" fontWeight="bold">Hamro Exam</Typography>
        </Box>

        {/* Desktop Menu */}
        {renderDesktopMenu}

        {/* Mobile Menu Button */}
        {isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>

      {/* Mobile Menu */}
      {isMobile && renderMobileMenu}
    </AppBar>
  );
}