import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserTeachersMy: React.FC = () => {
  const myTeachers = [
    { name: 'Dr. Neha Sharma', subject: 'Biology', batch: 'NEET Target – Morning', mode: 'Offline' },
    { name: 'Rahul Mehta', subject: 'Physics', batch: 'NEET Foundation – Evening', mode: 'Offline + Online' },
    { name: 'Anjali Verma', subject: 'Chemistry', batch: 'NEET Integrated – Regular', mode: 'Offline' },
    { name: 'Vikram Rao', subject: 'Mathematics', batch: 'JEE Mains + Advanced – Weekend', mode: 'Offline' },
    { name: 'Pooja Kulkarni', subject: 'Biology', batch: 'NEET Crash Course – Online', mode: 'Online Live' },
    { name: 'Sandeep Gupta', subject: 'Physics', batch: 'Foundation (Class 10) – Evening', mode: 'Offline + Online' },
    { name: 'Meera Iyer', subject: 'Chemistry', batch: 'NEET Target – Evening', mode: 'Offline' },
    { name: 'Amit Desai', subject: 'Mathematics', batch: 'JEE Target – Morning', mode: 'Offline' },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">My Teachers</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Demo view of the teachers linked to the current student. Later this can come from enrolments and batch
            allocations.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {myTeachers.map((t) => (
            <div key={t.name} className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col">
              <h2 className="text-sm md:text-base font-semibold text-gray-900">{t.name}</h2>
              <p className="mt-1 text-xs md:text-sm text-gray-600">{t.subject}</p>
              <p className="mt-1 text-xs md:text-sm text-gray-600">Batch: {t.batch}</p>
              <p className="mt-1 text-[11px] text-gray-500">Mode: {t.mode}</p>
            </div>
          ))}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserTeachersMy;
