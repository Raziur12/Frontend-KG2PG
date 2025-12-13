import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/admin-interface/Dashboard';
import Teachers from './pages/admin-interface/Teachers';
import Students from './pages/admin-interface/Students';
import Classes from './pages/admin-interface/Classes';
import Payments from './pages/admin-interface/Payments';
import Reports from './pages/admin-interface/Reports';
import Settings from './pages/admin-interface/Settings';
import University from './pages/admin-interface/University';
import Languages from './pages/admin-interface/Languages';
import AbroadExamMbbs from './pages/admin-interface/AbroadExamMbbs';
import Fees from './pages/admin-interface/Fees';
import CollegeProfile from './pages/admin-interface/CollegeProfile';
import Certificate from './pages/admin-interface/Certificate';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import UserHome from './pages/user/UserHome';
import UserCourses from './pages/user/UserCourses';
import UserUniversities from './pages/user/UserUniversities';
import UserFees from './pages/user/UserFees';
import UserProfile from './pages/user/UserProfile';

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

      {/* ✅ User routes अलग, root level पर */}
      <Route path="/user" element={<UserHome />} />
      <Route path="/user/courses" element={<UserCourses />} />
      <Route path="/user/universities" element={<UserUniversities />} />
      <Route path="/user/fees" element={<UserFees />} />
      <Route path="/user/profile" element={<UserProfile />} />

      {/* Fallback: unknown URLs go to signin */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
