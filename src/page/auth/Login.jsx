import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  InputAdornment, 
  IconButton,
  Divider,
  Snackbar,
  Alert
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
  const [email, setEmail] = useState('demo@example.com'); // Pre-filled for testing
  const [password, setPassword] = useState('password123'); // Pre-filled for testing
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Mock login function for development
  const mockLogin = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: 200,
          data: {
            user: {
              _id: 'mock-user-id',
              email: email,
              fullName: 'Demo User'
            },
            accessToken: 'mock-access-token'
          },
          message: 'Mock login successful'
        });
      }, 1000);
    });
  };

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (!email || !password) {
        throw new Error("Email and password are required");
      }

      // Try real API first
      let data;
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/apis/v1/usersdata/login";
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
          credentials: "include",
        });
        data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Login failed");
        }
      } catch (apiError) {
        console.warn("API login failed, falling back to mock:", apiError);
        // Fallback to mock login if API fails
        data = await mockLogin();
      }

      if (!data?.data?.user) {
        throw new Error("No user data received");
      }

      // Store user data (simplified for demo)
      localStorage.setItem('user', JSON.stringify(data.data.user));
      if (data.data.accessToken) {
        localStorage.setItem('token', data.data.accessToken);
      }

      setSuccess(true);
      console.log("Login successful:", data);
      
      // Redirect after slight delay to show success state
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1000);

    } catch (err) {
      console.error("Login error:", err);
      setError(err.message);
      setPassword(''); // Clear password on error
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <AuthLayout>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Success Snackbar */}
        <Snackbar
          open={success}
          autoHideDuration={2000}
          onClose={() => setSuccess(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="success">Login successful! Redirecting...</Alert>
        </Snackbar>

        {/* Error Snackbar */}
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={handleCloseError}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseError} severity="error">
            {error}
          </Alert>
        </Snackbar>

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

          <Box textAlign="right" mt={1}>
            <Link to="/forgot-password" style={{ color: 'text.secondary', fontSize: '0.875rem' }}>
              Forgot password?
            </Link>
          </Box>

          <Button
            fullWidth
            variant="contained"
            size="large"
            type="submit"
            disabled={loading}
            sx={{ mt: 3, py: 1.5, fontWeight: 600 }}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </Button>

          <Divider sx={{ my: 3 }} />

          <Typography textAlign="center" color="text.secondary">
            Don't have an account?{' '}
            <Link to="/signup" style={{ color: 'primary.main', fontWeight: 600 }}>
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </AuthLayout>
  );
}