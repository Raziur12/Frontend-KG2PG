import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserClassesCalendar: React.FC = () => {
  const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Class Calendar (Classes View)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            A colorful week strip designed especially for classes. You can later connect it to your real timetable.
          </p>
        </section>

        <section className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-6">
          <div className="grid grid-cols-7 gap-2 text-center text-xs md:text-sm">
            {week.map((day) => (
              <div
                key={day}
                className="rounded-lg border border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100 py-3 flex flex-col items-center justify-center"
              >
                <span className="font-semibold text-slate-800">{day}</span>
                <span className="mt-1 text-[11px] text-emerald-600">Demo class</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </UserLayout>
  );
};

export default UserClassesCalendar;
