import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserCourses: React.FC = () => {
  const courses = [
    {
      name: 'NEET Foundation (Class 11)',
      duration: '2 Years',
      mode: 'Offline + Online',
      seats: 'Limited seats',
      start: 'July 2025',
    },
    {
      name: 'NEET Target (Class 12 / Dropper)',
      duration: '1 Year',
      mode: 'Offline',
      seats: 'Batch size: 50',
      start: 'April 2025',
    },
    {
      name: 'JEE Mains + Advanced',
      duration: '2 Years',
      mode: 'Offline + Online',
      seats: 'Weekend & Regular batches',
      start: 'June 2025',
    },
  ];

  return (
    <UserLayout>
      <section className="mb-6">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Courses</h1>
        <p className="mt-2 text-sm md:text-base text-gray-600 max-w-2xl">
          Browse demo courses for NEET, JEE and MBBS counselling. Replace this data with real courses when the
          backend is ready.
        </p>
      </section>

      <section className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full md:w-72 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course.name} className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
            <h2 className="text-sm md:text-base font-semibold text-gray-900">{course.name}</h2>
            <p className="mt-1 text-xs md:text-sm text-gray-600">{course.seats}</p>
            <div className="mt-3 flex items-center justify-between text-xs md:text-sm text-gray-500">
              <span>{course.duration}</span>
              <span>{course.mode}</span>
            </div>
            <p className="mt-2 text-xs text-gray-500">Starting from {course.start}</p>
          </div>
        ))}
      </section>
    </UserLayout>
  );
};

export default UserCourses;
