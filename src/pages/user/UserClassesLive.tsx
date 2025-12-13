import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserClassesLive: React.FC = () => {
  const sessions = [
    {
      title: 'Live NEET Physics – Mechanics',
      time: 'Today • 5:00–7:00 PM',
      platform: 'Zoom Live Session',
      color: 'border-emerald-500 text-emerald-600',
    },
    {
      title: 'Live Biology – Human Physiology',
      time: 'Tomorrow • 6:00–8:00 PM',
      platform: 'Google Meet',
      color: 'border-sky-500 text-sky-600',
    },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Live Classes (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Highlight upcoming live sessions with attractive accent colors so students can quickly see what&apos;s next.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sessions.map((s) => (
            <div
              key={s.title}
              className={`bg-white rounded-lg border-2 shadow-sm p-4 md:p-5 text-xs md:text-sm ${s.color}`}
            >
              <p className="text-sm md:text-base font-semibold text-gray-900">{s.title}</p>
              <p className="mt-1 text-[11px] md:text-xs text-gray-600">{s.time}</p>
              <p className="mt-1 text-[11px] md:text-xs font-semibold text-purple-600">{s.platform}</p>
            </div>
          ))}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserClassesLive;
