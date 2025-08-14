// src/pages/ioe/IOEPrograms.jsx
import { Link } from 'react-router-dom';

export default function IOEProgramsDetails() {
  const programs = [
    {
      name: "Bachelor of Civil Engineering (BCE)",
      eligibility: [
        "10+2 Science with minimum Second Division",
        "Physics, Mathematics, and Chemistry compulsory",
        "Entrance exam required for all applicants"
      ],
      entranceSyllabus: [
        { subject: "Physics", topics: "Mechanics, Heat, Optics, Electricity, Magnetism, Waves, Modern Physics" },
        { subject: "Chemistry", topics: "Physical Chemistry, Inorganic Chemistry, Organic Chemistry, Environmental Chemistry" },
        { subject: "Mathematics", topics: "Algebra, Calculus, Coordinate Geometry, Trigonometry, Probability, Statistics" },
        { subject: "English", topics: "Grammar, Vocabulary, Comprehension, Sentence Structure, Writing Skills" }
      ],
      semesters: [
        { sem: "1st Semester", courses: ["Engineering Drawing I", "Engineering Mathematics I", "Engineering Physics", "Applied Mechanics", "Basic Electrical Engineering", "Computer Programming"] },
        { sem: "2nd Semester", courses: ["Engineering Drawing II", "Engineering Mathematics II", "Engineering Chemistry", "Thermodynamics & Heat Transfer", "Workshop Technology"] },
        { sem: "3rd Semester", courses: ["Engineering Mathematics III", "Object-Oriented Programming", "Electric Circuit Theory", "Electronics Devices & Circuits", "Digital Logic"] },
        { sem: "4th Semester", courses: ["Numerical Methods", "Applied Mathematics", "Instrumentation I", "Microprocessor"] },
        { sem: "5th Semester", courses: ["Structural Analysis I", "Fluid Mechanics I", "Surveying I", "Geotechnical Engineering I", "Transportation Engineering I"] },
        { sem: "6th Semester", courses: ["Structural Analysis II", "Fluid Mechanics II", "Surveying II", "Geotechnical Engineering II", "Transportation Engineering II"] },
        { sem: "7th Semester", courses: ["Structural Design I", "Hydrology & Water Resources", "Environmental Engineering II", "Construction Management"] },
        { sem: "8th Semester", courses: ["Structural Design II", "Project Management", "Professional Practice", "Project Work"] },
      ]
    },
    {
      name: "Bachelor of Electrical Engineering (BEL)",
      eligibility: [
        "10+2 Science with minimum Second Division",
        "Physics, Mathematics, and English compulsory",
        "Entrance exam required"
      ],
      entranceSyllabus: [
        { subject: "Physics", topics: "Mechanics, Heat, Optics, Electricity, Magnetism, Waves, Modern Physics" },
        { subject: "Chemistry", topics: "Physical Chemistry, Inorganic Chemistry, Organic Chemistry, Environmental Chemistry" },
        { subject: "Mathematics", topics: "Algebra, Calculus, Coordinate Geometry, Trigonometry, Probability, Statistics" },
        { subject: "English", topics: "Grammar, Vocabulary, Comprehension, Sentence Structure, Writing Skills" }
      ],
      semesters: [
        { sem: "1st Semester", courses: ["Engineering Drawing I", "Engineering Mathematics I", "Engineering Physics", "Applied Mechanics", "Basic Electrical Engineering", "Computer Programming"] },
        { sem: "2nd Semester", courses: ["Engineering Drawing II", "Engineering Mathematics II", "Basic Electronics Engineering", "Engineering Chemistry", "Thermodynamics & Heat Transfer"] },
        { sem: "3rd Semester", courses: ["Engineering Mathematics III", "Object-Oriented Programming", "Electric Circuit Theory", "Electronics Devices & Circuits", "Digital Logic"] },
        { sem: "4th Semester", courses: ["Numerical Methods", "Applied Mathematics", "Instrumentation I", "Microprocessor"] },
        { sem: "5th Semester", courses: ["Electrical Machines I", "Power Systems I", "Control Systems I", "Signals & Systems", "Electrical Measurements"] },
        { sem: "6th Semester", courses: ["Electrical Machines II", "Power Systems II", "Control Systems II", "Electrical Measurements II", "Microcontrollers"] },
        { sem: "7th Semester", courses: ["Power Electronics", "High Voltage Engineering", "Renewable Energy Systems", "Electrical Design & Estimation"] },
        { sem: "8th Semester", courses: ["Project Work", "Professional Practice", "Seminar"] },
      ]
    },
    {
      name: "Bachelor of Mechanical Engineering (BME)",
      eligibility: [
        "10+2 Science with minimum Second Division",
        "Physics and Mathematics compulsory",
        "Entrance exam required"
      ],
      entranceSyllabus: [
        { subject: "Physics", topics: "Mechanics, Heat, Optics, Electricity, Magnetism, Waves, Modern Physics" },
        { subject: "Chemistry", topics: "Physical Chemistry, Inorganic Chemistry, Organic Chemistry, Environmental Chemistry" },
        { subject: "Mathematics", topics: "Algebra, Calculus, Coordinate Geometry, Trigonometry, Probability, Statistics" },
        { subject: "English", topics: "Grammar, Vocabulary, Comprehension, Sentence Structure, Writing Skills" }
      ],
      semesters: [
        { sem: "1st Semester", courses: ["Engineering Drawing I", "Engineering Mathematics I", "Engineering Physics", "Applied Mechanics", "Basic Electrical Engineering", "Computer Programming"] },
        { sem: "2nd Semester", courses: ["Engineering Drawing II", "Engineering Mathematics II", "Engineering Chemistry", "Thermodynamics & Heat Transfer", "Workshop Technology"] },
        { sem: "3rd Semester", courses: ["Engineering Mathematics III", "Object-Oriented Programming", "Electric Circuit Theory", "Engineering Materials", "Mechanics of Solids"] },
        { sem: "4th Semester", courses: ["Fluid Mechanics I", "Thermodynamics I", "Manufacturing Processes I", "Mechanical Measurements", "Dynamics of Machinery"] },
        { sem: "5th Semester", courses: ["Heat Transfer", "Fluid Mechanics II", "Manufacturing Processes II", "Mechanical Vibrations", "Design of Machine Elements I"] },
        { sem: "6th Semester", courses: ["Thermodynamics II", "Control Engineering", "Design of Machine Elements II", "Project Work I", "Elective I"] },
        { sem: "7th Semester", courses: ["Refrigeration & Air Conditioning", "Power Plant Engineering", "Industrial Engineering", "Project Work II", "Elective II"] },
        { sem: "8th Semester", courses: ["Final Year Project", "Professional Practice", "Elective III", "Seminar"] },
      ]
    }
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
      <title>IOE Programs – Full Entrance & Semester-wise Syllabus</title>
      <meta name="description" content="Complete guide to all IOE programs including entrance eligibility, syllabus, preparation tips, and full semester-wise course structure under Tribhuvan University." />

      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="lg:w-1/4">{/* Sidebar placeholder */}</aside>

        <div className="lg:w-3/4">
          <header className="mb-6 bg-white p-5 rounded-lg shadow-sm border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              IOE Programs – Complete Entrance & Semester-wise Syllabus
            </h1>
            <Link to="/" className="text-blue-600 hover:text-blue-800 text-sm inline-flex items-center">
              ← Back to all programs
            </Link>
          </header>

          {programs.map((program, idx) => (
            <div key={idx} className="mb-10">
              <div className="bg-indigo-600 p-4 rounded-t-lg">
                <h2 className="text-xl font-semibold text-white">{program.name}</h2>
              </div>

              <div className="bg-white p-5 border border-gray-200 rounded-b-lg">
                {/* Eligibility */}
                <div className="mb-5">
                  <h3 className="font-medium text-base mb-2 text-gray-800">Eligibility Criteria</h3>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    {program.eligibility.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Entrance Syllabus */}
                <div className="mb-5">
                  <h3 className="font-medium text-base mb-3 text-gray-800">Entrance Syllabus</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {program.entranceSyllabus.map((subj, i) => (
                      <div key={i} className="bg-gray-50 p-3 rounded-md border border-gray-200">
                        <h4 className="font-semibold text-indigo-700 mb-1 text-sm">{subj.subject}</h4>
                        <p className="text-gray-600 text-xs">{subj.topics}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Semester-wise Syllabus */}
                <div>
                  <h3 className="font-medium text-lg mb-4 text-gray-800">Semester-wise Syllabus (1st to 8th)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {program.semesters.map((semester, sidx) => (
                      <div key={sidx} className="bg-gray-50 p-3 rounded-md border border-gray-200">
                        <h4 className="font-semibold text-indigo-700 mb-2 text-sm">{semester.sem}</h4>
                        <ul className="list-disc list-inside text-gray-700 text-xs space-y-1">
                          {semester.courses.map((course, cidx) => (
                            <li key={cidx}>{course}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Article Conclusion */}
          <div className="mt-8 text-gray-700 text-sm space-y-3">
            <h3 className="font-medium text-lg text-gray-800">Why Choose IOE Programs?</h3>
            <p>
              IOE programs provide a strong theoretical foundation and practical exposure in engineering disciplines. Students gain core knowledge, lab experience, and project-based learning, preparing them for the industry, research, or higher studies.
            </p>
            <p>
              Choosing IOE ensures access to experienced faculty, modern labs, and a comprehensive curriculum aligned with international engineering standards.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
