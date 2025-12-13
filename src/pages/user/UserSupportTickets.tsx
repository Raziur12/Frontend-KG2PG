import React from 'react';
import UserLayout from '../../components/UserLayout';

const tickets = [
  { id: '#KG2PG-201', subject: 'Update phone number', status: 'Open', created: 'Today' },
  { id: '#KG2PG-198', subject: 'Issue with test result', status: 'In Progress', created: '2 days ago' },
  { id: '#KG2PG-180', subject: 'Request for counselling call', status: 'Resolved', created: 'Last week' },
];

const UserSupportTickets: React.FC = () => {
  return (
    <UserLayout>
      <main className="space-y-8">
        {/* Two-column layout: ticket info + list */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 bg-slate-900 text-slate-50 rounded-xl p-4 md:p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-extrabold tracking-tight">Support Tickets</h1>
              <p className="mt-2 text-xs md:text-sm text-slate-200">
                Track your open requests, status updates and resolutions here.
              </p>
            </div>
            <button
              type="button"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-amber-400 px-3 py-1.5 text-xs md:text-sm font-semibold text-slate-900 hover:bg-amber-300"
            >
              Raise New Ticket (Demo)
            </button>
          </div>

          <div className="md:col-span-2 bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-6">
            <ul className="divide-y divide-gray-100 text-xs md:text-sm text-gray-700">
              {tickets.map((t) => (
                <li key={t.id} className="py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <p className="font-medium text-gray-900">{t.subject}</p>
                    <p className="text-[11px] text-gray-500">{t.id}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center rounded-full bg-sky-50 px-2 py-0.5 text-[11px] font-semibold text-sky-700">
                      {t.status}
                    </span>
                    <span className="text-[11px] text-gray-500">Created: {t.created}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </UserLayout>
  );
};

export default UserSupportTickets;
