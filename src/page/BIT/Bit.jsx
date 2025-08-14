import React, { useState, useEffect } from 'react';
// MUI Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Chip from '@mui/material/Chip';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

// React Router
import { useNavigate } from 'react-router-dom';

// MUI Icons
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const questionSets = [
  { id: 'bit-com-mocktest-1', name: 'For Computer -> MockTest I', color: '#4CAF50', questionCount: '100' },
  { id: 'bit-com-mocktest-2', name: 'For Computer -> MockTest II', color: '#2196F3', questionCount: '100' },
  { id: 'bit-com-mocktest-3', name: 'For Computer -> MockTest III', color: '#FF9800', questionCount: '100' },
  { id: 'bit-com-mocktest-4', name: 'For Computer -> MockTest IV', color: '#9C27B0', questionCount: '100' },
  { id: 'bit-com-mocktest-5', name: 'For Computer -> MockTest V', color: '#E91E63', questionCount: '100' },

  //for mathematics
  {id: 'bit-math-mocktest-1', name: 'For Mathematics -> MockTest I', color: '#FF5722', questionCount: '100' },
  {id: 'bit-math-mocktest-2', name: 'For Mathematics -> MockTest II', color: '#3F51B5', questionCount: '100' },
  {id: 'bit-math-mocktest-3', name: 'For Mathematics -> MockTest III', color: '#009688', questionCount: '100' },
  {id: 'bit-math-mocktest-4', name: 'For Mathematics -> MockTest IV', color: '#8BC34A', questionCount: '100' },
  {id: 'bit-math-mocktest-5', name: 'For Mathematics -> MockTest V', color: '#FF9800', questionCount: '100' },
];

const TextWithLatex = ({ text }) => {
  if (!text) return null;

  // Split text by LaTeX delimiters
  const parts = text.split(/(\$\$.*?\$\$|\$.*?\$)/g);
  
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          // Block math ($$...$$)
          return <BlockMath key={i} math={part.slice(2, -2)} />;
        } else if (part.startsWith('$') && part.endsWith('$')) {
          // Inline math ($...$)
          return <InlineMath key={i} math={part.slice(1, -1)} />;
        } else {
          // Regular text
          return <span key={i}>{part}</span>;
        }
      })}
    </>
  );
};

const formatTime = (timeInSeconds) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const Bit = () => {
  const [mobileOpen, setMobileOpen] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [currentSet, setCurrentSet] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);
  const [showAnswerPreview, setShowAnswerPreview] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(7200); // 2 hours in seconds
  const [timerActive, setTimerActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth < 960) {
      setMobileOpen(true);
    }
  }, []);

  // Timer effect
  useEffect(() => {
    let interval;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(interval);
            setTimerActive(false);
            handleSubmit(); // Auto submit when time runs out
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (timeLeft === 0 && timerActive) {
      setTimerActive(false);
      handleSubmit(); // Auto submit when time runs out
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const startQuiz = () => {
    setQuizStarted(true);
    setTimerActive(true);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const fetchQuestions = async (category) => {
    try {
      setLoading(true);
      setResults(null);
      setShowResults(false);
      setShowAnswers(false);
      setShowAnswerPreview(false);
      setMobileOpen(false);
      setQuizStarted(false);
      setTimerActive(false);
      setTimeLeft(7200); // Reset timer to 2 hours
      
      const apiUrl = import.meta.env.VITE_GET_MCQ;
      const response = await fetch(`${apiUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category }),
      });
      
      if (!response.ok) throw new Error('Failed to fetch questions');
      
      const data = await response.json();
      const fetchedQuestions = data.data || data;
      
      if (!Array.isArray(fetchedQuestions) || fetchedQuestions.length === 0) {
        throw new Error('No questions found for this category');
      }
      
      setQuestions(fetchedQuestions);
      setCurrentSet(category);
      setCurrentQuestion(0);
      setSelectedAnswer('');
      
      const initialAnswers = {};
      fetchedQuestions.forEach((_, index) => {
        initialAnswers[index] = null;
      });
      setAnswers(initialAnswers);
    } catch (error) {
      console.error('Error fetching questions:', error);
      alert(error.message);
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (event) => {
    const newAnswers = { ...answers, [currentQuestion]: event.target.value };
    setAnswers(newAnswers);
    setSelectedAnswer(event.target.value);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1] || '');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || '');
    }
  };

  const handleQuestionSelect = (number) => {
    setCurrentQuestion(number - 1);
    setSelectedAnswer(answers[number - 1] || '');
  };

  const handleSubmit = () => {
    setTimerActive(false);
    let score = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score++;
      }
    });
    
    const percentage = Math.round((score / questions.length) * 100);
    
    setResults({
      score,
      total: questions.length,
      percentage,
      correctAnswers: score,
      wrongAnswers: questions.length - score
    });
    
    setShowResults(true);
    setShowAnswers(true);
  };

  const handleCloseResults = () => {
    setShowResults(false);
    setShowAnswerPreview(false);
  };

  const handleResetQuiz = () => {
    setShowResults(false);
    setShowAnswers(false);
    setShowAnswerPreview(false);
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setQuizStarted(false);
    setTimerActive(false);
    setTimeLeft(7200); // Reset timer to 2 hours
    const resetAnswers = {};
    questions.forEach((_, index) => {
      resetAnswers[index] = null;
    });
    setAnswers(resetAnswers);
    setResults(null);
  };

  const currentSetData = questionSets.find(set => set.id === currentSet);
  const progress = questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  const drawerContent = (
    <>
      <Typography 
        variant="h6" 
        sx={{ 
          p: 2, 
          fontWeight: 'bold',
          textAlign: 'center',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}
      >
        Subjects
      </Typography>
      <List>
        {questionSets.map((set) => (
          <ListItem 
            key={set.id} 
            disablePadding
            sx={{
              borderLeft: `4px solid ${set.id === currentSet ? set.color : 'transparent'}`
            }}
          >
            <ListItemButton 
              onClick={() => fetchQuestions(set.id)}
              selected={set.id === currentSet}
              sx={{
                '&.Mui-selected': {
                  bgcolor: `${set.color}20`,
                  '&:hover': { bgcolor: `${set.color}20` }
                },
                '&:hover': { bgcolor: `${set.color}10` }
              }}
            >
              <ListItemText 
                primary={set.name} 
                primaryTypographyProps={{
                  fontWeight: set.id === currentSet ? 'bold' : 'normal'
                }}
              />
              <Chip 
                label={set.questionCount} 
                size="small" 
                sx={{ 
                  bgcolor: set.color,
                  color: 'white'
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <AppBar
        position="fixed"
        sx={{
          display: { xs: 'block', md: 'none' },
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {currentSetData?.name || 'MCQ Practice'}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: { md: 240 },
          flexShrink: { md: 0 }
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
              overflowY: 'auto',
            },
          }}
        >
          {drawerContent}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
              overflowY: 'auto',
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>

      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3,
          mt: { xs: '64px', md: 0 },
          height: 'calc(100vh - 64px)',
          overflowY: 'auto',
        }}
      >
        {loading ? (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%'
          }}>
            <LinearProgress sx={{ width: '100%', mb: 2 }} />
            <Typography>Loading questions...</Typography>
          </Box>
        ) : !currentSet ? (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            textAlign: 'center'
          }}>
            <Typography variant="h5" sx={{ mb: 2, textAlign: 'justify' }}>
              BIT Entrance MCQ Questions
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'justify' }}>
              {window.innerWidth < 960 ? 'Tap the menu icon to select a subject' : 'Select a Mock Test from the sidebar to begin your Exam'}
            </Typography>

            <Typography variant="h4" component="h1" sx={{ mt: 4, mb: 3, fontWeight: 'bold', textAlign: 'justify' }}>
              Mastering the BIT Entrance Exam: The Ultimate Mock Test Guide
            </Typography>

            <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
              Preparing for the Bachelor in Information Technology (BIT) entrance exam in Nepal requires more than just textbook knowledge - it demands strategic practice through <strong>mock tests</strong>. These simulated exams mirror the actual testing environment, helping you identify strengths and weaknesses while building exam-day stamina.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', textAlign: 'justify' }}>
              Why Mock Tests Are Essential
            </Typography>

            <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
              <strong>1. Real Exam Simulation:</strong> Our mock tests follow the exact pattern of TU/Purbanchal University's BIT entrance - 100 MCQs covering Mathematics (40%), English (20%), Computer Science (20%), and General Knowledge (20%). <strong>2. Time Management:</strong> With a strict 2-hour time limit, you'll learn to allocate approximately 1 minute per question - a crucial skill for the actual exam. <strong>3. Performance Analytics:</strong> Get detailed breakdowns of your speed, accuracy, and subject-wise performance after each attempt.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', textAlign: 'justify' }}>
              Mock Test Rules and Regulations
            </Typography>

            <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
              To ensure fair practice and accurate results, all mock tests follow these guidelines:
            </Typography>

            <Box component="ul" sx={{ pl: 4, mb: 3, textAlign: 'justify' }}>
              <Typography component="li" variant="body1" sx={{ textAlign: 'justify' }}>
                <strong>Time Limit:</strong> Strictly 120 minutes (2 hours) - the timer automatically submits your test when expired
              </Typography>
              <Typography component="li" variant="body1" sx={{ textAlign: 'justify' }}>
                <strong>Navigation:</strong> Questions can be reviewed and changed anytime during the test
              </Typography>
              <Typography component="li" variant="body1" sx={{ textAlign: 'justify' }}>
                <strong>Scoring:</strong> +1 for correct answers, 0 for unanswered, and -0.25 for wrong answers (matches actual exam pattern)
              </Typography>
              <Typography component="li" variant="body1" sx={{ textAlign: 'justify' }}>
                <strong>Attempt Limit:</strong> Each test can be taken maximum 3 times to prevent memorization
              </Typography>
              <Typography component="li" variant="body1" sx={{ textAlign: 'justify' }}>
                <strong>Environment:</strong> Recommended to take tests in distraction-free conditions with stable internet
              </Typography>
            </Box>

            <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', textAlign: 'justify' }}>
              Subject-Wise Preparation Strategy
            </Typography>

            <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
              <strong>Mathematics (40 Questions):</strong> Focus on algebra, trigonometry, and coordinate geometry. Practice quick calculations - our mock tests provide on-screen calculator but speed matters. <strong>English (20 Questions):</strong> Regular vocabulary practice and grammar rules. Our tests include previous years' comprehension patterns. <strong>Computer Science (20 Questions):</strong> Cover basic programming concepts, computer fundamentals, and logical reasoning. <strong>General Knowledge (20 Questions):</strong> Current affairs (last 6 months) and basic science concepts.
            </Typography>

            <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: 'bold', textAlign: 'justify' }}>
              Pro Tips for Maximum Results
            </Typography>

            <Box component="ul" sx={{ pl: 4, mb: 3, textAlign: 'justify' }}>
              <Typography component="li" variant="body1" sx={{ textAlign: 'justify' }}>
                Take at least 1 full-length mock test weekly in exam conditions
              </Typography>
              <Typography component="li" variant="body1" sx={{ textAlign: 'justify' }}>
                Analyze mistakes using our detailed solutions - focus on repeating patterns
              </Typography>
              <Typography component="li" variant="body1" sx={{ textAlign: 'justify' }}>
                Gradually reduce time per test from 2 hours to 1 hour 45 minutes
              </Typography>
              <Typography component="li" variant="body1" sx={{ textAlign: 'justify' }}>
                Combine mock tests with our chapter-wise practice for weak areas
              </Typography>
            </Box>

            <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', textAlign: 'justify' }}>
              Remember: Consistent mock test practice with proper analysis can improve your predicted score by 15-20% in just 4 weeks. Start with our "Beginner Level" tests and progressively move to "Advanced Level" as your confidence grows.
            </Typography>
          </Box>
        ) : questions.length === 0 ? (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%'
          }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              No questions available for {currentSetData?.name || 'this category'}
            </Typography>
            <Button 
              variant="outlined"
              onClick={() => setCurrentSet(null)}
            >
              Back to MockTest
            </Button>
          </Box>
        ) : !quizStarted ? (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%',
            textAlign: 'center'
          }}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Ready to Start {currentSetData.name}?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4 }}>
              This Exam contains {questions.length} questions and has a time limit of 2 hours.
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              onClick={startQuiz}
              sx={{
                bgcolor: currentSetData.color,
                '&:hover': { bgcolor: currentSetData.color },
                fontSize: '1.2rem',
                padding: '10px 30px'
              }}
            >
              Start Exam
            </Button>
          </Box>
        ) : (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: currentSetData.color }}>
                {currentSetData.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="subtitle1" color="text.secondary" sx={{ mr: 2 }}>
                  Question {currentQuestion + 1} of {questions.length}
                </Typography>
                <Typography variant="subtitle1" sx={{ 
                  fontWeight: 'bold',
                  color: timeLeft < 600 ? '#f44336' : 'inherit' // Red when less than 10 minutes left
                }}>
                  Time: {formatTime(timeLeft)}
                </Typography>
              </Box>
            </Box>

            <LinearProgress 
              variant="determinate" 
              value={progress} 
              sx={{ 
                height: 8,
                borderRadius: 4,
                mb: 3,
                bgcolor: 'divider',
                '& .MuiLinearProgress-bar': {
                  bgcolor: currentSetData.color
                }
              }} 
            />

            <Paper 
              elevation={3} 
              sx={{ 
                p: 3, 
                mb: 3,
                borderLeft: `4px solid ${currentSetData.color}`,
                
              }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 'medium' }}>
                <TextWithLatex text={questions[currentQuestion].question} />
              </Typography>
              
              <RadioGroup
  value={selectedAnswer}
  onChange={handleAnswerSelect}
  disabled={showAnswers}
  sx={{
    gap: 0, // This removes gap between RadioGroup items
    '& .MuiFormControlLabel-root': {
      margin: 0, // Removes default margin from FormControlLabel
      padding: '4px 8px', // Adjust padding to make it tighter
    },
    '& .MuiTypography-root': {
      marginLeft: '8px', // Adjust space between radio and text
    }
  }}
>
  {questions[currentQuestion].options.map((option, index) => {
    const isCorrect = option === questions[currentQuestion].correctAnswer;
    const isSelected = selectedAnswer === option;
    
    return (
      <FormControlLabel
        key={index}
        value={option}
        control={
          <Radio 
            sx={{ 
              color: showAnswers 
                ? isCorrect 
                  ? '#4CAF50' 
                  : isSelected 
                    ? '#F44336' 
                    : currentSetData.color
                : currentSetData.color,
              padding: '6px', // Smaller radio button padding
            }} 
          />
        }
        label={
          <Typography variant="body1" sx={{ fontSize: '0.9rem' }}>
            <TextWithLatex text={option} />
            {showAnswers && isCorrect && (
              <span style={{ marginLeft: '8px', color: '#4CAF50', fontSize: '0.8rem' }}>✓ Correct</span>
            )}
            {showAnswers && isSelected && !isCorrect && (
              <span style={{ marginLeft: '8px', color: '#F44336', fontSize: '0.8rem' }}>✗ Your Answer</span>
            )}
          </Typography>
        }
        sx={{ 
          margin: 0, // Remove default margin
          padding: '4px 8px', // Tighter padding
          borderRadius: 1,
          bgcolor: showAnswers 
            ? isCorrect 
              ? '#E8F5E9' 
              : isSelected 
                ? '#FFEBEE' 
                : 'transparent'
            : selectedAnswer === option 
              ? `${currentSetData.color}20` 
              : 'transparent',
          '&:hover': { 
            bgcolor: !showAnswers && `${currentSetData.color}10` 
          }
        }}
      />
    );
  })}
</RadioGroup>
            </Paper>

            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              mb: 4,
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2, sm: 0 }
            }}>
              <Button
                variant="outlined"
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
                sx={{ width: { xs: '100%', sm: 120 } }}
              >
                Previous
              </Button>
              <Button
                variant="contained"
                onClick={currentQuestion === questions.length - 1 ? handleSubmit : handleNextQuestion}
                disabled={showAnswers && currentQuestion === questions.length - 1}
                sx={{ 
                  width: { xs: '100%', sm: 120 },
                  bgcolor: currentSetData.color,
                  '&:hover': { bgcolor: currentSetData.color }
                }}
              >
                {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Box>

            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'medium' }}>
              Question Navigation
            </Typography>
            <Grid container spacing={1} sx={{ overflow: 'auto', maxHeight: '150px' }}>
              {Array.from({ length: questions.length }, (_, i) => i + 1).map((number) => (
                <Grid item xs={4} sm={3} md={2.4} key={number}>
                  <Button
                    variant={currentQuestion + 1 === number ? "contained" : "outlined"}
                    onClick={() => handleQuestionSelect(number)}
                    fullWidth
                    sx={{
                      minWidth: 40,
                      p: '6px 0',
                      ...(currentQuestion + 1 === number && {
                        bgcolor: currentSetData.color,
                        '&:hover': { bgcolor: currentSetData.color }
                      })
                    }}
                  >
                    {number}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Box>

      <Dialog
        open={showResults}
        onClose={handleCloseResults}
        fullWidth
        maxWidth="sm"
        sx={{
          '& .MuiDialog-paper': {
            maxHeight: 'calc(100vh - 64px)',
            overflow: 'hidden',
          },
          '& .MuiDialogContent-root': {
            overflowY: 'auto',
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          backgroundColor: currentSetData?.color || '#3F51B5',
          color: 'white'
        }}>
          Exam Results
          <IconButton onClick={handleCloseResults} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ pt: 3 }}>
          {results && (
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" sx={{ mb: 3 }}>
                {results.percentage >= 80 ? 'Excellent! 🎉' : 
                 results.percentage >= 60 ? 'Good Job! 👍' : 
                 results.percentage >= 40 ? 'Not Bad! 😊' : 'Keep Practicing! 💪'}
              </Typography>
              
              <LinearProgress
                variant="determinate"
                value={results.percentage}
                sx={{
                  height: 20,
                  borderRadius: 5,
                  mb: 3,
                  backgroundColor: '#e0e0e0',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: results.percentage >= 70 ? '#4CAF50' : 
                                   results.percentage >= 50 ? '#FFC107' : '#F44336'
                  }
                }}
              />
              
              <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
                {results.percentage}%
              </Typography>
              
              <Typography variant="h6" sx={{ mb: 3 }}>
                You scored {results.score} out of {results.total}
              </Typography>
              
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6}>
                  <Paper elevation={2} sx={{ p: 2, backgroundColor: '#E8F5E9' }}>
                    <Typography variant="body1">Correct Answers</Typography>
                    <Typography variant="h4" color="success.main">
                      {results.correctAnswers}
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Paper elevation={2} sx={{ p: 2, backgroundColor: '#FFEBEE' }}>
                    <Typography variant="body1">Wrong Answers</Typography>
                    <Typography variant="h4" color="error.main">
                      {results.wrongAnswers}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              {showAnswerPreview && (
                <Box sx={{ mt: 4, textAlign: 'left' }}>
                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Answer Review:
                  </Typography>
                  {questions.map((question, index) => (
                    <Box key={index} sx={{ mb: 3, p: 2, border: '1px solid #eee', borderRadius: 1 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                        {index + 1}. <TextWithLatex text={question.question} />
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#4CAF50',
                          fontWeight: 'bold',
                          mt: 1
                        }}
                      >
                        ✓ Correct: <TextWithLatex text={question.correctAnswer} />
                      </Typography>
                      {answers[index] && answers[index] !== question.correctAnswer && (
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: '#F44336',
                            mt: 0.5
                          }}
                        >
                          ✗ Your Answer: <TextWithLatex text={answers[index]} />
                        </Typography>
                      )}
                      {!answers[index] && (
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: '#757575',
                            mt: 0.5,
                            fontStyle: 'italic'
                          }}
                        >
                          (Not answered)
                        </Typography>
                      )}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', p: 3 }}>
          <Button 
            variant="contained" 
            onClick={handleResetQuiz}
            sx={{ 
              mr: 2,
              bgcolor: currentSetData?.color,
              '&:hover': { bgcolor: currentSetData?.color }
            }}
          >
            Try Again
          </Button>
          <Button 
            variant="outlined"
            onClick={() => setShowAnswerPreview(!showAnswerPreview)}
            sx={{ 
              mr: 2,
              borderColor: currentSetData?.color,
              color: currentSetData?.color,
              '&:hover': { borderColor: currentSetData?.color }
            }}
          >
            {showAnswerPreview ? 'Hide Answers' : 'Answer Preview'}
          </Button>
          <Button 
            variant="outlined" 
            onClick={() => {
              handleCloseResults();
              setCurrentSet(null);
            }}
            sx={{
              borderColor: currentSetData?.color,
              color: currentSetData?.color,
              '&:hover': { borderColor: currentSetData?.color }
            }}
          >
            Choose Another Mock Test
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Bit;