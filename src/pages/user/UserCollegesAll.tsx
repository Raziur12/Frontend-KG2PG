import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import UserLayout from '../../components/UserLayout';
import type { College } from '../../types/college';

const UserCollegesAll: React.FC = () => {
  const [q, setQ] = useState('');

  const colleges: College[] = [
    {
      id: 'kgmc-lucknow',
      name: 'King George’s Medical University',
      shortName: 'KGMU',
      type: 'government',
      description: 'Demo college profile for MBBS/medical admissions. Later you can connect this with real fee, seat matrix and counselling data.',
      courses: ['MBBS', 'BDS', 'MD', 'MS'],
      address: { city: 'Lucknow', state: 'Uttar Pradesh', country: 'India' },
      feeRange: { min: 54000, max: 2500000, currency: 'INR', unit: 'course' },
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
      courses: ['MBBS', 'MD', 'MS'],
      address: { city: 'New Delhi', state: 'Delhi', country: 'India' },
      feeRange: { min: 1500, max: 100000, currency: 'INR', unit: 'course' },
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
      courses: ['MBBS', 'MD', 'MS'],
      address: { city: 'Pune', state: 'Maharashtra', country: 'India' },
      feeRange: { min: 2100000, max: 8500000, currency: 'INR', unit: 'course' },
      accreditations: ['NMC'],
      rankings: ['Private Medical College'],
      rating: { average: 4.4, count: 540 },
      createdAt: new Date().toISOString(),
    },
  ];

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return colleges;
    return colleges.filter((c) => {
      const hay = [c.name, c.shortName ?? '', (c.courses ?? []).join(' '), c.address?.city ?? '', c.type ?? '']
        .join(' ')
        .toLowerCase();
      return hay.includes(term);
    });
  }, [q, colleges]);

  return (
    <UserLayout>
      <main className="space-y-8 kg-fade-in">
        <section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Colleges</h1>
              <p className="mt-2 text-sm md:text-base text-slate-600 max-w-3xl">
                Browse colleges and key details. Click any card to open the full college profile.
              </p>
            </div>
            <div className="w-full md:w-[360px]">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by name, course, city..."
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((c) => (
            <Link
              key={c.id}
              to={`/user/colleges/${c.id}`}
              className="group bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="h-12 w-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold">
                  {(c.shortName ?? c.name)
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>
                <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                  {c.type ?? '—'}
                </span>
              </div>

              <h2 className="mt-3 text-sm md:text-base font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                {c.name}
              </h2>
              {c.shortName && <p className="mt-1 text-xs md:text-sm text-slate-600">{c.shortName}</p>}

              <div className="mt-3 flex flex-wrap gap-2">
                {(c.courses ?? []).slice(0, 2).map((course) => (
                  <span
                    key={course}
                    className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700"
                  >
                    {course}
                  </span>
                ))}
                <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                  {c.address?.city ?? '—'}
                </span>
              </div>

              <div className="mt-3 text-[12px] text-slate-600">
                <p>
                  <span className="font-semibold text-slate-700">Fees:</span>{' '}
                  {c.feeRange?.min || c.feeRange?.max
                    ? `₹${c.feeRange?.min ?? '—'} - ₹${c.feeRange?.max ?? '—'}`
                    : '—'}
                </p>
              </div>

              {c.rating && (
                <div className="mt-3 text-[12px] text-slate-600">
                  <span className="font-semibold text-slate-700">Rating:</span> {c.rating.average.toFixed(1)} / 5 ({c.rating.count})
                </div>
              )}
            </Link>
          ))}

          {filtered.length === 0 && (
            <div className="md:col-span-3 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">
              No colleges found for “{q}”.
            </div>
          )}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserCollegesAll;
