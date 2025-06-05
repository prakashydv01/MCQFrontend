import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  CircularProgress,
  Snackbar,
  Alert,
  Tabs,
  Tab,
  TextareaAutosize
} from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import CodeIcon from '@mui/icons-material/Code';

const MCQUploadForm = () => {
  const [jsonText, setJsonText] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [globalCategory, setGlobalCategory] = useState('');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setError('');
  };

  const validateQuestions = (questions) => {
    if (!Array.isArray(questions)) {
      throw new Error('Input must be an array of question objects');
    }

    questions.forEach((q, index) => {
      if (!q.question || typeof q.question !== 'string') {
        throw new Error(`Question ${index + 1}: Missing or invalid question text`);
      }
      if (!Array.isArray(q.options) || q.options.length !== 4) {
        throw new Error(`Question ${index + 1}: Exactly 4 options required`);
      }
      if (!q.correctAnswer || !q.options.includes(q.correctAnswer)) {
        throw new Error(`Question ${index + 1}: Correct answer must match one of the options`);
      }
      // Category validation removed since we'll override it
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const jsonData = JSON.parse(event.target.result);
        validateQuestions(jsonData);
        setJsonText(JSON.stringify(jsonData, null, 2));
        // Auto-set category from first question if exists
        if (jsonData[0]?.category && !globalCategory) {
          setGlobalCategory(jsonData[0].category);
        }
      } catch (err) {
        setError(`Invalid JSON file: ${err.message}`);
      }
    };
    reader.readAsText(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!jsonText.trim()) throw new Error('JSON input is empty');
      if (!globalCategory.trim()) throw new Error('Global category is required');
      
      const questions = JSON.parse(jsonText);
      validateQuestions(questions);

      // Override all categories with the global value
      const normalizedQuestions = questions.map(q => ({
        ...q,
        category: globalCategory
      }));

      const response = await fetch('http://localhost:9000/apis/v2/medical/createmcqs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category: globalCategory,
          questions: normalizedQuestions
        }),
      });

      if (!response.ok) throw new Error('Failed to upload questions');
      
      setSuccess(true);
      setJsonText('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Bulk Upload MCQs (Single Category)
        </Typography>

        {/* Global Category Input */}
        <TextField
          fullWidth
          label="Category for ALL questions"
          value={globalCategory}
          onChange={(e) => setGlobalCategory(e.target.value)}
          required
          sx={{ mb: 3 }}
        />

        <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
          <Tab label="Paste JSON" icon={<CodeIcon />} />
          <Tab label="Upload JSON File" icon={<UploadIcon />} />
        </Tabs>

        {activeTab === 0 && (
          <TextareaAutosize
            minRows={15}
            style={{ 
              width: '100%', 
              padding: '8px',
              fontFamily: 'monospace',
              marginBottom: '16px'
            }}
            placeholder={`Paste your questions array (category will be overridden):\n[\n  {\n    "question": "What is 2+2?",\n    "options": ["3", "4", "5", "6"],\n    "correctAnswer": "4"\n  },\n  {\n    "question": "Capital of France?",\n    "options": ["London", "Paris", "Berlin", "Madrid"],\n    "correctAnswer": "Paris"\n  }\n]`}
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
          />
        )}

        {activeTab === 1 && (
          <Button
            variant="outlined"
            component="label"
            fullWidth
            sx={{ mb: 3 }}
            startIcon={<UploadIcon />}
          >
            Upload JSON File
            <input
              type="file"
              accept=".json"
              hidden
              onChange={handleFileUpload}
            />
          </Button>
        )}

        <Button
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          onClick={handleSubmit}
          disabled={loading || !jsonText.trim() || !globalCategory.trim()}
        >
          {loading ? <CircularProgress size={24} /> : 'Upload Questions'}
        </Button>
      </Paper>

      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
        <Alert severity="success">Questions uploaded successfully!</Alert>
      </Snackbar>

      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError('')}>
        <Alert severity="error">{error}</Alert>
      </Snackbar>
    </Box>
  );
};

export default MCQUploadForm;