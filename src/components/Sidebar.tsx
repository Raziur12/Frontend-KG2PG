import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, GraduationCap, BookOpen, CreditCard, PieChart, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onNavigate: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onNavigate }) => {
  const menuItems = [
    { text: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5 mr-3" />, path: '/app' },
    { text: 'Teachers', icon: <Users className="w-5 h-5 mr-3" />, path: '/app/teachers' },
    { text: 'Students', icon: <GraduationCap className="w-5 h-5 mr-3" />, path: '/app/students' },
    { text: 'Classes', icon: <BookOpen className="w-5 h-5 mr-3" />, path: '/app/classes' },
    { text: 'Payments', icon: <CreditCard className="w-5 h-5 mr-3" />, path: '/app/payments' },
    { text: 'Reports', icon: <PieChart className="w-5 h-5 mr-3" />, path: '/app/reports' },
    { text: 'Settings', icon: <Settings className="w-5 h-5 mr-3" />, path: '/app/settings' },
  ];

  return (
    <aside
      className={
        `fixed inset-y-0 left-0 z-30 w-64 bg-gray-800 text-white flex flex-col transform transition-transform duration-200 ` +
        `lg:static lg:translate-x-0 ` +
        (isOpen ? 'translate-x-0' : '-translate-x-full')
      }
    >
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <h1 className="text-2xl font-bold">KG2PG Admin</h1>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-2 rounded-md ` +
              (isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white')
            }
            onClick={onNavigate}
          >
            {item.icon}
            {item.text}
          </NavLink>
        ))}
      </nav>
      <div className="px-4 py-4 border-t border-gray-700">
        <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white rounded-md">
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
