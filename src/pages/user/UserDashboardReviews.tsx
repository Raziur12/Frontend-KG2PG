import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserDashboardReviews: React.FC = () => {
  const reviews = [
    {
      course: 'NEET Classroom Program',
      rating: '4.5 / 5',
      comment: 'Teachers explain concepts very clearly and give personal attention.',
    },
    {
      course: 'Test Series',
      rating: '4.0 / 5',
      comment: 'Helps me revise regularly and understand my weak topics.',
    },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Ratings &amp; Reviews (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Let students and parents give feedback on courses, batches and teachers here.
          </p>
        </section>

        <section className="space-y-3">
          {reviews.map((r) => (
            <div key={r.course} className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-6 text-xs md:text-sm text-gray-700">
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-gray-900">{r.course}</p>
                <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
                  {r.rating}
                </span>
              </div>
              <p className="mt-2 text-gray-700">{r.comment}</p>
            </div>
          ))}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserDashboardReviews;
