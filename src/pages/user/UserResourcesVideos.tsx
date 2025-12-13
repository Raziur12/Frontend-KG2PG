import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserResourcesVideos: React.FC = () => {
  const videos = [
    { title: 'NEET Strategy Session', subject: 'General', duration: '22:15' },
    { title: 'Physics – Motion in One Dimension', subject: 'Physics', duration: '18:40' },
    { title: 'Biology – Cell Structure Basics', subject: 'Biology', duration: '16:05' },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Recorded Videos (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Use this page to list topic-wise recorded sessions for students. Later you can connect it to your video
            hosting platform or LMS.
          </p>
        </section>

        <section className="bg-white rounded-lg border border-gray-100 shadow-sm divide-y divide-gray-100 text-xs md:text-sm text-gray-700">
          {videos.map((v) => (
            <div key={v.title} className="px-4 md:px-6 py-3 flex items-center justify-between gap-3">
              <div>
                <p className="font-medium text-gray-900">{v.title}</p>
                <p className="text-[11px] text-gray-500">{v.subject}</p>
              </div>
              <span className="text-[11px] text-gray-500">{v.duration}</span>
            </div>
          ))}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserResourcesVideos;
