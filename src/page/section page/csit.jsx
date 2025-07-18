// src/pages/tu-entrance/BScCSIT.jsx
import { Link } from 'react-router-dom';

export default function BScCSITDetails() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
      <title>B.Sc. CSIT Entrance Exam | TU Entrance | Complete Guide</title>
      <meta name="description" content="Complete details about B.Sc. CSIT entrance exam under Tribhuvan University. Eligibility, syllabus, exam pattern, and preparation tips." />

      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="lg:w-1/4">
          {/* Same sidebar as main page */}
        </aside>

        <div className="lg:w-3/4">
          <header className="mb-6 bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              B.Sc. CSIT Entrance Exam Details
            </h1>
            <Link 
              to="/" 
              className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center"
            >
              ← Back to all programs
            </Link>
          </header>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="bg-blue-600 p-4">
              <h2 className="text-xl font-semibold text-white">
                B.Sc. CSIT Entrance Exam
              </h2>
            </div>

            <div className="p-5">
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                  <h3 className="font-medium text-base mb-2 text-gray-800">Eligibility</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                      10+2 Science or equivalent with 50% aggregate
                    </li>
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                      Physics and Mathematics compulsory
                    </li>
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                      Minimum 'C' grade in all subjects
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                  <h3 className="font-medium text-base mb-2 text-gray-800">Exam Pattern</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                      Duration: 2 hours
                    </li>
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                      Questions: 100 MCQs
                    </li>
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                      No Negative  Marking
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-5">
                <h3 className="font-medium text-base mb-3 text-gray-800">Syllabus</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-medium text-blue-700 mb-1 text-sm">Physics (30 questions)</h4>
                    <p className="text-gray-600 text-xs">
                      Mechanics, Heat, Optics, Electricity, Modern Physics
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-medium text-blue-700 mb-1 text-sm">Chemistry (20 questions)</h4>
                    <p className="text-gray-600 text-xs">
                      General Chemistry, Physical Chemistry, Organic Chemistry
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-medium text-blue-700 mb-1 text-sm">Mathematics (30 questions)</h4>
                    <p className="text-gray-600 text-xs">
                      Algebra, Trigonometry, Calculus, Coordinate Geometry
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-medium text-blue-700 mb-1 text-sm">Computer (20 questions)</h4>
                    <p className="text-gray-600 text-xs">
                      Fundamentals, Programming Concepts, Computer Applications
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
                <h3 className="font-medium text-base mb-2 text-gray-800">Preparation Tips</h3>
                <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                  <li>Complete +2 Physics, Chemistry, and Math syllabus thoroughly</li>
                  <li>Practice previous 5 years' question papers</li>
                  <li>Focus on time management (1 minute per question)</li>
                  <li>Take mock tests regularly to assess preparation</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}