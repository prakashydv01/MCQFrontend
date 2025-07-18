// src/pages/tu-entrance/BIT.jsx
import { Link } from 'react-router-dom';

export default function BITDetails() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
      <title>BIT Entrance Exam | TU Entrance | Complete Guide</title>
      <meta name="description" content="Complete details about BIT entrance exam under Tribhuvan University. Eligibility, syllabus, exam pattern, and preparation tips." />

      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="lg:w-1/4">
          {/* Same sidebar as main page */}
        </aside>

        <div className="lg:w-3/4">
          <header className="mb-6 bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              BIT Entrance Exam Details
            </h1>
            <Link 
              to="/" 
              className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center"
            >
              ← Back to all programs
            </Link>
          </header>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="bg-green-600 p-4">
              <h2 className="text-xl font-semibold text-white">
                BIT Entrance Exam
              </h2>
            </div>

            <div className="p-5">
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-500">
                  <h3 className="font-medium text-base mb-2 text-gray-800">Eligibility</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-green-500 before:rounded-full">
                      10+2 in any discipline with 45% aggregate
                    </li>
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-green-500 before:rounded-full">
                      Mathematics in +2 preferred
                    </li>
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-green-500 before:rounded-full">
                      Entrance exam mandatory for all applicants
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-500">
                  <h3 className="font-medium text-base mb-2 text-gray-800">Exam Pattern</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-green-500 before:rounded-full">
                      Duration: 2 hours
                    </li>
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-green-500 before:rounded-full">
                      100 MCQs (English, Math, IQ, General Awareness)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-5">
                <h3 className="font-medium text-base mb-3 text-gray-800">Program Highlights</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-medium text-green-700 mb-1 text-sm">Duration</h4>
                    <p className="text-gray-600 text-xs">4-year (8 semester) Bachelor in Information Technology</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-medium text-green-700 mb-1 text-sm">Focus</h4>
                    <p className="text-gray-600 text-xs">Practical IT skills and applications</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-medium text-green-700 mb-1 text-sm">Availability</h4>
                    <p className="text-gray-600 text-xs">Affiliated colleges throughout Nepal</p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-medium text-green-700 mb-1 text-sm">Careers</h4>
                    <p className="text-gray-600 text-xs">Software development, networking, IT management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}