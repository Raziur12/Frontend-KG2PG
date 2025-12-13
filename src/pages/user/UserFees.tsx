import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserFees: React.FC = () => {
  const rows = [
    {
      program: 'MBBS – Government College (India)',
      duration: '5.5 Years',
      tuition: '₹60,000 / year',
      hostel: '₹30,000 / year',
    },
    {
      program: 'MBBS – Private College (India)',
      duration: '5.5 Years',
      tuition: '₹7,50,000 / year',
      hostel: '₹1,00,000 / year',
    },
    {
      program: 'NEET Classroom Program',
      duration: '1 Year',
      tuition: '₹1,20,000',
      hostel: 'Optional',
    },
  ];

  return (
    <UserLayout>
      <section className="mb-6">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Fees Overview</h1>
        <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl">
          Compare example fee structures for MBBS in India and NEET coaching. These values are sample/demo and should
          be replaced with real fee data from your institute.
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-50 text-xs uppercase text-gray-500">
            <tr>
              <th className="px-4 md:px-6 py-3">Program</th>
              <th className="px-4 md:px-6 py-3">Duration</th>
              <th className="px-4 md:px-6 py-3">Tuition</th>
              <th className="px-4 md:px-6 py-3">Hostel / Stay</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.program} className="border-t border-gray-100 bg-white hover:bg-gray-50">
                <td className="px-4 md:px-6 py-3 font-medium text-gray-900">{row.program}</td>
                <td className="px-4 md:px-6 py-3">{row.duration}</td>
                <td className="px-4 md:px-6 py-3">{row.tuition}</td>
                <td className="px-4 md:px-6 py-3">{row.hostel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </UserLayout>
  );
};

export default UserFees;
