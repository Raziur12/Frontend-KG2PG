import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserExamsReports: React.FC = () => {
  const subjects = [
    { name: 'Physics', score: '72%', color: 'bg-sky-100 text-sky-700' },
    { name: 'Chemistry', score: '81%', color: 'bg-emerald-100 text-emerald-700' },
    { name: 'Biology', score: '88%', color: 'bg-amber-100 text-amber-700' },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Progress &amp; Reports (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Use this page to show performance graphs, test scores and rank analysis for the student.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {subjects.map((s) => (
            <div
              key={s.name}
              className={`rounded-lg border border-gray-100 bg-white shadow-sm p-4 flex flex-col ${s.color}`}
            >
              <span className="text-xs font-medium text-gray-700">{s.name}</span>
              <span className="mt-2 text-xl font-semibold">{s.score}</span>
              <span className="mt-1 text-[11px] text-gray-600">Sample recent average score</span>
            </div>
          ))}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserExamsReports;
