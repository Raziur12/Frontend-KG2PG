import React, { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import UserLayout from '../../components/UserLayout';

const SEGMENTS = [
  { key: 'kg-5', label: 'Class KG–5 Foundation' },
  { key: '6-7', label: 'Class 6–7 Foundation' },
  { key: '8-10', label: 'Class 8–10 Foundation' },
  { key: '11-12', label: 'Class 11–12 + NEET / JEE' },
  { key: 'college-career', label: 'College & Career' },
];

const STAGE_FILTERS: Record<string, { key: string; label: string }[]> = {
  'kg-5': [
    { key: 'kg', label: 'Class KG' },
    { key: '1', label: 'Class 1' },
    { key: '2', label: 'Class 2' },
    { key: '3', label: 'Class 3' },
    { key: '4', label: 'Class 4' },
    { key: '5', label: 'Class 5' },
    { key: '6', label: 'Class 6' },
    { key: '7', label: 'Class 7' },
  ],
  '8-10': [
    { key: '8', label: 'Class 8' },
    { key: '9', label: 'Class 9' },
    { key: '10', label: 'Class 10' },
  ],
  '11-12': [
    { key: '11', label: 'Class 11' },
    { key: '12', label: 'Class 12' },
  ],
  'college-career': [
    { key: 'medical', label: 'Medical (MBBS / BDS / Allied Health)' },
    { key: 'engineering', label: 'Engineering (B.Tech / B.E.)' },
    { key: 'commerce', label: 'Commerce & Management (BBA / B.Com)' },
    { key: 'science', label: 'Science & Research (B.Sc / Integrated MSc)' },
    { key: 'abroad', label: 'Study Abroad Pathways' },
  ],
};

const UserStudentsDetail: React.FC = () => {
  const { segment } = useParams<{ segment: string }>();
  const navigate = useNavigate();

  const current = SEGMENTS.find((s) => s.key === segment) ?? SEGMENTS[0];
  const filters = STAGE_FILTERS[current.key] ?? [];

  const isCollegeCareer = current.key === 'college-career';

  const subjectOptions = useMemo(
    () => [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Biology',
      'English',
      'Hindi',
      'Urdu',
      'Sanskrit',
      'Social Science',
      'Computer',
    ],
    [],
  );

  const [selectedClass, setSelectedClass] = useState(filters[0]?.label ?? '');
  const [subjects, setSubjects] = useState<string[]>(['Mathematics', 'Physics', 'Chemistry', 'English']);
  const [error, setError] = useState<string | null>(null);

  const toggleSubject = (sub: string) => {
    setSubjects((prev) => (prev.includes(sub) ? prev.filter((s) => s !== sub) : [...prev, sub]));
  };

  const onContinue = () => {
    if (filters.length > 0 && !selectedClass) {
      setError('Please choose a class.');
      return;
    }
    if (!isCollegeCareer && subjects.length === 0) {
      setError('Please choose at least one subject.');
      return;
    }
    setError(null);
    navigate('/user/students', {
      state: {
        startOnboarding: true,
        prefill: {
          segment: current.key,
          studentClass: selectedClass,
          subjects,
        },
      },
    });
  };

  const cards = isCollegeCareer
    ? [
        {
          title: 'Medical Track (MBBS & Allied Health)',
          subtitle: 'NEET counselling, Govt vs private seats, fees and bond details.',
          badge: 'Medical',
        },
        {
          title: 'Engineering Track (IIT / NIT / Others)',
          subtitle: 'JEE & state CET support, branch selection and placement focus.',
          badge: 'Engineering',
        },
        {
          title: 'Commerce & Management',
          subtitle: 'BBA / B.Com pathways leading to MBA, finance, marketing, analytics.',
          badge: 'Management',
        },
        {
          title: 'Study Abroad Options',
          subtitle: 'Guidance for MBBS abroad and global STEM / business degrees.',
          badge: 'Abroad',
        },
      ]
    : [
        {
          title: 'Concept Classes',
          subtitle: 'Small batches for strong basics',
          badge: 'Concepts',
        },
        {
          title: 'Practice & Worksheets',
          subtitle: 'Topic-wise questions and home practice',
          badge: 'Practice',
        },
        {
          title: 'Mentor Support',
          subtitle: 'Periodic calls with students and parents',
          badge: 'Mentoring',
        },
      ];

  return (
    <UserLayout>
      <main className="relative isolate kg-fade-in">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[#f6efe9]" />
          <div className="absolute left-0 right-0 top-0 h-[320px] bg-green-700" />
          <svg
            className="absolute left-0 right-0 top-[300px] h-10 w-full"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#e6e215ff"
              d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,58.7C1120,53,1280,43,1360,37.3L1440,32L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
            />
          </svg>

          <div className="absolute left-0 right-0 top-[380px] h-[220px] bg-orange-500" />
          <svg
            className="absolute left-0 right-0 top-[580px] h-12 w-full"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#052e2b"
              d="M0,48L80,53.3C160,59,320,69,480,69.3C640,69,800,59,960,53.3C1120,48,1280,48,1360,48L1440,48L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
            />
          </svg>

          <div className="absolute left-0 right-0 top-[620px] bottom-0 bg-[#052e2b]" />
          <svg
            className="absolute left-0 right-0 bottom-0 h-14 w-full"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#f6efe9"
              d="M0,64L80,58.7C160,53,320,43,480,37.3C640,32,800,32,960,37.3C1120,43,1280,53,1360,58.7L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl space-y-6 md:space-y-8 pb-12 px-4 sm:px-6 lg:px-8 pt-5 md:pt-8">
        <section>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <Link
                to="/user/students"
                className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Back
              </Link>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white">{current.label}</h1>
            </div>
          </div>
          <p className="mt-2 text-sm md:text-base text-emerald-100 max-w-3xl">
            Demo view showing how you can describe programs and support for this stage. Use the left menu to switch
            between different student classes.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Left side filter */}
          <aside className="md:col-span-1 bg-white rounded-lg border border-gray-100 shadow-sm p-3 md:p-4 text-xs md:text-sm text-gray-800">
            <p className="text-[11px] font-semibold text-gray-500 mb-2">CLASSES IN THIS STAGE</p>
            <div className="flex md:flex-col gap-2 md:gap-1">
              {filters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setSelectedClass(f.label)}
                  className={`rounded-md px-3 py-1.5 text-xs md:text-sm font-semibold border transition ${
                    selectedClass === f.label
                      ? 'bg-amber-50 text-amber-800 border-amber-200'
                      : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Right side cards */}
          <div className="md:col-span-3 space-y-4">
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-5">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <h2 className="text-base md:text-lg font-extrabold text-slate-900">Select class & subjects</h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Choose class and subjects first. Next step will be account creation, then institute, plan ₹199 and payment.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onContinue}
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-slate-800"
                >
                  Continue / Create Account
                </button>
              </div>

              {error && <p className="mt-3 text-sm font-semibold text-rose-600">{error}</p>}

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-[11px] font-semibold text-slate-500">SELECTED</p>
                  <p className="mt-1 text-sm font-extrabold text-slate-900">{selectedClass || '—'}</p>
                  {!isCollegeCareer && <p className="mt-1 text-xs text-slate-600">{subjects.join(', ') || '—'}</p>}
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-[11px] font-semibold text-slate-500">NEXT</p>
                  <p className="mt-1 text-sm text-slate-700">Account → Institute → Plan ₹199 → Payment → Access</p>
                </div>
              </div>

              {!isCollegeCareer && (
                <div className="mt-4">
                  <p className="text-[11px] font-semibold text-slate-500">SUBJECTS</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {subjectOptions.map((sub) => {
                      const active = subjects.includes(sub);
                      return (
                        <button
                          key={sub}
                          type="button"
                          onClick={() => toggleSubject(sub)}
                          className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                            active
                              ? 'border-amber-300 bg-amber-50 text-amber-800'
                              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {sub}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cards.map((c) => (
                <div key={c.title} className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-5 flex flex-col">
                  <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
                    {c.badge}
                  </span>
                  <h2 className="mt-2 text-sm md:text-base font-semibold text-gray-900">{c.title}</h2>
                  <p className="mt-1 text-xs md:text-sm text-gray-600">{c.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        </div>
      </main>
    </UserLayout>
  );
};

export default UserStudentsDetail;
