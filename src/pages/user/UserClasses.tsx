import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserClasses: React.FC = () => {
  const classes = [
    {
      name: 'NEET Foundation – Evening Batch',
      level: 'Class 11',
      mode: 'Offline',
      status: 'Seats available',
    },
    {
      name: 'NEET Target – Morning Batch',
      level: 'Class 12',
      mode: 'Offline + Online',
      status: 'Filling fast',
    },
    {
      name: 'JEE Mains + Advanced – Weekend Batch',
      level: 'Class 11–12',
      mode: 'Offline',
      status: 'New',
    },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Classes Overview</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Demo list of live / offline classes. Later you can connect it to your real batch listing, filters and
            enquiry forms.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {classes.map((c) => (
            <div key={c.name} className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col">
              <h2 className="text-sm md:text-base font-semibold text-gray-900">{c.name}</h2>
              <p className="mt-1 text-xs md:text-sm text-gray-600">{c.level}</p>
              <p className="mt-1 text-xs md:text-sm text-gray-600">Mode: {c.mode}</p>
              <p className="mt-2 text-[11px] font-semibold text-emerald-700">{c.status}</p>
            </div>
          ))}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserClasses;
