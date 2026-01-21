import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import UserLayout from '../../components/UserLayout';
import type { Student } from '../../types/student';

const UserStudentsList: React.FC = () => {
  const [q, setQ] = useState('');

  const students: Student[] = [
    {
      id: 'amit-singh',
      name: 'Amit Singh',
      email: 'amit.s@example.com',
      phone: '+91 98765 43210',
      grade: 'Class 12',
      targetExams: ['NEET'],
      goals: ['MBBS in India'],
      address: { city: 'Pune', state: 'Maharashtra', country: 'India' },
      createdAt: new Date().toISOString(),
    },
    {
      id: 'sara-khan',
      name: 'Sara Khan',
      email: 'sara.k@example.com',
      phone: '+91 91234 56789',
      grade: 'Class 10',
      goals: ['Strong foundation in Maths & Science'],
      address: { city: 'Lucknow', state: 'Uttar Pradesh', country: 'India' },
      createdAt: new Date().toISOString(),
    },
    {
      id: 'rohit-verma',
      name: 'Rohit Verma',
      email: 'rohit.v@example.com',
      phone: '+91 90123 45678',
      grade: 'Class 11',
      targetExams: ['JEE'],
      goals: ['IIT – Computer Science'],
      address: { city: 'Delhi', state: 'Delhi', country: 'India' },
      createdAt: new Date().toISOString(),
    },
  ];

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return students;
    return students.filter((s) => {
      const hay = [s.name, s.grade ?? '', (s.targetExams ?? []).join(' '), s.address?.city ?? ''].join(' ').toLowerCase();
      return hay.includes(term);
    });
  }, [q, students]);

  return (
    <UserLayout>
      <main className="space-y-8 kg-fade-in">
        <section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Students List</h1>
              <p className="mt-2 text-sm md:text-base text-slate-600 max-w-3xl">
                Demo list of students. Click any card to open the student profile.
              </p>
            </div>
            <div className="w-full md:w-[360px]">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by name, class, exam, city..."
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((s) => (
            <Link
              key={s.id}
              to={`/user/students/profile/${s.id}`}
              className="group bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="h-12 w-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold">
                  {s.name
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>
                <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                  {s.grade ?? '—'}
                </span>
              </div>

              <h2 className="mt-3 text-sm md:text-base font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                {s.name}
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {(s.targetExams ?? []).slice(0, 2).map((e) => (
                  <span
                    key={e}
                    className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700"
                  >
                    {e}
                  </span>
                ))}
                <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                  {s.address?.city ?? '—'}
                </span>
              </div>

              <div className="mt-3 text-[12px] text-slate-600">
                <p>
                  <span className="font-semibold text-slate-700">Goals:</span> {(s.goals ?? []).slice(0, 1).join(', ') || '—'}
                </p>
              </div>
            </Link>
          ))}

          {filtered.length === 0 && (
            <div className="md:col-span-3 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">
              No students found for “{q}”.
            </div>
          )}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserStudentsList;
