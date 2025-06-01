import Header from '../components/layout/Header';
import Hero from '../components/section/Hero';
import FacultyBoxes from '../components/section/FacultyBoxes';
import Footer from '../components/section/footer';
import WhyLearnWithUs from '../components/section/showcase';
import FacultyPractice from '../components/section/facultyPractice';
import Leaderboard from '../components/section/LeaderBoard';



export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <FacultyBoxes />
      <FacultyPractice />
      <WhyLearnWithUs />
      <Leaderboard/>
      <Footer/>
      
      
    </>
  );
}