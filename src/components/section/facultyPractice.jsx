import { Link } from 'react-router-dom';
import { Computer, Construction } from 'lucide-react';

const faculties = [
  { 
    id: 'practice/csit', 
    name: 'B.Sc. CSIT Entrance', 
    description: 'Tribhuvan University Computer Science', 
    icon: <Computer className="w-10 h-10 text-emerald-400" />, 
    color: 'emerald', 
    count: 580 
  },
  { 
    id: 'practice/bit', 
    name: 'BIT Entrance', 
    description: 'Bachelor in Information Technology', 
    icon: <Computer className="w-10 h-10 text-blue-400" />, 
    color: 'blue', 
    count: 450 
  },
  { 
    id: 'practice/ioe', 
    name: 'IOE Entrance', 
    description: 'Institute of Engineering Exams', 
    icon: <Construction className="w-10 h-10 text-amber-400" />, 
    color: 'amber', 
    count: 650 
  },
];

export default function FacultyPractice() {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
            Ace Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">Entrance Examination</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive question banks for TU B.Sc. CSIT, BIT, and IOE entrance exam preparation
          </p>
        </div>
        
        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculties.map((faculty) => (
            <Link
              key={faculty.name}
              to={`/${faculty.id}`}
              className={`group relative bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-${faculty.color}-400 transition-all duration-300 hover:shadow-lg hover:shadow-${faculty.color}-500/10 overflow-hidden transform hover:-translate-y-2 text-center`}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${faculty.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 flex flex-col h-full items-center">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${faculty.color}-900 to-${faculty.color}-700 flex items-center justify-center mb-6`}>
                  {faculty.icon}
                </div>
                
                {/* Content */}
                <h3 className={`text-2xl font-bold text-white mb-3 group-hover:text-${faculty.color}-300 transition-colors`}>
                  {faculty.name}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {faculty.description}
                </p>
                
                {/* Footer with question count */}
                <div className="flex items-center justify-center gap-2 mt-auto w-full">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${faculty.color}-900/50 text-${faculty.color}-300`}>
                    {faculty.count}+ Questions
                  </span>
                  <span className={`text-${faculty.color}-400 opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-300`}>
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <p className="text-center mt-16 text-gray-400">
          Trusted by thousands of students preparing for TU B.Sc. CSIT, BIT, and IOE entrance exams
        </p>
      </div>
    </div>
  );
}