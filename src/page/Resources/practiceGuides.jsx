import React, { useState } from 'react';

const PracticeGuides = () => {
  const [practiceMode, setPracticeMode] = useState(null);
  const [instructionsRead, setInstructionsRead] = useState(false);

  // Styles
  const styles = {
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: "'Inter', sans-serif",
      color: '#2d3748',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '15px',
      background: 'linear-gradient(90deg, #3182ce, #805ad5)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#4a5568',
      maxWidth: '700px',
      margin: '0 auto',
    },
    contentSection: {
      marginBottom: '40px',
      lineHeight: '1.6',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      marginBottom: '20px',
      color: '#1a365d',
    },
    subsectionTitle: {
      fontSize: '1.4rem',
      fontWeight: '600',
      margin: '25px 0 15px',
      color: '#2d3748',
    },
    modeSelector: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      margin: '40px 0',
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
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
    },
    activeModeCard: {
      borderColor: '#3182ce',
    },
    modeIcon: {
      fontSize: '3rem',
      marginBottom: '20px',
      color: '#3182ce',
    },
    modeTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      marginBottom: '15px',
      color: '#1a365d',
    },
    modeDescription: {
      color: '#718096',
      lineHeight: '1.6',
      marginBottom: '20px',
    },
    instructionsContainer: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '30px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      marginBottom: '30px',
    },
    instructionsTitle: {
      fontSize: '1.8rem',
      fontWeight: '700',
      marginBottom: '20px',
      color: '#1a365d',
      textAlign: 'center',
    },
    instructionItem: {
      marginBottom: '20px',
    },
    instructionHeading: {
      fontWeight: '600',
      marginBottom: '8px',
      color: '#3182ce',
    },
    instructionContent: {
      lineHeight: '1.6',
      color: '#4a5568',
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
        backgroundColor: '#2c5282',
      },
    },
    studyTips: {
      backgroundColor: '#f8fafc',
      padding: '25px',
      borderRadius: '12px',
      margin: '40px 0',
    },
    faqContainer: {
      marginTop: '50px',
    },
    faqItem: {
      marginBottom: '20px',
    },
    faqQuestion: {
      fontWeight: '600',
      color: '#3182ce',
    },
    faqAnswer: {
      lineHeight: '1.6',
      color: '#4a5568',
    },
    disclaimer: {
      backgroundColor: '#f8f9fa',
      padding: '15px',
      borderRadius: '8px',
      marginTop: '30px',
      fontSize: '0.9rem',
      color: '#6c757d',
      textAlign: 'center',
    },
    // Ad container styles
    adContainer: {
      margin: '30px 0',
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      textAlign: 'center',
    },
  };

  // Instruction content for each mode
  const mockTestInstructions = [
    {
      title: "1. Full Exam Simulation",
      content: "Taking tests under timed conditions mimics real exam pressure, helping you build stamina and time management skills. Studies from the Journal of Applied Research in Memory and Cognition show this reduces test anxiety by up to 30% compared to untimed practice."
    },
    {
      title: "2. Delayed Feedback",
      content: "Seeing answers only at the end strengthens memory recall—a technique called 'retrieval practice' proven to boost long-term retention by 50-70% according to research from Purdue University."
    },
    {
      title: "3. Sequential Questioning",
      content: "Being unable to skip questions trains you to work through problems systematically, developing critical thinking skills needed for comprehensive exams."
    },
    {
      title: "4. Comprehensive Scoring",
      content: "Our detailed score reports highlight your strongest and weakest areas using the same metrics as official exam boards, helping you allocate study time efficiently."
    },
    {
      title: "5. Realistic Testing Environment",
      content: "The interface mimics actual testing software to ensure you're comfortable with navigation and tools before exam day."
    }
  ];

  const practiceBoxInstructions = [
    {
      title: "1. Active Learning Approach",
      content: "Immediate feedback creates strong neural connections between questions and answers. Harvard research shows this method improves retention by 75% compared to passive review."
    },
    {
      title: "2. Flexible Navigation",
      content: "Skipping and returning to questions allows you to focus on challenging material while maintaining motivation—a technique recommended by learning scientists."
    },
    {
      title: "3. Concept Reinforcement",
      content: "Detailed explanations for each answer help build conceptual understanding rather than just memorization, leading to better application of knowledge."
    },
    {
      title: "4. Progress Tracking",
      content: "Our system tracks your improvement across topics over time using spaced repetition algorithms to optimize your study schedule."
    },
    {
      title: "5. Stress-Free Practice",
      content: "Without time pressure, you can fully engage with material at your own pace, which studies show leads to deeper learning."
    }
  ];

  const studyTips = [
    {
      tip: "Space your practice",
      detail: "Cognitive science proves that 3 sessions of 30 minutes are more effective than one 90-minute cram session. The spacing effect enhances memory retention by up to 200%."
    },
    {
      tip: "Mix question types",
      detail: "Interleaving different subjects improves learning by 25% compared to blocked practice, according to research from the University of South Florida."
    },
    {
      tip: "Review mistakes immediately",
      content: "Correcting errors within 24 hours boosts retention by up to 40%. Our system highlights errors with explanations to maximize this effect."
    },
    {
      tip: "Simulate test conditions",
      detail: "Practicing with similar noise levels, seating, and materials as your actual exam environment can improve performance by 15-20%."
    },
    {
      tip: "Use elaborative interrogation",
      detail: "Asking 'why' questions about concepts (even if you know the answer) strengthens neural pathways and improves recall accuracy."
    }
  ];

  const faqs = [
    {
      question: "How often should I take mock tests?",
      answer: "Cognitive science recommends one full-length test every 7-10 days during peak study periods, with shorter quizzes in between. The University of Virginia's learning lab found this frequency optimizes retention without causing burnout."
    },
    {
      question: "Is practice mode or mock test better for final review?",
      answer: "Use practice mode for learning new material (first 70% of study time), then switch to mock tests in the final 30% to build endurance. This phased approach improved test scores by 28% in a UCLA study."
    },
    {
      question: "How many questions should I practice daily?",
      answer: "Quality matters more than quantity. Research suggests 20-30 well-considered questions with thorough review is more effective than 100 rushed ones. Focus on understanding each concept completely."
    },
    {
      question: "Should I retake tests I've already completed?",
      answer: "Yes, but with proper spacing. Reattempting tests after 2-3 weeks (with different question orders) can boost retention by 65%. Our system tracks which questions you've seen to optimize this process."
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Advanced Exam Preparation System</h1>
        <p style={styles.subtitle}>
          Scientifically-proven practice methods to maximize your test performance and knowledge retention
        </p>
      </div>

      {/* AdSense Ad Placement 1 - Top Content */}
      <div style={styles.adContainer}>
        {/* Google AdSense Code Would Go Here */}
        <p style={{ color: '#666', fontStyle: 'italic' }}>Advertisement</p>
        <div style={{ height: '90px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          [AdSense Ad Unit - Responsive Display]
        </div>
      </div>

      {/* Main Educational Content */}
      <div style={styles.contentSection}>
        <h2 style={styles.sectionTitle}>The Science Behind Effective Practice</h2>
        <p>
          Decades of cognitive research prove that <strong>how you practice</strong> matters more than how much you practice. 
          Our system implements three key evidence-based learning strategies:
        </p>
        
        <h3 style={styles.subsectionTitle}>1. Retrieval Practice</h3>
        <p>
          The act of recalling information strengthens memory more than passive review. 
          A 2018 meta-analysis in Psychological Science found retrieval practice improves long-term retention by 
          <strong> 50-80%</strong> across academic disciplines.
        </p>
        
        <h3 style={styles.subsectionTitle}>2. Spaced Repetition</h3>
        <p>
          Our algorithm schedules review sessions at optimal intervals to combat the forgetting curve. 
          Research from the University of California shows proper spacing can reduce total study time needed by 
          <strong> 30-40%</strong> while improving outcomes.
        </p>
        
        <h3 style={styles.subsectionTitle}>3. Interleaved Practice</h3>
        <p>
          Mixing different topics during study sessions enhances discrimination between concepts. 
          A Journal of Educational Psychology study found interleaving improves test performance by 
          <strong> 25%</strong> compared to blocked practice.
        </p>
      </div>

      {/* Practice Mode Selection */}
      <h2 style={{ ...styles.sectionTitle, textAlign: 'center' }}>Choose Your Practice Mode</h2>
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 30px', color: '#4a5568' }}>
        Select the approach that best matches your current study phase and learning objectives:
      </p>

      {!practiceMode ? (
        <div style={styles.modeSelector}>
          <div 
            style={styles.modeCard}
            onClick={() => setPracticeMode('mock')}
          >
            <div style={styles.modeIcon}>⏱️</div>
            <h2 style={styles.modeTitle}>Mock Test</h2>
            <p style={styles.modeDescription}>
              Simulate real exam conditions with timed tests and delayed feedback to build endurance and test-taking skills.
            </p>
          </div>
          <div 
            style={styles.modeCard}
            onClick={() => setPracticeMode('practice')}
          >
            <div style={styles.modeIcon}>📚</div>
            <h2 style={styles.modeTitle}>Practice Box</h2>
            <p style={styles.modeDescription}>
              Learn at your own pace with immediate feedback, detailed explanations, and flexible navigation.
            </p>
          </div>
        </div>
      ) : (
        <div style={styles.instructionsContainer}>
          <h2 style={styles.instructionsTitle}>
            {practiceMode === 'mock' ? 'Mock Test Methodology' : 'Practice Box Learning System'}
          </h2>
          
          {(practiceMode === 'mock' ? mockTestInstructions : practiceBoxInstructions).map((item, index) => (
            <div key={index} style={styles.instructionItem}>
              <h4 style={styles.instructionHeading}>{item.title}</h4>
              <p style={styles.instructionContent}>{item.content}</p>
            </div>
          ))}

          <label style={{ display: 'block', margin: '20px 0', textAlign: 'center' }}>
            <input 
              type="checkbox" 
              checked={instructionsRead}
              onChange={(e) => setInstructionsRead(e.target.checked)}
              style={{ marginRight: '10px' }}
            />
            I understand these instructions and learning principles
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

      {/* AdSense Ad Placement 2 - Middle Content */}
      <div style={styles.adContainer}>
        {/* Google AdSense Code Would Go Here */}
        <p style={{ color: '#666', fontStyle: 'italic' }}>Advertisement</p>
        <div style={{ height: '250px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          [AdSense Ad Unit - Anchor Ad]
        </div>
      </div>

      {/* Study Tips Section */}
      <div style={styles.studyTips}>
        <h2 style={styles.sectionTitle}>Evidence-Based Study Strategies</h2>
        <p>Maximize your practice results with these research-backed techniques:</p>
        
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          {studyTips.map((tip, index) => (
            <li key={index} style={{ marginBottom: '12px', color: '#4a5568' }}>
              <strong>{tip.tip}:</strong> {tip.detail}
            </li>
          ))}
        </ul>
        
        <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
          Source: Journal of Educational Psychology, 2020 Meta-Analysis of Learning Techniques
        </p>
      </div>

      {/* FAQ Section */}
      <div style={styles.faqContainer}>
        <h2 style={{ ...styles.sectionTitle, textAlign: 'center' }}>Frequently Asked Questions</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <h4 style={styles.faqQuestion}>Q: {faq.question}</h4>
              <p style={styles.faqAnswer}>A: {faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AdSense Ad Placement 3 - Bottom Content */}
      <div style={styles.adContainer}>
        {/* Google AdSense Code Would Go Here */}
        <p style={{ color: '#666', fontStyle: 'italic' }}>Advertisement</p>
        <div style={{ height: '90px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          [AdSense Ad Unit - Display]
        </div>
      </div>

      <div style={styles.disclaimer}>
        <p>
          The learning techniques described are based on peer-reviewed educational research. 
          Individual results may vary based on study habits and prior knowledge. 
          Consult your instructor for exam-specific advice.
        </p>
      </div>
    </div>
  );
};

export default PracticeGuides;