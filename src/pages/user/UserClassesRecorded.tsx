import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserClassesRecorded: React.FC = () => {
  const recordings = [
    {
      title: 'Mechanics – Full Chapter',
      subject: 'Physics',
      length: '1h 20m',
      platform: 'Recorded via Zoom',
    },
    {
      title: 'Organic Basics – Part 1',
      subject: 'Chemistry',
      length: '45m',
      platform: 'Recorded via Google Meet',
    },
    {
      title: 'Plant Physiology Overview',
      subject: 'Biology',
      length: '55m',
      platform: 'KG2PG Player',
    },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Recorded Courses (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Nicely formatted list of recorded class videos with duration and subject tags.
          </p>
        </section>

        <section className="bg-white rounded-lg border border-gray-100 shadow-sm divide-y divide-gray-100 text-xs md:text-sm text-gray-700">
          {recordings.map((r) => (
            <div key={r.title} className="px-4 md:px-6 py-3 flex items-center justify-between gap-3">
              <div>
                <p className="font-medium text-gray-900">{r.title}</p>
                <p className="text-[11px] text-indigo-600 font-semibold">{r.subject}</p>
                <p className="mt-1 text-[11px] text-emerald-600 font-semibold">{r.platform}</p>
              </div>
              <span className="text-[11px] text-gray-500">{r.length}</span>
            </div>
          ))}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserClassesRecorded;
