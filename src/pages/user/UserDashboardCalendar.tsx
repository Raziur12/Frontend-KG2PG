import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserDashboardCalendar: React.FC = () => {
  const items = [
    { date: 'Mon', detail: 'Physics – Mechanics (5:00–7:00 PM)' },
    { date: 'Tue', detail: 'Chemistry – Organic revision (6:00–8:00 PM)' },
    { date: 'Wed', detail: 'Biology – Human Physiology (5:00–7:00 PM)' },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Class Calendar (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Use this page to show upcoming classes, tests and counselling sessions in a calendar or list view.
          </p>
        </section>

        <section className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-6">
          <ul className="space-y-2 text-xs md:text-sm text-gray-700">
            {items.map((i) => (
              <li key={i.date} className="flex items-start gap-3">
                <span className="mt-[2px] inline-flex h-6 min-w-[2.5rem] items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
                  {i.date}
                </span>
                <span>{i.detail}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </UserLayout>
  );
};

export default UserDashboardCalendar;
