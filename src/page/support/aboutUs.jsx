import { useState } from 'react';

const AboutPage = () => {
  // Single operator data
  const operator = {
    name: 'Prakash Yadav', // Replace with your name
    role: 'Founder & Developer',
    bio: 'I created Hamro Exam to provide high-quality MCQ practice for students and professionals. With a passion for education technology, I built this platform to make test preparation accessible and effective for everyone.',
    image: 'https://res.cloudinary.com/backendsrc/image/upload/v1750821073/WhatsApp_Image_2025-06-15_at_10.21.29_PM_pv13na.jpg', // Replace with your photo
    funFact: 'Believes in the power of education to transform lives'
  };

  // Inline CSS with enhanced mobile responsiveness
  const styles = {
    aboutContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#2d3748',
      '@media (max-width: 768px)': {
        padding: '20px 15px'
      }
    },
    heroSection: {
      textAlign: 'center',
      marginBottom: '60px',
      padding: '40px 20px',
      background: 'linear-gradient(135deg, #f7fafc 0%, #ebf8ff 100%)',
      borderRadius: '16px',
      position: 'relative',
      overflow: 'hidden',
      '@media (max-width: 768px)': {
        padding: '30px 15px',
        marginBottom: '40px'
      }
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: '800',
      marginBottom: '20px',
      background: 'linear-gradient(90deg, #3182ce, #805ad5)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      position: 'relative',
      zIndex: '2',
      '@media (max-width: 768px)': {
        fontSize: '2.2rem'
      }
    },
    heroSubtitle: {
      fontSize: '1.1rem',
      color: '#4a5568',
      maxWidth: '700px',
      margin: '0 auto 30px',
      lineHeight: '1.6',
      position: 'relative',
      zIndex: '2',
      '@media (max-width: 768px)': {
        fontSize: '1rem'
      }
    },
    sectionTitle: {
      fontSize: '2.2rem',
      fontWeight: '700',
      marginBottom: '40px',
      color: '#1a365d',
      textAlign: 'center',
      position: 'relative',
      '@media (max-width: 768px)': {
        fontSize: '1.8rem',
        marginBottom: '30px'
      }
    },
    sectionTitleDecoration: {
      content: '""',
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #3182ce, #805ad5)',
      borderRadius: '2px'
    },
    ourStory: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      marginBottom: '80px',
      alignItems: 'center',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '30px',
        marginBottom: '60px'
      }
    },
    storyImage: {
      borderRadius: '12px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      overflow: 'hidden',
      height: '400px',
      background: 'linear-gradient(45deg, #ebf8ff, #bee3f8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '@media (max-width: 768px)': {
        height: '300px',
        order: '-1'
      }
    },
    storyContent: {
      padding: '0 20px',
      '@media (max-width: 768px)': {
        padding: '0'
      }
    },
    valuesSection: {
      marginBottom: '80px',
      '@media (max-width: 768px)': {
        marginBottom: '60px'
      }
    },
    valuesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        gap: '20px'
      }
    },
    valueCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '30px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      },
      '@media (max-width: 768px)': {
        padding: '25px'
      }
    },
    valueIcon: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      color: '#3182ce',
      '@media (max-width: 768px)': {
        fontSize: '2rem',
        marginBottom: '15px'
      }
    },
    valueTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '15px',
      color: '#2d3748',
      '@media (max-width: 768px)': {
        fontSize: '1.1rem',
        marginBottom: '10px'
      }
    },
    valueDescription: {
      color: '#718096',
      lineHeight: '1.6',
      '@media (max-width: 768px)': {
        fontSize: '0.95rem'
      }
    },
    memberDetailCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '30px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: '30px',
      alignItems: 'center',
      maxWidth: '800px',
      margin: '0 auto',
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
        textAlign: 'center',
        padding: '25px',
        gap: '20px'
      }
    },
    memberDetailImage: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      objectFit: 'cover',
      margin: '0 auto',
      border: '5px solid #ebf8ff',
      '@media (max-width: 768px)': {
        width: '150px',
        height: '150px'
      }
    },
    memberDetailContent: {
      padding: '0 20px',
      '@media (max-width: 768px)': {
        padding: '0'
      }
    },
    memberDetailName: {
      fontSize: '1.8rem',
      fontWeight: '700',
      marginBottom: '10px',
      color: '#1a365d',
      '@media (max-width: 768px)': {
        fontSize: '1.5rem'
      }
    },
    memberDetailRole: {
      fontSize: '1.1rem',
      color: '#718096',
      marginBottom: '20px',
      '@media (max-width: 768px)': {
        fontSize: '1rem',
        marginBottom: '15px'
      }
    },
    memberDetailBio: {
      color: '#4a5568',
      lineHeight: '1.8',
      marginBottom: '25px',
      '@media (max-width: 768px)': {
        fontSize: '0.95rem',
        marginBottom: '20px'
      }
    },
    funFact: {
      backgroundColor: '#ebf8ff',
      padding: '12px 15px',
      borderRadius: '8px',
      color: '#3182ce',
      fontWeight: '500',
      fontSize: '0.95rem',
      '@media (max-width: 768px)': {
        fontSize: '0.9rem'
      }
    },
    statsSection: {
      background: 'linear-gradient(135deg, #f7fafc 0%, #ebf8ff 100%)',
      padding: '50px 20px',
      borderRadius: '16px',
      marginBottom: '80px',
      '@media (max-width: 768px)': {
        padding: '40px 15px',
        marginBottom: '60px'
      }
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
      textAlign: 'center',
      '@media (max-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px'
      }
    },
    statItem: {
      padding: '20px',
      '@media (max-width: 768px)': {
        padding: '15px'
      }
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#3182ce',
      marginBottom: '10px',
      '@media (max-width: 768px)': {
        fontSize: '2rem'
      }
    },
    statLabel: {
      fontSize: '1rem',
      color: '#718096',
      fontWeight: '500',
      '@media (max-width: 768px)': {
        fontSize: '0.9rem'
      }
    },
    adDisclaimer: {
      backgroundColor: '#f8f9fa',
      padding: '15px',
      borderRadius: '8px',
      margin: '30px 0',
      fontSize: '0.9rem',
      color: '#6c757d',
      textAlign: 'center',
      borderLeft: '4px solid #3182ce'
    }
  };

  // Helper function to apply responsive styles
  const getStyles = (styleName) => {
    const baseStyle = styles[styleName] || {};
    const mobileStyle = styles[styleName]?.['@media (max-width: 768px)'] || {};
    
    return { ...baseStyle, ...mobileStyle };
  };

  return (
    <div style={styles.aboutContainer}>
      {/* Hero Section */}
      <section style={getStyles('heroSection')}>
        <h1 style={getStyles('heroTitle')}>About Hamro Exam</h1>
        <p style={getStyles('heroSubtitle')}>
          Hamro Exam is a dedicated MCQ practice platform designed to help students and professionals prepare for exams effectively. Our mission is to make quality test preparation accessible to everyone.
        </p>
        <div style={{ fontSize: '6rem', opacity: '0.1', position: 'absolute', right: '50px', top: '50px', '@media (max-width: 768px)': { fontSize: '4rem', right: '20px', top: '30px' } }}>❝</div>
      </section>

      {/* Our Story Section */}
      <section style={getStyles('ourStory')}>
        <div style={getStyles('storyImage')}>
          <img 
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
            alt="Education and learning" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        <div style={getStyles('storyContent')}>
          <h2 style={{ ...getStyles('sectionTitle') }}>
            Our Mission
            <span style={styles.sectionTitleDecoration}></span>
          </h2>
          <p style={{ color: '#4a5568', lineHeight: '1.8', marginBottom: '20px', ...getStyles('valueDescription') }}>
            Hamro Exam was created to provide high-quality, accessible test preparation materials for students and professionals. We believe that practice makes perfect, and our platform is designed to help users gain confidence through repeated MCQ practice.
          </p>
          <p style={{ color: '#4a5568', lineHeight: '1.8', marginBottom: '20px', ...getStyles('valueDescription') }}>
            What started as a personal project to help friends prepare for exams has grown into a platform serving thousands of users. Our focus remains on delivering relevant, up-to-date content that actually helps with exam preparation.
          </p>
          <p style={{ color: '#4a5568', lineHeight: '1.8', ...getStyles('valueDescription') }}>
            We're committed to continuous improvement, regularly adding new question sets and features based on user feedback and the latest exam patterns.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section style={getStyles('valuesSection')}>
        <h2 style={{ ...getStyles('sectionTitle') }}>
          Our Principles
          <span style={styles.sectionTitleDecoration}></span>
        </h2>
        <div style={getStyles('valuesGrid')}>
          <div style={getStyles('valueCard')}>
            <div style={getStyles('valueIcon')}>🎯</div>
            <h3 style={getStyles('valueTitle')}>Quality Content</h3>
            <p style={getStyles('valueDescription')}>
              We provide carefully curated MCQ questions that reflect actual exam patterns and difficulty levels.
            </p>
          </div>
          <div style={getStyles('valueCard')}>
            <div style={getStyles('valueIcon')}>🆓</div>
            <h3 style={getStyles('valueTitle')}>Free Access</h3>
            <p style={getStyles('valueDescription')}>
              Our core content remains free to ensure equal access to quality test preparation materials.
            </p>
          </div>
          <div style={getStyles('valueCard')}>
            <div style={getStyles('valueIcon')}>📈</div>
            <h3 style={getStyles('valueTitle')}>Continuous Improvement</h3>
            <p style={getStyles('valueDescription')}>
              We regularly update our question bank based on user feedback and changing exam patterns.
            </p>
          </div>
          <div style={getStyles('valueCard')}>
            <div style={getStyles('valueIcon')}>🤝</div>
            <h3 style={getStyles('valueTitle')}>User Focus</h3>
            <p style={getStyles('valueDescription')}>
              Every decision is made with our users' needs in mind, creating the best possible learning experience.
            </p>
          </div>
        </div>
      </section>

      {/* Operator Section */}
      <section style={{ marginBottom: '80px', '@media (max-width: 768px)': { marginBottom: '60px' } }}>
        <h2 style={{ ...getStyles('sectionTitle') }}>
          About The Creator
          <span style={styles.sectionTitleDecoration}></span>
        </h2>
        
        <div style={getStyles('memberDetailCard')}>
          <img 
            src={operator.image} 
            alt={operator.name} 
            style={getStyles('memberDetailImage')}
          />
          <div style={getStyles('memberDetailContent')}>
            <h3 style={getStyles('memberDetailName')}>{operator.name}</h3>
            <p style={getStyles('memberDetailRole')}>{operator.role}</p>
            <p style={getStyles('memberDetailBio')}>{operator.bio}</p>
            <div style={getStyles('funFact')}>
              <strong>Fun Fact: </strong>{operator.funFact}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={getStyles('statsSection')}>
        <div style={getStyles('statsGrid')}>
          <div style={getStyles('statItem')}>
            <div style={getStyles('statNumber')}>1000+</div>
            <div style={getStyles('statLabel')}>Practice Questions</div>
          </div>
          <div style={getStyles('statItem')}>
            <div style={getStyles('statNumber')}>24/7</div>
            <div style={getStyles('statLabel')}>Accessibility</div>
          </div>
          <div style={getStyles('statItem')}>
            <div style={getStyles('statNumber')}>95%</div>
            <div style={getStyles('statLabel')}>User Satisfaction</div>
          </div>
          <div style={getStyles('statItem')}>
            <div style={getStyles('statNumber')}>50+</div>
            <div style={getStyles('statLabel')}>Exam Categories</div>
          </div>
        </div>
      </section>

      {/* AdSense Disclaimer */}
      <div style={getStyles('adDisclaimer')}>
        <p>Hamro Exam uses Google AdSense to display advertisements. These ads help support the site and keep our content free for users. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website or other websites.</p>
        <p>Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" style={{ color: '#3182ce', textDecoration: 'none', fontWeight: '500' }}>Google's Ads Settings</a>.</p>
      </div>
    </div>
  );
};

export default AboutPage;