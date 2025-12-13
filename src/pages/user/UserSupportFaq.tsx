import React from 'react';
import UserLayout from '../../components/UserLayout';

const faqs = [
  {
    q: 'How do I change my batch or centre?',
    a: 'Please contact your counsellor or raise a support ticket with your preferred batch timings and centre.',
  },
  {
    q: 'Where can I see my upcoming classes and tests?',
    a: 'Use the Student Dashboard and Class Calendar sections to see your schedule.',
  },
  {
    q: 'How do I download my fee receipt?',
    a: 'Go to Payments → Invoices & Receipts to view and download your receipts.',
  },
];

const UserSupportFaq: React.FC = () => {
  return (
    <UserLayout>
      <main className="space-y-8">
        {/* Hero banner style for Help */}
        <section className="bg-slate-900 text-slate-50 rounded-xl px-4 py-6 md:px-8 md:py-10">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Help &amp; FAQs</h1>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-200">
            Quick answers to common questions for students and parents using the KG2PG portal.
          </p>
        </section>

        {/* Accordion-style FAQ list */}
        <section className="space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="group bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-sm md:text-base font-semibold text-gray-900">
                <span>{item.q}</span>
                <span className="ml-3 text-xs text-gray-400 group-open:hidden">+</span>
                <span className="ml-3 text-xs text-gray-400 hidden group-open:inline">−</span>
              </summary>
              <p className="mt-2 text-xs md:text-sm text-gray-700">{item.a}</p>
            </details>
          ))}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserSupportFaq;
