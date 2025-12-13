import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserExamsJee: React.FC = () => {
  const programs = [
    {
      name: 'JEE Mains + Advanced (2 Year Integrated)',
      details: 'Class 11–12 integrated classroom program with regular tests.',
      mode: 'Offline + Online',
    },
    {
      name: 'JEE Target (Dropper Batch)',
      details: 'Focused revision, daily practice sheets and full-syllabus tests.',
      mode: 'Offline',
    },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-sm px-4 py-6 md:px-8 md:py-10">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">JEE Courses</h1>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-indigo-50/90">
            Demo page for JEE Mains + Advanced preparation. Replace with real course structures, timings and
            scholarship details for your centre.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {programs.map((p) => (
            <div key={p.name} className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col">
              <h2 className="text-sm md:text-base font-semibold text-gray-900">{p.name}</h2>
              <p className="mt-1 text-xs md:text-sm text-gray-600">{p.details}</p>
              <p className="mt-2 text-[11px] font-semibold text-gray-700">Mode: {p.mode}</p>
            </div>
          ))}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserExamsJee;
