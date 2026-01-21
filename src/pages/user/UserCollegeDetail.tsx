import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UserLayout from '../../components/UserLayout';
import type { College } from '../../types/college';

const COLLEGES: College[] = [
  {
    id: 'kgmc-lucknow',
    name: 'King George’s Medical University',
    shortName: 'KGMU',
    type: 'government',
    description: 'Demo college profile for MBBS/medical admissions. Later you can connect this with real fee, seat matrix and counselling data.',
    courses: ['MBBS', 'BDS', 'MD', 'MS'],
    eligibility: ['NEET Qualified', 'State Counselling'],
    address: { city: 'Lucknow', state: 'Uttar Pradesh', country: 'India' },
    feeRange: { min: 54000, max: 2500000, currency: 'INR', unit: 'course' },
    seatInfo: { totalSeats: 250, notes: 'Demo seat count. Replace with official seat matrix.' },
    accreditations: ['NMC', 'NAAC'],
    rankings: ['Top Govt Medical University'],
    rating: { average: 4.7, count: 860 },
    createdAt: new Date().toISOString(),
  },
  {
    id: 'aiims-delhi',
    name: 'All India Institute of Medical Sciences',
    shortName: 'AIIMS Delhi',
    type: 'government',
    description: 'Premier medical institute with strong academics and research facilities.',
    courses: ['MBBS', 'MD', 'MS'],
    eligibility: ['NEET Qualified', 'All India Counselling'],
    address: { city: 'New Delhi', state: 'Delhi', country: 'India' },
    feeRange: { min: 1500, max: 100000, currency: 'INR', unit: 'course' },
    seatInfo: { totalSeats: 125, notes: 'Demo seat count.' },
    accreditations: ['NMC'],
    rankings: ['Top Medical Institute'],
    rating: { average: 4.9, count: 1200 },
    createdAt: new Date().toISOString(),
  },
  {
    id: 'dy-patil-pune',
    name: 'Dr. D. Y. Patil Medical College',
    shortName: 'DYP Pune',
    type: 'private',
    description: 'Private medical college with modern campus and facilities.',
    courses: ['MBBS', 'MD', 'MS'],
    eligibility: ['NEET Qualified', 'Management / Counselling'],
    address: { city: 'Pune', state: 'Maharashtra', country: 'India' },
    feeRange: { min: 2100000, max: 8500000, currency: 'INR', unit: 'course' },
    seatInfo: { totalSeats: 200, notes: 'Demo seat count.' },
    accreditations: ['NMC'],
    rankings: ['Private Medical College'],
    rating: { average: 4.4, count: 540 },
    createdAt: new Date().toISOString(),
  },
];

const UserCollegeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const college = COLLEGES.find((c) => c.id === id);

  return (
    <UserLayout>
      <main className="space-y-6 kg-fade-in">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/user/colleges"
              className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Back
            </Link>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">College Details</h1>
          </div>
        </div>

        {!college ? (
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">College not found.</div>
        ) : (
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                {(college.shortName ?? college.name)
                  .split(' ')
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join('')}
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h2 className="text-lg md:text-xl font-extrabold text-slate-900">{college.name}</h2>
                    {college.shortName && <p className="text-sm text-slate-600">{college.shortName}</p>}
                  </div>
                  <div className="flex items-center gap-2">
                    {college.type && (
                      <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-700">
                        {college.type}
                      </span>
                    )}
                    {college.rating && (
                      <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-700">
                        {college.rating.average.toFixed(1)} / 5 ({college.rating.count})
                      </span>
                    )}
                  </div>
                </div>

                {college.description && <p className="mt-3 text-sm text-slate-700 leading-relaxed">{college.description}</p>}

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">CITY</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{college.address?.city ?? '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">COURSES</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{(college.courses ?? []).join(', ') || '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">ELIGIBILITY</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{(college.eligibility ?? []).join(', ') || '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">SEATS</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{college.seatInfo?.totalSeats ?? '—'}</p>
                    {college.seatInfo?.notes && <p className="mt-1 text-xs text-slate-600">{college.seatInfo.notes}</p>}
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3 md:col-span-2">
                    <p className="text-[11px] font-semibold text-slate-500">FEE RANGE</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {college.feeRange?.min || college.feeRange?.max
                        ? `₹${college.feeRange?.min ?? '—'} - ₹${college.feeRange?.max ?? '—'} / ${college.feeRange?.unit ?? 'course'}`
                        : '—'}
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3 md:col-span-2">
                    <p className="text-[11px] font-semibold text-slate-500">ACCREDITATIONS / RANKINGS</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {[(college.accreditations ?? []).join(', '), (college.rankings ?? []).join(', ')].filter(Boolean).join(' • ') || '—'}
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

export default UserCollegeDetail;
