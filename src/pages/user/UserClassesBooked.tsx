import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserClassesBooked: React.FC = () => {
  const booked = [
    { name: 'NEET Physics – Mechanics', date: 'Every Mon, Wed', time: '5:00–7:00 PM', status: 'Active' },
    { name: 'Biology Crash Course', date: 'Weekends', time: '10:00 AM–1:00 PM', status: 'Upcoming' },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">My Booked Classes (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Attractive list of batches the student is enrolled in, with clear status colors.
          </p>
        </section>

        <section className="space-y-3">
          {booked.map((b) => (
            <div key={b.name} className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-6 text-xs md:text-sm text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div>
                <p className="font-semibold text-gray-900">{b.name}</p>
                <p className="mt-1 text-[11px] text-gray-500">{b.date} • {b.time}</p>
              </div>
              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                {b.status}
              </span>
            </div>
          ))}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserClassesBooked;
