// src/pages/tu-entrance/BScCSIT.jsx
import { Link } from 'react-router-dom';

export default function BScCSITDetails() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
      {/* SEO Meta Tags */}
      <title>B.Sc. CSIT Entrance Exam 2025 – Eligibility, Syllabus & TU Course Structure</title>
      <meta
        name="description"
        content="Complete guide to the B.Sc. CSIT entrance exam under Tribhuvan University. Includes eligibility, exam pattern, syllabus, preparation tips, and full semester-wise TU CSIT course structure from 1st to 8th semester."
      />

      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="lg:w-1/4">
          {/* Sidebar can go here */}
        </aside>

        <div className="lg:w-3/4">
          {/* Page Header */}
          <header className="mb-6 bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              B.Sc. CSIT Entrance Exam 2025 – Complete Guide by Tribhuvan University
            </h1>
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center"
            >
              ← Back to all programs
            </Link>
          </header>

          {/* Entrance Exam Overview */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="bg-blue-600 p-4">
              <h2 className="text-xl font-semibold text-white">
                Tribhuvan University B.Sc. CSIT Entrance Exam Overview
              </h2>
            </div>

            <div className="p-5">
              {/* Eligibility & Exam Pattern */}
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                {/* Eligibility */}
                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                  <h3 className="font-medium text-base mb-2 text-gray-800">
                    B.Sc. CSIT Entrance Exam Eligibility Criteria 2025 (TU)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                      Completed 10+2 Science or equivalent with at least 50% aggregate
                    </li>
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                      Physics and Mathematics compulsory at +2 level
                    </li>
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                      Minimum 'C' grade in all subjects
                    </li>
                  </ul>
                </div>

                {/* Exam Pattern */}
                <div className="bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
                  <h3 className="font-medium text-base mb-2 text-gray-800">
                    B.Sc. CSIT Entrance Exam Pattern & Marking Scheme
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                      Duration: 2 hours
                    </li>
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                      Total Questions: 100 MCQs
                    </li>
                    <li className="pl-3 relative before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-blue-500 before:rounded-full">
                      No negative marking
                    </li>
                  </ul>
                </div>
              </div>

              {/* Entrance Syllabus */}
              <div className="mb-5">
                <h3 className="font-medium text-base mb-3 text-gray-800">
                  Tribhuvan University B.Sc. CSIT Entrance Exam Syllabus – Physics, Chemistry, Mathematics & Computer
                </h3>
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

              {/* Preparation Tips */}
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400 mb-8">
                <h3 className="font-medium text-base mb-2 text-gray-800">
                  B.Sc. CSIT Entrance Preparation Tips & Study Strategy
                </h3>
                <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                  <li>Thoroughly complete the +2 Physics, Chemistry, and Math syllabus</li>
                  <li>Practice previous 5 years' entrance question papers</li>
                  <li>Focus on time management – aim for 1 minute per question</li>
                  <li>Take regular mock tests to assess preparation level</li>
                </ol>
              </div>

              {/* Semester-wise Syllabus */}
              <div>
                <h3 className="font-medium text-lg mb-4 text-gray-800">
                  B.Sc. CSIT Full Semester-wise Syllabus (1st to 8th Semester) – Tribhuvan University
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { sem: "1st Semester", courses: ["Introduction to Information Technology", "C Programming", "Digital Logic", "Mathematics I", "Physics"] },
                    { sem: "2nd Semester", courses: ["Discrete Structures", "Object Oriented Programming (C++)", "Microprocessor", "Mathematics II", "Statistics I"] },
                    { sem: "3rd Semester", courses: ["Data Structures and Algorithms", "Numerical Methods", "Computer Architecture", "Computer Graphics", "Statistics II"] },
                    { sem: "4th Semester", courses: ["Theory of Computation", "Operating Systems", "Database Management System", "Computer Networks", "Artificial Intelligence"] },
                    { sem: "5th Semester", courses: ["Design and Analysis of Algorithms", "System Analysis and Design", "Cryptography", "Simulation and Modelling", "Web Technology"] },
                    { sem: "6th Semester", courses: ["Software Engineering", "Compiler Design", "Data Mining", "Wireless Networking", "Elective I"] },
                    { sem: "7th Semester", courses: ["Advanced Database", "Image Processing", "Network Programming", "Project Work I", "Elective II"] },
                    { sem: "8th Semester", courses: ["Information Security", "Cloud Computing", "Parallel and Distributed Computing", "Project Work II", "Elective III"] }
                  ].map((semester, idx) => (
                    <div key={idx} className="bg-white p-4 rounded border border-gray-200">
                      <h4 className="font-semibold text-blue-700 mb-2 text-sm">{semester.sem}</h4>
                      <ul className="list-disc list-inside text-gray-600 text-xs space-y-1">
                        {semester.courses.map((course, i) => (
                          <li key={i}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
