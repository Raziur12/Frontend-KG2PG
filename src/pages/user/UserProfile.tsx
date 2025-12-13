import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserProfile: React.FC = () => {
  const enrollments = [
    {
      course: 'NEET Classroom Program',
      status: 'Active',
      center: 'Pune (Main Branch)',
      batch: 'Evening Batch',
    },
  ];

  return (
    <UserLayout>
      <section className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6">
          <h1 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Profile</h1>
          <div className="space-y-2 text-sm text-gray-700">
            <p><span className="font-medium">Name:</span> Amit Singh</p>
            <p><span className="font-medium">Email:</span> amit.s@example.com</p>
            <p><span className="font-medium">Phone:</span> +91 98765 43210</p>
            <p><span className="font-medium">City:</span> Pune, Maharashtra</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6 flex items-center justify-center text-sm text-gray-500">
          Demo profile UI – connect to real student data later.
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6">
        <h2 className="text-md md:text-lg font-semibold text-gray-900 mb-3">Current Enrolment</h2>
        <div className="space-y-3 text-sm text-gray-700">
          {enrollments.map((item) => (
            <div key={item.course} className="border border-gray-100 rounded-md p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <p className="font-medium text-gray-900">{item.course}</p>
                <p className="text-xs text-gray-500">{item.center} • {item.batch}</p>
              </div>
              <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </UserLayout>
  );
};

export default UserProfile;
