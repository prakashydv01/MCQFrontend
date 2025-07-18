// MUI Components
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// MUI Icons
import Computer from '@mui/icons-material/Computer';
import { Link } from 'react-router-dom';

const faculties = [
  { 
    id: 'loksewa/computer-operator', 
    name: 'Computer Operator', 
    fullName: 'Lok Sewa Computer Operator Exam', 
    icon: <Computer fontSize="large" />, 
    color: 'text-green-500', 
    count: 580,
    description: 'Complete preparation for Public Service Commission Computer Operator exams'
  },
];

export default function FacultyPSC() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="py-16 px-4 bg-gray-900">
      <Typography 
        variant="h3" 
        className="text-center mb-2 font-bold text-white  px-4 mt-6"
      >
        Lok Sewa Aayog Exam Preparation
      </Typography>
      
      <Typography 
        variant="subtitle1" 
        className="text-center mb-12 text-gray-400 px-4 mt-8"
      >
        Comprehensive practice materials for Nepal Public Service Commission exams
      </Typography>

      <div className="flex flex-wrap gap-8 justify-center max-w-6xl mx-auto mt-10">
        {faculties.map((faculty) => (
          <Link
            key={faculty.name}
            to={`/${faculty.id}`}
            className={`${isMobile ? 'w-full' : 'w-72'} p-8 border border-gray-700 rounded-xl text-center no-underline text-current flex flex-col items-center bg-gray-800 hover:-translate-y-1 hover:shadow-lg hover:border-green-500 hover:bg-gray-700 transition-all duration-300`}
          >
            <div className={`${faculty.color} mb-6 p-3 rounded-full bg-gray-700`}>
              {faculty.icon}
            </div>
            <Typography variant="h5" className="font-bold mb-2 text-white">
              {faculty.name}
            </Typography>
            <Typography variant="body2" className="mb-4 text-gray-400">
              {faculty.fullName}
            </Typography>
            <Typography variant="body1" className="mb-6 italic text-gray-300">
              {faculty.description}
            </Typography>
            <div className="mt-auto px-3 py-1.5 rounded-md bg-gray-700 text-white">
              <Typography variant="body2">
                {faculty.count}+ Practice Questions
              </Typography>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center px-4 mt-10">

  <Typography 
    variant="body2"
    className="text-center text-gray-400 max-w-4xl"
  >
    Trusted by thousands of candidates preparing for Nepal Public Service Commission (Lok Sewa Aayog) exams. 
    Our practice materials include previous year questions, mock tests, and detailed solutions 
    for Computer Operator, Assistant Computer, and Office Assistant positions.
  </Typography>
</div>


    </div>
  );
}