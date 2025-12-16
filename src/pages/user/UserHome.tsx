import React, { useEffect, useState } from 'react';
import UserLayout from '../../components/UserLayout';

const UserHome: React.FC = () => {
  const heroSlides = [
    {
      id: 1,
      title: 'Live Video Counselling Demo',
      href: 'https://www.youtube.com/',
      src: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 2,
      title: 'Parent Guidance Session',
      href: 'https://www.youtube.com/',
      src: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 3,
      title: 'NEET / JEE Doubt Solving',
      href: 'https://www.youtube.com/',
      src: 'https://images.pexels.com/photos/5212335/pexels-photo-5212335.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      id: 4,
      title: 'Top Colleges & Coaching Advertisement',
      href: 'https://www.youtube.com/',
      src: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  const newsMentions = [
    {
      outlet: 'Inc42',
      title: "How KG2PG is simplifying India's higher education decisions",
      cta: 'Read More',
    },
    {
      outlet: 'APN News',
      title: 'KG2PG edtech revolution hits national headlines',
      cta: 'Read More',
    },
    {
      outlet: 'YourStory',
      title: 'KG2PG – Amazon of Online & Hybrid Education',
      cta: 'Read More',
    },
    {
      outlet: 'The Economic Times',
      title: 'AI & ML programs see 4x growth, says KG2PG report',
      cta: 'Read More',
    },
  ];

  const newsLogos = [
    'Inc42',
    'APN News',
    'YourStory',
    'The Economic Times',
    'Financial Express',
  ];

  const alumniHighlights = [
    {
      name: 'Rohit Sharma',
      company: 'HDFC Bank',
      img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Ananya Verma',
      company: 'Nykaa',
      img: 'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Aman Gupta',
      company: 'Livspace',
      img: 'https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Priya Nair',
      company: 'Salesforce',
      img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Sahil Khan',
      company: 'Magicbricks',
      img: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Neha Singh',
      company: 'Paytm',
      img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Arjun Mehta',
      company: 'NTT Data',
      img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Simran Kaur',
      company: 'MetLife',
      img: 'https://images.pexels.com/photos/3760851/pexels-photo-3760851.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Rahul Pandey',
      company: 'Amazon',
      img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const partnerUniversities = [
    { name: 'Amity University Online', courses: '78 Courses' },
    { name: 'Jain University Online', courses: '60 Courses' },
    { name: 'DY Patil University Online', courses: '38 Courses' },
    { name: 'Liverpool John Moores University', courses: '28 Courses' },
    { name: 'Golden Gate University', courses: '35 Courses' },
    { name: 'MAHE Manipal Online', courses: '37 Courses' },
    { name: 'IIM Nagpur', courses: '9 Courses' },
    { name: 'Rushford Business School', courses: '13 Courses' },
    { name: 'IIM Indore', courses: '16 Courses' },
    { name: 'NMIMS Online', courses: '24 Courses' },
    { name: 'Sanskriti University', courses: '31 Courses' },
    { name: 'Kalinga University', courses: '10 Courses' },
  ];

  const trustedVideos = [
    {
      title: 'CV Subsidy Announced for Online Students',
      label: '20 Crore CV Subsidy',
      views: '50K',
    },
    {
      title: 'Got Placement Support from KG2PG',
      label: 'Placement Story',
      views: '32K',
    },
    {
      title: 'Chain Reaction – An experiment by KG2PG',
      label: 'Opinion Matters',
      views: '10.4K',
    },
    {
      title: 'Sneha Singh – Took admission without any hustle',
      label: 'Student Journey',
      views: '7.1K',
    },
  ];

  const expertMentors = [
    {
      name: 'Rohit Gupta',
      role: 'Education Expert  ·  MBA',
      exp: '8 years experience',
      rating: '4.8',
      consultingCount: '2423+',
      img: 'https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Sarthak Garg',
      role: 'Sr. Mentor  ·  MCA',
      exp: '6 years experience',
      rating: '4.7',
      consultingCount: '2232+',
      img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Sakshi Rajput',
      role: 'Sr. Mentor  ·  M.Com',
      exp: '5 years experience',
      rating: '4.5',
      consultingCount: '1724+',
      img: 'https://images.pexels.com/photos/1181681/pexels-photo-1181681.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Manish Thapliyal',
      role: 'Sr. Mentor  ·  MA',
      exp: '6 years experience',
      rating: '4.9',
      consultingCount: '1943+',
      img: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroSlides.length]);


  const topHighlightStats = [
    {
      label: 'Trusted by Students',
      value: '1 Lakh+',
      accent: '😊',
    },
    {
      label: 'Expert Mentors',
      value: '500+',
      accent: '👨‍🏫',
    },
    {
      label: 'Google Rating',
      value: '4.8/5 (3000)',
      accent: '★',
    },
  ];

  const courseCategories = [
    { title: 'PG Courses', subtitle: 'After Graduation' },
    { title: 'Executive Education', subtitle: 'Working Professionals & CXOs' },
    { title: 'Doctorate / Ph.D.', subtitle: 'Get Dr. Title (After UG + Work Ex)' },
    { title: 'UG Courses', subtitle: 'After 12th' },
    { title: 'Job Guarantee', subtitle: '100% Placement*' },
    { title: 'Study Abroad', subtitle: 'Pathway / Hybrid Mode' },
    { title: 'Advanced Diploma', subtitle: 'After 10th & 12th' },
    { title: 'Skills & Certification', subtitle: 'After 10th & 12th' },
  ];

  const courseCards = [
    {
      tag: '80+ Specializations',
      duration: '',
      name: 'Online MBA',
      cta: 'Compare 37 Now',
    },
    {
      tag: '1 Year',
      duration: '1 Year',
      name: '1 Year MBA Online',
      cta: 'Compare 10 Now',
    },
    {
      tag: 'ROI 100%',
      duration: '',
      name: 'Distance MBA',
      cta: 'Compare 15 Now',
    },
    {
      tag: '12 – 24 Months',
      duration: '12 – 24 Months',
      name: 'Executive MBA for Working Professionals',
      cta: 'Compare 9 Now',
    },
    {
      tag: 'Trending',
      duration: '',
      name: 'Online Global MBA',
      cta: 'Compare 6 Now',
    },
    {
      tag: '16+ Specializations',
      duration: '',
      name: 'Online MCA',
      cta: 'Compare 14 Now',
    },
    {
      tag: '25+ Specializations',
      duration: '',
      name: 'M.Tech',
      cta: 'Compare 3 Now',
    },
    {
      tag: 'Global',
      duration: '',
      name: 'MS Degree Online',
      cta: 'Compare 2 Now',
    },
    {
      tag: '2 Years',
      duration: '2 Years',
      name: 'Online MA',
      cta: 'Compare 12 Now',
    },
  ];
  const platformFeatures = [
    { label: 'Job Portal', stat: '3555+', color: 'text-emerald-500', icon: '💼' },
    { label: 'Internship Portal', stat: '3000+', color: 'text-sky-500', icon: '📄' },
    { label: 'Virtual Expo', stat: 'LIVE', color: 'text-red-500', icon: '🎥' },
    { label: 'Career Finder (Career Suitability Test)', stat: 'New', color: 'text-emerald-500', icon: '🧭' },
    { label: 'Education Loans', stat: '', color: 'text-sky-500', icon: '💰' },
    { label: 'ROI Calculator', stat: 'Info', color: 'text-amber-500', icon: '🔄' },
    { label: 'Post Admission Services', stat: '', color: 'text-sky-500', icon: '🎧' },
    { label: 'Verify Your University', stat: '', color: 'text-sky-500', icon: '🏫' },
  ];

  const promoCards = [
    {
      title: 'Start Career with Top Internship Opportunities',
      stat: '3000+ Internships Available',
      badge: 'Internship Portal',
      bg: 'from-indigo-100 via-blue-50 to-white',
    },
    {
      title: 'Your Strengths define Career Success',
      stat: 'Discover with our Career Finder',
      badge: 'Career Finder',
      bg: 'from-amber-100 via-orange-50 to-white',
    },
    {
      title: 'Uncover the Truth About Online Universities',
      stat: 'Save yourself from fake universities',
      badge: 'Verify University',
      bg: 'from-rose-100 via-orange-50 to-white',
    },
  ];
  const [promoIndex, setPromoIndex] = useState(0);
  const [newsIndex, setNewsIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isChecklistOpen, setIsChecklistOpen] = useState(false);

  const checklistItems = [
    {
      title: 'MBA, MCA, BCA, B.Com & Other Online Degrees',
      subtitle: '',
    },
    {
      title: 'B.Tech & M.Tech For Working Professionals',
      subtitle: '',
    },
    {
      title: 'DBA Doctorate Program',
      subtitle: 'Smarter way of doing PhD',
    },
    {
      title: 'Online Global MBA',
      subtitle: '',
    },
    {
      title: 'IIM Online Degrees',
      subtitle: '',
    },
    {
      title: 'IIT Online Courses',
      subtitle: '',
    },
    {
      title: 'Skill Certificates and Diploma',
      subtitle: '',
    },
    {
      title: 'Honorary PhD',
      subtitle: '',
    },
    {
      title: 'LLM (Blended Learning)',
      subtitle: '',
    },
  ];

  const handlePromoPrev = () => {
    setPromoIndex((prev) => (prev - 1 + promoCards.length) % promoCards.length);
  };

  const handlePromoNext = () => {
    setPromoIndex((prev) => (prev + 1) % promoCards.length);
  };

  const handleNewsPrev = () => {
    setNewsIndex((prev) => (prev - 1 + newsMentions.length) % newsMentions.length);
  };

  const handleNewsNext = () => {
    setNewsIndex((prev) => (prev + 1) % newsMentions.length);
  };

  const faqItems = [
    {
      question: 'What are your charges?',
      answer:
        'This is a demo interface. You can later replace this text with your actual counselling or service charges.',
    },
    {
      question: 'How is KG2PG different from others?',
      answer:
        'You can highlight your independent counselling, verified universities and transparent comparison in this answer.',
    },
    {
      question: 'Why take admission through KG2PG?',
      answer:
        'Explain your end-to-end support, documentation help and post-admission services here.',
    },
    {
      question: 'Independent Platform? What?',
      answer:
        'Use this space to explain that you work with multiple universities and help students choose without bias.',
    },
    {
      question: 'What is KG2PG?',
      answer:
        'Short description about your brand, when you started and whom you serve (students, parents, working professionals).',
    },
  ];

  return (
    <UserLayout>
      {/* Top hero section - full-width auto-sliding banner */}
      <section className="bg-blue-600 rounded-xl border border-blue-500 overflow-hidden mb-6">
        <div className="relative w-full h-40 md:h-56 lg:h-64">
          <div
            className="absolute inset-0 flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroSlides.map((slide) => (
              <a
                key={slide.id}
                href={slide.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative min-w-full h-full group"
              >
                <img
                  src={slide.src}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-slate-900/20 to-slate-900/40 opacity-70 group-hover:opacity-80 transition-opacity" />
                <div className="relative z-10 h-full w-full flex flex-col justify-between p-3 md:p-6 lg:p-8 text-white">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[10px] md:text-xs bg-white/10 px-2 py-1 rounded-full border border-white/30">
                      #BelieveWhatYouDo
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-2">
                    <p className="text-sm md:text-lg font-semibold max-w-[70%] leading-snug">
                      {slide.title}
                    </p>
                    <span className="inline-flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-full bg-blue-500 text-white text-xs md:text-sm font-bold shadow-md">
                      ▶
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Slider dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 w-1.5 rounded-full border border-white/60 transition-colors duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/20'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Highlight stats + category + course cards section */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 md:px-6 lg:px-8 py-5 md:py-6 mb-6">
        {/* Top highlight stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
          {topHighlightStats.map((item) => (
            <div key={item.label} className="flex items-center gap-3 md:gap-4">
              <div className="flex items-center justify-center h-9 w-9 md:h-10 md:w-10 rounded-full bg-orange-50 text-xl md:text-2xl">
                <span>{item.accent}</span>
              </div>
              <div>
                <p className="text-base md:text-lg font-bold text-slate-900">{item.value}</p>
                <p className="text-[11px] md:text-xs text-slate-500">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Categories + course cards */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Left category sidebar */}
          <div className="md:w-1/4 lg:w-1/5 border border-blue-50 rounded-xl bg-white p-3 md:p-4 flex-shrink-0">
            <div className="space-y-1.5 text-xs md:text-sm">
              {courseCategories.map((cat, index) => (
                <button
                  key={cat.title}
                  type="button"
                  className={`w-full text-left rounded-full px-3 py-2 mb-0.5 transition ${index === 0
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-transparent text-slate-900 hover:bg-blue-50'
                    }`}
                >
                  <span className={`block text-[12px] md:text-[13px] font-semibold ${index === 0 ? 'text-white' : 'text-slate-900'}`}>
                    {cat.title}
                  </span>
                  <span
                    className={`mt-1 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] md:text-[11px] ${index === 0
                        ? 'bg-blue-500/20 text-blue-50 border border-blue-100/40'
                        : 'bg-blue-50 text-blue-700 border border-blue-100'
                      }`}
                  >
                    {cat.subtitle}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right course cards grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
              {courseCards.map((course) => (
                <div
                  key={course.name}
                  className="border border-slate-100 rounded-2xl bg-white shadow-[0_1px_4px_rgba(15,23,42,0.08)] flex flex-col overflow-hidden"
                >
                  <div className="px-3 md:px-4 pt-3 pb-2 flex flex-col items-center gap-2">
                    <div className="inline-flex items-center justify-center rounded-full bg-orange-50 text-[10px] md:text-[11px] text-slate-700 px-3 py-1">
                      {course.duration || course.tag}
                    </div>
                    <div className="h-8 w-8 md:h-9 md:w-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xs md:text-sm font-semibold">
                      📘
                    </div>
                    <p className="mt-1 text-sm md:text-[15px] font-semibold text-slate-900 text-center leading-snug min-h-[38px]">
                      {course.name}
                    </p>
                  </div>
                  <button className="mt-auto inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white text-[11px] md:text-xs font-semibold px-3 py-2 rounded-t-none">
                    {course.cta}
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs md:text-sm font-semibold px-6 md:px-8 py-2 shadow-[0_1px_3px_rgba(15,23,42,0.06)] hover:bg-blue-100"
              >
                VIEW ALL {'>'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform that supports you end-to-end */}
      <section className="bg-gradient-to-r from-blue-50 via-white to-sky-50 rounded-xl border border-blue-100 px-4 md:px-8 py-5 md:py-6 mb-6">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
          Platform That Supports You End-to-End
        </h2>
        <div className="bg-white rounded-2xl border border-blue-100 shadow-[0_1px_4px_rgba(15,23,42,0.06)] px-3 md:px-6 py-4 flex flex-wrap md:flex-nowrap items-stretch justify-between gap-4 md:gap-3 lg:gap-6">
          {platformFeatures.map((item) => (
            <div
              key={item.label}
              className="flex-1 min-w-[90px] flex flex-col items-center text-center text-[11px] md:text-xs"
            >
              <div className={`text-[11px] md:text-[12px] font-semibold mb-1 ${item.color}`}>
                {item.stat}
              </div>
              <div className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-slate-100 flex items-center justify-center mb-1 shadow-sm">
                <span className="text-lg md:text-xl text-sky-500">
                  {item.icon}
                </span>
              </div>
              <p className="text-slate-800 leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs md:text-sm font-semibold px-6 md:px-8 py-2 shadow-[0_1px_3px_rgba(15,23,42,0.06)] hover:bg-blue-100"
          >
            VIEW ALL {'>'}
          </button>
        </div>
      </section>

      {/* Promotional cards slider */}
      <section className="mb-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-2 md:px-4 py-4 md:py-5 overflow-hidden relative">
          {/* Left arrow */}
          <button
            type="button"
            onClick={handlePromoPrev}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-slate-600 hover:bg-slate-50 z-10"
          >
            ‹
          </button>

          {/* Right arrow */}
          <button
            type="button"
            onClick={handlePromoNext}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-slate-600 hover:bg-slate-50 z-10"
          >
            ›
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${promoIndex * 100}%)` }}
            >
              {promoCards.map((card) => (
                <div
                  key={card.title}
                  className="min-w-full md:min-w-full rounded-2xl overflow-hidden border border-slate-100 shadow-[0_1px_4px_rgba(15,23,42,0.08)] bg-gradient-to-r flex flex-col justify-between mx-1"
                  style={{ backgroundImage: undefined }}
                >
                  <div className={`px-4 md:px-5 pt-4 pb-3 bg-gradient-to-r ${card.bg}`}>
                    <p className="text-sm md:text-[15px] font-semibold text-slate-900 leading-snug mb-2">
                      {card.title}
                    </p>
                    <p className="text-[11px] md:text-xs text-slate-700 mb-3">{card.stat}</p>
                    <span className="inline-flex items-center rounded-full bg-white/90 text-slate-800 text-[11px] md:text-xs font-medium px-3 py-1 shadow-sm border border-slate-100">
                      {card.badge}
                    </span>
                  </div>
                  <div className="px-4 md:px-5 py-2.5 bg-white flex items-center justify-between text-[11px] md:text-xs text-slate-500 border-t border-slate-100">
                    <span>Learn more {'>'}</span>
                    <span className="flex items-center gap-1">
                      {promoCards.map((p) => (
                        <span
                          key={p.title}
                          className={`h-1 w-1 rounded-full ${p.title === card.title ? 'bg-slate-500' : 'bg-slate-300'}`}
                        />
                      ))}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Right Guidance from Experts */}
      <section className="bg-slate-950 text-slate-50 rounded-2xl border border-slate-900 px-4 md:px-8 py-6 md:py-8 mb-6">
        <div className="flex flex-col items-center text-center mb-5 md:mb-6">
          <p className="text-[11px] md:text-xs uppercase tracking-[0.16em] text-amber-300/80 mb-1">
            Say Goodbye to Faceless Call Centers
          </p>
          <h2 className="text-xl md:text-2xl font-semibold mb-1">Right Guidance from Experts</h2>
          <p className="max-w-2xl text-xs md:text-sm text-slate-300">
            KG2PG has a team of demo experts who are assisting you since 2019 and giving you the right guidance for your
            successful career ahead.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-5">
          {expertMentors.map((mentor) => (
            <div
              key={mentor.name}
              className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-[0_1px_6px_rgba(15,23,42,0.4)] flex flex-col"
            >
              <div className="relative h-40 md:h-44 bg-slate-800">
                <img
                  src={mentor.img}
                  alt={mentor.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-white/95 text-[10px] md:text-[11px] text-slate-900 px-2 py-1 shadow-sm">
                  <span className="text-amber-400">★</span>
                  <span className="font-semibold">{mentor.rating}</span>
                </div>
                <div className="absolute top-2 right-2 rounded-full bg-emerald-500/95 text-[10px] md:text-[11px] text-white px-2 py-1 shadow-sm">
                  {mentor.consultingCount} Consulting
                </div>
              </div>
              <div className="px-3 md:px-4 py-3 md:py-4 bg-slate-950/50 flex flex-col flex-1">
                <p className="text-sm md:text-[15px] font-semibold text-white mb-0.5">{mentor.name}</p>
                <p className="text-[11px] md:text-xs text-slate-300 mb-1">{mentor.role}</p>
                <p className="text-[10px] md:text-[11px] text-slate-400 mb-3">{mentor.exp}</p>
                <button className="mt-auto inline-flex items-center justify-center w-full rounded-full bg-white text-slate-900 text-[11px] md:text-xs font-semibold px-3 py-2 hover:bg-slate-100">
                  Consult Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-slate-500 bg-transparent text-slate-50 text-xs md:text-sm font-semibold px-6 md:px-8 py-2 hover:bg-slate-900"
          >
            VIEW ALL {'>'}
          </button>
        </div>
      </section>

      {/* Universities grid section */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 md:px-8 py-6 md:py-7 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              Explore over 100 online universities &amp; Compare on 30+ factors
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-4">
          {partnerUniversities.map((item) => (
            <div
              key={item.name}
              className="border border-slate-100 rounded-xl bg-white shadow-[0_1px_3px_rgba(15,23,42,0.06)] px-3 md:px-4 py-3 flex flex-col gap-2 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-blue-500 to-sky-400" />
                <p className="text-xs md:text-sm font-semibold text-slate-900 leading-snug">
                  {item.name}
                </p>
              </div>
              <p className="text-[11px] md:text-xs font-semibold text-slate-700">{item.courses}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs md:text-sm font-semibold px-6 md:px-8 py-2 shadow-[0_1px_3px_rgba(15,23,42,0.06)] hover:bg-blue-100"
          >
            VIEW MORE UNIVERSITIES {'>'}
          </button>
        </div>
      </section>

      {/* Trusted Voices - Hear them out */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 md:px-8 py-6 md:py-7 mb-6">
        <div className="mb-4">
          <p className="text-[11px] md:text-xs font-semibold text-slate-500 uppercase tracking-[0.16em]">
            Trusted Voices
          </p>
          <h2 className="text-lg md:text-xl font-semibold text-slate-900">
            Hear them <span className="text-blue-600">out</span>
          </h2>
        </div>
        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2">
          {trustedVideos.map((video, index) => (
            <div
              key={video.title}
              className={`relative flex-shrink-0 rounded-[1.75rem] overflow-hidden border border-slate-200 bg-slate-900 text-slate-50 w-36 h-64 md:w-40 md:h-72 shadow-[0_8px_18px_rgba(15,23,42,0.35)] ${
                index === 0 ? '' : 'opacity-80'
              }`}
            >
              {/* Top phone bar */}
              <div className="absolute top-0 inset-x-0 h-8 bg-slate-800 flex items-center justify-between px-3 text-[10px] md:text-[11px] text-slate-100">
                <span className="inline-flex items-center gap-1">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-500" />
                  <span>{video.views}</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[9px] md:text-[10px]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-300" />
                  <span>Live</span>
                </span>
              </div>

              {/* Placeholder content */}
              <div className="absolute inset-0 pt-8 pb-4 px-3 flex flex-col justify-between bg-gradient-to-b from-blue-600 via-sky-500 to-slate-900">
                <div>
                  <p className="text-[10px] md:text-[11px] font-semibold mb-1">{video.label}</p>
                  <p className="text-xs md:text-sm font-semibold leading-snug">{video.title}</p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/95 text-blue-600 shadow-md text-xs font-bold">
                    ▶
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="text-[11px] md:text-xs font-semibold text-blue-600 hover:underline"
          >
            WATCH 100+ SUCCESS STORIES ON YOUTUBE {'>'}
          </button>
        </div>
      </section>
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 md:px-8 py-6 md:py-7 mb-6">
        <div className="mb-4">
          <p className="text-[11px] md:text-xs font-semibold text-slate-500 uppercase tracking-[0.16em]">
            Find Us In The News
          </p>
          <h2 className="text-lg md:text-xl font-semibold text-slate-900">
            We've been in the news. <span className="text-blue-600">200+ Mentions!</span>
          </h2>
        </div>
        <div className="relative mb-5">
          <button
            type="button"
            onClick={handleNewsPrev}
            className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-slate-700 hover:bg-slate-50 z-10"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={handleNewsNext}
            className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center text-slate-700 hover:bg-slate-50 z-10"
          >
            ›
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${newsIndex * 100}%)` }}
            >
              {newsMentions.map((item) => (
                <div
                  key={item.outlet}
                  className="min-w-full px-1"
                >
                  <div className="h-full rounded-2xl border border-slate-100 bg-white shadow-[0_1px_4px_rgba(15,23,42,0.08)] flex flex-col overflow-hidden">
                    <div className="h-32 md:h-40 bg-slate-100 flex items-center justify-center">
                      <span className="text-sm md:text-base font-semibold text-slate-700">
                        {item.outlet}
                      </span>
                    </div>
                    <div className="px-4 py-3 flex-1 flex flex-col">
                      <p className="text-xs md:text-sm font-semibold text-slate-900 leading-snug mb-2 line-clamp-3">
                        {item.title}
                      </p>
                      <button className="mt-auto text-[11px] md:text-xs font-semibold text-blue-600">
                        {item.cta} {'>'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-1 -mx-1 px-1">
            {newsLogos.map((logo) => (
              <div
                key={logo}
                className="flex-shrink-0 px-3 md:px-4 py-1.5 rounded-full border border-slate-200 bg-slate-50 text-[11px] md:text-xs font-semibold text-slate-700"
              >
                {logo}
              </div>
            ))}
          </div>
          <button
            type="button"
            className="self-start md:self-auto text-[11px] md:text-xs font-semibold text-blue-600 hover:underline mt-1 md:mt-0"
          >
            Explore Media {'>'}
          </button>
        </div>
      </section>
      <section className="bg-slate-950 text-slate-50 rounded-xl md:rounded-2xl px-4 md:px-10 py-7 md:py-10 mb-6">
        <div className="flex flex-col items-center text-center mb-6">
          <p className="text-3xl md:text-5xl font-extrabold text-sky-400 mb-2">
            100000+
          </p>
          <button
            type="button"
            className="inline-flex items-center rounded-full bg-sky-500 hover:bg-sky-600 text-xs md:text-sm font-semibold px-5 md:px-6 py-1.5 md:py-2 mb-2"
          >
            Students ne Chuna
          </button>
          <p className="text-[11px] md:text-xs text-slate-300">
            Sahi Course, Sahi University aur Career Path
          </p>
        </div>
        <div className="flex items-stretch gap-3 md:gap-4 overflow-x-auto pb-2">
          {alumniHighlights.map((alumni) => (
            <div
              key={alumni.name}
              className="flex-shrink-0 w-20 md:w-24 lg:w-28 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-[0_8px_18px_rgba(15,23,42,0.6)] flex flex-col"
            >
              <div className="h-24 md:h-28 bg-slate-800">
                <img
                  src={alumni.img}
                  alt={alumni.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-2 md:px-3 py-2 bg-slate-950/70 flex flex-col">
                <p className="text-[10px] md:text-[11px] font-semibold text-slate-50 truncate">
                  {alumni.name}
                </p>
                <p className="mt-0.5 text-[9px] md:text-[10px] font-semibold text-slate-200/90 truncate">
                  {alumni.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 md:px-8 py-6 md:py-7 mb-6">
        <div className="mb-4">
          <h2 className="text-lg md:text-xl font-semibold text-slate-900">Let's clear up some doubts</h2>
        </div>
        <div className="border border-slate-100 rounded-xl divide-y divide-slate-100 overflow-hidden">
          {faqItems.map((item, index) => {
            const open = openFaqIndex === index;
            return (
              <button
                key={item.question}
                type="button"
                onClick={() => setOpenFaqIndex(open ? null : index)}
                className="w-full text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center justify-between px-3 md:px-4 py-3 md:py-3.5">
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-sm md:text-[15px] font-semibold text-slate-900">
                      {item.question}
                    </span>
                  </div>
                  <span
                    className={`ml-3 text-slate-500 text-xs md:text-sm transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                  >
                    ▾
                  </span>
                </div>
                {open && (
                  <div className="px-10 md:px-12 pb-3 md:pb-3.5 text-[11px] md:text-xs text-slate-600">
                    {item.answer}
                  </div>
                )}
              </button>
            );
          })}
        </div>
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-blue-50 text-blue-700 text-[11px] md:text-xs font-semibold px-5 md:px-6 py-2 hover:bg-blue-100"
          >
            View More {'>'}
          </button>
        </div>
      </section>
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 px-4 md:px-8 py-6 md:py-7 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-3">Talk to our Experts</h2>
            <div className="inline-flex items-center rounded-full bg-slate-900 text-white text-[10px] md:text-[11px] font-semibold px-3 py-1 mb-3">
              Support
            </div>
            <div className="rounded-lg bg-slate-50 border border-slate-100 px-4 py-3 text-[11px] md:text-xs text-slate-800 space-y-1.5 mb-4">
              <p>
                <span className="font-semibold">☎ New Student :</span> 1800-420-0000
              </p>
              <p>
                <span className="font-semibold">☎ Existing Student :</span> 1800-309-0000
              </p>
              <p>
                <span className="font-semibold">🌐 For Existing Student :</span> +91 74288 00000
                <span className="text-slate-500"> (from registered mobile number only)</span>
              </p>
              <p>
                <span className="font-semibold">✉ Email :</span> support@kg2pg.com
              </p>
              <p>
                <span className="font-semibold">📍 Visit Us :</span> (10 AM to 7 PM)
              </p>
              <p>
                <span className="font-semibold">🏠 Book :</span> Home Visit
              </p>
            </div>
            <p className="text-[11px] md:text-xs font-semibold text-slate-900 mb-0.5">Need answers? Call us!</p>
            <p className="text-[11px] md:text-xs text-slate-600 mb-3">
              Our team of experts are available for you around the clock.
            </p>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-slate-900 hover:bg-black text-white text-[11px] md:text-xs font-semibold px-5 md:px-6 py-2"
            >
              Book Your 30 Mins Expert Career Advice {'>'}
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {expertMentors.slice(0, 6).map((mentor) => (
              <div key={mentor.name} className="rounded-lg overflow-hidden bg-slate-100">
                <div className="aspect-[3/4] bg-slate-200">
                  <img
                    src={mentor.img}
                    alt={mentor.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-950 text-slate-50 rounded-2xl px-4 md:px-8 lg:px-10 py-4 md:py-5 mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-slate-800 flex items-center justify-center text-sm md:text-base">
            <span>📋</span>
          </div>
          <p className="text-sm md:text-base font-semibold">College KG-2-PG</p>
        </div>
        <button
          type="button"
          onClick={() => setIsChecklistOpen(true)}
          className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 text-[11px] md:text-xs font-semibold px-4 md:px-5 py-1.5 shadow-sm"
        >
          View {'>'}
        </button>
      </section>

      {isChecklistOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/60 px-2 md:px-4" onClick={() => setIsChecklistOpen(false)}>
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-xl md:rounded-2xl shadow-xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-slate-100">
              <div>
                <h2 className="text-sm md:text-base font-semibold text-slate-900">College KG-2-PG</h2>
                <p className="mt-1 text-[11px] md:text-xs text-slate-600 flex items-center gap-1.5">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-500" />
                  We have prepared a checklist especially for you
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsChecklistOpen(false)}
                className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold"
              >
                ×
              </button>
            </div>
            <div className="px-4 md:px-6 py-4 overflow-y-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {checklistItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100 transition-colors px-3 md:px-4 py-3 md:py-4 flex flex-col gap-2"
                  >
                    <div className="h-8 w-8 md:h-9 md:w-9 rounded-xl bg-white shadow-sm flex items-center justify-center text-lg">
                      <span>📘</span>
                    </div>
                    <div>
                      <p className="text-[11px] md:text-xs font-semibold text-slate-900 leading-snug">
                        {item.title}
                      </p>
                      {item.subtitle && (
                        <p className="mt-0.5 text-[10px] md:text-[11px] text-blue-600 leading-snug">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </UserLayout>
  );
};

export default UserHome;
