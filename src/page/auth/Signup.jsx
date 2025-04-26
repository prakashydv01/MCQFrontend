import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  InputAdornment, 
  IconButton,
  Divider,
  Alert
} from '@mui/material';
import { 
  Email, 
  Lock, 
  Person, 
  Visibility, 
  VisibilityOff,
  School
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import AuthLayout from './AuthLayout';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);
    
    const user = { fullName, email, password };

    try {
      const response = await axios.post(
        'http://localhost:3000/apis/v1/usersdata/register', 
        user,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Registration successful:', response.data);
      setSuccess('Registration successful! Redirecting...');
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
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
            Create Your Account
          </Typography>
          <Typography color="text.secondary">
            Join thousands of students improving their exam scores
          </Typography>
        </Box>

        <Box 
          component="form" 
          onSubmit={handleSubmit}
          sx={{ mt: 4 }}
        >
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          {success && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {success}
            </Alert>
          )}

          <TextField
            fullWidth
            label="Full Name"
            margin="normal"
            value={fullName}
            onChange={(e) => setName(e.target.value)}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Person color="primary" />
                </InputAdornment>
              )
            }}
          />
          
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email color="primary" />
                </InputAdornment>
              )
            }}
          />
          
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            disabled={isLoading}
            sx={{ 
              mt: 3,
              py: 1.5,
              fontWeight: 600,
              fontSize: '1.1rem'
            }}
          >
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </Button>

          <Divider sx={{ my: 3 }} />

          <Typography textAlign="center" color="text.secondary">
            Already have an account?{' '}
            <Link 
              to="/login" 
              style={{ 
                color: 'primary.main',
                fontWeight: 600,
                textDecoration: 'none'
              }}
            >
              Log In
            </Link>
          </Typography>
        </Box>
      </Box>
    </AuthLayout>
  );
}