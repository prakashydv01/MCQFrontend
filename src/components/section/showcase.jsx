import React from 'react';
import { Box, Typography, Button, Grid, Paper, useTheme } from '@mui/material';
import { CheckCircle, School, LiveHelp } from '@mui/icons-material';

const WhyLearnWithUs = () => {
  const theme = useTheme();
  
  const features = [
    {
      icon: <School color="primary" sx={{ fontSize: 40 }} />,
      title: "Entrance Preparation",
      description: "1000+ TU Entrance MCQ questions to help you prepare",
    },
    {
      icon: <LiveHelp color="primary" sx={{ fontSize: 40 }} />,
      title: "Expert Instructors",
      description: "Get help from experts for any question",
      action: "Ask now"
    },
    {
      icon: <CheckCircle color="primary" sx={{ fontSize: 40 }} />,
      title: "Solutions",
      description: "Detailed solutions for all questions",
    }
  ];

  return (
    <Box sx={{ py: 4, px: 2 }}>
      {/* Heading Section */}
      <Box sx={{ 
        textAlign: 'center', 
        mb: 4,
        px: 2
      }}>
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            fontWeight: 700,
            mb: 1,
            color: theme.palette.mode === 'dark' ? 'primary.light' : 'primary.main'
          }}
        >
          Why Learn With Hamro Exam
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: 'text.secondary',
            maxWidth: 600,
            mx: 'auto'
          }}
        >
          Complete set of reference material to prepare  Entrance exam.
        </Typography>
      </Box>

      {/* Features Boxes */}
      <Box sx={{ 
        display: 'flex',
        justifyContent: 'center',
        gap: 3,
        flexWrap: 'wrap',
        px: 2
      }}>
        {features.map((feature, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              minWidth: 280,
              maxWidth: 320,
              p: 3,
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              border: `1px solid ${theme.palette.divider}`,
              '&:hover': {
                boxShadow: 6,
                borderColor: theme.palette.primary.main
              },
              transition: 'all 0.3s ease'
            }}
          >
            <Box sx={{
              width: 70,
              height: 70,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 2,
              bgcolor: theme.palette.mode === 'dark' 
                ? 'rgba(66, 165, 245, 0.1)' 
                : 'rgba(25, 118, 210, 0.08)'
            }}>
              {feature.icon}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {feature.title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
              {feature.description}
            </Typography>
            {feature.action && (
              <Button 
                variant="outlined" 
                size="small" 
                color="primary"
                sx={{ mt: 'auto' }}
              >
                {feature.action}
              </Button>
            )}
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default WhyLearnWithUs;