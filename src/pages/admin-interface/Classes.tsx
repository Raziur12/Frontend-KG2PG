import React from 'react';
import { Plus } from 'lucide-react';

const Classes: React.FC = () => {
  const classes = [
    { name: 'Advanced Physics - Kinematics', teacher: 'Arun Kumar', subject: 'Physics (JEE)', time: '2025-12-05 16:00', status: 'Upcoming' },
    { name: 'NEET Biology - Cell Structure', teacher: 'Priya Sharma', subject: 'Biology (NEET)', time: '2025-12-02 10:00', status: 'Completed' },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Upcoming':
        return 'px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full';
      case 'Completed':
        return 'px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md w-full">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Manage Classes</h3>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
            <Plus className="w-4 h-4 mr-2" />
            Schedule Class
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Class Name</th>
                <th scope="col" className="px-6 py-3">Teacher</th>
                <th scope="col" className="px-6 py-3">Subject</th>
                <th scope="col" className="px-6 py-3">Scheduled Time</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((c, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{c.name}</td>
                  <td className="px-6 py-4">{c.teacher}</td>
                  <td className="px-6 py-4">{c.subject}</td>
                  <td className="px-6 py-4">{c.time}</td>
                  <td className="px-6 py-4">
                    <span className={getStatusClass(c.status)}>{c.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 hover:underline">View Details</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Classes;
