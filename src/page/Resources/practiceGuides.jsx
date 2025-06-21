import React, { useState } from 'react';

const PracticeGuides = () => {
  // State for practice mode
  const [practiceMode, setPracticeMode] = useState(null); // null, 'mock', or 'practice'
  const [instructionsRead, setInstructionsRead] = useState(false);

  // Styles
  const styles = {
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: "'Inter', sans-serif",
      color: '#2d3748',
      '@media (max-width: 768px)': {
        padding: '15px'
      }
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
      '@media (max-width: 768px)': {
        marginBottom: '30px'
      }
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '15px',
      background: 'linear-gradient(90deg, #3182ce, #805ad5)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      '@media (max-width: 768px)': {
        fontSize: '2rem'
      }
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#4a5568',
      maxWidth: '700px',
      margin: '0 auto',
      '@media (max-width: 768px)': {
        fontSize: '1rem'
      }
    },
    modeSelector: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '40px',
      '@media (max-width: 768px)': {
        flexDirection: 'column',
        gap: '15px'
      }
    },
    modeCard: {
      width: '300px',
      padding: '30px',
      borderRadius: '12px',
      backgroundColor: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      transition: 'transform 0.3s, box-shadow 0.3s',
      textAlign: 'center',
      border: '3px solid transparent',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      },
      '@media (max-width: 768px)': {
        width: '100%',
        padding: '25px'
      }
    },
    activeModeCard: {
      borderColor: '#3182ce'
    },
    modeIcon: {
      fontSize: '3rem',
      marginBottom: '20px',
      color: '#3182ce',
      '@media (max-width: 768px)': {
        fontSize: '2.5rem'
      }
    },
    modeTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '15px',
      color: '#1a365d',
      '@media (max-width: 768px)': {
        fontSize: '1.3rem'
      }
    },
    modeDescription: {
      color: '#718096',
      lineHeight: '1.6',
      marginBottom: '20px'
    },
    instructionsContainer: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '30px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      marginBottom: '30px',
      '@media (max-width: 768px)': {
        padding: '20px'
      }
    },
    instructionsTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      marginBottom: '20px',
      color: '#1a365d',
      textAlign: 'center',
      '@media (max-width: 768px)': {
        fontSize: '1.5rem'
      }
    },
    instructionsList: {
      paddingLeft: '20px'
    },
    instructionItem: {
      marginBottom: '15px',
      lineHeight: '1.6',
      color: '#4a5568'
    },
    startButton: {
      display: 'block',
      width: '200px',
      margin: '30px auto 0',
      padding: '12px 20px',
      backgroundColor: '#3182ce',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
      ':hover': {
        backgroundColor: '#2c5282'
      },
      '@media (max-width: 768px)': {
        width: '100%'
      }
    },
    disclaimer: {
      backgroundColor: '#f8f9fa',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '30px',
      fontSize: '0.9rem',
      color: '#6c757d',
      textAlign: 'center'
    }
  };

  // Helper function to apply responsive styles
  const getStyles = (styleName, isActive = false) => {
    const baseStyle = styles[styleName] || {};
    const mobileStyle = styles[styleName]?.['@media (max-width: 768px)'] || {};
    const activeStyle = isActive ? styles.activeModeCard || {} : {};
    
    return { ...baseStyle, ...mobileStyle, ...activeStyle };
  };

  // Instruction content for each mode
  const mockTestInstructions = [
    'Complete the test in one sitting (timed environment)',
    'Answers will only be shown after completing all questions',
    'You will see your score and correct answers at the end',
    'Timer will be shown during the test',
    'Cannot skip questions or go back to previous ones'
  ];

  const practiceBoxInstructions = [
    'Practice at your own pace with instant feedback',
    'Correct answers are shown immediately after answering',
    'You can skip questions and come back to them later',
    'Detailed results shown at the end of your session',
    'No time pressure - focus on learning'
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Practice Guides</h1>
        <p style={styles.subtitle}>
          Choose your practice mode to prepare effectively for your exams
        </p>
      </div>

      {!practiceMode ? (
        <div style={styles.modeSelector}>
          <div 
            style={getStyles('modeCard')}
            onClick={() => setPracticeMode('mock')}
          >
            <div style={styles.modeIcon}>⏱️</div>
            <h2 style={styles.modeTitle}>Mock Test</h2>
            <p style={styles.modeDescription}>
              Simulate real exam conditions with timed tests and comprehensive results at the end.
            </p>
          </div>
          <div 
            style={getStyles('modeCard')}
            onClick={() => setPracticeMode('practice')}
          >
            <div style={styles.modeIcon}>📚</div>
            <h2 style={styles.modeTitle}>Practice Box</h2>
            <p style={styles.modeDescription}>
              Learn at your own pace with instant feedback and explanations for each question.
            </p>
          </div>
        </div>
      ) : (
        <div style={styles.instructionsContainer}>
          <h2 style={styles.instructionsTitle}>
            {practiceMode === 'mock' ? 'Mock Test Instructions' : 'Practice Box Instructions'}
          </h2>
          
          <ul style={styles.instructionsList}>
            {(practiceMode === 'mock' ? mockTestInstructions : practiceBoxInstructions).map((item, index) => (
              <li key={index} style={styles.instructionItem}>
                {item}
              </li>
            ))}
          </ul>

          <label style={{ display: 'block', margin: '20px 0', textAlign: 'center' }}>
            <input 
              type="checkbox" 
              checked={instructionsRead}
              onChange={(e) => setInstructionsRead(e.target.checked)}
              style={{ marginRight: '10px' }}
            />
            I understand these instructions
          </label>

          <button 
            style={styles.startButton}
            disabled={!instructionsRead}
            onClick={() => {
              // Here you would navigate to the actual practice component
              console.log(`Starting ${practiceMode} mode`);
              // For this example, we'll just reset the state
              setPracticeMode(null);
              setInstructionsRead(false);
            }}
          >
            Start {practiceMode === 'mock' ? 'Mock Test' : 'Practice'}
          </button>
        </div>
      )}

      <div style={styles.disclaimer}>
        <p>Choose the mode that best fits your current study needs. You can switch modes anytime.</p>
      </div>
    </div>
  );
};

export default PracticeGuides;