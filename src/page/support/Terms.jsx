import React from 'react';

const TermsAndConditions = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Terms & Conditions</h1>
        <p style={styles.subtitle}>Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div style={styles.content}>
        <section style={styles.section}>
          <p style={styles.intro}>
            Welcome to <strong style={styles.brand}>Hamro Exam</strong>, your premier MCQ practice platform. By accessing or using our services, you agree to comply with these Terms & Conditions.
          </p>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>1</div>
            <h2 style={styles.sectionTitle}>Account Registration</h2>
          </div>
          <div style={styles.sectionContent}>
            <ul style={styles.list}>
              <li style={styles.listItem}>You must provide accurate information when creating an account</li>
              <li style={styles.listItem}>You are responsible for maintaining the confidentiality of your login credentials</li>
              <li style={styles.listItem}>Accounts are non-transferable</li>
              <li style={styles.listItem}>We reserve the right to suspend accounts violating our policies</li>
            </ul>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>2</div>
            <h2 style={styles.sectionTitle}>Use of Service</h2>
          </div>
          <div style={styles.sectionContent}>
            <p>When using Hamro Exam, you agree not to:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Attempt to hack or disrupt the service</li>
              <li style={styles.listItem}>Share copyrighted content without permission</li>
              <li style={styles.listItem}>Use automated bots or scripts to access the platform</li>
              <li style={styles.listItem}>Impersonate other users or administrators</li>
            </ul>
            <div style={styles.note}>
              <strong>Note:</strong> All MCQ content is for practice purposes only. We don't guarantee its accuracy for actual examinations.
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>3</div>
            <h2 style={styles.sectionTitle}>Subscription & Payments</h2>
          </div>
          <div style={styles.sectionContent}>
            <ul style={styles.list}>
              <li style={styles.listItem}>Premium features require subscription payment</li>
              <li style={styles.listItem}>All fees are non-refundable unless required by law</li>
              <li style={styles.listItem}>We may change subscription prices with 30 days notice</li>
              <li style={styles.listItem}>Automatic renewals can be canceled anytime</li>
            </ul>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>4</div>
            <h2 style={styles.sectionTitle}>Intellectual Property</h2>
          </div>
          <div style={styles.sectionContent}>
            <ul style={styles.list}>
              <li style={styles.listItem}>All Hamro Exam content is our exclusive property</li>
              <li style={styles.listItem}>You may not reproduce, distribute, or create derivative works</li>
              <li style={styles.listItem}>User-generated content remains your property but grants us usage rights</li>
            </ul>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>5</div>
            <h2 style={styles.sectionTitle}>Limitation of Liability</h2>
          </div>
          <div style={styles.sectionContent}>
            <ul style={styles.list}>
              <li style={styles.listItem}>We're not liable for any exam outcomes based on our practice materials</li>
              <li style={styles.listItem}>Service is provided "as is" without warranties</li>
              <li style={styles.listItem}>We're not responsible for third-party links or content</li>
              <li style={styles.listItem}>Maximum liability is limited to your last subscription payment</li>
            </ul>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>6</div>
            <h2 style={styles.sectionTitle}>Termination</h2>
          </div>
          <div style={styles.sectionContent}>
            <ul style={styles.list}>
              <li style={styles.listItem}>We may terminate accounts for policy violations</li>
              <li style={styles.listItem}>You may delete your account anytime</li>
              <li style={styles.listItem}>Upon termination, your right to use the service immediately ceases</li>
            </ul>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>7</div>
            <h2 style={styles.sectionTitle}>Changes to Terms</h2>
          </div>
          <div style={styles.sectionContent}>
            <ul style={styles.list}>
              <li style={styles.listItem}>We may modify these terms at any time</li>
              <li style={styles.listItem}>Continued use constitutes acceptance of changes</li>
              <li style={styles.listItem}>Material changes will be notified via email or in-app notice</li>
            </ul>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>8</div>
            <h2 style={styles.sectionTitle}>Contact Information</h2>
          </div>
          <div style={styles.sectionContent}>
            <p>For questions about these Terms & Conditions:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Email: <a href="mailto:support@hamroexam.com" style={styles.link}>support@hamroexam.com</a></li>
              <li style={styles.listItem}>Office: Hamro Exam Pvt. Ltd., Kathmandu, Nepal</li>
            </ul>
          </div>
        </section>

        <div style={styles.consent}>
          <p>By using Hamro Exam, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.</p>
        </div>
      </div>
    </div>
  );
};

// Mobile-responsive styles
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Poppins', sans-serif",
    color: '#2d3748',
    lineHeight: '1.6',
    '@media (max-width: 768px)': {
      padding: '15px'
    }
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    paddingBottom: '20px',
    borderBottom: '1px solid #e2e8f0',
    '@media (max-width: 768px)': {
      marginBottom: '30px'
    }
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#3182ce',
    '@media (max-width: 768px)': {
      fontSize: '2rem'
    }
  },
  brand: {
    color: '#3182ce',
    fontWeight: '700'
  },
  subtitle: {
    fontSize: '1rem',
    color: '#718096',
    fontWeight: '500'
  },
  content: {
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '40px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '@media (max-width: 768px)': {
      padding: '25px'
    }
  },
  section: {
    marginBottom: '40px',
    '@media (max-width: 768px)': {
      marginBottom: '30px'
    }
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    '@media (max-width: 768px)': {
      marginBottom: '15px'
    }
  },
  sectionNumber: {
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: '#3182ce',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
    fontWeight: '700',
    flexShrink: '0',
    '@media (max-width: 768px)': {
      width: '30px',
      height: '30px',
      fontSize: '0.9rem'
    }
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#2d3748',
    margin: '0',
    '@media (max-width: 768px)': {
      fontSize: '1.3rem'
    }
  },
  sectionContent: {
    paddingLeft: '50px',
    '@media (max-width: 768px)': {
      paddingLeft: '0'
    }
  },
  intro: {
    fontSize: '1.1rem',
    color: '#4a5568',
    marginBottom: '20px'
  },
  list: {
    paddingLeft: '20px',
    margin: '15px 0'
  },
  listItem: {
    marginBottom: '10px',
    position: 'relative',
    paddingLeft: '15px',
    ':before': {
      content: '"•"',
      color: '#3182ce',
      fontWeight: 'bold',
      display: 'inline-block',
      width: '1em',
      marginLeft: '-1em'
    }
  },
  note: {
    backgroundColor: '#ebf8ff',
    padding: '15px',
    borderRadius: '8px',
    color: '#3182ce',
    margin: '20px 0',
    fontSize: '0.95rem'
  },
  link: {
    color: '#3182ce',
    textDecoration: 'none',
    fontWeight: '500',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  consent: {
    backgroundColor: '#f0fff4',
    padding: '20px',
    borderRadius: '8px',
    borderLeft: '4px solid #38a169',
    marginTop: '40px',
    textAlign: 'center',
    fontWeight: '500',
    '@media (max-width: 768px)': {
      padding: '15px',
      marginTop: '30px'
    }
  }
};

export default TermsAndConditions;