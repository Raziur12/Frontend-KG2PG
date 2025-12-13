import React from 'react';
import { useParams} from 'react-router-dom';
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

  const current = SEGMENTS.find((s) => s.key === segment) ?? SEGMENTS[0];
  const filters = STAGE_FILTERS[current.key] ?? [];

  const isCollegeCareer = current.key === 'college-career';

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
      <main className="space-y-6 md:space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">{current.label}</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
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
                  className="rounded-md px-3 py-1.5 text-xs md:text-sm font-semibold border bg-white text-slate-800 border-slate-200 hover:bg-slate-50"
                >
                  {f.label}
                </button>
              ))}
            </div>
          </aside>

          {/* Right side cards */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </section>
      </main>
    </UserLayout>
  );
};

export default UserStudentsDetail;
