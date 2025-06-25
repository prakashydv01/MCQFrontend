import { useState } from 'react';

const ContactPage = () => {
  // Inline CSS with enhanced design
  const styles = {
    contactContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      color: '#2d3748'
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    title: {
      fontSize: '3rem',
      color: '#1a365d',
      marginBottom: '15px',
      fontWeight: '800',
      background: 'linear-gradient(90deg, #3182ce, #805ad5)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#718096',
      fontWeight: 'normal',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px'
    },
    contactInfo: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    },
    infoTitle: {
      fontSize: '1.75rem',
      color: '#2d3748',
      marginBottom: '30px',
      fontWeight: '700'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '25px',
      paddingBottom: '25px',
      borderBottom: '1px solid #edf2f7'
    },
    infoIcon: {
      marginRight: '20px',
      color: '#4299e1',
      fontSize: '1.75rem',
      flexShrink: '0'
    },
    infoContent: {
      flexGrow: '1'
    },
    infoHeading: {
      margin: '0 0 8px 0',
      color: '#2d3748',
      fontWeight: '600'
    },
    infoText: {
      margin: '0',
      color: '#718096',
      lineHeight: '1.6'
    },
    socialLinks: {
      display: 'flex',
      gap: '15px',
      marginTop: '40px'
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      backgroundColor: '#edf2f7',
      color: '#4a5568',
      transition: 'all 0.2s ease',
      textDecoration: 'none',
      fontSize: '1.25rem',
      ':hover': {
        backgroundColor: '#4299e1',
        color: 'white',
        transform: 'translateY(-2px)'
      }
    },
    faqSection: {
      backgroundColor: 'white',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    },
    faqTitle: {
      fontSize: '1.75rem',
      color: '#2d3748',
      marginBottom: '30px',
      fontWeight: '700'
    },
    faqItem: {
      marginBottom: '20px',
      borderBottom: '1px solid #edf2f7',
      paddingBottom: '20px'
    },
    faqQuestion: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '10px 0',
      fontWeight: '600',
      color: '#2d3748',
      transition: 'color 0.2s ease'
    },
    faqAnswer: {
      padding: '10px 0',
      color: '#718096',
      lineHeight: '1.6'
    },
    mapContainer: {
      height: '300px',
      borderRadius: '12px',
      overflow: 'hidden',
      marginTop: '40px',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    },
    // Mobile styles
    mobileStyles: {
      '@media (max-width: 768px)': {
        contactGrid: {
          gridTemplateColumns: '1fr'
        },
        title: {
          fontSize: '2.25rem'
        },
        contactInfo: {
          padding: '30px'
        },
        faqSection: {
          padding: '30px'
        }
      }
    }
  };

  // FAQ data
  const [faqs, setFaqs] = useState([
    {
      question: "How quickly can I expect a response?",
      answer: "Our team typically responds to inquiries within 24-48 hours during business days. For urgent matters, please call our support line.",
      isOpen: false
    },
    {
      question: "Do you offer 24/7 customer support?",
      answer: "We provide support Monday through Friday from 9am to 6pm, and Saturdays from 10am to 4pm. Outside these hours, you can email us and we'll respond when we reopen.",
      isOpen: false
    },
    {
      question: "Where are your offices located?",
      answer: "Our headquarters are at imadol , Lalitpur. We also have regional offices in several major cities worldwide.",
      isOpen: false
    },
    {
      question: "Can I visit your office in person?",
      answer: "Absolutely! We welcome visitors by appointment. Please contact us to schedule a visit at your convenience.",
      isOpen: false
    }
  ]);

  const toggleFaq = (index) => {
    setFaqs(faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : false
    })));
  };

  // Combine base styles with mobile overrides
  const getStyles = (styleName) => {
    const baseStyle = styles[styleName];
    const mobileStyle = styles.mobileStyles['@media (max-width: 768px)']?.[styleName];
    
    return mobileStyle ? { ...baseStyle, ...mobileStyle } : baseStyle;
  };

  return (
    <div style={styles.contactContainer}>
      <header style={styles.header}>
        <h1 style={styles.title}>Get In Touch</h1>
        <p style={styles.subtitle}>
          We'd love to hear from you! Whether you have questions about our services, 
          need technical support, or just want to say hello, our team is ready to assist you.
        </p>
      </header>

      <div style={getStyles('contactGrid')}>
        <div style={styles.contactInfo}>
          <h2 style={styles.infoTitle}>Contact Information</h2>
          
          <div style={styles.infoItem}>
            <span style={styles.infoIcon}>📧</span>
            <div style={styles.infoContent}>
              <h3 style={styles.infoHeading}>Email</h3>
              <p style={styles.infoText}>
                <a href="hamroexam1@gmail.com" style={{ color: '#4299e1', textDecoration: 'none' }}>
                  hamroexam1@gmail.com
                </a>
                <br />
                <a href="hamroexam1@gmail.com" style={{ color: '#4299e1', textDecoration: 'none' }}>
                  hamroexam1@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <span style={styles.infoIcon}>📱</span>
            <div style={styles.infoContent}>
              <h3 style={styles.infoHeading}>Phone</h3>
              <p style={styles.infoText}>
                Main: <a href="Phone: 9701128606" style={{ color: '#4299e1', textDecoration: 'none' }}>+(977)9701128606</a>
                <br />
                Support: <a href="tel:+15559876543" style={{ color: '#4299e1', textDecoration: 'none' }}>+(977)9701128606</a>
              </p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <span style={styles.infoIcon}>🏢</span>
            <div style={styles.infoContent}>
              <h3 style={styles.infoHeading}>Address</h3>
              <p style={styles.infoText}>
                Imadol<br />
                Lalitpur<br />
                Nepal
              </p>
            </div>
          </div>

          <div style={styles.infoItem}>
            <span style={styles.infoIcon}>⏰</span>
            <div style={styles.infoContent}>
              <h3 style={styles.infoHeading}>Hours</h3>
              <p style={styles.infoText}>
                Monday - Friday: 9am - 6pm<br />
                Saturday: 10am - 4pm<br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div style={styles.socialLinks}>
            
            <a href="https://facebook.com" style={styles.socialLink} aria-label="Facebook">
              👍
            </a>
            <a href="https://linkedin.com" style={styles.socialLink} aria-label="LinkedIn">
              🔗
            </a>
            <a href="https://instagram.com" style={styles.socialLink} aria-label="Instagram">
              📷
            </a>
          </div>
        </div>

        <div style={styles.faqSection}>
          <h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
          
          {faqs.map((faq, index) => (
            <div key={index} style={styles.faqItem}>
              <div 
                style={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span>{faq.isOpen ? '−' : '+'}</span>
              </div>
              {faq.isOpen && (
                <div style={styles.faqAnswer}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div style={styles.mapContainer}>
        {/* This would be replaced with an actual map component */}
        <div style={{
          height: '100%',
          backgroundColor: '#e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#718096'
        }}>
          Interactive Map Would Appear Here
        </div>
      </div>
    </div>
  );
};

export default ContactPage;