import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import UserLayout from '../../components/UserLayout';
import type { Coaching } from '../../types/coaching';

const UserCoachingAll: React.FC = () => {
  const [q, setQ] = useState('');

  const coachingCenters: Coaching[] = [
    {
      id: 'alpha-neet-academy',
      name: 'Alpha NEET Academy',
      tagline: 'Top NEET coaching with focused mentorship',
      description: 'Demo coaching profile. Later you can connect this with your real center database, batches, faculty and results.',
      categories: ['Medical'],
      courses: ['NEET Crash Course', 'NEET Target Batch'],
      examPrep: ['NEET'],
      address: { city: 'Pune', state: 'Maharashtra', country: 'India' },
      feeRange: { min: 45000, max: 120000, currency: 'INR', unit: 'course' },
      rating: { average: 4.7, count: 210 },
      verified: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'kota-physics-hub',
      name: 'Kota Physics Hub',
      tagline: 'Concept-first physics coaching for JEE/NEET',
      categories: ['Engineering', 'Medical'],
      courses: ['JEE Mains Batch', 'NEET Foundation'],
      examPrep: ['JEE', 'NEET'],
      address: { city: 'Kota', state: 'Rajasthan', country: 'India' },
      feeRange: { min: 35000, max: 110000, currency: 'INR', unit: 'course' },
      rating: { average: 4.5, count: 180 },
      verified: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'citywise-foundation',
      name: 'CityWise Foundation',
      tagline: 'K-12 foundation learning with small batches',
      categories: ['K-12'],
      courses: ['Class 8-10 Foundation', 'Class 11-12 Science'],
      address: { city: 'Delhi', state: 'Delhi', country: 'India' },
      feeRange: { min: 18000, max: 60000, currency: 'INR', unit: 'course' },
      rating: { average: 4.6, count: 95 },
      verified: false,
      createdAt: new Date().toISOString(),
    },
  ];

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return coachingCenters;
    return coachingCenters.filter((c) => {
      const hay = [
        c.name,
        c.tagline ?? '',
        (c.courses ?? []).join(' '),
        (c.examPrep ?? []).join(' '),
        c.address?.city ?? '',
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(term);
    });
  }, [q, coachingCenters]);

  return (
    <UserLayout>
      <main className="space-y-8 kg-fade-in">
        <section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Coaching</h1>
              <p className="mt-2 text-sm md:text-base text-slate-600 max-w-3xl">
                Browse coaching centers and batches. Use search to filter by name, course, exam, or city.
              </p>
            </div>
            <div className="w-full md:w-[360px]">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by name, course, exam, city..."
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((c) => (
            <Link
              key={c.id}
              to={`/user/coaching/${c.id}`}
              className="group bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="h-12 w-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold">
                  {c.name
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div className="flex items-center gap-2">
                  {c.verified && (
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                      Verified
                    </span>
                  )}
                </div>
              </div>

              <h2 className="mt-3 text-sm md:text-base font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                {c.name}
              </h2>
              {c.tagline && <p className="mt-1 text-xs md:text-sm text-slate-600">{c.tagline}</p>}

              <div className="mt-3 flex flex-wrap gap-2">
                {(c.examPrep ?? []).slice(0, 2).map((e) => (
                  <span
                    key={e}
                    className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700"
                  >
                    {e}
                  </span>
                ))}
                <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                  {c.address?.city ?? '—'}
                </span>
              </div>

              <div className="mt-3 text-[12px] text-slate-600">
                <p>
                  <span className="font-semibold text-slate-700">Courses:</span> {(c.courses ?? []).slice(0, 2).join(', ') || '—'}
                </p>
                <p>
                  <span className="font-semibold text-slate-700">Fees:</span>{' '}
                  {c.feeRange?.min || c.feeRange?.max
                    ? `₹${c.feeRange?.min ?? '—'} - ₹${c.feeRange?.max ?? '—'} / ${c.feeRange?.unit ?? 'course'}`
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
              No coaching centers found for “{q}”.
            </div>
          )}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserCoachingAll;
