import React from 'react';
import { Link } from 'react-router-dom';
import UserLayout from '../../components/UserLayout';

const UserStudents: React.FC = () => {
  const journeys = [
    {
      key: 'kg-5',
      stage: 'Class KG–7 Foundation',
      focus: 'Build concepts in Maths & Science, start early exam awareness.',
      badge: 'Foundation',
    },
    {
      key: '8-10',
      stage: 'Class 8–10 Foundation',
      focus: 'Build concepts in Maths & Science, start early exam awareness.',
      badge: 'Foundation',
    },
    {
      key: '11-12',
      stage: 'Class 11–12 + NEET / JEE',
      focus: 'Strong boards + competitive prep with tests and analysis.',
      badge: 'Entrance Prep',
    },
    {
      key: 'college-career',
      stage: 'College & Career',
      focus: 'MBBS, Engineering, Allied Health, Management and more.',
      badge: 'Career Path',
    },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        {/* Intro section */}
        <section className="mb-2">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Students & Parents</h1>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-3xl">
            This page is a demo view for students and parents using the KG2PG portal. You can later connect it to
            real onboarding flows, counselling forms and class recommendations.
          </p>
        </section>

        {/* Journey cards */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">Typical KG to PG journey</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {journeys.map((item) => (
              <Link
                key={item.stage}
                to={`/user/students/${item.key}`}
                className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col justify-between hover:border-amber-300 hover:shadow-md transition"
              >
                <div>
                  <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
                    {item.badge}
                  </span>
                  <h3 className="mt-2 text-sm md:text-base font-semibold text-gray-900">{item.stage}</h3>
                  <p className="mt-2 text-xs md:text-sm text-gray-600">{item.focus}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Simple CTA block */}
        <section className="bg-slate-900 text-slate-50 rounded-xl px-4 py-6 md:px-8 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Ready to plan your path?</h2>
            <p className="mt-2 text-sm md:text-base text-slate-200 max-w-xl">
              Replace this area with a real counselling form or WhatsApp / call-to-action so families can connect
              with your team for guidance.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-300 focus:outline-none"
          >
            Demo button – connect later
          </button>
        </section>
      </main>
    </UserLayout>
  );
};

export default UserStudents;
