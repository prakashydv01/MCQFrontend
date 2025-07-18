import { Link } from 'react-router-dom';
import { 
  Laptop2 as ComputerIcon,
  Construction as EngineeringIcon,
  HelpCircle as QuizIcon 
} from 'lucide-react';

const faculties = [
  { 
    id: 'mock-test/csit', 
    name: 'B.Sc. CSIT Mock Tests', 
    fullName: 'Tribhuvan University B.Sc. Computer Science & IT Entrance', 
    icon: <ComputerIcon className="w-8 h-8" />, 
    color: 'text-green-600', 
    borderColor: 'border-green-500',
    bgColor: 'bg-green-100',
    count: 580,
    description: 'Practice for TU B.Sc. CSIT entrance exam with our comprehensive question bank'
  },
  { 
    id: 'mock-test/bit', 
    name: 'BIT Mock Tests', 
    fullName: 'Bachelor in Information Technology Entrance', 
    icon: <ComputerIcon className="w-8 h-8" />, 
    color: 'text-blue-600',
    borderColor: 'border-blue-500',
    bgColor: 'bg-blue-100',
    count: 450,
    description: 'Prepare for BIT entrance exam with previous year questions and solutions'
  },
  { 
    id: 'mock-test/ioe', 
    name: 'IOE Mock Tests', 
    fullName: 'Institute of Engineering Entrance Examination', 
    icon: <EngineeringIcon className="w-8 h-8" />, 
    color: 'text-amber-600',
    borderColor: 'border-amber-500',
    bgColor: 'bg-amber-100',
    count: 650,
    description: 'IOE entrance exam preparation with timed mock tests and analytics'
  }
];

export default function FacultyBoxes() {
  return (
    <section className="py-12 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Practice Entrance Exam Mock Tests
        </h2>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
          Comprehensive test preparation for TU B.Sc. CSIT, BIT, and IOE entrance examinations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((faculty) => (
            <Link
              key={faculty.name}
              to={`/${faculty.id}`}
              className={`group p-6 border rounded-xl text-center no-underline text-current flex flex-col items-center bg-white dark:bg-gray-800 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-700 hover:${faculty.borderColor} hover:border-2`}
            >
              <div className={`${faculty.color} mb-6 p-3 rounded-full ${faculty.bgColor} dark:bg-opacity-20`}>
                {faculty.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {faculty.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {faculty.fullName}
              </p>
              <p className="text-base mb-6 italic text-gray-700 dark:text-gray-200">
                {faculty.description}
              </p>
              <div className={`mt-auto px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200`}>
                <p className="text-sm flex items-center justify-center gap-2">
                  <QuizIcon className="w-4 h-4" /> {faculty.count}+ Practice Questions
                </p>
              </div>
            </Link>
          ))}
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-12 max-w-3xl mx-auto">
          Trusted by thousands of students preparing for Tribhuvan University B.Sc. CSIT, 
          Bachelor in Information Technology (BIT), and Institute of Engineering (IOE) entrance exams.
          Our mock tests include previous year questions with detailed solutions.
        </p>
      </div>
    </section>
  );
}