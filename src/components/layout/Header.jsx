import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Collapse from '@mui/material/Collapse';

// Updated MUI Icons (v5+)
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import QuizIcon from '@mui/icons-material/Quiz';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import logo from '../../assets/images/Hamro-Exam.png';

// Faculty data
const FACULTIES = {
  'Mock Test': ['IOE', 'BIT', 'Csit'],
  'Practice': ['IOE', 'BIT', 'Csit'],
  'Loksewa': ['Computer Operator'],
};

// Navigation items
const NAV_ITEMS = [
  { 
    path: '/', 
    label: 'Home', 
    icon: 'Home',
    showInMobile: true
  },
  
  { 
    type: 'faculty',
    label: 'Mock Test', 
    icon: 'Loksewa',
    showInMobile: true,
    basePath: '/mock-test'
  },
  { 
    type: 'faculty',
    label: 'Practice', 
    icon: 'Practice',
    showInMobile: true,
    basePath: '/practice'
  },
  { 
    type: 'faculty',
    label: 'Loksewa', 
    icon: 'Loksewa',
    showInMobile: true,
    basePath: '/loksewa'
  },
  { 
    path: '/guidance', 
    label: 'Guidance', 
    icon: 'Guidance',
    showInMobile: true
  },
  { 
    path: '/blog', 
    label: 'Blog', 
    icon: 'Blog',
    showInMobile: true
  },
];

const SIGNUP_ITEM = {
  path: '/signup', 
  label: 'Sign Up', 
  icon: 'SignUp',
  isSignUp: true
};

// Updated icon mapping with v5+ icons
const iconComponents = {
  Home: HomeIcon,
  Blog: ArticleIcon,
  SignUp: PersonAddIcon,
  Practice: MenuBookIcon,
  Quiz: QuizIcon,
  Loksewa: SchoolIcon,
  Guidance: LightbulbIcon,
};

const DynamicIcon = ({ iconName, className = "" }) => {
  const IconComponent = iconComponents[iconName];
  return IconComponent ? <IconComponent className={`text-white ${className}`} /> : null;
};

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [facultyDrawerOpen, setFacultyDrawerOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState({});

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    if (!mobileOpen) {
      setExpandedItems({});
    }
  };

  const handleFacultyMenuClick = (event, menuItem) => {
    setCurrentMenu(menuItem);
    if (isMobile) {
      setExpandedItems(prev => ({
        ...prev,
        [menuItem.label]: !prev[menuItem.label]
      }));
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setFacultyDrawerOpen(false);
  };

  const handleFacultySelect = (faculty) => {
    const menuItem = NAV_ITEMS.find(item => item.label === currentMenu.label);
    if (menuItem) {
      const facultySlug = faculty.toLowerCase().replace(' ', '-');
      navigate(`${menuItem.basePath}/${facultySlug}`);
    }
    handleClose();
    setMobileOpen(false);
  };

  // Render desktop menu items with dark background
  const renderDesktopMenu = (
    <Box className="hidden md:flex gap-2 items-center">
      {NAV_ITEMS.map((item) => (
        item.type === 'faculty' ? (
          <Button 
            key={item.label}
            onClick={(e) => handleFacultyMenuClick(e, item)}
            startIcon={<DynamicIcon iconName={item.icon} />}
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md transition-all duration-200 font-medium"
            sx={{ 
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)'
              }
            }}
          >
            {item.label}
          </Button>
        ) : (
          <Button 
            key={item.path}
            component={Link} 
            to={item.path} 
            startIcon={<DynamicIcon iconName={item.icon} />}
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md transition-all duration-200 font-medium"
            sx={{ 
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)'
              }
            }}
          >
            {item.label}
          </Button>
        )
      ))}
      
      <Button 
        component={Link}
        to={SIGNUP_ITEM.path}
        variant="contained" 
        className="px-4 py-2 ml-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md shadow-md transition-all duration-200 font-medium hover:shadow-lg"
        startIcon={<DynamicIcon iconName={SIGNUP_ITEM.icon} />}
        sx={{ 
          color: 'white',
          backgroundColor: '#4f46e5',
          '&:hover': {
            backgroundColor: '#4338ca'
          }
        }}
      >
        {SIGNUP_ITEM.label}
      </Button>

      {/* Desktop Faculty Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
  className: "bg-white text-black mt-1 rounded-md shadow-xl border border-gray-200",
  sx: { 
    '& .MuiMenuItem-root': { 
      color: 'black',
      '&:hover': {
        backgroundColor: '#f3f4f6' // light gray on hover
      }
    } 
  }
}}

        MenuListProps={{
          className: "py-0"
        }}
      >
        {currentMenu && FACULTIES[currentMenu.label]?.map((faculty) => (
          <MenuItem 
            key={faculty}
            onClick={() => handleFacultySelect(faculty)}
            className="hover:bg-gray-700 px-4 py-2 transition-colors duration-200 border-b border-gray-700 last:border-b-0"
           >
            {faculty}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )

  // Mobile menu remains the same
  const renderMobileMenu = (
    <>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          className: "w-full max-w-xs bg-gray-900 bg-opacity-95 backdrop-blur-sm"
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-gray-900">
            <div className="flex items-center space-x-2">
              <Avatar src={logo} className="w-8 h-8" />
              <Typography className="text-white font-bold">Hamro Exam</Typography>
            </div>
            <IconButton 
              onClick={handleDrawerToggle} 
              className="text-gray-400 hover:text-white"
            >
              <CloseIcon />
            </IconButton>
          </div>
          
          {/* Menu items */}
          <div className="flex-1 overflow-y-auto bg-gray-900">
            <List className="py-2">
              {NAV_ITEMS.filter(item => item.showInMobile).map((item) => (
                item.type === 'faculty' ? (
                  <div key={item.label}>
                    <ListItem disablePadding>
                      <ListItemButton 
                        onClick={(e) => handleFacultyMenuClick(e, item)}
                        className="text-white hover:bg-gray-800 px-4 py-3 transition-colors duration-200"
                      >
                        <ListItemIcon className="min-w-[40px] text-gray-300">
                          <DynamicIcon iconName={item.icon} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={item.label} 
                          primaryTypographyProps={{ className: "font-medium text-white" }}
                        />
                        {expandedItems[item.label] ? (
                          <ExpandLessIcon className="text-gray-400" />
                        ) : (
                          <ExpandMoreIcon className="text-gray-400" />
                        )}
                      </ListItemButton>
                    </ListItem>
                    <Collapse in={expandedItems[item.label]} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding className="bg-gray-800">
                        {FACULTIES[item.label]?.map((faculty) => (
                          <ListItem key={faculty} disablePadding>
                            <ListItemButton 
                              onClick={() => handleFacultySelect(faculty)}
                              className="text-white hover:bg-gray-700 pl-14 pr-4 py-3 transition-colors duration-200"
                            >
                              <ListItemText 
                                primary={faculty} 
                                primaryTypographyProps={{ className: "font-medium text-white" }}
                              />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </div>
                ) : (
                  <ListItem key={item.path} disablePadding>
                    <ListItemButton 
                      component={Link} 
                      to={item.path} 
                      onClick={handleDrawerToggle}
                      className="text-white hover:bg-gray-800 px-4 py-3 transition-colors duration-200"
                    >
                      <ListItemIcon className="min-w-[40px] text-gray-300">
                        <DynamicIcon iconName={item.icon} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={item.label} 
                        primaryTypographyProps={{ className: "font-medium text-white" }}
                      />
                    </ListItemButton>
                  </ListItem>
                )
              ))}
            </List>
          </div>
          
          {/* Signup button */}
          <div className="p-4 border-t border-gray-800 bg-gray-900">
            <Button
              fullWidth
              component={Link} 
              to={SIGNUP_ITEM.path} 
              onClick={handleDrawerToggle}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 shadow-md"
              startIcon={<DynamicIcon iconName={SIGNUP_ITEM.icon} />}
            >
              {SIGNUP_ITEM.label}
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        sx={{ 
          backgroundColor: '#1a1a1a', // Dark background
          color: 'white',
          backgroundImage: 'none',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
        }}
      >
        <Toolbar className="justify-between px-4 md:px-6">
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            className="flex items-center gap-2 no-underline"
            sx={{
              '&:hover': {
                opacity: 0.9
              }
            }}
          >
            <Avatar 
              src={logo}
              alt="Hamro Exam Logo" 
              className="w-10 h-10"
              sx={{
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            />
            <Typography 
              variant="h6" 
              className="font-bold"
              sx={{
                color: 'white',
                fontWeight: 700,
                letterSpacing: '0.5px'
              }}
            >
              Hamro Exam
            </Typography>
          </Box>

          {/* Desktop Menu */}
          {renderDesktopMenu}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.08)'
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Menu */}
      {isMobile && renderMobileMenu}
    </>
  );
}