import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserPayments: React.FC = () => {
  const payments = [
    {
      id: 'INV-2025-001',
      label: 'NEET Classroom Program – Term 1',
      date: '05 Jan 2025',
      amount: '₹ 45,000',
      status: 'Paid',
    },
    {
      id: 'INV-2025-002',
      label: 'Hostel Fee – Quarter 1',
      date: '10 Jan 2025',
      amount: '₹ 18,000',
      status: 'Paid',
    },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Payments &amp; Invoices</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Demo view for student payments. Later you can replace this with actual Razorpay / gateway history,
            downloadable invoices and due-fee alerts.
          </p>
        </section>

        <section className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-4 md:px-6 py-3">Invoice ID</th>
                <th className="px-4 md:px-6 py-3">Description</th>
                <th className="px-4 md:px-6 py-3">Date</th>
                <th className="px-4 md:px-6 py-3">Amount</th>
                <th className="px-4 md:px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((p) => (
                <tr key={p.id} className="border-t border-gray-100 bg-white hover:bg-gray-50">
                  <td className="px-4 md:px-6 py-3 font-mono text-xs md:text-sm text-gray-900">{p.id}</td>
                  <td className="px-4 md:px-6 py-3 text-xs md:text-sm">{p.label}</td>
                  <td className="px-4 md:px-6 py-3 text-xs md:text-sm">{p.date}</td>
                  <td className="px-4 md:px-6 py-3 text-xs md:text-sm">{p.amount}</td>
                  <td className="px-4 md:px-6 py-3 text-xs md:text-sm">
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
                      {p.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </UserLayout>
  );
};

export default UserPayments;
