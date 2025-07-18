import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const Footer = () => {
  const navigate = useNavigate();

  const routes = {
    home: '/',
    PracticeGuides: '/practice-guides',
    about: '/about',
    contact: '/contact',
    PrivacyPolicy: '/privacy-policy',
    terms: '/terms',
    social: {
      facebook: 'https://www.facebook.com/profile.php?id=61577236957852',
      linkedin: 'www.linkedin.com/in/prakash-yadav-6b7b00320',
      YouTube: 'https://youtube.com/@hamroexam1?si=d0Jzyq0OZEipXOLx'
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Hamro Exam</h3>
            <p className="text-gray-400 mb-6">
              The ultimate platform for exam preparation through smart practice.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, link: routes.social.facebook },
                { Icon: LinkedIn, link: routes.social.linkedin },
                { Icon: YouTube, link: routes.social.YouTube }
              ].map(({ Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    y: -4,
                    scale: 1.1,
                    transition: { type: 'spring', stiffness: 400 }
                  }}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Icon className="text-2xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Resources Links */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('/guidance')}
                  className="text-blue-400 hover:text-blue-300 transition-colors text-left"
                >
                  Practice Guides
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              {[
                { name: 'About us', path: routes.about },
                { name: 'Contact Us', path: routes.contact },
                { name: 'Privacy Policy', path: routes.PrivacyPolicy },
                { name: 'Terms & Conditions', path: routes.terms }
              ].map(({ name, path }, i) => (
                <motion.li
                  key={name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <button
                    onClick={() => handleNavigation(path)}
                    className={`text-blue-400 hover:text-blue-300 transition-colors text-left ${
                      window.location.pathname === path ? 'font-medium text-blue-300' : ''
                    }`}
                  >
                    {name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Empty column to balance layout */}
          <div className="md:col-span-4"></div>
        </div>

        {/* Divider */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-700 my-8"
        ></motion.div>

        {/* Copyright */}
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-500 hover:text-blue-400 transition-colors">
            © {new Date().getFullYear()} Hamro Exam. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;