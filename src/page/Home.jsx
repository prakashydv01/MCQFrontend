import React, { lazy, Suspense } from 'react';

// Lazy load components

const Hero = lazy(() => import('../components/section/Hero'));
const FacultyBoxes = lazy(() => import('../components/section/FacultyBoxes'));
const FacultyPractice = lazy(() => import('../components/section/facultyPractice'));
const FacultyPSC = lazy(() => import('../components/section/PSC.Computer'));
const WhyLearnWithUs = lazy(() => import('../components/section/showcase'));
const TUEntrancePage = lazy(() => import('../components/section/TU'));
const Fotter = lazy(() => import('../components/section/footer'));

export default function HomePage() {
  return (
    <Suspense >
      
      <Hero />
      <FacultyPractice />
      <FacultyBoxes />
      <FacultyPSC />
      <WhyLearnWithUs />
      <TUEntrancePage />
      <Fotter />
    </Suspense>
  );
}