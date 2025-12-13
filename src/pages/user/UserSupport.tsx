import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserSupport: React.FC = () => {
  const tickets = [
    {
      id: '#KG2PG-101',
      subject: 'Change of batch timing',
      status: 'Resolved',
      updated: 'Yesterday',
    },
    {
      id: '#KG2PG-102',
      subject: 'Fee receipt not downloaded',
      status: 'Open',
      updated: '2 days ago',
    },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Support &amp; Help</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Demo page for your support centre. Later you can plug in a real ticketing system, WhatsApp support or
            phone numbers for parents and students.
          </p>
        </section>

        <section className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 className="text-md md:text-lg font-semibold text-gray-900">Recent Tickets</h2>
              <p className="mt-1 text-xs md:text-sm text-gray-600">Sample tickets shown for design preview.</p>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-amber-400 px-3 py-1.5 text-xs md:text-sm font-semibold text-slate-900 hover:bg-amber-300"
            >
              Raise New Ticket (Demo)
            </button>
          </div>

          <ul className="mt-4 divide-y divide-gray-100 text-xs md:text-sm text-gray-700">
            {tickets.map((t) => (
              <li key={t.id} className="py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <p className="font-medium text-gray-900">{t.subject}</p>
                  <p className="text-[11px] text-gray-500">{t.id}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                    {t.status}
                  </span>
                  <span className="text-[11px] text-gray-500">Updated: {t.updated}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </UserLayout>
  );
};

export default UserSupport;
