import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserResources: React.FC = () => {
  const videos = [
    { title: 'How to plan NEET preparation', duration: '12:30', tag: 'Strategy' },
    { title: 'Physics – Kinematics basics', duration: '18:05', tag: 'Physics' },
  ];

  const notes = [
    { title: 'NEET Physics Formula Sheet (Demo)', size: '1.2 MB PDF' },
    { title: 'NCERT Biology Summary – Class 11', size: '900 KB PDF' },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Study Resources</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Demo library page for recorded videos, PDF notes and downloads. Later connect this to your actual
            content storage or LMS.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-6">
            <h2 className="text-md md:text-lg font-semibold text-gray-900">Recorded Videos</h2>
            <ul className="mt-3 space-y-2 text-xs md:text-sm text-gray-700">
              {videos.map((v) => (
                <li key={v.title} className="flex items-center justify-between border-b last:border-0 border-gray-100 py-2">
                  <div>
                    <p className="font-medium text-gray-900">{v.title}</p>
                    <p className="text-[11px] text-gray-500">{v.tag}</p>
                  </div>
                  <span className="text-[11px] text-gray-500">{v.duration}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-6">
            <h2 className="text-md md:text-lg font-semibold text-gray-900">PDF Notes &amp; Downloads</h2>
            <ul className="mt-3 space-y-2 text-xs md:text-sm text-gray-700">
              {notes.map((n) => (
                <li key={n.title} className="flex items-center justify-between border-b last:border-0 border-gray-100 py-2">
                  <div>
                    <p className="font-medium text-gray-900">{n.title}</p>
                    <p className="text-[11px] text-gray-500">{n.size}</p>
                  </div>
                  <button
                    type="button"
                    className="rounded-md bg-slate-900 px-2 py-1 text-[11px] font-semibold text-white hover:bg-slate-800"
                  >
                    Demo Download
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </UserLayout>
  );
};

export default UserResources;
