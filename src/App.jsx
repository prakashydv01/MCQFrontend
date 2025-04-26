import { BrowserRouter, Routes } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import HomePage from './page/Home';


export default function App() {
  return (
    
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}