import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import UserLayout from '../../components/UserLayout';
import type { Institute } from '../../types/institute';

const UserInstitutesAll: React.FC = () => {
  const [q, setQ] = useState('');

  const institutes: Institute[] = [
    {
      id: 'kg2pg-guidance-center',
      name: 'KG2PG Guidance Center',
      category: 'consultancy',
      description: 'Demo institute profile for counselling, admissions support, and mentorship services.',
      services: ['Career Counselling', 'Admission Guidance', 'Document Support'],
      programs: ['MBBS Counselling', 'Engineering Counselling'],
      address: { city: 'Pune', state: 'Maharashtra', country: 'India' },
      feeRange: { min: 999, max: 9999, currency: 'INR', unit: 'course' },
      rating: { average: 4.7, count: 320 },
      verified: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'prime-test-prep',
      name: 'Prime Test Prep Institute',
      category: 'training',
      description: 'Demo institute focused on test prep and practice materials.',
      services: ['Test Series', 'Mock Interviews', 'Doubt Solving'],
      programs: ['NEET Test Series', 'JEE Test Series'],
      address: { city: 'Kota', state: 'Rajasthan', country: 'India' },
      feeRange: { min: 1999, max: 19999, currency: 'INR', unit: 'course' },
      rating: { average: 4.5, count: 210 },
      verified: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'bright-foundation-school',
      name: 'Bright Foundation Institute',
      category: 'training',
      description: 'K-12 foundation learning and mentorship in small batches.',
      services: ['Concept Classes', 'Practice Sheets', 'Parent Mentoring'],
      programs: ['Class 8-10 Foundation', 'Class 11-12 Science'],
      address: { city: 'Delhi', state: 'Delhi', country: 'India' },
      feeRange: { min: 15000, max: 65000, currency: 'INR', unit: 'course' },
      rating: { average: 4.6, count: 145 },
      verified: false,
      createdAt: new Date().toISOString(),
    },
  ];

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return institutes;
    return institutes.filter((i) => {
      const hay = [
        i.name,
        i.category ?? '',
        (i.services ?? []).join(' '),
        (i.programs ?? []).join(' '),
        i.address?.city ?? '',
      ]
        .join(' ')
        .toLowerCase();
      return hay.includes(term);
    });
  }, [q, institutes]);

  return (
    <UserLayout>
      <main className="space-y-8 kg-fade-in">
        <section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900">Institutes</h1>
              <p className="mt-2 text-sm md:text-base text-slate-600 max-w-3xl">
                Browse institutes and services. Click any card to open the full institute profile.
              </p>
            </div>
            <div className="w-full md:w-[360px]">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by name, service, city..."
                className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((i) => (
            <Link
              key={i.id}
              to={`/user/institutes/${i.id}`}
              className="group bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex flex-col hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="h-12 w-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold">
                  {i.name
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>
                <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                  {i.category ?? '—'}
                </span>
              </div>

              <h2 className="mt-3 text-sm md:text-base font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                {i.name}
              </h2>

              <div className="mt-3 flex flex-wrap gap-2">
                {(i.services ?? []).slice(0, 2).map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700"
                  >
                    {s}
                  </span>
                ))}
                <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                  {i.address?.city ?? '—'}
                </span>
              </div>

              <div className="mt-3 text-[12px] text-slate-600">
                <p>
                  <span className="font-semibold text-slate-700">Programs:</span> {(i.programs ?? []).slice(0, 2).join(', ') || '—'}
                </p>
                <p>
                  <span className="font-semibold text-slate-700">Fees:</span>{' '}
                  {i.feeRange?.min || i.feeRange?.max ? `₹${i.feeRange?.min ?? '—'} - ₹${i.feeRange?.max ?? '—'}` : '—'}
                </p>
              </div>

              {i.rating && (
                <div className="mt-3 text-[12px] text-slate-600">
                  <span className="font-semibold text-slate-700">Rating:</span> {i.rating.average.toFixed(1)} / 5 ({i.rating.count})
                </div>
              )}
            </Link>
          ))}

          {filtered.length === 0 && (
            <div className="md:col-span-3 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">
              No institutes found for “{q}”.
            </div>
          )}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserInstitutesAll;
