import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserDashboardPerformance: React.FC = () => {
  const rows = [
    { test: 'NEET Grand Test 1', score: '620 / 720', rank: 'Top 12%', date: 'Last month' },
    { test: 'NEET Grand Test 2', score: '640 / 720', rank: 'Top 8%', date: 'This month' },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Performance Reports (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Show test-wise performance, ranks and improvement over time here.
          </p>
        </section>

        <section className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500">
              <tr>
                <th className="px-4 md:px-6 py-3">Test</th>
                <th className="px-4 md:px-6 py-3">Score</th>
                <th className="px-4 md:px-6 py-3">Rank Band</th>
                <th className="px-4 md:px-6 py-3">Attempted</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.test} className="border-t border-gray-100 bg-white hover:bg-gray-50">
                  <td className="px-4 md:px-6 py-3 text-xs md:text-sm font-medium text-gray-900">{r.test}</td>
                  <td className="px-4 md:px-6 py-3 text-xs md:text-sm">{r.score}</td>
                  <td className="px-4 md:px-6 py-3 text-xs md:text-sm">{r.rank}</td>
                  <td className="px-4 md:px-6 py-3 text-xs md:text-sm">{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </UserLayout>
  );
};

export default UserDashboardPerformance;
