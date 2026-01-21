import React from 'react';
import { Link, useParams } from 'react-router-dom';
import UserLayout from '../../components/UserLayout';
import type { Coaching } from '../../types/coaching';

const COACHING: Coaching[] = [
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

const UserCoachingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const center = COACHING.find((c) => c.id === id);

  return (
    <UserLayout>
      <main className="space-y-6 kg-fade-in">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link
              to="/user/coaching"
              className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            >
              Back
            </Link>
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900">Coaching Details</h1>
          </div>
        </div>

        {!center ? (
          <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700">Coaching not found.</div>
        ) : (
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="h-16 w-16 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                {center.name
                  .split(' ')
                  .slice(0, 2)
                  .map((n) => n[0])
                  .join('')}
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h2 className="text-lg md:text-xl font-extrabold text-slate-900">{center.name}</h2>
                    {center.tagline && <p className="text-sm text-slate-600">{center.tagline}</p>}
                  </div>
                  <div className="flex items-center gap-2">
                    {center.verified && (
                      <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                        Verified
                      </span>
                    )}
                    {center.rating && (
                      <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-700">
                        {center.rating.average.toFixed(1)} / 5 ({center.rating.count})
                      </span>
                    )}
                  </div>
                </div>

                {center.description && <p className="mt-3 text-sm text-slate-700 leading-relaxed">{center.description}</p>}

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">CITY</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{center.address?.city ?? '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold text-slate-500">EXAM PREP</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{(center.examPrep ?? []).join(', ') || '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3 md:col-span-2">
                    <p className="text-[11px] font-semibold text-slate-500">COURSES</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">{(center.courses ?? []).join(', ') || '—'}</p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-3 md:col-span-2">
                    <p className="text-[11px] font-semibold text-slate-500">FEE RANGE</p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {center.feeRange?.min || center.feeRange?.max
                        ? `₹${center.feeRange?.min ?? '—'} - ₹${center.feeRange?.max ?? '—'} / ${center.feeRange?.unit ?? 'course'}`
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

export default UserCoachingDetail;
