import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.subtitle}>Last updated: {new Date().toLocaleDateString()}</p>
      </div>

      <div style={styles.content}>
        <section style={styles.section}>
          <p style={styles.intro}>
            At <strong>Hamro Exam</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our MCQ practice site. Please read this policy carefully.
          </p>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>1</div>
            <h2 style={styles.sectionTitle}>Information We Collect</h2>
          </div>
          <div style={styles.sectionContent}>
            <p>We may collect the following types of information:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}><strong>Personal Information:</strong> When you register, we may collect your name, email address, and other contact details.</li>
              <li style={styles.listItem}><strong>Usage Data:</strong> We collect information about how you interact with our site, including pages visited, time spent, and answers to MCQ questions.</li>
              <li style={styles.listItem}><strong>Device Information:</strong> We may collect information about your device including IP address, browser type, and operating system.</li>
              <li style={styles.listItem}><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience and for analytics purposes.</li>
              <li style={styles.listItem}><strong>Advertising Data:</strong> Third-party advertisers may collect data to provide personalized ads (see Section 3 for details).</li>
            </ul>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>2</div>
            <h2 style={styles.sectionTitle}>How We Use Your Information</h2>
          </div>
          <div style={styles.sectionContent}>
            <p>We use the collected information to:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Provide, operate, and maintain our MCQ practice services</li>
              <li style={styles.listItem}>Improve, personalize, and expand our site's features</li>
              <li style={styles.listItem}>Analyze how users interact with our content and questions</li>
              <li style={styles.listItem}>Develop new products, services, and features</li>
              <li style={styles.listItem}>Communicate with you about updates, security alerts, and support messages</li>
              <li style={styles.listItem}>Prevent fraud and enhance security</li>
              <li style={styles.listItem}>Deliver targeted advertising (as described below)</li>
            </ul>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>3</div>
            <h2 style={styles.sectionTitle}>Third-Party Services & Advertising</h2>
          </div>
          <div style={styles.sectionContent}>
            <p>We use third-party services including:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}><strong>Google AdSense:</strong> We display ads served by Google AdSense, which uses cookies to serve ads based on user visits to our site and other sites.</li>
              <li style={styles.listItem}><strong>Google Analytics:</strong> To analyze user behavior and improve our services.</li>
              <li style={styles.listItem}><strong>Other Vendors:</strong> Third-party vendors may use cookies to serve ads based on prior visits.</li>
            </ul>
            
            <p style={styles.note}>
              <strong>Advertising Cookies:</strong> Third parties may use cookies, web beacons, and similar technologies to collect or receive information from our website and elsewhere on the internet and use that information to provide measurement services and target ads.
            </p>
            
            <p style={styles.note}>
              <strong>Opting Out:</strong> Users can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" style={styles.link}>Google's Ads Settings</a> or by visiting <a href="https://www.aboutads.info/choices/" style={styles.link}>www.aboutads.info</a>.
            </p>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>4</div>
            <h2 style={styles.sectionTitle}>Data Sharing & Disclosure</h2>
          </div>
          <div style={styles.sectionContent}>
            <p>We may share information in the following situations:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}><strong>With Service Providers:</strong> To monitor and analyze site usage, process payments, etc.</li>
              <li style={styles.listItem}><strong>For Business Transfers:</strong> In connection with any merger or sale of company assets.</li>
              <li style={styles.listItem}><strong>With Affiliates:</strong> With our affiliates in which case we require them to honor this policy.</li>
              <li style={styles.listItem}><strong>With Advertising Partners:</strong> As described in Section 3 for targeted advertising.</li>
              <li style={styles.listItem}><strong>For Legal Reasons:</strong> To comply with laws or respond to legal requests.</li>
            </ul>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>5</div>
            <h2 style={styles.sectionTitle}>Your Rights & Choices</h2>
          </div>
          <div style={styles.sectionContent}>
            <p>You have certain rights regarding your personal information:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Access and receive a copy of your personal data</li>
              <li style={styles.listItem}>Request correction of inaccurate information</li>
              <li style={styles.listItem}>Request deletion of your personal data</li>
              <li style={styles.listItem}>Opt-out of marketing communications</li>
              <li style={styles.listItem}>Manage cookie preferences through your browser</li>
              <li style={styles.listItem}>Opt-out of personalized advertising (see Section 3)</li>
            </ul>
            <p>To exercise these rights, please contact us at <a href="mailto:support@hamroexam.com" style={styles.link}>support@hamroexam.com</a>.</p>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>6</div>
            <h2 style={styles.sectionTitle}>Data Security</h2>
          </div>
          <div style={styles.sectionContent}>
            <p>We implement security measures including:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}>SSL encryption for data transmission</li>
              <li style={styles.listItem}>Regular security audits</li>
              <li style={styles.listItem}>Access controls and authentication</li>
              <li style={styles.listItem}>Secure storage practices</li>
            </ul>
            <p>However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>7</div>
            <h2 style={styles.sectionTitle}>Children's Privacy</h2>
          </div>
          <div style={styles.sectionContent}>
            <p>Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13.</p>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>8</div>
            <h2 style={styles.sectionTitle}>Changes to This Policy</h2>
          </div>
          <div style={styles.sectionContent}>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionNumber}>9</div>
            <h2 style={styles.sectionTitle}>Contact Us</h2>
          </div>
          <div style={styles.sectionContent}>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <ul style={styles.list}>
              <li style={styles.listItem}>Email: <a href="mailto:support@hamroexam.com" style={styles.link}>support@hamroexam.com</a></li>
            </ul>
          </div>
        </section>

        <div style={styles.updateNotice}>
          <p>This Privacy Policy is effective as of {new Date().toLocaleDateString()} and will remain in effect except with respect to any changes in its provisions in the future.</p>
        </div>
      </div>
    </div>
  );
};

// Styles with mobile responsiveness
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
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
    borderBottom: '1px solid #e2e8f0'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    marginBottom: '10px',
    color: '#1a365d',
    background: 'linear-gradient(90deg, #3182ce, #805ad5)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    '@media (max-width: 768px)': {
      fontSize: '2rem'
    }
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
    marginBottom: '20px'
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
    fontWeight: '700',
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
    paddingLeft: '15px'
  },
  note: {
    backgroundColor: '#ebf8ff',
    padding: '15px',
    borderRadius: '8px',
    color: '#3182ce',
    margin: '20px 0'
  },
  link: {
    color: '#3182ce',
    textDecoration: 'none',
    fontWeight: '500',
    ':hover': {
      textDecoration: 'underline'
    }
  },
  updateNotice: {
    backgroundColor: '#f7fafc',
    padding: '15px',
    borderRadius: '8px',
    borderLeft: '4px solid #3182ce',
    marginTop: '40px',
    fontSize: '0.95rem',
    color: '#4a5568'
  }
};

export default PrivacyPolicy;