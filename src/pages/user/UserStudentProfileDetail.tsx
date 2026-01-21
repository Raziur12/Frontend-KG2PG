import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UserLayout from '../../components/UserLayout';
import type { Student } from '../../types/student';

const STUDENTS: Student[] = [
  {
    id: 'amit-singh',
    name: 'Amit Singh',
    email: 'amit.s@example.com',
    phone: '+91 98765 43210',
    grade: 'Class 12',
    targetExams: ['NEET'],
    goals: ['MBBS in India'],
    guardianName: 'Rajesh Singh',
    guardianContact: { phone: '+91 90000 11111', whatsapp: '+91 90000 11111' },
    address: { city: 'Pune', state: 'Maharashtra', country: 'India' },
    enrollments: [
      {
        id: 'neet-target-2026',
        type: 'course',
        title: 'NEET Target Batch 2026',
        startDate: '2025-06-01',
        status: 'active',
      },
    ],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'sara-khan',
    name: 'Sara Khan',
    email: 'sara.k@example.com',
    phone: '+91 91234 56789',
    grade: 'Class 10',
    goals: ['Strong foundation in Maths & Science'],
    guardianName: 'Farha Khan',
    guardianContact: { phone: '+91 92222 33333', whatsapp: '+91 92222 33333' },
    address: { city: 'Lucknow', state: 'Uttar Pradesh', country: 'India' },
    enrollments: [
      {
        id: 'foundation-10',
        type: 'class',
        title: 'Class 10 Foundation – Evening',
        startDate: '2025-04-01',
        status: 'active',
      },
    ],
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
    guardianName: 'Anjali Verma',
    guardianContact: { phone: '+91 91111 22222', whatsapp: '+91 91111 22222' },
    address: { city: 'Delhi', state: 'Delhi', country: 'India' },
    enrollments: [
      {
        id: 'jee-foundation',
        type: 'course',
        title: 'JEE Foundation – Weekend',
        startDate: '2025-07-01',
        status: 'active',
      },
    ],
    createdAt: new Date().toISOString(),
  },
];

const UserStudentProfileDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const student = STUDENTS.find((s) => s.id === id);

  return (
    <UserLayout>
      <main className="space-y-6 kg-fade-in">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/user/students"
              className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Back
            </Link>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">Student Profile</h1>
          </div>
        </div>

        {!student ? (
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">Student not found.</div>
        ) : (
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                {student.name
                  .split(' ')
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join('')}
              </div>

              <div className="flex-1">
                <h2 className="text-lg md:text-xl font-extrabold text-slate-900">{student.name}</h2>
                <p className="mt-1 text-sm text-slate-600">{student.grade ?? '—'}</p>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">EMAIL</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{student.email ?? '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">PHONE</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{student.phone ?? '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">CITY</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{student.address?.city ?? '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">TARGET EXAMS</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{(student.targetExams ?? []).join(', ') || '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3 md:col-span-2">
                    <p className="text-[11px] font-semibold text-slate-500">GOALS</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{(student.goals ?? []).join(', ') || '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3 md:col-span-2">
                    <p className="text-[11px] font-semibold text-slate-500">GUARDIAN</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{student.guardianName ?? '—'}</p>
                    {student.guardianContact?.phone && (
                      <p className="mt-1 text-sm text-slate-700">Phone: {student.guardianContact.phone}</p>
                    )}
                    {student.guardianContact?.whatsapp && (
                      <p className="mt-1 text-sm text-slate-700">WhatsApp: {student.guardianContact.whatsapp}</p>
                    )}
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3 md:col-span-2">
                    <p className="text-[11px] font-semibold text-slate-500">ENROLLMENTS</p>
                    {student.enrollments && student.enrollments.length > 0 ? (
                      <div className="mt-2 flex flex-col gap-2">
                        {student.enrollments.map((e) => (
                          <div key={e.id} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
                            <div className="flex items-center justify-between gap-2">
                              <p className="text-sm font-semibold text-slate-900">{e.title}</p>
                              {e.status && (
                                <span className="inline-flex items-center rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-700 border border-slate-200">
                                  {e.status}
                                </span>
                              )}
                            </div>
                            <p className="mt-1 text-xs text-slate-600">Type: {e.type}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="mt-2 text-sm text-slate-700">—</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </UserLayout>
  );
};

export default UserStudentProfileDetail;
