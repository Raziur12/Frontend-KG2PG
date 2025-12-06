import React from 'react';
import { TrendingUp, UserPlus, UserCheck, LifeBuoy, DollarSign, Video } from 'lucide-react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Total Revenue', value: '₹1,25,430', icon: <TrendingUp className="w-6 h-6" />, color: 'text-green-500', bgColor: 'bg-green-100' },
    { title: 'New Students', value: '1,204', icon: <UserPlus className="w-6 h-6" />, color: 'text-blue-500', bgColor: 'bg-blue-100' },
    { title: 'Pending Verifications', value: '32', icon: <UserCheck className="w-6 h-6" />, color: 'text-yellow-500', bgColor: 'bg-yellow-100' },
    { title: 'Support Tickets', value: '12', icon: <LifeBuoy className="w-6 h-6" />, color: 'text-red-500', bgColor: 'bg-red-100' },
  ];

  const teachers = [
    { name: 'Arun Kumar', subject: 'Physics (JEE)', date: '2025-11-28', status: 'Verified' },
    { name: 'Priya Sharma', subject: 'Biology (NEET)', date: '2025-11-27', status: 'Pending' },
    { name: 'Rohan Gupta', subject: 'Mathematics', date: '2025-11-26', status: 'Verified' },
    { name: 'Sunita Devi', subject: 'Computer Science', date: '2025-11-25', status: 'Rejected' },
  ];

  const activities = [
    { text: 'New student registered', time: '15 minutes ago', icon: <UserPlus className="w-5 h-5" />, color: 'text-blue-500', bgColor: 'bg-blue-100' },
    { text: 'Payment received from Priya', time: '1 hour ago', icon: <DollarSign className="w-5 h-5" />, color: 'text-green-500', bgColor: 'bg-green-100' },
    { text: 'Arun Kumar started a class', time: '3 hours ago', icon: <Video className="w-5 h-5" />, color: 'text-yellow-500', bgColor: 'bg-yellow-100' },
  ];

  const chartData = {
    labels: ['June', 'July', 'August', 'September', 'October', 'November'],
    datasets: [
      {
        label: 'New Students',
        data: [200, 310, 280, 400, 350, 510],
        backgroundColor: '#3b82f6',
      },
    ],
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Verified':
        return 'px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full';
      case 'Pending':
        return 'px-2 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full';
      case 'Rejected':
        return 'px-2 py-1 text-xs font-medium text-red-800 bg-red-100 rounded-full';
      default:
        return '';
    }
  };

  return (
    <div className="bg-gray-100 w-full">
      <div className="p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor} ${stat.color}`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Teacher Signups Table */}
      <div className="mt-8 bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">Recent Teacher Signups</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Teacher Name</th>
                <th scope="col" className="px-6 py-3">Subject</th>
                <th scope="col" className="px-6 py-3">Date Joined</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{teacher.name}</td>
                  <td className="px-6 py-4">{teacher.subject}</td>
                  <td className="px-6 py-4">{teacher.date}</td>
                  <td className="px-6 py-4">
                    <span className={getStatusClass(teacher.status)}>{teacher.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 hover:underline">View</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* List and Chart placeholder */}
      <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-3">
        {/* Recent Activity List */}
        <div className="lg:col-span-1 bg-white rounded-lg shadow-md">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
          </div>
          <ul className="divide-y divide-gray-200">
            {activities.map((activity, index) => (
              <li key={index} className="flex items-center p-4 hover:bg-gray-50">
                <div className={`p-2 rounded-full ${activity.bgColor} ${activity.color}`}>
                  {activity.icon}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-800">{activity.text}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Student Growth Chart */}
        <div className="lg:col-span-2 p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 border-b pb-4">Student Growth</h3>
          <div className="mt-4" style={{ height: '280px' }}>
            <Bar data={chartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
