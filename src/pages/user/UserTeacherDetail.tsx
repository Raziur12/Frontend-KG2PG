import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UserLayout from '../../components/UserLayout';
import type { Teacher } from '../../types/teacher';

const TEACHERS: Teacher[] = [
  {
    id: 'neha-sharma',
    name: 'Dr. Neha Sharma',
    headline: 'Biology Mentor • NEET Specialist',
    bio: 'MBBS, MD (AIIMS). 10+ years of NEET teaching with strong track record of top ranks. Focus on concept clarity and diagrams.',
    subjects: ['Biology'],
    examPrep: ['NEET'],
    experienceYears: 10,
    qualifications: ['MBBS', 'MD (AIIMS)'],
    languages: ['English', 'Hindi'],
    mode: 'offline',
    address: { city: 'Pune', state: 'Maharashtra', country: 'India' },
    serviceAreas: ['Pune'],
    fee: { min: 800, max: 1500, currency: 'INR', unit: 'hour' },
    rating: { average: 4.8, count: 120 },
    verified: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'rahul-mehta',
    name: 'Rahul Mehta',
    headline: 'Physics Faculty • Mechanics & Electricity',
    bio: 'B.Tech (IIT). Loves using real-life examples and visualisation to teach physics.',
    subjects: ['Physics'],
    examPrep: ['NEET', 'JEE'],
    experienceYears: 8,
    qualifications: ['B.Tech (IIT)'],
    languages: ['English', 'Hindi'],
    mode: 'hybrid',
    address: { city: 'Kota', state: 'Rajasthan', country: 'India' },
    serviceAreas: ['Kota', 'Online'],
    fee: { min: 700, max: 1400, currency: 'INR', unit: 'hour' },
    rating: { average: 4.6, count: 95 },
    verified: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'anjali-verma',
    name: 'Anjali Verma',
    headline: 'Chemistry Faculty • Organic Made Easy',
    bio: 'M.Sc. Chemistry. 7+ years of coaching students for NEET and JEE mains.',
    subjects: ['Chemistry'],
    examPrep: ['NEET', 'JEE'],
    experienceYears: 7,
    qualifications: ['M.Sc. Chemistry'],
    languages: ['English', 'Hindi'],
    mode: 'offline',
    address: { city: 'Delhi', state: 'Delhi', country: 'India' },
    serviceAreas: ['Delhi'],
    fee: { min: 600, max: 1200, currency: 'INR', unit: 'hour' },
    rating: { average: 4.5, count: 80 },
    verified: true,
    createdAt: new Date().toISOString(),
  },
];

const UserTeacherDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const teacher = TEACHERS.find((t) => t.id === id);

  return (
    <UserLayout>
      <main className="space-y-6 kg-fade-in">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/user/teachers"
              className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Back
            </Link>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">Teacher Details</h1>
          </div>
        </div>

        {!teacher ? (
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">
            Teacher not found.
          </div>
        ) : (
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                {teacher.name
                  .split(' ')
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join('')}
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h2 className="text-lg md:text-xl font-extrabold text-slate-900">{teacher.name}</h2>
                    {teacher.headline && <p className="text-sm text-slate-600">{teacher.headline}</p>}
                  </div>
                  <div className="flex items-center gap-2">
                    {teacher.verified && (
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                        Verified
                      </span>
                    )}
                    {teacher.rating && (
                      <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-700">
                        {teacher.rating.average.toFixed(1)} / 5 ({teacher.rating.count})
                      </span>
                    )}
                  </div>
                </div>

                {teacher.bio && <p className="mt-3 text-sm text-slate-700 leading-relaxed">{teacher.bio}</p>}

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">SUBJECTS</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{teacher.subjects.join(', ')}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">MODE</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{teacher.mode}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">EXPERIENCE</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {teacher.experienceYears ? `${teacher.experienceYears}+ years` : '—'}
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">CITY</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{teacher.address?.city ?? '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3 md:col-span-2">
                    <p className="text-[11px] font-semibold text-slate-500">FEE RANGE</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {teacher.fee?.min || teacher.fee?.max
                        ? `₹${teacher.fee?.min ?? '—'} - ₹${teacher.fee?.max ?? '—'} / ${teacher.fee?.unit ?? 'session'}`
                        : '—'}
                    </p>
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

export default UserTeacherDetail;
