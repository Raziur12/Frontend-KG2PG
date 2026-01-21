import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UserLayout from '../../components/UserLayout';
import type { Institute } from '../../types/institute';

const INSTITUTES: Institute[] = [
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

const UserInstituteDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const institute = INSTITUTES.find((i) => i.id === id);

  return (
    <UserLayout>
      <main className="space-y-6 kg-fade-in">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/user/institutes"
              className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Back
            </Link>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">Institute Details</h1>
          </div>
        </div>

        {!institute ? (
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">Institute not found.</div>
        ) : (
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                {institute.name
                  .split(' ')
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join('')}
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h2 className="text-lg md:text-xl font-extrabold text-slate-900">{institute.name}</h2>
                    {institute.category && <p className="text-sm text-slate-600">{institute.category}</p>}
                  </div>
                  <div className="flex items-center gap-2">
                    {institute.verified && (
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                        Verified
                      </span>
                    )}
                    {institute.rating && (
                      <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-700">
                        {institute.rating.average.toFixed(1)} / 5 ({institute.rating.count})
                      </span>
                    )}
                  </div>
                </div>

                {institute.description && (
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">{institute.description}</p>
                )}

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">CITY</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{institute.address?.city ?? '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">SERVICES</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{(institute.services ?? []).join(', ') || '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3 md:col-span-2">
                    <p className="text-[11px] font-semibold text-slate-500">PROGRAMS</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{(institute.programs ?? []).join(', ') || '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3 md:col-span-2">
                    <p className="text-[11px] font-semibold text-slate-500">FEE RANGE</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {institute.feeRange?.min || institute.feeRange?.max
                        ? `₹${institute.feeRange?.min ?? '—'} - ₹${institute.feeRange?.max ?? '—'} / ${institute.feeRange?.unit ?? 'course'}`
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

export default UserInstituteDetail;
