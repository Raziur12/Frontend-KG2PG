import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserExamsNeet: React.FC = () => {
  const batches = [
    {
      name: 'NEET Foundation (Class 11)',
      duration: '2 Years',
      mode: 'Offline + Online',
      highlights: ['Chapter-wise lectures', 'Regular doubt-solving', 'Weekly part tests'],
    },
    {
      name: 'NEET Target (Class 12 / Dropper)',
      duration: '1 Year',
      mode: 'Offline',
      highlights: ['Full syllabus revision', 'Grand tests', 'OMR practice & analysis'],
    },
    {
      name: 'NEET Crash Course',
      duration: '3–4 Months',
      mode: 'Online Live',
      highlights: ['High-yield topics', 'Daily practice questions', 'Recorded backups'],
    },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        {/* Hero */}
        <section className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl shadow-sm px-4 py-6 md:px-8 md:py-10">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">NEET Courses & Preparation</h1>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-emerald-50/90">
            Demo page for your NEET coaching programs. Replace this content later with real batch details, schedules
            and centre information used by your institute.
          </p>
        </section>

        {/* Batch cards */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">Sample NEET batches</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {batches.map((batch) => (
              <div
                key={batch.name}
                className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900">{batch.name}</h3>
                  <p className="mt-1 text-xs md:text-sm text-gray-600">
                    {batch.duration} • {batch.mode}
                  </p>
                  <ul className="mt-3 space-y-1 text-xs md:text-sm text-gray-600 list-disc list-inside">
                    {batch.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visual strip */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">Study environment (demo images)</h2>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Use this area to show photos from your classrooms, library, test centres or online teaching setup.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-lg shadow-sm border border-gray-100">
              <img
                src="https://images.pexels.com/photos/5212336/pexels-photo-5212336.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students preparing for exams"
                className="h-40 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-sm border border-gray-100">
              <img
                src="https://images.pexels.com/photos/3184664/pexels-photo-3184664.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Teacher explaining concepts"
                className="h-40 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-sm border border-gray-100">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Counselling and mentoring"
                className="h-40 w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </UserLayout>
  );
};

export default UserExamsNeet;
