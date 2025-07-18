import { Link } from 'react-router-dom';
import React from 'react';

export default function TUEntranceExams() {
  return (
    <main className="w-full px-0 py-8 font-sans bg-gray-900 min-h-screen">
      {/* SEO Metadata */}
      <title>Tribhuvan University Entrance Exams | B.Sc. CSIT, BIT, IOE</title>
      <meta 
        name="description" 
        content="Complete guide to TU entrance exams for B.Sc. CSIT, BIT, and IOE programs."
      />
      
      {/* Header Section */}
      <header className="text-center mb-12 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          Tribhuvan University Entrance Examinations
        </h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Comprehensive guide to TU's competitive entrance exams for technical programs
        </p>
      </header>

      {/* Programs Section - Full width container */}
      <div className="w-full mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-7xl mx-auto">
          <ProgramCard 
            id="csit-details"
            title="B.Sc. CSIT"
            subtitle="Computer Science & IT"
            duration="4 years"
            focus="Computer Science, Programming, Networking"
            careers="Software Developer, Data Scientist, IT Analyst"
          />
          
          <ProgramCard 
            id="bit-details"
            title="BIT"
            subtitle="Bachelor of Information Technology"
            duration="4 years"
            focus="Applied IT, Systems Management"
            careers="IT Manager, Network Engineer, System Admin"
          />
          
          <ProgramCard 
            id="ioe-details"
            title="IOE Engineering"
            subtitle="Institute of Engineering"
            duration="4 years"
            focus="Technical Engineering, Core Subjects"
            careers="Engineer, Researcher, Technical Consultant"
          />
        </div>
      </div>

      {/* Comparison Table */}
      <div className="px-4 max-w-7xl mx-auto">
        <ProgramComparisonTable />
      </div>
    </main>
  );
}

function ProgramCard({ id, title, subtitle, duration, focus, careers }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
      <div className="p-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <p className="text-gray-400">{subtitle}</p>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-500">Duration</h4>
            <p className="text-gray-300">{duration}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Focus Areas</h4>
            <p className="text-gray-300">{focus}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Career Paths</h4>
            <p className="text-gray-300">{careers}</p>
          </div>
        </div>
        
        <Link 
          to={`/${id}`} 
          className="mt-6 inline-block w-full py-2 text-center rounded-md bg-gray-700 hover:bg-gray-600 text-white font-medium transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

function ProgramComparisonTable() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md border border-gray-700 overflow-hidden">
      <h2 className="text-xl font-semibold p-6 text-white border-b border-gray-700">
        Program Comparison
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left font-medium text-gray-400">Program</th>
              <th className="px-6 py-4 text-left font-medium text-gray-400">Duration</th>
              <th className="px-6 py-4 text-left font-medium text-gray-400">Focus</th>
              <th className="px-6 py-4 text-left font-medium text-gray-400">Careers</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            <tr className="hover:bg-gray-700/50">
              <td className="px-6 py-4 whitespace-nowrap font-medium text-blue-400">B.Sc. CSIT</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">4 years</td>
              <td className="px-6 py-4 text-gray-300">Computer Science + IT</td>
              <td className="px-6 py-4 text-gray-300">Software Developer, Data Scientist</td>
            </tr>
            <tr className="hover:bg-gray-700/50">
              <td className="px-6 py-4 whitespace-nowrap font-medium text-green-400">BIT</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">4 years</td>
              <td className="px-6 py-4 text-gray-300">Applied Information Technology</td>
              <td className="px-6 py-4 text-gray-300">IT Manager, Network Engineer</td>
            </tr>
            <tr className="hover:bg-gray-700/50">
              <td className="px-6 py-4 whitespace-nowrap font-medium text-red-400">IOE Engineering</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-300">4 years</td>
              <td className="px-6 py-4 text-gray-300">Technical Engineering</td>
              <td className="px-6 py-4 text-gray-300">Engineer, Researcher, Consultant</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}