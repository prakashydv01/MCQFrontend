// src/pages/tu-entrance/BIT.jsx
import { Link } from 'react-router-dom';

export default function BITDetails() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
      {/* SEO Meta Tags */}
      <title>BIT Entrance Exam 2025 – Eligibility, Syllabus & TU Course Structure</title>
      <meta
        name="description"
        content="Complete guide to the BIT entrance exam under Tribhuvan University. Eligibility, exam pattern, detailed syllabus, preparation tips, and semester-wise TU BIT course structure from 1st to 8th semester."
      />

      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="lg:w-1/4">
          {/* Sidebar placeholder */}
        </aside>

        <div className="lg:w-3/4">
          {/* Page Header */}
          <header className="mb-6 bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              BIT Entrance Exam 2025 – Complete TU Guide
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
            <div className="bg-green-600 p-4">
              <h2 className="text-xl font-semibold text-white">
                Tribhuvan University BIT Entrance Exam Overview
              </h2>
            </div>

            <div className="p-5">
              {/* Eligibility & Exam Pattern */}
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-500">
                  <h3 className="font-medium text-base mb-2 text-gray-800">
                    Eligibility Criteria
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                    <li>10+2 or equivalent in any stream with minimum Second Division.</li>
                    <li>Must have studied English and either Mathematics or Computer.</li>
                    <li>Entrance exam is mandatory for all applicants.</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-md border-l-4 border-green-500">
                  <h3 className="font-medium text-base mb-2 text-gray-800">
                    Exam Pattern
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                    <li>Total 100 marks – 100 MCQs</li>
                    <li>50 marks for English + 50 marks for Mathematics or Computer</li>
                    <li>Duration: 2 hours | No negative marking</li>
                    <li>Minimum passing score: 35%</li>
                  </ul>
                </div>
              </div>

              {/* Entrance Syllabus */}
              <div className="mb-5">
                <h3 className="font-medium text-base mb-3 text-gray-800">
                  BIT Entrance Syllabus
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-medium text-green-700 mb-1 text-sm">English (50 marks)</h4>
                    <p className="text-gray-600 text-xs">
                      Grammar, comprehension, vocabulary, sentence structure, and writing skills.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200">
                    <h4 className="font-medium text-green-700 mb-1 text-sm">Mathematics / Computer (50 marks)</h4>
                    <p className="text-gray-600 text-xs">
                      <strong>Mathematics:</strong> Algebra, Calculus, Coordinate Geometry, Trigonometry, Probability/Statistics.<br/>
                      <strong>Computer:</strong> Fundamentals, Logic Gates, Programming Basics, DBMS, Networking.
                    </p>
                  </div>
                </div>
              </div>

              {/* Preparation Tips */}
              <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400 mb-8">
                <h3 className="font-medium text-base mb-2 text-gray-800">
                  BIT Entrance Preparation Tips
                </h3>
                <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                  <li>Master Grade 11–12 English thoroughly.</li>
                  <li>Focus on Mathematics or Computer based on your choice.</li>
                  <li>Practice previous years’ question papers under timed conditions.</li>
                  <li>Take mock tests to assess speed and accuracy.</li>
                </ol>
              </div>

              {/* Semester-wise Syllabus */}
              <div>
                <h3 className="font-medium text-lg mb-4 text-gray-800">
                  BIT Full Semester-wise Syllabus (1st to 8th Semester)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { sem: "1st Semester", courses: ["Introduction to Information Technology", "C Programming", "Digital Logic", "Basic Mathematics", "Sociology"] },
                    { sem: "2nd Semester", courses: ["Microprocessor and Computer Architecture", "Discrete Structure", "Object Oriented Programming", "Basic Statistics", "Economics"] },
                    { sem: "3rd Semester", courses: ["Data Structures and Algorithms", "Database Management System", "Numerical Methods", "Operating Systems", "Principles of Management"] },
                    { sem: "4th Semester", courses: ["Web Technology I", "Artificial Intelligence", "Systems Analysis and Design", "Network and Data Communications", "Operations Research"] },
                    { sem: "5th Semester", courses: ["Web Technology II", "Software Engineering", "Information Security", "Computer Graphics", "Technical Writing"] },
                    { sem: "6th Semester", courses: ["NET Centric Computing", "Database Administration", "Management Information System", "Research Methodology", "Elective I"] },
                    { sem: "7th Semester", courses: ["Advanced Java Programming", "Software Project Management", "E-commerce", "Project Work", "Elective II"] },
                    { sem: "8th Semester", courses: ["Network and System Administration", "E Governance", "Internship", "Elective III"] }
                  ].map((semester, idx) => (
                    <div key={idx} className="bg-white p-4 rounded border border-gray-200">
                      <h4 className="font-semibold text-green-700 mb-2 text-sm">{semester.sem}</h4>
                      <ul className="list-disc list-inside text-gray-600 text-xs space-y-1">
                        {semester.courses.map((course, i) => (
                          <li key={i}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Article Conclusion */}
              <div className="mt-8 text-gray-700 text-sm space-y-3">
                <h3 className="font-medium text-lg text-gray-800">
                  Why Choose BIT at TU?
                </h3>
                <p>
                  The BIT program at Tribhuvan University offers a comprehensive curriculum designed to provide students with a strong foundation in Information Technology. The program includes core courses in programming, networking, artificial intelligence, and web technologies, along with electives that allow students to specialize in areas such as data mining, cloud computing, and mobile application development.
                </p>
                <p>
                  Graduates of the BIT program are well-equipped to pursue careers in software development, network administration, database management, and other IT-related fields. The combination of theoretical knowledge and practical experience gained through the program ensures that students are prepared to meet the challenges of the rapidly evolving technology landscape.
                </p>
                <p>
                  If you're passionate about technology and eager to make a meaningful impact in the IT industry, the BIT program at TU provides the knowledge, skills, and opportunities to help you succeed.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
