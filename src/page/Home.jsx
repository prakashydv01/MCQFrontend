import React, { lazy, Suspense } from 'react';

// Lazy load components
const Header = lazy(() => import('../components/layout/Header'));
const Hero = lazy(() => import('../components/section/Hero'));
const FacultyBoxes = lazy(() => import('../components/section/FacultyBoxes'));
const FacultyPractice = lazy(() => import('../components/section/facultyPractice'));
const WhyLearnWithUs = lazy(() => import('../components/section/showcase'));
const Leaderboard = lazy(() => import('../components/section/LeaderBoard'));
const Footer = lazy(() => import('../components/section/footer'));

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Hero />
      <FacultyBoxes />
      <FacultyPractice />
      <WhyLearnWithUs />
      <Leaderboard />
      <Footer />
    </Suspense>
  );
}
