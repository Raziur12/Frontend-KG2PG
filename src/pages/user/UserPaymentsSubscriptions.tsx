import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserPaymentsSubscriptions: React.FC = () => {
  const subs = [
    {
      name: 'KG2PG NEET Premium Plan',
      status: 'Active',
      renews: 'Renews on 01 Mar 2025',
    },
    {
      name: 'Test Series Add-on',
      status: 'Expired',
      renews: 'Expired on 15 Nov 2024',
    },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Subscriptions (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Show all active and past subscriptions here – like premium access, add-on test series or online support
            packages.
          </p>
        </section>

        <section className="space-y-3">
          {subs.map((s) => (
            <div key={s.name} className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-6 text-xs md:text-sm text-gray-700 flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-gray-900">{s.name}</p>
                <p className="mt-1 text-[11px] text-gray-500">{s.renews}</p>
              </div>
              <span className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                {s.status}
              </span>
            </div>
          ))}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserPaymentsSubscriptions;
