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


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Signup" element={<Signup />} />

          <Route path="/MCQUploadForm" element={<MCQUploadForm />} />
          <Route path="/medical" element={<MedicalPage />} />

          <Route path="/csit" element={<BscCsit />} />
          <Route path="/bit" element={<Bit />} />

          <Route path="/Pmedical" element={<PMCQApp />} />
          <Route path="/Pcsit" element={<Pcsit />} />
          <Route path="/PBit" element={<PBit />} />

          <Route path="/ioe" element={<IOE />} />
          <Route path="/pioe" element={<PIOE />} />

          // Resource routes
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />      
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/practice-guides" element={<PracticeGuide />} />


          {/* Add more faculty routes as needed */}
          

          {/* Add more routes as needed */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
