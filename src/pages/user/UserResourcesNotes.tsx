import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserResourcesNotes: React.FC = () => {
  const notes = [
    { title: 'Physics Formula Sheet – Mechanics', size: '1.1 MB', type: 'PDF' },
    { title: 'Chemistry Organic Reactions Summary', size: '900 KB', type: 'PDF' },
    { title: 'NCERT Biology Key Diagrams – Class 11', size: '1.4 MB', type: 'PDF' },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">PDF Notes (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Students can download important topic-wise notes from here. Later you can store real files in your own
            storage system.
          </p>
        </section>

        <section className="bg-white rounded-lg border border-gray-100 shadow-sm divide-y divide-gray-100 text-xs md:text-sm text-gray-700">
          {notes.map((n) => (
            <div key={n.title} className="px-4 md:px-6 py-3 flex items-center justify-between gap-3">
              <div>
                <p className="font-medium text-gray-900">{n.title}</p>
                <p className="text-[11px] text-gray-500">{n.type} • {n.size}</p>
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

export default UserResourcesNotes;
