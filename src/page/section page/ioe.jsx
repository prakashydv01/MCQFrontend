// src/pages/tu-entrance/IOE.jsx
import { Link } from 'react-router-dom';

export default function IOEDetails() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
      <title>IOE Engineering Entrance | TU Entrance | Complete Guide</title>
      <meta name="description" content="Complete details about IOE engineering entrance exam under Tribhuvan University. Eligibility, syllabus, exam pattern, and preparation tips." />

      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="lg:w-1/4">
          {/* Same sidebar as main page */}
        </aside>

        <div className="lg:w-3/4">
          <header className="mb-6 bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              IOE Engineering Entrance Details
            </h1>
            <Link 
              to="/" 
              className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center"
            >
              ← Back to all programs
            </Link>
          </header>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="bg-red-600 p-4">
              <h2 className="text-xl font-semibold text-white">
                IOE Engineering Entrance
              </h2>
            </div>

            <div className="p-5">
              <div className="mb-5">
                <h3 className="font-medium text-base mb-3 text-gray-800">Programs Offered</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-medium text-red-700 mb-1 text-sm">BE Computer</h4>
                    <p className="text-gray-600 text-xs">Software, Algorithms, Systems</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-medium text-red-700 mb-1 text-sm">BE Civil</h4>
                    <p className="text-gray-600 text-xs">Construction, Infrastructure</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-medium text-red-700 mb-1 text-sm">BE Electrical</h4>
                    <p className="text-gray-600 text-xs">Power, Electronics, Control</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-medium text-red-700 mb-1 text-sm">BE Electronics</h4>
                    <p className="text-gray-600 text-xs">Communication, Devices</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div className="bg-red-50 p-4 rounded-md border-l-4 border-red-500">
                  <h3 className="font-medium text-base mb-2 text-gray-800">Exam Details</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-red-500 before:rounded-full">
                      Duration: 3 hours
                    </li>
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-red-500 before:rounded-full">
                      Physics (100), Chemistry (100), Math (100)
                    </li>
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-red-500 before:rounded-full">
                      Top 10% get full scholarships
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-md border-l-4 border-red-500">
                  <h3 className="font-medium text-base mb-2 text-gray-800">Eligibility</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-red-500 before:rounded-full">
                      10+2 Science with 50% aggregate
                    </li>
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-red-500 before:rounded-full">
                      Physics, Chemistry, and Mathematics compulsory
                    </li>
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-red-500 before:rounded-full">
                      Minimum GPA of 2.0
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}