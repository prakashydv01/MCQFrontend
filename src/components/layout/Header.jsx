import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button, 
  Typography, 
  Avatar, 
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { School, Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderDesktopMenu = (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Button variant="text" sx={{ mr: 1 }}>Home</Button>
      <Button component={Link} to="/login">Login</Button>
      <Button 
        component={Link}
        to="/signup"
        variant="contained" 
        sx={{ px: 3, ml: 1 }}
        color="primary"
      >
        Sign Up
      </Button>
    </Box>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/" onClick={handleMobileMenuClose}>Home</MenuItem>
      <MenuItem component={Link} to="/login" onClick={handleMobileMenuClose}>Login</MenuItem>
      <MenuItem component={Link} to="/signup" onClick={handleMobileMenuClose}>Sign Up</MenuItem>
    </Menu>
  );

  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
        {/* Logo */}
        <Box display="flex" alignItems="center" gap={1}>
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            <School />
          </Avatar>
          <Typography variant="h6" fontWeight="bold">MCQMaster</Typography>
        </Box>

        {/* Desktop Menu */}
        {renderDesktopMenu}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile Menu */}
      {isMobile && renderMobileMenu}
    </AppBar>
  );
}