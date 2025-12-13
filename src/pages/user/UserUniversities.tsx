import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserUniversities: React.FC = () => {
  const universities = [
    {
      name: 'All India Institute of Medical Sciences',
      city: 'New Delhi',
      seats: '150 MBBS seats',
      fees: 'Approx. ₹1.6 Lakh / year',
    },
    {
      name: 'Grant Medical College',
      city: 'Mumbai, Maharashtra',
      seats: '200 MBBS seats',
      fees: 'Approx. ₹1.2 Lakh / year',
    },
    {
      name: 'Madras Medical College',
      city: 'Chennai, Tamil Nadu',
      seats: '250 MBBS seats',
      fees: 'Approx. ₹90,000 / year',
    },
  ];

  return (
    <UserLayout>
      <section className="mb-6">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Medical Colleges (India)</h1>
        <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl">
          Demo list of well-known Indian medical colleges. Use this layout to show real college data with filters and
          seat / fee details.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {universities.map((u) => (
          <div key={u.name} className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
            <h2 className="text-sm md:text-base font-semibold text-gray-900">{u.name}</h2>
            <p className="mt-1 text-xs md:text-sm text-gray-600">{u.city}</p>
            <p className="mt-2 text-xs md:text-sm text-gray-700">{u.seats}</p>
            <p className="mt-1 text-xs text-gray-500">{u.fees}</p>
          </div>
        ))}
      </section>
    </UserLayout>
  );
};

export default UserUniversities;
