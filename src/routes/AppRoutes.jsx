import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../page/Home';
import Signup from '../page/auth/Signup';
import Login from '../page/auth/Login';
import MedicalPage from '../page/medical/medicalpage';
import MCQUploadForm from '../page/medical/uploadMcq';
import IOE from '../page/IOE/IOE';
import PMCQApp from '../page/medical/medicalPractice';
import BscCsit from '../page/Bsc.Csit/csit';
import Pcsit from '../page/Bsc.Csit/csit.practice';


export default function AppRoutes() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      // Define routes for different faculties and pages
      <Route path="/MCQUploadForm" element={<MCQUploadForm />} />
      <Route path="/medical" element={<MedicalPage />} />
      <Route path='/engineering' element={<IOE />} />
      <Route path='/csit' element={<BscCsit />} />

      // Medical Practice Route
      <Route path='/Pmedical' element={<PMCQApp/>} />
      <Route path='/Pcsit' element={<Pcsit />} />
      
      {/* Add more routes as needed */}

    
      
    
    </Routes>
    </BrowserRouter>
  );
}