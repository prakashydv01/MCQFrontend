import React, { useState, useEffect } from 'react';
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
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const questionSets = [
  { id: 'ioe_1_sec_1', name: 'SET 1 ->Section 1', color: '#4CAF50', questionCount: '25' },
    { id: 'ioe_1_sec_2', name: 'SET 1 ->Section 2', color: '#2196F3', questionCount: '25' },
    { id: 'ioe_2_sec_1', name: 'SET 2 ->Section 1', color: '#FF9800', questionCount: '25' },
    { id: 'ioe_2_sec_2', name: 'SET 2 ->Section 2', color: '#9C27B0', questionCount: '25' },
    { id: 'ioe_3_sec_1', name: 'SET 3 ->Section 1', color: '#E91E63', questionCount: '25' },
    { id: 'ioe_3_sec_2', name: 'SET 3 ->Section 2', color: '#673AB7', questionCount: '25' },
    { id: 'ioe_4_sec_1', name: 'SET 4 ->Section 1', color: '#3F51B5', questionCount: '25' },
    { id: 'ioe_4_sec_2', name: 'SET 4 ->Section 2', color: '#009688', questionCount: '25' },
    { id: 'ioe_5_sec_1', name: 'SET 5 ->Section 1', color: '#FF5722', questionCount: '25' },
    { id: 'ioe_5_sec_2', name: 'SET 5 ->Section 2', color: '#795548', questionCount: '25' }
];

const TextWithLatex = ({ text }) => {
  if (!text) return null;
  const parts = text.split(/(\$\$.*?\$\$|\$.*?\$)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          return <BlockMath key={i} math={part.slice(2, -2)} />;
        } else if (part.startsWith('$') && part.endsWith('$')) {
          return <InlineMath key={i} math={part.slice(1, -1)} />;
        } else {
          return <span key={i}>{part}</span>;
        }
      })}
    </>
  );
};

const Pioe = () => {
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
  const [expandedExplanation, setExpandedExplanation] = useState(null);
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
      setExpandedExplanation(null);
      
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
    const answer = event.target.value;
    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);
    setSelectedAnswer(answer);
    
    if (questions[currentQuestion]?.explanation) {
      setExpandedExplanation(currentQuestion);
    }
  };

  const toggleExplanation = (questionIndex) => {
    setExpandedExplanation(expandedExplanation === questionIndex ? null : questionIndex);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(answers[currentQuestion + 1] || '');
      setExpandedExplanation(null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || '');
      setExpandedExplanation(null);
    }
  };

  const handleQuestionSelect = (number) => {
    setCurrentQuestion(number - 1);
    setSelectedAnswer(answers[number - 1] || '');
    setExpandedExplanation(null);
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
    setExpandedExplanation(null);
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
    mt: { xs: '64px', md: 0 }, // Account for app bar height on mobile
    height: { 
      xs: 'calc(100vh - 64px)', // Subtract app bar height on mobile
      md: '100vh' // Full height on desktop
    },
    display: 'flex',
          flexDirection: 'column',
          overflow: 'auto', // Control page scrolling here
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
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textAlign: 'center',
            p: 2,
            '&::-webkit-scrollbar': { // [FIX #4] Custom scrollbar styling
        width: '6px',
      },
          
          }}>
            <>
<Typography variant="h5" sx={{ mb: 4, fontSize: '2rem', fontWeight: 'semibold', color: 'text.primary' }}>
  IOE B.E./B.Arch Entrance MCQ Practice
</Typography>

<Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'justify', maxWidth: '4xl', mb: 2 }}>
  The Institute of Engineering (IOE), a constituent campus of Tribhuvan University, is Nepal's premier institution for engineering and architecture education. Admission to the B.E. and B.Arch programs is highly competitive, requiring students to clear the IOE Entrance Examination. Our MCQ practice platform is designed to help aspiring engineers and architects prepare effectively for this crucial exam.
</Typography>

<Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'justify', maxWidth: '4xl', mb: 2 }}>
  The entrance exam primarily covers three core subjects: Physics, Chemistry, and Mathematics. Each subject carries significant weightage, making thorough preparation essential. Our platform provides:
</Typography>

<Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'justify', maxWidth: '4xl', mb: 2 }}>
  • <strong>Physics Practice Sets:</strong> Covering mechanics, optics, electricity, and modern physics
  <br />
  • <strong>Chemistry Practice Sets:</strong> Including physical, inorganic, and organic chemistry
  <br />
  • <strong>Mathematics Practice Sets:</strong> Focused on calculus, algebra, and trigonometry
</Typography>

<Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'justify', maxWidth: '4xl', mb: 2 }}>
  Each question set follows the exact pattern of the actual IOE entrance exam, with multiple-choice questions and time-bound practice tests. Our intelligent feedback system highlights correct answers immediately and provides detailed explanations for each question, helping students learn effectively.
</Typography>

<Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'justify', maxWidth: '4xl', mb: 2 }}>
  The platform features:
  <br />
  • <strong>Progress Tracking:</strong> Visual indicators show your improvement over time
  <br />
  • <strong>Performance Analytics:</strong> Detailed breakdowns of strengths and weaknesses
  <br />
  • <strong>Mobile-Friendly Design:</strong> Practice anytime, anywhere
</Typography>

<Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'justify', maxWidth: '4xl', mb: 2 }}>
  Regular practice with our question bank can significantly improve your speed and accuracy—two crucial factors for success in the IOE entrance examination. We recommend starting with subject-specific practice before attempting full-length mock tests.
</Typography>

<Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'justify', maxWidth: '4xl' }}>
  Select a subject from the sidebar to begin your preparation journey. Consistent practice with our platform will give you the confidence and competence needed to ace the IOE B.E./B.Arch entrance exam.
</Typography>

</>
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
            {/* Main question container with natural expansion */}
            <Box sx={{ 
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 3
            }}>
              <Paper elevation={3} sx={{ 
                p: 3, 
                mb: 2,
                borderLeft: `4px solid ${currentSetData.color}`,
                display: 'flex',
                flexDirection: 'column',
                flex: 1
              }}>
                {/* Question header */}
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

                {/* Question text with automatic sizing */}
                <Typography variant="h6" sx={{ 
                  fontWeight: 'medium', 
                  wordBreak: 'break-word',
                  mb: 3
                }}>
                  <TextWithLatex text={questions[currentQuestion]?.question} />
                </Typography>
                
                {/* Options container - now expands naturally */}
                <Box sx={{ flex: 1 }}>
                 <RadioGroup
                                value={selectedAnswer}
                                onChange={handleAnswerSelect}
                                disabled={showAnswers}
                                sx={{ gap: 0 }} // Reduced gap between options
                              >
                                {questions[currentQuestion]?.options?.map((option, index) => {
                                  const isCorrect = option === questions[currentQuestion]?.correctAnswer;
                                  const isSelected = selectedAnswer === option;
                                  
                                  return (
                                    // CHANGED: Wrapped in flex container for side-by-side layout
                                    <Box key={index} sx={{ 
                                      display: 'flex', 
                                      alignItems: 'center', 
                                      gap: 1,
                                      width: '100%'
                                    }}>
                                      {/* Option label (unchanged except for flex adjustments) */}
                                      <FormControlLabel
                                        value={option}
                                        control={<Radio sx={{ 
                                          color: showAnswers 
                                            ? isCorrect 
                                              ? '#4CAF50' 
                                              : isSelected 
                                                ? '#F44336' 
                                                : currentSetData.color
                                            : currentSetData.color,
                                          padding: '4px 9px'
                                        }} />}
                                        label={
                                          <Typography variant="body1" sx={{ wordBreak: 'break-word' }}>
                                            <TextWithLatex text={option} />
                                          </Typography>
                                        }
                                        sx={{ 
                                          flex: 1, // ADDED: Allows feedback to appear on same line
                                          p: '4px 8px',
                                          m: 0,
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
                                          },
                                          '& .MuiButtonBase-root': {
                                            padding: '6px'
                                          }
                                        }}
                                      />
                                      
                                      {/* NEW: Parallel feedback indicators */}
                                      {selectedAnswer && (
                                        <Box sx={{ 
                                          minWidth: 100, // Fixed width for alignment
                                          display: 'flex', 
                                          justifyContent: 'flex-center',
                                          pr: 1 // Right padding
                                        }}>
                                          {/* Show green "Correct" tag for right answer */}
                                          {isCorrect && (
                                            <Chip 
                                              label="Correct" 
                                              size="small" 
                                              sx={{ 
                                                bgcolor: '#4CAF50',
                                                color: 'white',
                                                fontSize: '0.75rem'
                                              }} 
                                            />
                                          )}
                                          
                                          {/* Show red "Your Answer" tag for wrong selection */}
                                          {isSelected && !isCorrect && (
                                            <Chip 
                                              label="Wrong Answer" 
                                              size="small" 
                                              sx={{ 
                                                bgcolor: '#F44336',
                                                color: 'white',
                                                fontSize: '0.75rem'
                                              }} 
                                            />
                                          )}
                                        </Box>
                                      )}
                                    </Box>
                                  );
                                })}
                              </RadioGroup>
                </Box>

                {/* Explanation section */}
                {questions[currentQuestion]?.explanation && (
                  <Box sx={{ mt: 3 }}>
                    <Button
                      onClick={() => toggleExplanation(currentQuestion)}
                      sx={{
                        color: currentSetData.color,
                        textTransform: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        padding: '4px 8px'
                      }}
                    >
                      {expandedExplanation === currentQuestion ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                      {expandedExplanation === currentQuestion ? 'Hide Explanation' : 'Show Explanation'}
                    </Button>
                    
                    <Collapse in={expandedExplanation === currentQuestion}>
                      <Paper 
                        elevation={0} 
                        sx={{ 
                          p: 2, 
                          mt: 1,
                          bgcolor: '#f5f5f5',
                          borderRadius: 1
                        }}
                      >
                        <Typography variant="body1" sx={{ wordBreak: 'break-word' }}>
                          <TextWithLatex text={questions[currentQuestion].explanation} />
                        </Typography>
                      </Paper>
                    </Collapse>
                  </Box>
                )}
              </Paper>
            </Box>

            {/* Fixed navigation buttons at bottom */}
            <Box sx={{ 
              backgroundColor: 'background.paper',
              pt: 2,
              pb: 2,
              borderTop: '1px solid #eee'
            }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                mb: 2,
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

              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'medium' }}>
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
            </Box>
          </>
        )}
      </Box>

      {/* Results dialog */}
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
                      <Typography variant="subtitle1" sx={{ fontWeight: 'medium', wordBreak: 'break-word' }}>
                        {index + 1}. <TextWithLatex text={question.question} />
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          color: '#4CAF50',
                          fontWeight: 'bold',
                          mt: 1,
                          wordBreak: 'break-word'
                        }}
                      >
                        ✓ Correct: <TextWithLatex text={question.correctAnswer} />
                      </Typography>
                      {answers[index] && answers[index] !== question.correctAnswer && (
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            color: '#F44336',
                            mt: 0.5,
                            wordBreak: 'break-word'
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
                      {question.explanation && (
                        <Box sx={{ mt: 2 }}>
                          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                            Explanation:
                          </Typography>
                          <Typography variant="body2" sx={{ wordBreak: 'break-word' }}>
                            <TextWithLatex text={question.explanation} />
                          </Typography>
                        </Box>
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

export default Pioe;