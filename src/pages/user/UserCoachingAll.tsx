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
    {
      id: 'prime-jee-institute',
      name: 'Prime JEE Institute',
      tagline: 'Problem-solving driven JEE coaching',
      categories: ['Engineering'],
      courses: ['JEE Advanced Batch', 'JEE Mains Fast Track'],
      examPrep: ['JEE'],
      address: { city: 'Hyderabad', state: 'Telangana', country: 'India' },
      feeRange: { min: 40000, max: 130000, currency: 'INR', unit: 'course' },
      rating: { average: 4.4, count: 160 },
      verified: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'brightspark-ias-academy',
      name: 'BrightSpark IAS Academy',
      tagline: 'UPSC mentorship with structured test series',
      categories: ['Civil Services'],
      courses: ['UPSC GS Foundation', 'Mains Answer Writing'],
      examPrep: ['UPSC'],
      address: { city: 'Delhi', state: 'Delhi', country: 'India' },
      feeRange: { min: 65000, max: 185000, currency: 'INR', unit: 'course' },
      rating: { average: 4.3, count: 520 },
      verified: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'ace-bank-ssc-coaching',
      name: 'ACE Bank & SSC Coaching',
      tagline: 'Quant + reasoning mastery for competitive exams',
      categories: ['Competitive'],
      courses: ['SSC CGL', 'Bank PO'],
      examPrep: ['SSC', 'Bank'],
      address: { city: 'Lucknow', state: 'Uttar Pradesh', country: 'India' },
      feeRange: { min: 12000, max: 42000, currency: 'INR', unit: 'course' },
      rating: { average: 4.2, count: 240 },
      verified: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'greenleaf-ca-classes',
      name: 'GreenLeaf CA Classes',
      tagline: 'CA foundation to final with concept clarity',
      categories: ['Commerce'],
      courses: ['CA Foundation', 'CA Intermediate'],
      examPrep: ['CA'],
      address: { city: 'Ahmedabad', state: 'Gujarat', country: 'India' },
      feeRange: { min: 25000, max: 90000, currency: 'INR', unit: 'course' },
      rating: { average: 4.5, count: 130 },
      verified: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'bluechip-csat-center',
      name: 'BlueChip CSAT Center',
      tagline: 'CSAT strategies and mock analysis',
      categories: ['Civil Services'],
      courses: ['CSAT Intensive', 'CSAT Test Series'],
      examPrep: ['UPSC'],
      address: { city: 'Bengaluru', state: 'Karnataka', country: 'India' },
      feeRange: { min: 9000, max: 28000, currency: 'INR', unit: 'course' },
      rating: { average: 4.1, count: 80 },
      verified: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'orbit-neet-mentors',
      name: 'Orbit NEET Mentors',
      tagline: 'Daily practice + doubt clearing for NEET',
      categories: ['Medical'],
      courses: ['NEET Yearlong', 'NEET Revision'],
      examPrep: ['NEET'],
      address: { city: 'Chennai', state: 'Tamil Nadu', country: 'India' },
      feeRange: { min: 38000, max: 115000, currency: 'INR', unit: 'course' },
      rating: { average: 4.6, count: 210 },
      verified: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'summit-jee-neet',
      name: 'Summit JEE+NEET',
      tagline: 'Hybrid coaching with weekly tests',
      categories: ['Engineering', 'Medical'],
      courses: ['JEE Mains + Advanced', 'NEET Target'],
      examPrep: ['JEE', 'NEET'],
      address: { city: 'Indore', state: 'Madhya Pradesh', country: 'India' },
      feeRange: { min: 42000, max: 125000, currency: 'INR', unit: 'course' },
      rating: { average: 4.3, count: 140 },
      verified: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'scholar-k12-tuitions',
      name: 'Scholar K-12 Tuitions',
      tagline: 'Board exam prep with personal attention',
      categories: ['K-12'],
      courses: ['Class 9-10 Boards', 'Class 11-12 PCM/PCB'],
      address: { city: 'Jaipur', state: 'Rajasthan', country: 'India' },
      feeRange: { min: 15000, max: 55000, currency: 'INR', unit: 'course' },
      rating: { average: 4.4, count: 75 },
      verified: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'nextgen-gate-academy',
      name: 'NextGen GATE Academy',
      tagline: 'GATE coaching with full-length mocks',
      categories: ['Engineering'],
      courses: ['GATE CS', 'GATE EE'],
      examPrep: ['GATE'],
      address: { city: 'Kolkata', state: 'West Bengal', country: 'India' },
      feeRange: { min: 22000, max: 78000, currency: 'INR', unit: 'course' },
      rating: { average: 4.2, count: 110 },
      verified: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'merit-cuet-coaching',
      name: 'Merit CUET Coaching',
      tagline: 'CUET UG preparation with topic-wise tests',
      categories: ['Undergraduate'],
      courses: ['CUET UG Foundation', 'CUET UG Crash Course'],
      examPrep: ['CUET'],
      address: { city: 'Noida', state: 'Uttar Pradesh', country: 'India' },
      feeRange: { min: 8000, max: 30000, currency: 'INR', unit: 'course' },
      rating: { average: 4.0, count: 65 },
      verified: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'stellar-cat-prep',
      name: 'Stellar CAT Prep',
      tagline: 'CAT strategy, mocks and GDPI',
      categories: ['Management'],
      courses: ['CAT Comprehensive', 'GDPI'],
      examPrep: ['CAT'],
      address: { city: 'Mumbai', state: 'Maharashtra', country: 'India' },
      feeRange: { min: 25000, max: 85000, currency: 'INR', unit: 'course' },
      rating: { average: 4.3, count: 210 },
      verified: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'pinnacle-clat-coaching',
      name: 'Pinnacle CLAT Coaching',
      tagline: 'Law entrance prep with sectional drills',
      categories: ['Law'],
      courses: ['CLAT Foundation', 'CLAT Crash Course'],
      examPrep: ['CLAT'],
      address: { city: 'Bhopal', state: 'Madhya Pradesh', country: 'India' },
      feeRange: { min: 14000, max: 60000, currency: 'INR', unit: 'course' },
      rating: { average: 4.1, count: 90 },
      verified: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'aakash-boards-plus',
      name: 'Aakash Boards Plus',
      tagline: 'Board exam excellence program',
      categories: ['K-12'],
      courses: ['Class 10 Boards', 'Class 12 Boards'],
      address: { city: 'Surat', state: 'Gujarat', country: 'India' },
      feeRange: { min: 12000, max: 48000, currency: 'INR', unit: 'course' },
      rating: { average: 4.2, count: 60 },
      verified: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'mindbridge-olympiad',
      name: 'MindBridge Olympiad Prep',
      tagline: 'Olympiad training for classes 6-10',
      categories: ['K-12'],
      courses: ['Math Olympiad', 'Science Olympiad'],
      examPrep: ['Olympiad'],
      address: { city: 'Nagpur', state: 'Maharashtra', country: 'India' },
      feeRange: { min: 6000, max: 22000, currency: 'INR', unit: 'course' },
      rating: { average: 4.4, count: 48 },
      verified: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'zenith-neet-hostel',
      name: 'Zenith NEET Hostel Coaching',
      tagline: 'Residential program with daily tests',
      categories: ['Medical'],
      courses: ['NEET Residential Batch'],
      examPrep: ['NEET'],
      address: { city: 'Kota', state: 'Rajasthan', country: 'India' },
      feeRange: { min: 95000, max: 210000, currency: 'INR', unit: 'course' },
      rating: { average: 4.2, count: 150 },
      verified: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'ignite-jee-doubt-lab',
      name: 'Ignite JEE Doubt Lab',
      tagline: 'Doubt clearing + advanced problem practice',
      categories: ['Engineering'],
      courses: ['JEE Problem Practice', 'Advanced Doubt Sessions'],
      examPrep: ['JEE'],
      address: { city: 'Patna', state: 'Bihar', country: 'India' },
      feeRange: { min: 9000, max: 35000, currency: 'INR', unit: 'course' },
      rating: { average: 4.0, count: 55 },
      verified: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'careerline-nimcet',
      name: 'CareerLine NIMCET',
      tagline: 'MCA entrance prep with daily worksheets',
      categories: ['Postgraduate'],
      courses: ['NIMCET Foundation', 'NIMCET Crash Course'],
      examPrep: ['NIMCET'],
      address: { city: 'Prayagraj', state: 'Uttar Pradesh', country: 'India' },
      feeRange: { min: 11000, max: 42000, currency: 'INR', unit: 'course' },
      rating: { average: 4.1, count: 40 },
      verified: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'focus-gre-ielts',
      name: 'Focus GRE & IELTS',
      tagline: 'Overseas test prep with speaking lab',
      categories: ['Study Abroad'],
      courses: ['IELTS Comprehensive', 'GRE Quant Booster'],
      examPrep: ['IELTS', 'GRE'],
      address: { city: 'Chandigarh', state: 'Chandigarh', country: 'India' },
      feeRange: { min: 12000, max: 65000, currency: 'INR', unit: 'course' },
      rating: { average: 4.3, count: 115 },
      verified: true,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'prolearn-python-dsa',
      name: 'ProLearn Python + DSA',
      tagline: 'Placement-oriented DSA and interviews',
      categories: ['Tech'],
      courses: ['Python Bootcamp', 'DSA Interview Prep'],
      address: { city: 'Bengaluru', state: 'Karnataka', country: 'India' },
      feeRange: { min: 15000, max: 95000, currency: 'INR', unit: 'course' },
      rating: { average: 4.6, count: 300 },
      verified: true,
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
