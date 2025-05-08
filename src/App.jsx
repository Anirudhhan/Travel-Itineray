import { Routes, Route, Navigate } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard';
import { useAuthStore } from "./store/useAuthStore";


function App() {
      const { darkmode } = useAuthStore();
  
  return (
    <div data-theme= {darkmode ? "dark" : "light"}>
      <Routes>
        <Route path='/' element={<Onboarding />} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
