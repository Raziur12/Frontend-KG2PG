import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-100 w-full overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onNavigate={handleCloseSidebar} />

      {/* Overlay for mobile when sidebar open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-40 lg:hidden"
          onClick={handleCloseSidebar}
        />
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 z-10 h-full">
        <Header onMenuClick={handleToggleSidebar} />
        <main className="flex-1 w-full overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
