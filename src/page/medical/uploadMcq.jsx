import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  FormControl,
  IconButton,
  CircularProgress,
  Snackbar,
  Alert,
  Tabs,
  Tab,
  TextareaAutosize
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';
import CodeIcon from '@mui/icons-material/Code';

const MCQUploadForm = () => {
  const [formData, setFormData] = useState({
    category: '',
    question: '',
    options: ['', ''],
    correctAnswer: ''
  });
  const [jsonFile, setJsonFile] = useState(null);
  const [jsonText, setJsonText] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...formData.options];
    newOptions[index] = value;
    setFormData(prev => ({
      ...prev,
      options: newOptions
    }));
  };

  const addOption = () => {
    if (formData.options.length < 6) {
      setFormData(prev => ({
        ...prev,
        options: [...prev.options, '']
      }));
    }
  };

  const removeOption = (index) => {
    if (formData.options.length > 2) {
      const newOptions = formData.options.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        options: newOptions,
        correctAnswer: prev.correctAnswer === formData.options[index] ? '' : prev.correctAnswer
      }));
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const jsonData = JSON.parse(event.target.result);
        setJsonFile(jsonData);
        setJsonText(JSON.stringify(jsonData, null, 2));
        if (jsonData.category) {
          setFormData(prev => ({
            ...prev,
            category: jsonData.category
          }));
        }
      } catch (err) {
        setError('Invalid JSON file');
      }
    };
    reader.readAsText(file);
  };

  const handleJsonTextChange = (e) => {
    setJsonText(e.target.value);
    try {
      const jsonData = JSON.parse(e.target.value);
      setJsonFile(jsonData);
      if (jsonData.category) {
        setFormData(prev => ({
          ...prev,
          category: jsonData.category
        }));
      }
    } catch (err) {
      setJsonFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!formData.category) {
        throw new Error('Category is required');
      }

      let mcqData = {};
      
      if (activeTab === 1 && jsonText) {
        // Use JSON from text area
        try {
          mcqData = JSON.parse(jsonText);
          mcqData.category = formData.category; // Ensure category from form is used
        } catch (err) {
          throw new Error('Invalid JSON in text area');
        }
      } else if (activeTab === 2 && jsonFile) {
        // Use uploaded JSON file
        mcqData = {
          ...jsonFile,
          category: formData.category
        };
      } else {
        // Use manual form data
        if (!formData.question.trim()) {
          throw new Error('Question is required');
        }
        if (formData.options.some(opt => !opt.trim())) {
          throw new Error('All options must be filled');
        }
        if (!formData.correctAnswer) {
          throw new Error('Correct answer must be selected');
        }

        mcqData = {
          question: formData.question,
          options: formData.options,
          correctAnswer: formData.correctAnswer,
          category: formData.category
        };
      }

      const response = await fetch('http://localhost:3000/apis/v2/medical/createmcqs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(mcqData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create MCQ');
      }

      const result = await response.json();
      setSuccess(true);
      setFormData({
        category: '',
        question: '',
        options: ['', ''],
        correctAnswer: ''
      });
      setJsonFile(null);
      setJsonText('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSuccess(false);
    setError('');
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
          Create New MCQ
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* Category Input */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Input Method Tabs */}
            <Grid item xs={12}>
              <Tabs value={activeTab} onChange={handleTabChange} centered>
                <Tab label="Manual Input" icon={<AddIcon />} />
                <Tab label="JSON Text" icon={<CodeIcon />} />
                <Tab label="JSON File" icon={<UploadIcon />} />
              </Tabs>
            </Grid>

            {/* Manual Input Tab */}
            {activeTab === 0 && (
              <>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Question"
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    Options
                  </Typography>
                  {formData.options.map((option, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <TextField
                        fullWidth
                        label={`Option ${index + 1}`}
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        required
                      />
                      <IconButton
                        onClick={() => removeOption(index)}
                        color="error"
                        disabled={formData.options.length <= 2}
                        sx={{ ml: 1 }}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <Button
                        variant={formData.correctAnswer === option ? 'contained' : 'outlined'}
                        color={formData.correctAnswer === option ? 'success' : 'primary'}
                        onClick={() => setFormData(prev => ({
                          ...prev,
                          correctAnswer: option
                        }))}
                        sx={{ ml: 1, minWidth: 120 }}
                      >
                        {formData.correctAnswer === option ? 'Correct' : 'Mark Correct'}
                      </Button>
                    </Box>
                  ))}
                  <Button
                    startIcon={<AddIcon />}
                    onClick={addOption}
                    disabled={formData.options.length >= 6}
                    variant="outlined"
                    sx={{ mt: 1 }}
                  >
                    Add Option
                  </Button>
                </Grid>
              </>
            )}

            {/* JSON Text Tab */}
            {activeTab === 1 && (
              <Grid item xs={12}>
                <TextareaAutosize
                  minRows={10}
                  maxRows={15}
                  style={{ 
                    width: '100%', 
                    padding: '8px', 
                    border: '1px solid #ccc', 
                    borderRadius: '4px',
                    fontFamily: 'monospace'
                  }}
                  placeholder={`Paste your JSON here, e.g.:\n{\n  "question": "Sample question?",\n  "options": ["Option 1", "Option 2"],\n  "correctAnswer": "Option 1"\n}`}
                  value={jsonText}
                  onChange={handleJsonTextChange}
                />
              </Grid>
            )}

            {/* JSON File Tab */}
            {activeTab === 2 && (
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  component="label"
                  startIcon={<UploadIcon />}
                  fullWidth
                >
                  Upload JSON File
                  <input
                    type="file"
                    accept=".json"
                    hidden
                    onChange={handleFileUpload}
                  />
                </Button>
                {jsonFile && (
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    File loaded: {Object.keys(jsonFile).length} properties
                  </Typography>
                )}
              </Grid>
            )}

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} /> : null}
              >
                {loading ? 'Creating MCQ...' : 'Create MCQ'}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Success/Error Snackbars */}
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          MCQ created successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default MCQUploadForm;