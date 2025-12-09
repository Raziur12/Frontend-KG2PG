import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Teachers from './pages/Teachers';
import Students from './pages/Students';
import Classes from './pages/Classes';
import Payments from './pages/Payments';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import University from './pages/University';
import Languages from './pages/Languages';
import AbroadExamMbbs from './pages/AbroadExamMbbs';
import Fees from './pages/Fees';
import CollegeProfile from './pages/CollegeProfile';
import Certificate from './pages/Certificate';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Default route: show signin */}
      <Route path="/" element={<Signin />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected app layout under /app */}
      <Route path="/app" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="teachers" element={<Teachers />} />
        <Route path="students" element={<Students />} />
        <Route path="classes" element={<Classes />} />
        <Route path="payments" element={<Payments />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="university" element={<University />} />
        <Route path="languages" element={<Languages />} />
        <Route path="abroad-exam-mbbs" element={<AbroadExamMbbs />} />
        <Route path="fees" element={<Fees />} />
        <Route path="college-profile" element={<CollegeProfile />} />
        <Route path="certificate" element={<Certificate />} />
      </Route>

      {/* Fallback: unknown URLs go to signin */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
