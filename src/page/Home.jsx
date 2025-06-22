import { lazy, Suspense } from 'react';


// Lazy load only the heaviest components (prioritize above-the-fold content)
const FacultyPractice = lazy(() => import('../components/section/facultyPractice'));
const Leaderboard = lazy(() => import('../components/section/LeaderBoard'));

// Keep these synchronous as they're likely needed immediately
import Header from '../components/layout/Header';
import Hero from '../components/section/Hero';
import FacultyBoxes from '../components/section/FacultyBoxes';
import WhyLearnWithUs from '../components/section/showcase';
import Footer from '../components/section/footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <FacultyBoxes />
      
      <Suspense fallback={<div>Loading...</div>}>
        <FacultyPractice />
        <Leaderboard />
      </Suspense>
      
      <WhyLearnWithUs />
      <Footer />
    </>
  );
}