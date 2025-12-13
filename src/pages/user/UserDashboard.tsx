import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserDashboard: React.FC = () => {
  const stats = [
    { label: 'Upcoming Classes', value: '3', tone: 'text-emerald-600 bg-emerald-50' },
    { label: 'Tests Scheduled', value: '2', tone: 'text-sky-600 bg-sky-50' },
    { label: 'Pending Fees', value: '₹ 0', tone: 'text-amber-600 bg-amber-50' },
    { label: 'Overall Progress', value: '78%', tone: 'text-purple-600 bg-purple-50' },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        {/* Header */}
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Student Dashboard (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            This is a sample dashboard layout for a student. Later you can replace the dummy numbers with real
            analytics and schedules from your backend.
          </p>
        </section>

        {/* Stat cards */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className={`rounded-lg border border-gray-100 bg-white shadow-sm p-3 md:p-4 flex flex-col ${item.tone}`}
            >
              <span className="text-[11px] md:text-xs font-medium text-gray-600">{item.label}</span>
              <span className="mt-1 text-base md:text-xl font-semibold">{item.value}</span>
            </div>
          ))}
        </section>

        {/* Schedule + reports layout */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-6">
            <h2 className="text-md md:text-lg font-semibold text-gray-900">Today&apos;s Plan</h2>
            <ul className="mt-3 space-y-2 text-xs md:text-sm text-gray-700">
              <li>• Physics – Mechanics (Live class, 5:00–7:00 PM)</li>
              <li>• Chemistry – Organic revision (Recorded video)</li>
              <li>• NEET full-syllabus test (OMR) – Sunday</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-6">
            <h2 className="text-md md:text-lg font-semibold text-gray-900">Quick Notes</h2>
            <p className="mt-2 text-xs md:text-sm text-gray-700">
              Use this card to show alerts – like upcoming fee due dates, expiring offers, or important announcements
              from your coaching centre.
            </p>
          </div>
        </section>
      </main>
    </UserLayout>
  );
};

export default UserDashboard;
