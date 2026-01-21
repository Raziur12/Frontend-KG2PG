import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UserLayout from '../../components/UserLayout';
import type { University } from '../../types/university';

const UNIVERSITIES: University[] = [
  {
    id: 'du-delhi',
    name: 'University of Delhi',
    shortName: 'DU',
    type: 'central',
    description: 'Demo university profile. Replace with real departments, admissions, fees and campus details.',
    departments: ['Science', 'Commerce', 'Arts', 'Engineering'],
    courses: ['B.Sc', 'B.Com', 'BA', 'M.Sc', 'MBA'],
    address: { city: 'New Delhi', state: 'Delhi', country: 'India' },
    feeRange: { min: 10000, max: 200000, currency: 'INR', unit: 'course' },
    accreditations: ['NAAC'],
    rankings: ['Top Central University'],
    rating: { average: 4.6, count: 980 },
    createdAt: new Date().toISOString(),
  },
  {
    id: 'mum-university',
    name: 'University of Mumbai',
    shortName: 'MU',
    type: 'state',
    description: 'State university with broad programs and affiliated colleges.',
    departments: ['Science', 'Commerce', 'Arts', 'Management'],
    courses: ['B.Sc', 'B.Com', 'BA', 'M.Com', 'MBA'],
    address: { city: 'Mumbai', state: 'Maharashtra', country: 'India' },
    feeRange: { min: 12000, max: 250000, currency: 'INR', unit: 'course' },
    accreditations: ['NAAC'],
    rankings: ['Top State University'],
    rating: { average: 4.4, count: 720 },
    createdAt: new Date().toISOString(),
  },
  {
    id: 'anna-university',
    name: 'Anna University',
    shortName: 'AU',
    type: 'state',
    description: 'Engineering-focused university with strong academics and placements.',
    departments: ['Engineering', 'Technology', 'Management'],
    courses: ['B.E', 'B.Tech', 'M.E', 'MBA'],
    address: { city: 'Chennai', state: 'Tamil Nadu', country: 'India' },
    feeRange: { min: 15000, max: 300000, currency: 'INR', unit: 'course' },
    accreditations: ['NBA', 'NAAC'],
    rankings: ['Top Engineering University'],
    rating: { average: 4.5, count: 640 },
    createdAt: new Date().toISOString(),
  },
];

const UserUniversityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const university = UNIVERSITIES.find((u) => u.id === id);

  return (
    <UserLayout>
      <main className="space-y-6 kg-fade-in">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/user/universities"
              className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Back
            </Link>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">University Details</h1>
          </div>
        </div>

        {!university ? (
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">University not found.</div>
        ) : (
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                {(university.shortName ?? university.name)
                  .split(' ')
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join('')}
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h2 className="text-lg md:text-xl font-extrabold text-slate-900">{university.name}</h2>
                    {university.shortName && <p className="text-sm text-slate-600">{university.shortName}</p>}
                  </div>
                  <div className="flex items-center gap-2">
                    {university.type && (
                      <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-700">
                        {university.type}
                      </span>
                    )}
                    {university.rating && (
                      <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-700">
                        {university.rating.average.toFixed(1)} / 5 ({university.rating.count})
                      </span>
                    )}
                  </div>
                </div>

                {university.description && (
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">{university.description}</p>
                )}

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">CITY</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{university.address?.city ?? '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">DEPARTMENTS</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {(university.departments ?? []).join(', ') || '—'}
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3 md:col-span-2">
                    <p className="text-[11px] font-semibold text-slate-500">COURSES</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{(university.courses ?? []).join(', ') || '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3 md:col-span-2">
                    <p className="text-[11px] font-semibold text-slate-500">FEE RANGE</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {university.feeRange?.min || university.feeRange?.max
                        ? `₹${university.feeRange?.min ?? '—'} - ₹${university.feeRange?.max ?? '—'} / ${university.feeRange?.unit ?? 'course'}`
                        : '—'}
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3 md:col-span-2">
                    <p className="text-[11px] font-semibold text-slate-500">ACCREDITATIONS / RANKINGS</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {[(university.accreditations ?? []).join(', '), (university.rankings ?? []).join(', ')]
                        .filter(Boolean)
                        .join(' • ') || '—'}
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

export default UserUniversityDetail;
