import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const getTitle = () => {
    const path = location.pathname.replace('/', '');
    if (path === '') return 'Dashboard';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <header className="flex items-center justify-between h-20 px-6 bg-white border-b">
      <h2 className="text-3xl font-semibold text-gray-800">{getTitle()}</h2>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700">
          <Bell className="w-6 h-6" />
        </button>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=admin" alt="Admin Avatar" />
          <span className="ml-3 font-semibold text-gray-700">Admin User</span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </div>
      </div>
    </header>
  );
};

export default Header;
