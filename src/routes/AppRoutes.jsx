import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../page/Home';
import Signup from '../page/auth/Signup';
import Login from '../page/auth/Login';
import MedicalPage from '../page/medical/medicalpage';
import MCQUploadForm from '../page/medical/uploadMcq';
import IOE from '../page/IOE/IOE';
import PMCQApp from '../page/medical/medicalPractice';
import BscCsit from '../page/Bsc.Csit/csit';


export default function AppRoutes() {
 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/MCQUploadForm" element={<MCQUploadForm />} />
      <Route path="/medical" element={<MedicalPage />} />
      <Route path='/engineering' element={<IOE />} />
      <Route path='/Pmedical' element={<PMCQApp/>} />
      
      <Route path='/csit' element={<BscCsit />} />
      
    
    </Routes>
    </BrowserRouter>
  );
}