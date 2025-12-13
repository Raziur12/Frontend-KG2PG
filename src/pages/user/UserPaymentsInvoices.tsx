import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserPaymentsInvoices: React.FC = () => {
  const invoices = [
    {
      id: 'INV-2025-010',
      label: 'NEET Classroom Program – Term 2',
      date: '10 Feb 2025',
      amount: '₹ 45,000',
    },
    {
      id: 'INV-2025-011',
      label: 'Hostel Fee – Quarter 2',
      date: '12 Feb 2025',
      amount: '₹ 18,000',
    },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Invoices &amp; Receipts (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Students can download or view fee receipts from this page once you connect it to your payment gateway
            records.
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
                <th className="px-4 md:px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv) => (
                <tr key={inv.id} className="border-t border-gray-100 bg-white hover:bg-gray-50">
                  <td className="px-4 md:px-6 py-3 font-mono text-xs md:text-sm text-gray-900">{inv.id}</td>
                  <td className="px-4 md:px-6 py-3 text-xs md:text-sm">{inv.label}</td>
                  <td className="px-4 md:px-6 py-3 text-xs md:text-sm">{inv.date}</td>
                  <td className="px-4 md:px-6 py-3 text-xs md:text-sm">{inv.amount}</td>
                  <td className="px-4 md:px-6 py-3 text-xs md:text-sm">
                    <button
                      type="button"
                      className="rounded-md bg-slate-900 px-2 py-1 text-[11px] font-semibold text-white hover:bg-slate-800"
                    >
                      Demo Download
                    </button>
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

export default UserPaymentsInvoices;
