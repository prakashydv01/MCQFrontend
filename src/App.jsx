// src/App.jsx
import AppRoutes from './routes/AppRoutes';
import './index.css'; // Ensure this exists

export default function App() {
  return (
    <div className="container"> {/* Add this line */}
      <AppRoutes />
    </div>
  );
}