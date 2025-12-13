import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserExamsOther: React.FC = () => {
  const exams = [
    {
      name: 'CUET (UG)',
      streams: 'Science • Commerce • Arts',
      highlight: 'Central University entrance test for undergraduate programs.',
    },
    {
      name: 'State CETs / Engineering Entrances',
      streams: 'Engineering & Technology',
      highlight: 'Example: MHT-CET, KCET, WBJEE and other state-level exams.',
    },
    {
      name: 'Other Allied Health / BSc / BBA Exams',
      streams: 'Healthcare • Management • Science',
      highlight: 'Use this space to describe additional entrance tests your institute supports.',
    },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        {/* Hero */}
        <section className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white rounded-xl shadow-sm px-4 py-6 md:px-8 md:py-10">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">CUET & Other Exams</h1>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-sky-50/90">
            Demo page for non-NEET / non-JEE entrance exams like CUET and state-level tests. Replace this area with
            real details, brochures and your counselling process.
          </p>
        </section>

        {/* Exams list */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">Example exams you can highlight</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {exams.map((exam) => (
              <div
                key={exam.name}
                className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900">{exam.name}</h3>
                  <p className="mt-1 text-xs md:text-sm text-gray-600">{exam.streams}</p>
                  <p className="mt-2 text-xs md:text-sm text-gray-600">{exam.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info block */}
        <section className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-6">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">How your team can support</h2>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Use this block to explain mock tests, application guidance, document checks and counselling calls for
            CUET / other exams. You can also link to downloadable PDFs or recorded guidance sessions from the
            Resources section.
          </p>
        </section>
      </main>
    </UserLayout>
  );
};

export default UserExamsOther;
