import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserExamsTestSeries: React.FC = () => {
  const tests = [
    {
      name: 'NEET Grand Test Series',
      pattern: 'Full syllabus, OMR based',
      frequency: 'Every Sunday',
    },
    {
      name: 'JEE Mains Chapter-wise Tests',
      pattern: 'Topic-wise online tests',
      frequency: '2–3 times per week',
    },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Test Series (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Use this page to show NEET / JEE / CUET test series schedules, patterns and analysis details.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tests.map((t) => (
            <div key={t.name} className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col">
              <h2 className="text-sm md:text-base font-semibold text-gray-900">{t.name}</h2>
              <p className="mt-1 text-xs md:text-sm text-gray-600">Pattern: {t.pattern}</p>
              <p className="mt-1 text-xs md:text-sm text-gray-600">Frequency: {t.frequency}</p>
            </div>
          ))}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserExamsTestSeries;
