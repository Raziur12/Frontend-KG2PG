import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserAbout: React.FC = () => {
  return (
    <UserLayout>
      <main className="space-y-8">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl shadow-sm px-4 py-6 md:px-8 md:py-10">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">About KG2PG Student Portal</h1>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-amber-100/90">
            This demo page shows how your student/parent portal content pages can look. Replace this text later
            with real information about your institute, vision, and services from KG to PG.
          </p>
        </section>

        {/* Highlights / cards */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">What students and parents can do here</h2>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            The portal connects counselling, classes, exams and college information in one place. Below are some
            example sections to inspire your real content.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-4 flex flex-col">
              <h3 className="text-sm md:text-base font-semibold text-gray-900">Plan from KG to PG</h3>
              <p className="mt-2 text-xs md:text-sm text-gray-600">
                Explain how families can see a long-term road map – from school foundation years to medical /
                engineering / other professional programs.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-4 flex flex-col">
              <h3 className="text-sm md:text-base font-semibold text-gray-900">Explore Classes & Exams</h3>
              <p className="mt-2 text-xs md:text-sm text-gray-600">
                Use this area to showcase live / recorded batches, NEET & JEE preparation, test series and more.
              </p>
            </div>

            <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-4 flex flex-col">
              <h3 className="text-sm md:text-base font-semibold text-gray-900">College & Fees Guidance</h3>
              <p className="mt-2 text-xs md:text-sm text-gray-600">
                Summarise how your team helps with college shortlisting, counselling, documentation and fee
                comparisons for students.
              </p>
            </div>
          </div>
        </section>

        {/* Simple image strip */}
        <section>
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">Sample visuals (replace with your own)</h2>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            These demo images come from free stock photography. Swap them later with actual photos of your
            classrooms, counselling sessions or events.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="overflow-hidden rounded-lg shadow-sm border border-gray-100">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Counsellor guiding students"
                className="h-40 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-sm border border-gray-100">
              <img
                src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Classroom learning"
                className="h-40 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-sm border border-gray-100">
              <img
                src="https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Campus building"
                className="h-40 w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </UserLayout>
  );
};

export default UserAbout;
