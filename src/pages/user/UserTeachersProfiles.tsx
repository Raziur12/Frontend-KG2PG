import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserTeachersProfiles: React.FC = () => {
  const profiles = [
    {
      name: 'Dr. Neha Sharma',
      subject: 'Biology',
      tagline: 'Focus on concept clarity and diagrams.',
      bio: 'MBBS, MD (AIIMS). 10+ years of NEET teaching with strong track record of top ranks.',
    },
    {
      name: 'Rahul Mehta',
      subject: 'Physics',
      tagline: 'Makes mechanics and electricity super simple.',
      bio: 'B.Tech (IIT). Loves using real-life examples and visualisation to teach physics.',
    },
    {
      name: 'Anjali Verma',
      subject: 'Chemistry',
      tagline: 'Organic made easy with flow charts and stories.',
      bio: 'M.Sc. Chemistry. 7+ years of coaching students for NEET and JEE mains.',
    },
    {
      name: 'Vikram Rao',
      subject: 'Mathematics',
      tagline: 'Loves shortcuts and exam-oriented tricks.',
      bio: 'B.Tech (NIT). Specialises in Algebra and Calculus for engineering entrances.',
    },
    {
      name: 'Pooja Kulkarni',
      subject: 'Biology',
      tagline: 'NCERT expert with focus on diagrams and keywords.',
      bio: 'M.Sc. Life Sciences. Known for simplified notes and memory techniques.',
    },
    {
      name: 'Sandeep Gupta',
      subject: 'Physics',
      tagline: 'Connects physics to day-to-day life examples.',
      bio: '7+ years experience in NEET and JEE coaching institutes across India.',
    },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Teacher Profiles</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Demo profile cards for your key teachers. Later you can plug in real photos, qualifications and
            testimonial videos.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profiles.map((p) => (
            <div key={p.name} className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col md:flex-row gap-3">
              <div className="h-16 w-16 rounded-full bg-slate-200 flex items-center justify-center text-xs font-semibold text-slate-700">
                {p.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <div className="flex-1">
                <h2 className="text-sm md:text-base font-semibold text-gray-900">{p.name}</h2>
                <p className="text-[11px] md:text-xs text-gray-500">{p.subject}</p>
                <p className="mt-1 text-xs md:text-sm text-gray-700 font-medium">{p.tagline}</p>
                <p className="mt-1 text-xs md:text-sm text-gray-600">{p.bio}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserTeachersProfiles;
