import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy loaded pages
const HomePage = lazy(() => import('../page/Home'));
const Signup = lazy(() => import('../page/auth/Signup'));
const MedicalPage = lazy(() => import('../page/medical/medicalpage'));
const MCQUploadForm = lazy(() => import('../page/medical/uploadMcq'));
const PMCQApp = lazy(() => import('../page/medical/medicalPractice'));
const BscCsit = lazy(() => import('../page/Bsc.Csit/csit'));
const Pcsit = lazy(() => import('../page/Bsc.Csit/csit.practice'));
const Bit = lazy(() => import('../page/BIT/Bit'));
const PBit = lazy(() => import('../page/BIT/BitPractice'));
const IOE = lazy(() => import('../page/IOE/IOE'));
const PIOE = lazy(() => import('../page/IOE/PIOE'));
//resource:eoute
const AboutPage = lazy(() => import('../page/support/aboutUs'));
const ContactPage = lazy(() => import('../page/support/contact'));
const PrivacyPolicy = lazy(() => import('../page/support/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('../page/support/Terms'));
const BlogPage = lazy(() => import('../page/support/blog'));
const PracticeGuide = lazy(() => import('../page/Resources/practiceGuides'));
const Psc = lazy (() => import('../page/psc/PscComputer'));
// TU entrance details pages
const BScCSITDetails = lazy(() => import('../page/section page/csit'));
const BITDetails = lazy(() => import('../page/section page/bit'));
const IOEDetails = lazy(() => import('../page/section page/ioe'));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<Signup />} />

          <Route path="/MCQUploadForm" element={<MCQUploadForm />} />
          <Route path="/medical" element={<MedicalPage />} />

          <Route path="/mock-test/csit" element={<BscCsit />} />
          <Route path="/mock-test/bit" element={<Bit />} />
          <Route path="/loksewa/computer-operator" element={<Psc />} />
          
          {/* Practice routes */}
          <Route path="/Pmedical" element={<PMCQApp />} />
          <Route path="/practice/csit" element={<Pcsit />} />
          <Route path="/practice/bit" element={<PBit />} />

          <Route path="/mock-test/ioe" element={<IOE />} />
          <Route path="/practice/ioe" element={<PIOE />} />

          // Resource routes
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />      
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/guidance" element={<PracticeGuide />} />

          //tu details pages
          <Route path="/csit-details" element={<BScCSITDetails />} />
          <Route path="/bit-details" element={<BITDetails />} />
          <Route path="/ioe-details" element={<IOEDetails />} />

          

          {/* Add more routes as needed */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
