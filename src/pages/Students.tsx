import React from 'react';
import { Plus } from 'lucide-react';

const Students: React.FC = () => {
  const students = [
    { name: 'Amit Singh', email: 'amit.s@example.com', course: 'Class 12 (JEE)', registered: '2025-11-28', status: 'Active' },
    { name: 'Sneha Patil', email: 'sneha.p@example.com', course: 'NEET Repeater', registered: '2025-11-27', status: 'Active' },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active':
        return 'px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md w-full">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Manage Students</h3>
          <div className="flex items-center space-x-2">
            <input type="text" placeholder="Search students..." className="px-3 py-2 border border-gray-300 rounded-md text-sm" />
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
              <Plus className="w-4 h-4 mr-2" />
              Add Student
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Name</th>
                <th scope="col" className="px-6 py-3">Email</th>
                <th scope="col" className="px-6 py-3">Grade/Course</th>
                <th scope="col" className="px-6 py-3">Date Registered</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{student.name}</td>
                  <td className="px-6 py-4">{student.email}</td>
                  <td className="px-6 py-4">{student.course}</td>
                  <td className="px-6 py-4">{student.registered}</td>
                  <td className="px-6 py-4">
                    <span className={getStatusClass(student.status)}>{student.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <a href="#" className="font-medium text-blue-600 hover:underline">View</a>
                    <a href="#" className="font-medium text-red-600 hover:underline">Suspend</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 flex justify-between items-center">
          <span className="text-sm text-gray-700">Showing 1 to 2 of 1204 students</span>
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

export default Students;
