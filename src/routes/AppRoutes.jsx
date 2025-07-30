import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy loaded layout and pages
const Layout = lazy(() => import('../components/layout/fixlayout'));
const HomePage = lazy(() => import('../page/Home'));
const ScrollToTop = lazy(() => import('../components/layout/scrollTotop'));
// Authentication and medical pages
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

const AboutPage = lazy(() => import('../page/support/aboutUs'));
const ContactPage = lazy(() => import('../page/support/contact'));
const PrivacyPolicy = lazy(() => import('../page/support/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('../page/support/Terms'));
const BlogPage = lazy(() => import('../page/support/blog'));
const PracticeGuide = lazy(() => import('../page/Resources/practiceGuides'));
const Psc = lazy(() => import('../page/psc/PscComputer'));

const BScCSITDetails = lazy(() => import('../page/section page/csit'));
const BITDetails = lazy(() => import('../page/section page/bit'));
const IOEDetails = lazy(() => import('../page/section page/ioe'));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense >
        <Routes>

          {/* Layout Route that wraps everything */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="MCQUploadForm" element={<MCQUploadForm />} />
            <Route path="medical" element={<MedicalPage />} />
            <Route path="mock-test/csit" element={<BscCsit />} />
            <Route path="mock-test/bit" element={<Bit />} />
            <Route path="mock-test/ioe" element={<IOE />} />
            <Route path="loksewa/computer-operator" element={<Psc />} />

            {/* Practice routes */}
            <Route path="Pmedical" element={<PMCQApp />} />
            <Route path="practice/csit" element={<Pcsit />} />
            <Route path="practice/bit" element={<PBit />} />
            <Route path="practice/ioe" element={<PIOE />} />

            {/* Resources */}
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<TermsAndConditions />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="guidance" element={<PracticeGuide />} />

            {/* TU entrance details */}
            <Route path="csit-details" element={<BScCSITDetails />} />
            <Route path="bit-details" element={<BITDetails />} />
            <Route path="ioe-details" element={<IOEDetails />} />
          </Route>

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
