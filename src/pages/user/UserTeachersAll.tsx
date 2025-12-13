import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserTeachersAll: React.FC = () => {
  const teachers = [
    { name: 'Dr. Neha Sharma', subject: 'Biology', experience: '10+ years', center: 'Pune' },
    { name: 'Rahul Mehta', subject: 'Physics', experience: '8+ years', center: 'Kota' },
    { name: 'Anjali Verma', subject: 'Chemistry', experience: '7+ years', center: 'Delhi' },
    { name: 'Vikram Rao', subject: 'Mathematics', experience: '9+ years', center: 'Hyderabad' },
    { name: 'Pooja Kulkarni', subject: 'Biology', experience: '6+ years', center: 'Mumbai' },
    { name: 'Sandeep Gupta', subject: 'Physics', experience: '5+ years', center: 'Jaipur' },
    { name: 'Meera Iyer', subject: 'Chemistry', experience: '11+ years', center: 'Bengaluru' },
    { name: 'Amit Desai', subject: 'Mathematics', experience: '4+ years', center: 'Ahmedabad' },
    { name: 'Farha Khan', subject: 'Biology', experience: '8+ years', center: 'Lucknow' },
    { name: 'Karan Singh', subject: 'Physics', experience: '6+ years', center: 'Chandigarh' },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">All Teachers</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            Demo list of teachers in your network. Later you can power this from your real database with filters for
            subject, city and experience.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {teachers.map((t) => (
            <div key={t.name} className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col">
              <h2 className="text-sm md:text-base font-semibold text-gray-900">{t.name}</h2>
              <p className="mt-1 text-xs md:text-sm text-gray-600">{t.subject}</p>
              <p className="mt-1 text-xs md:text-sm text-gray-600">Experience: {t.experience}</p>
              <p className="mt-1 text-[11px] text-gray-500">Center: {t.center}</p>
            </div>
          ))}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserTeachersAll;
