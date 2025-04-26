import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  InputAdornment, 
  IconButton,
  Divider
} from '@mui/material';
import { 
  Email, 
  Lock, 
  Visibility, 
  VisibilityOff,
  School
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import AuthLayout from './AuthLayout';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
    navigate('/dashboard');
  };

  return (
    <AuthLayout>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Box textAlign="center" mb={4}>
          <School sx={{ fontSize: 60, color: 'primary.main' }} />
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Welcome Back
          </Typography>
          <Typography color="text.secondary">
            Sign in to continue your learning journey
          </Typography>
        </Box>

        <Box 
          component="form" 
          onSubmit={handleSubmit}
          sx={{ mt: 4 }}
        >
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email color="primary" />
                </InputAdornment>
              )
            }}
            component={motion.div}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
          
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            margin="normal"
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock color="primary" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            component={motion.div}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />

          <Box textAlign="right" mt={1}>
            <Link 
              to="/forgot-password" 
              style={{ 
                color: 'text.secondary',
                fontSize: '0.875rem',
                textDecoration: 'none'
              }}
            >
              Forgot password?
            </Link>
          </Box>

          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            sx={{ 
              mt: 3,
              py: 1.5,
              fontWeight: 600,
              fontSize: '1.1rem'
            }}
            component={motion.div}
            whileHover={{ 
              scale: 1.02,
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Log In
          </Button>

          <Divider sx={{ my: 3 }} />

          <Typography textAlign="center" color="text.secondary">
            Don't have an account?{' '}
            <Link 
              to="/signup" 
              style={{ 
                color: 'primary.main',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </AuthLayout>
  );
}