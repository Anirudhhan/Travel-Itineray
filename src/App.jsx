import { useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div data-theme="light">
      <Routes>
        <Route path='/' element={<Onboarding />} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
