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
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      if (!email || !password) {
        throw new Error("Email and password are required");
      }

      const apiUrl = import.meta.env.VITE_LOGIN;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", // Required for cookies
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle API errors from your backend
        const errorMessage = data?.message || 
                            (response.status === 401 ? "Invalid credentials" : "Login failed");
        throw new Error(errorMessage);
      }

      // Verify the response structure matches your backend
      if (!data?.data?.user || !data.data.user._id) {
        throw new Error("Invalid response from server");
      }

      // Store only non-sensitive user data in localStorage
      const userData = {
        _id: data.data.user._id,
        email: data.data.user.email,
      };
      localStorage.setItem('user', JSON.stringify(userData));

      setSuccess(true);
      
      // Redirect after successful login
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1000);

    } catch (err) {
      console.error("Login error:", err);
      setError(err.message || "An unexpected error occurred");
      setPassword('');
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