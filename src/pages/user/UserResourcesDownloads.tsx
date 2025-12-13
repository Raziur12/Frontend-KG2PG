import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserResourcesDownloads: React.FC = () => {
  const files = [
    { title: 'NEET Information Brochure (Demo)', size: '2.3 MB', type: 'PDF' },
    { title: 'KG2PG Counselling Handbook', size: '4.1 MB', type: 'PDF' },
    { title: 'Sample Time Table Template', size: '120 KB', type: 'Excel' },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Downloads (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Put all important documents, brochures and templates here for students and parents.
          </p>
        </section>

        <section className="bg-white rounded-lg border border-gray-100 shadow-sm divide-y divide-gray-100 text-xs md:text-sm text-gray-700">
          {files.map((f) => (
            <div key={f.title} className="px-4 md:px-6 py-3 flex items-center justify-between gap-3">
              <div>
                <p className="font-medium text-gray-900">{f.title}</p>
                <p className="text-[11px] text-gray-500">{f.type} • {f.size}</p>
              </div>
              <button
                type="button"
                className="rounded-md bg-slate-900 px-2 py-1 text-[11px] font-semibold text-white hover:bg-slate-800"
              >
                Demo Download
              </button>
            </div>
          ))}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserResourcesDownloads;
