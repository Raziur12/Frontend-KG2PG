// import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/admin-interface/Dashboard';
import Teachers from '../pages/admin-interface/Teachers';
import Students from '../pages/admin-interface/Students';
import Classes from '../pages/admin-interface/Classes';
import Payments from '../pages/admin-interface/Payments';
import Reports from '../pages/admin-interface/Reports';
import Settings from '../pages/admin-interface/Settings';
import University from '../pages/admin-interface/University';
import Languages from '../pages/admin-interface/Languages';
import AbroadExamMbbs from '../pages/admin-interface/AbroadExamMbbs';
import Fees from '../pages/admin-interface/Fees';
import CollegeProfile from '../pages/admin-interface/CollegeProfile';
import Certificate from '../pages/admin-interface/Certificate';

export const adminRoutes = (
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
);
