import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserProfileSettings: React.FC = () => {
  return (
    <UserLayout>
      <main className="space-y-8">
        {/* Heading */}
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Profile Settings (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            This page shows how you can allow students and parents to update their basic details and notification
            preferences. Later you can connect it to your real API.
          </p>
        </section>

        {/* Settings form style */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6 text-xs md:text-sm text-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-semibold text-gray-600 mb-1">Full Name</label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-200 px-2 py-1 focus:outline-none"
                placeholder="Amit Singh (demo)"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-gray-600 mb-1">Email</label>
              <input
                type="email"
                className="w-full rounded-md border border-gray-200 px-2 py-1 focus:outline-none"
                placeholder="amit.s@example.com"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-gray-600 mb-1">Mobile Number</label>
              <input
                type="tel"
                className="w-full rounded-md border border-gray-200 px-2 py-1 focus:outline-none"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-gray-600 mb-1">City</label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-200 px-2 py-1 focus:outline-none"
                placeholder="Pune, Maharashtra"
              />
            </div>
          </div>

          <hr className="my-4 border-gray-100" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-[11px] font-semibold text-gray-600 mb-1">Email updates</p>
              <p className="text-[11px] text-gray-500 mb-1">Get important information on your registered email.</p>
              <button className="rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700">
                Enabled (demo)
              </button>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-gray-600 mb-1">SMS alerts</p>
              <p className="text-[11px] text-gray-500 mb-1">Exam dates, fee reminders and urgent alerts.</p>
              <button className="rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700">
                Enabled (demo)
              </button>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-gray-600 mb-1">WhatsApp notifications</p>
              <p className="text-[11px] text-gray-500 mb-1">Class links and quick updates on WhatsApp.</p>
              <button className="rounded-md bg-slate-900 px-2 py-1 text-[11px] font-semibold text-white">
                Manage in future
              </button>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-amber-400 px-4 py-1.5 text-xs md:text-sm font-semibold text-slate-900 hover:bg-amber-300"
            >
              Save Changes (Demo)
            </button>
          </div>
        </section>
      </main>
    </UserLayout>
  );
};

export default UserProfileSettings;
