import React from 'react';
import { Plus } from 'lucide-react';

const Teachers: React.FC = () => {
  const teachers = [
    { name: 'Arun Kumar', email: 'arun.k@example.com', phone: '+91 9876543210', subject: 'Physics (JEE)', status: 'Verified' },
    { name: 'Priya Sharma', email: 'priya.s@example.com', phone: '+91 9123456789', subject: 'Biology (NEET)', status: 'Pending' },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Verified':
        return 'px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full';
      case 'Pending':
        return 'px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md w-full">
      <div className="px-6 py-4 border-b flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800">Manage Teachers</h3>
        <div className="flex items-center space-x-2">
          <input type="text" placeholder="Search teachers..." className="px-3 py-2 border border-gray-300 rounded-md text-sm" />
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Teacher
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Phone</th>
              <th scope="col" className="px-6 py-3">Subject</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{teacher.name}</td>
                <td className="px-6 py-4">{teacher.email}</td>
                <td className="px-6 py-4">{teacher.phone}</td>
                <td className="px-6 py-4">{teacher.subject}</td>
                <td className="px-6 py-4">
                  <span className={getStatusClass(teacher.status)}>{teacher.status}</span>
                </td>
                <td className="px-6 py-4 text-right space-x-2">
                  <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                  <a href="#" className="font-medium text-red-600 hover:underline">Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="text-sm text-gray-700">Showing 1 to 2 of 32 teachers</span>
        <div className="inline-flex -space-x-px text-sm">
          <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Previous</a>
          <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
          <a href="#" className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">2</a>
          <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Next</a>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
