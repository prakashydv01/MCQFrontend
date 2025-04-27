import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
  Grid,
  LinearProgress,
  Chip,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  AppBar,
  Toolbar
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

const questionSets = [
  { id: 'nepal', name: 'nepal', color: '#4CAF50', questionCount: '20' },
  { id: 'physiology', name: 'Physiology', color: '#2196F3', questionCount: '15' },
  { id: 'biochemistry', name: 'Biochemistry', color: '#9C27B0', questionCount: '12' },
  { id: 'pathology', name: 'Pathology', color: '#F44336', questionCount: '18' },
  { id: 'pharmacology', name: 'Pharmacology', color: '#FF9800', questionCount: '10' },
  { id: 'math', name: 'Math', color: '#3F51B5', questionCount: '25' },
];

const MCQApp = () => {
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
  const navigate = useNavigate();

  useEffect(() => {
    if (window.innerWidth < 960) {
      setMobileOpen(true);
    }
  }, []);

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
    <Box sx={{ display: 'flex', height: '100vh' }}>
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
          overflow: 'auto',
          mt: { xs: '64px', md: 0 }
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
            height: '100%',
            textAlign: 'center'
          }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Welcome to MCQ Practice
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {window.innerWidth < 960 ? 'Tap the menu icon to select a subject' : 'Select a subject from the sidebar to begin your quiz'}
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
              Back to Subjects
            </Button>
          </Box>
        ) : (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: currentSetData.color }}>
                {currentSetData.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Question {currentQuestion + 1} of {questions.length}
              </Typography>
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
                borderLeft: `4px solid ${currentSetData.color}`
              }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 'medium' }}>
                {questions[currentQuestion].question}
              </Typography>
              
              <RadioGroup
                value={selectedAnswer}
                onChange={handleAnswerSelect}
                disabled={showAnswers}
              >
                {questions[currentQuestion].options.map((option, index) => {
                  const isCorrect = option === questions[currentQuestion].correctAnswer;
                  const isSelected = selectedAnswer === option;
                  
                  return (
                    <FormControlLabel
                      key={index}
                      value={option}
                      control={<Radio sx={{ 
                        color: showAnswers 
                          ? isCorrect 
                            ? '#4CAF50' 
                            : isSelected 
                              ? '#F44336' 
                              : currentSetData.color
                          : currentSetData.color 
                      }} />}
                      label={
                        <Typography variant="body1">
                          {option}
                          {showAnswers && isCorrect && (
                            <span style={{ marginLeft: '8px', color: '#4CAF50' }}>✓ Correct Answer</span>
                          )}
                          {showAnswers && isSelected && !isCorrect && (
                            <span style={{ marginLeft: '8px', color: '#F44336' }}>✗ Your Answer</span>
                          )}
                        </Typography>
                      }
                      sx={{ 
                        mb: 1,
                        p: '8px 12px',
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
            <Grid container spacing={1}>
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
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          backgroundColor: currentSetData?.color || '#3F51B5',
          color: 'white'
        }}>
          Quiz Results
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
                        {index + 1}. {question.question}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#4CAF50',
                          fontWeight: 'bold',
                          mt: 1
                        }}
                      >
                        ✓ Correct: {question.correctAnswer}
                      </Typography>
                      {answers[index] && answers[index] !== question.correctAnswer && (
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: '#F44336',
                            mt: 0.5
                          }}
                        >
                          ✗ Your Answer: {answers[index]}
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
            Choose Another Subject
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MCQApp;