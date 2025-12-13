import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import { adminRoutes } from './routes/AdminRoutes';
import { userRoutes } from './routes/UserRoutes';

const App: React.FC = () => {
  return (
    <Routes>
      {/* Default route: show signin */}
      <Route path="/" element={<Signin />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

      {/* Admin routes */}
      {adminRoutes}

      {/* User routes */}
      {userRoutes}

      {/* Fallback: unknown URLs go to signin */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
