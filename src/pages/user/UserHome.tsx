import React, { useEffect, useState } from 'react';
import UserLayout from '../../components/UserLayout';

const UserHome: React.FC = () => {
  const heroImages = [
    {
      id: 1,
      title: 'Top Medical Colleges',
      subtitle: 'AIIMS, Maulana Azad, KEM & more',
      color: 'from-blue-600 to-indigo-500',
      src: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 2,
      title: 'Leading NEET Coaching',
      subtitle: 'Kota, Delhi, Mumbai institutes',
      color: 'from-emerald-600 to-teal-500',
      src: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 3,
      title: 'Premier Engineering Institutes',
      subtitle: 'IITs, NITs and top private colleges',
      color: 'from-amber-500 to-orange-500',
      src: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 4,
      title: 'MBBS Seats Across India',
      subtitle: 'Government & private universities',
      color: 'from-purple-600 to-fuchsia-500',
      src: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 5,
      title: 'KG2PG Counselling Support',
      subtitle: 'End-to-end guidance for families',
      color: 'from-sky-600 to-cyan-500',
      src: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const stats = [
    { label: 'Active Courses', value: '12' },
    { label: 'Enrolled Students', value: '1,540' },
    { label: 'Upcoming Batches', value: '4' },
  ];

  const programs = [
    {
      name: 'NEET Classroom Program',
      duration: '1 Year',
      mode: 'Offline + Online',
      highlight: 'For Class 12 & Droppers',
    },
    {
      name: 'JEE Advanced + Mains',
      duration: '2 Years',
      mode: 'Offline',
      highlight: 'Integrated with school schedule',
    },
    {
      name: 'MBBS (India) Counselling Support',
      duration: 'Till Seat Allotment',
      mode: 'Online Guidance',
      highlight: 'All India & State level counselling help',
    },
  ];

  const progress = [
    { label: 'NEET Preparation', value: 75 },
    { label: 'JEE Preparation', value: 60 },
    { label: 'MBBS Counselling', value: 45 },
  ];

  return (
    <UserLayout>
      {/* Top hero section with auto slider */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 rounded-xl border border-blue-100 px-4 md:px-8 py-6 md:py-8 mb-6">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1">
            <p className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-wide mb-1">
              Student / Parent Preview
            </p>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Plan your journey from <span className="text-blue-600">KG</span> to <span className="text-indigo-600">PG</span> in one place.
            </h1>
            <p className="mt-3 text-sm md:text-base text-gray-600 max-w-xl">
              Show this live demo to your clients and parents – they can explore courses, universities, fees and
              MBBS options across India with a clean, modern interface.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs md:text-sm text-gray-600">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">
                Entrance Coaching Dashboard
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 font-medium">
                MBBS &amp; Counselling Support
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 font-medium">
                Fees, Seats &amp; College Info
              </span>
            </div>
          </div>

          {/* Auto-rotating image slider (universities / coaching) */}
          <div className="flex-1">
            <div className="relative w-full h-40 md:h-52 overflow-hidden rounded-xl shadow-sm bg-gray-100">
              <div
                className="absolute inset-0 flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentHeroIndex * 100}%)` }}
              >
                {heroImages.map((item) => (
                  <div key={item.id} className="relative min-w-full h-full">
                    {/* Background image fully visible */}
                    <img
                      src={item.src}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Bottom gradient bar with text */}
                    <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                      <div
                        className={`rounded-lg bg-gradient-to-r ${item.color} text-white/95 px-3 md:px-4 py-2 md:py-2.5 shadow-md bg-opacity-90`}
                      >
                        <p className="text-[9px] md:text-[10px] uppercase tracking-[0.16em] text-blue-100 mb-0.5 md:mb-1">
                          University / Coaching Highlight
                        </p>
                        <p className="text-sm md:text-base font-semibold leading-snug">{item.title}</p>
                        <p className="mt-0.5 text-[10px] md:text-xs text-blue-50 max-w-xs line-clamp-2">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {heroImages.map((item, index) => (
                  <span
                    key={item.id}
                    className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                      index === currentHeroIndex ? 'bg-white' : 'bg-white/40'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About KG2PG section (converted from earlier hero) */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 md:px-8 py-6 md:py-8 mb-6 flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">About KG2PG Student Portal</h2>
          <p className="mt-3 text-sm md:text-base text-gray-600 max-w-xl">
            One place to explore entrance coaching, track batches, and understand MBBS and engineering options across
            India. Use this as a demo interface when you explain your services to parents and students.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs md:text-sm text-gray-600">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-medium">
              NEET &amp; JEE Coaching
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 font-medium">
              MBBS (India) Guidance
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 font-medium">
              Fees &amp; College Info
            </span>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white p-4 md:p-6 shadow-md">
            <p className="text-xs uppercase tracking-wide text-blue-100 mb-1">Demo Preview</p>
            <p className="text-lg md:text-xl font-semibold">Clean UI ready to show your clients.</p>
            <p className="mt-2 text-xs md:text-sm text-blue-100 max-w-xs">
              Replace this section later with your own marketing banner, upcoming batches, or topper highlights.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3 text-xs">
              <div>
                <p className="text-blue-100">NEET Success</p>
                <p className="text-base font-bold">92%</p>
              </div>
              <div>
                <p className="text-blue-100">JEE Selections</p>
                <p className="text-base font-bold">78%</p>
              </div>
              <div>
                <p className="text-blue-100">MBBS Seats</p>
                <p className="text-base font-bold">320+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats cards */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-lg shadow-sm border border-gray-100 px-4 py-4 flex flex-col justify-between"
          >
            <p className="text-xs font-medium text-gray-500">{stat.label}</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </section>

      {/* Simple progress / chart section */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 md:px-6 py-5 md:py-6 mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Preparation Snapshot (Demo)</h2>
        <p className="text-xs md:text-sm text-gray-500 mb-4">
          This is a simple visual representation using CSS bars. You can later replace it with a real chart component
          connected to student performance data.
        </p>
        <div className="space-y-3">
          {progress.map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-xs md:text-sm text-gray-600 mb-1">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                <div
                  className="h-2 rounded-full bg-blue-500"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular programs */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 md:px-6 py-5 md:py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <h2 className="text-lg md:text-xl font-semibold text-gray-900">Popular Programs</h2>
          <p className="text-xs md:text-sm text-gray-500">
            Demo UI only – replace with real programs and links when backend is ready.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {programs.map((program) => (
            <div key={program.name} className="border border-gray-100 rounded-lg p-4 hover:shadow-sm transition">
              <h3 className="text-sm md:text-base font-semibold text-gray-900">{program.name}</h3>
              <p className="mt-1 text-xs md:text-sm text-gray-600">{program.highlight}</p>
              <div className="mt-3 flex items-center justify-between text-xs md:text-sm text-gray-500">
                <span>{program.duration}</span>
                <span>{program.mode}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </UserLayout>
  );
};

export default UserHome;
