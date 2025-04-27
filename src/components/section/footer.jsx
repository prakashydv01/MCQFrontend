import { Box, Container, Grid, Typography, Link, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { keyframes } from '@emotion/react';

const gradientAnimation = keyframes`
  0% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0% 50% }
`;

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{
        background: 'linear-gradient(45deg,rgb(46, 33, 230),rgb(57, 91, 187),rgb(88, 34, 236),rgb(18, 34, 179))',
        backgroundSize: '300% 300%',
        animation: `${gradientAnimation} 12s ease infinite`,
        py: { xs: 4, md: 6 },
        position: 'relative',
        overflow: 'hidden',
        width: '100vw',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #3f51b5, #ff4081)'
        }
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        <Grid container spacing={3}>
          {/* Company Info - Animated */}
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography 
                variant="h6" 
                gutterBottom 
                sx={{ 
                  fontWeight: 700,
                  color: 'white',
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                }}
              >
                MCQMaster
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
                The ultimate platform for exam preparation through smart practice.
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                gap: 2,
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}>
                {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      y: -4,
                      scale: 1.1,
                      transition: { type: 'spring', stiffness: 400 }
                    }}
                  >
                    <Link href="#" sx={{ color: 'white' }}>
                      <Icon fontSize="medium" />
                    </Link>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links - Staggered Animation */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography 
              variant="subtitle1" 
              gutterBottom 
              sx={{ 
                fontWeight: 600,
                color: 'white',
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              Resources
            </Typography>
            {['MCQ Library', 'Exam Prep', 'Study Guides'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link 
                  href="#" 
                  sx={{ 
                    display: 'block', 
                    mb: 1,
                    color: 'rgba(255,255,255,0.8)',
                    '&:hover': { color: 'white' },
                    textAlign: { xs: 'center', sm: 'left' }
                  }}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </Grid>

          {/* Support - Staggered Animation */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography 
              variant="subtitle1" 
              gutterBottom 
              sx={{ 
                fontWeight: 600,
                color: 'white',
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              Support
            </Typography>
            {['Help Center', 'Contact Us', 'Feedback'].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              >
                <Link 
                  href="#" 
                  sx={{ 
                    display: 'block', 
                    mb: 1,
                    color: 'rgba(255,255,255,0.8)',
                    '&:hover': { color: 'white' },
                    textAlign: { xs: 'center', sm: 'left' }
                  }}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </Grid>

          {/* Newsletter - Special Animation */}
          <Grid item xs={12} sm={6} md={4}>
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring' }}
            >
              <Typography 
                variant="subtitle1" 
                gutterBottom 
                sx={{ 
                  fontWeight: 600,
                  color: 'white',
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                Stay Updated
              </Typography>
              <Box 
                component="form"
                sx={{
                  display: 'flex',
                  gap: 1,
                  flexDirection: { xs: 'column', sm: 'row' },
                  alignItems: 'center'
                }}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  style={{
                    flexGrow: 1,
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: 'none',
                    outline: 'none',
                    fontSize: '14px',
                    width: '100%',
                    maxWidth: '300px'
                  }}
                />
                <motion.button
                  type="submit"
                  style={{
                    backgroundColor: '#3f51b5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px 20px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    width: { xs: '100%', sm: 'auto' },
                    maxWidth: '300px'
                  }}
                  whileHover={{ 
                    backgroundColor: '#303f9f',
                    scale: 1.05
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ 
          my: 4, 
          backgroundColor: 'rgba(255,255,255,0.2)' 
        }} />

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="body2" 
            align="center"
            sx={{ 
              color: 'rgba(242, 241, 250, 0.8)',
              '&:hover': { color: 'white' },
              px: 2
            }}
          >
            © {new Date().getFullYear()} MCQMaster. All rights reserved.
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer;