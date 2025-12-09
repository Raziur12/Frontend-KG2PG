import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bell, ChevronDown, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const location = useLocation();
  const getTitle = () => {
    const path = location.pathname.replace('/', '');
    if (path === '') return 'Dashboard';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <header className="flex items-center justify-between h-20 px-4 sm:px-6 bg-white border-b w-full sticky top-0 z-20">
      <div className="flex items-center">
        {/* Mobile menu button */}
        <button
          type="button"
          className="mr-3 text-gray-600 hover:text-gray-800 lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="w-6 h-6" />
        </button>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">{getTitle()}</h2>
      </div>
      <div className="flex items-center space-x-4 pr-2 sm:pr-6">
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
