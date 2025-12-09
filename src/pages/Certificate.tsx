import React from 'react';

const Certificate: React.FC = () => {
  const certificates = [
    { student: 'Amit Singh', course: 'MBBS – Government College (India)', status: 'Issued', date: '2025-06-12' },
    { student: 'Sneha Patil', course: 'MBBS – Private College (India)', status: 'Pending', date: '2025-06-18' },
    { student: 'Rohan Gupta', course: 'NEET Crash Course', status: 'Issued', date: '2025-04-01' },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Issued':
        return 'px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full';
      case 'Pending':
        return 'px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full';
      default:
        return '';
    }
  };

  return (
    <div className="w-full space-y-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Certificates</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Student</th>
                <th className="px-6 py-3">Course</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((item, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{item.student}</td>
                  <td className="px-6 py-4">{item.course}</td>
                  <td className="px-6 py-4">
                    <span className={getStatusClass(item.status)}>{item.status}</span>
                  </td>
                  <td className="px-6 py-4">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 text-sm text-gray-700">
        <p className="font-semibold mb-2">Sample Certificate Layout (Preview)</p>
        <p className="text-gray-600">
          You can design your own printable certificate template here (logo, student name, course name, duration,
          signatures etc.). This section currently shows only demo text for UI.
        </p>
      </div>
    </div>
  );
};

export default Certificate;
