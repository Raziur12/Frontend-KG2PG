import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserSupportContact: React.FC = () => {
  return (
    <UserLayout>
      <main className="space-y-8">
        {/* Contact hero with split background */}
        <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-50 rounded-xl px-4 py-6 md:px-8 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Contact Us</h1>
            <p className="mt-3 max-w-xl text-sm md:text-base text-slate-200">
              Parents and students can reach out to the KG2PG team using the details below. Replace this with your
              real phone numbers, email IDs and centre addresses.
            </p>

            <div className="mt-4 space-y-2 text-xs md:text-sm text-slate-100">
              <p><span className="font-semibold">Student Helpline:</span> +91 98765 43210</p>
              <p><span className="font-semibold">Email:</span> support@kg2pg-demo.com</p>
              <p><span className="font-semibold">Timings:</span> 9:30 AM – 7:30 PM (Mon–Sat)</p>
            </div>
          </div>

          <div className="bg-white/5 border border-slate-700 rounded-lg p-4 md:p-6 text-xs md:text-sm">
            <h2 className="text-sm md:text-base font-semibold mb-3">Request a Call Back (Demo)</h2>
            <form className="space-y-3">
              <div>
                <label className="block text-[11px] mb-1">Student / Parent Name</label>
                <input
                  type="text"
                  className="w-full rounded-md border border-slate-600 bg-slate-900/60 px-2 py-1 text-xs md:text-sm text-slate-50 focus:outline-none"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-[11px] mb-1">Mobile Number</label>
                <input
                  type="tel"
                  className="w-full rounded-md border border-slate-600 bg-slate-900/60 px-2 py-1 text-xs md:text-sm text-slate-50 focus:outline-none"
                  placeholder="Enter mobile number"
                />
              </div>
              <div>
                <label className="block text-[11px] mb-1">Message</label>
                <textarea
                  className="w-full rounded-md border border-slate-600 bg-slate-900/60 px-2 py-1 text-xs md:text-sm text-slate-50 focus:outline-none"
                  rows={3}
                  placeholder="Share your query (demo form, not submitted)"
                />
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-amber-400 px-3 py-1.5 text-xs md:text-sm font-semibold text-slate-900 hover:bg-amber-300"
              >
                Submit (Demo)
              </button>
            </form>
          </div>
        </section>
      </main>
    </UserLayout>
  );
};

export default UserSupportContact;
