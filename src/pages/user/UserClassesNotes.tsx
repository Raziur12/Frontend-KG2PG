import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserClassesNotes: React.FC = () => {
  const notes = [
    { topic: 'Mechanics – Summary Notes', subject: 'Physics', color: 'text-sky-600' },
    { topic: 'Organic Chemistry – Reaction Map', subject: 'Chemistry', color: 'text-emerald-600' },
    { topic: 'Biology – NCERT Highlighted PDF', subject: 'Biology', color: 'text-amber-600' },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Notes / PDF Download (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Colorful list of class-specific notes and PDFs. Use subject-based accent colors for quick scanning.
          </p>
        </section>

        <section className="bg-white rounded-lg border border-gray-100 shadow-sm divide-y divide-gray-100 text-xs md:text-sm text-gray-700">
          {notes.map((n) => (
            <div key={n.topic} className="px-4 md:px-6 py-3 flex items-center justify-between gap-3">
              <div>
                <p className={`font-medium ${n.color}`}>{n.topic}</p>
                <p className="text-[11px] text-gray-500">{n.subject}</p>
              </div>
              <button
                type="button"
                className="rounded-md bg-amber-400 px-2 py-1 text-[11px] font-semibold text-slate-900 hover:bg-amber-300"
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

export default UserClassesNotes;
