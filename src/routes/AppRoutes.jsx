import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../page/Home';
import Signup from '../page/auth/Signup';

import MedicalPage from '../page/medical/medicalpage';
import MCQUploadForm from '../page/medical/uploadMcq';
// Importing all the necessary pages for routing
import IOE from '../page/IOE/IOE';
import PMCQApp from '../page/medical/medicalPractice';
import BscCsit from '../page/Bsc.Csit/csit';
import Pcsit from '../page/Bsc.Csit/csit.practice';
import Bit from '../page/BIT/Bit';
import PBit from '../page/BIT/BitPractice';
// Importing support and resources pages
import ContactPage from '../page/support/contact';
import AboutPage from '../page/support/aboutUs';
import PrivacyPolicy from '../page/support/PrivacyPolicy';
import TermsAndConditions from '../page/support/Terms';
import PracticeGuides from '../page/Resources/practiceGuides';
import BlogPage from '../page/Resources/blogs';


export default function AppRoutes() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Signup" element={<Signup />} />
      
      // Define routes for different faculties and pages
      <Route path="/MCQUploadForm" element={<MCQUploadForm />} />
      <Route path="/medical" element={<MedicalPage />} />
      <Route path='/ioe' element={<IOE />} />
      <Route path='/csit' element={<BscCsit />} />
      <Route path='/bit' element={<Bit />} />

      {/* Medical Practice Route */}
      <Route path='/Pmedical' element={<PMCQApp/>} />
      <Route path='/Pcsit' element={<Pcsit />} />
      <Route path='/PBit' element={<PBit />} />
      
      {/* Add more routes as needed */}
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/practice-guides" element={<PracticeGuides />} />
      <Route path="/blog" element={<BlogPage />} />
      
      
      {/* Catch-all route for 404 Not Found */}
    
      
    
    </Routes>
    </BrowserRouter>
  );
}