import React from 'react';

const University: React.FC = () => {
  const universities = [
    {
      name: 'All India Institute of Medical Sciences',
      country: 'India',
      city: 'New Delhi',
      seats: 150,
      tuition: '₹1,60,000 / year',
    },
    {
      name: 'Grant Medical College',
      country: 'India',
      city: 'Mumbai',
      seats: 200,
      tuition: '₹1,20,000 / year',
    },
    {
      name: 'Madras Medical College',
      country: 'India',
      city: 'Chennai',
      seats: 250,
      tuition: '₹90,000 / year',
    },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Hero / banner */}
      <div className="relative overflow-hidden rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold">University Directory</h3>
            <p className="mt-2 text-sm text-blue-100 max-w-xl">
              Manage partner universities for MBBS in India – seats, fees, and key details to help students
              choose the right option.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="University campus"
            className="w-full max-w-xs rounded-md shadow-md md:w-56 object-cover"
          />
        </div>
      </div>

      {/* Universities table */}
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h4 className="text-lg font-semibold text-gray-800">Partner Universities</h4>
          <input
            type="text"
            placeholder="Search university..."
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Country</th>
                <th className="px-6 py-3">City</th>
                <th className="px-6 py-3">Total Seats</th>
                <th className="px-6 py-3">Annual Tuition</th>
              </tr>
            </thead>
            <tbody>
              {universities.map((u, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{u.name}</td>
                  <td className="px-6 py-4">{u.country}</td>
                  <td className="px-6 py-4">{u.city}</td>
                  <td className="px-6 py-4">{u.seats}</td>
                  <td className="px-6 py-4">{u.tuition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default University;
