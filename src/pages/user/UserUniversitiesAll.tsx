import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import UserLayout from '../../components/UserLayout';
import type { University } from '../../types/university';

const UserUniversitiesAll: React.FC = () => {
  const [q, setQ] = useState('');

  const universities: University[] = [
    {
      id: 'du-delhi',
      name: 'University of Delhi',
      shortName: 'DU',
      type: 'central',
      departments: ['Science', 'Commerce', 'Arts', 'Engineering'],
      courses: ['B.Sc', 'B.Com', 'BA', 'M.Sc', 'MBA'],
      address: { city: 'New Delhi', state: 'Delhi', country: 'India' },
      feeRange: { min: 10000, max: 200000, currency: 'INR', unit: 'course' },
      rating: { average: 4.6, count: 980 },
      createdAt: new Date().toISOString(),
    },
    {
      id: 'mum-university',
      name: 'University of Mumbai',
      shortName: 'MU',
      type: 'state',
      departments: ['Science', 'Commerce', 'Arts', 'Management'],
      courses: ['B.Sc', 'B.Com', 'BA', 'M.Com', 'MBA'],
      address: { city: 'Mumbai', state: 'Maharashtra', country: 'India' },
      feeRange: { min: 12000, max: 250000, currency: 'INR', unit: 'course' },
      rating: { average: 4.4, count: 720 },
      createdAt: new Date().toISOString(),
    },
    {
      id: 'anna-university',
      name: 'Anna University',
      shortName: 'AU',
      type: 'state',
      departments: ['Engineering', 'Technology', 'Management'],
      courses: ['B.E', 'B.Tech', 'M.E', 'MBA'],
      address: { city: 'Chennai', state: 'Tamil Nadu', country: 'India' },
      feeRange: { min: 15000, max: 300000, currency: 'INR', unit: 'course' },
      rating: { average: 4.5, count: 640 },
      createdAt: new Date().toISOString(),
    },
  ];

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return universities;
    return universities.filter((u) => {
      const hay = [u.name, u.shortName ?? '', (u.courses ?? []).join(' '), u.address?.city ?? '', u.type ?? '']
        .join(' ')
        .toLowerCase();
      return hay.includes(term);
    });
  }, [q, universities]);

  return (
    <UserLayout>
      <main className="space-y-8 kg-fade-in">
        <section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Universities</h1>
              <p className="mt-2 text-sm md:text-base text-slate-600 max-w-3xl">
                Browse universities with key details. Click any card to open the full university profile.
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
          {filtered.map((u) => (
            <Link
              key={u.id}
              to={`/user/universities/${u.id}`}
              className="group bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="h-12 w-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold">
                  {(u.shortName ?? u.name)
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>
                <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                  {u.type ?? '—'}
                </span>
              </div>

              <h2 className="mt-3 text-sm md:text-base font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                {u.name}
              </h2>
              {u.shortName && <p className="mt-1 text-xs md:text-sm text-slate-600">{u.shortName}</p>}

              <div className="mt-3 flex flex-wrap gap-2">
                {(u.courses ?? []).slice(0, 2).map((course) => (
                  <span
                    key={course}
                    className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700"
                  >
                    {course}
                  </span>
                ))}
                <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                  {u.address?.city ?? '—'}
                </span>
              </div>

              <div className="mt-3 text-[12px] text-slate-600">
                <p>
                  <span className="font-semibold text-slate-700">Departments:</span> {(u.departments ?? []).slice(0, 2).join(', ') || '—'}
                </p>
                <p>
                  <span className="font-semibold text-slate-700">Fees:</span>{' '}
                  {u.feeRange?.min || u.feeRange?.max ? `₹${u.feeRange?.min ?? '—'} - ₹${u.feeRange?.max ?? '—'}` : '—'}
                </p>
              </div>

              {u.rating && (
                <div className="mt-3 text-[12px] text-slate-600">
                  <span className="font-semibold text-slate-700">Rating:</span> {u.rating.average.toFixed(1)} / 5 ({u.rating.count})
                </div>
              )}
            </Link>
          ))}

          {filtered.length === 0 && (
            <div className="md:col-span-3 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">
              No universities found for “{q}”.
            </div>
          )}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserUniversitiesAll;
