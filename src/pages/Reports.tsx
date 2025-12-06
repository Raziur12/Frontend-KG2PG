import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

const Reports: React.FC = () => {
  const revenueData = {
    labels: ['June', 'July', 'August', 'September', 'October', 'November'],
    datasets: [
      {
        label: 'Revenue',
        data: [12000, 19000, 15000, 25000, 22000, 32000],
        fill: true,
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        tension: 0.4,
      },
    ],
  };

  const enrollmentData = {
    labels: ['NEET Course', 'JEE Foundation', 'Engineering Subjects', 'Class 9-12'],
    datasets: [
      {
        data: [15, 18, 25, 42],
        backgroundColor: ['#3b82f6', '#10b981', '#ef4444', '#f97316'],
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-4">Revenue Over Time</h3>
          <div className="mt-4">
            <Line data={revenueData} />
          </div>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-4">Enrollment by Course</h3>
          <div className="mt-4 flex justify-center">
            <div style={{ position: 'relative', height: '300px', width: '300px' }}>
              <Doughnut data={enrollmentData} />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Reports;
