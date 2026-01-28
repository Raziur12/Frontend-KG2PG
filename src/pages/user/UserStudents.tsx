import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserLayout from '../../components/UserLayout';

const UserStudents: React.FC = () => {
  const location = useLocation();
  const steps = useMemo(
    () => [
      { key: 'account', label: 'Create Account' },
      { key: 'institute', label: 'Institute' },
      { key: 'plan', label: 'Plan' },
      { key: 'payment', label: 'Payment & Access' },
    ],
    [],
  );

  const [activeStep, setActiveStep] = useState(0);
  const [paid, setPaid] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    studentClass: 'Class 10',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'English'],
    instituteType: 'Coaching',
    instituteName: '',
    instituteCity: '',
    planId: 'starter-199',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const plan = useMemo(
    () => ({
      id: 'starter-199',
      name: 'KG2PG Student Plan',
      price: 199,
      features: ['Live classes access', 'Class notes / PDFs', 'Support chat (demo)'],
    }),
    [],
  );

  const setField = (key: keyof typeof form, value: (typeof form)[keyof typeof form]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key as string]) return prev;
      const next = { ...prev };
      delete next[key as string];
      return next;
    });
  };

  const validateStep = (stepIndex: number) => {
    const nextErrors: Record<string, string> = {};

    if (stepIndex === 0) {
      if (!form.fullName.trim()) nextErrors.fullName = 'Name is required.';
      if (!form.email.trim()) nextErrors.email = 'Email is required.';
      if (!form.phone.trim()) nextErrors.phone = 'Phone is required.';
      if (!form.password.trim() || form.password.trim().length < 6) nextErrors.password = 'Password must be at least 6 characters.';
    }

    if (stepIndex === 1) {
      if (!form.instituteType) nextErrors.instituteType = 'Please choose a type.';
      if (!form.instituteName.trim()) nextErrors.instituteName = 'Name is required.';
      if (!form.instituteCity.trim()) nextErrors.instituteCity = 'City is required.';
    }

    if (stepIndex === 2) {
      if (form.planId !== plan.id) nextErrors.planId = 'Please choose the ₹199 plan.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  useEffect(() => {
    const state = (location.state ?? {}) as any;
    if (state?.startOnboarding && state?.prefill) {
      const prefill = state.prefill as { studentClass?: string; subjects?: string[] };
      setShowOnboarding(true);
      setPaid(false);
      setActiveStep(0);
      setErrors({});
      setForm((prev) => ({
        ...prev,
        studentClass: prefill.studentClass ?? prev.studentClass,
        subjects: Array.isArray(prefill.subjects) && prefill.subjects.length > 0 ? prefill.subjects : prev.subjects,
      }));
    }
  }, [location.state]);

  const backToJourney = () => {
    setShowOnboarding(false);
    setActiveStep(0);
    setPaid(false);
    setErrors({});
  };

  const next = () => {
    const ok = validateStep(activeStep);
    if (!ok) return;
    setActiveStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const back = () => setActiveStep((s) => Math.max(s - 1, 0));

  const journeys = [
    {
      key: 'kg-5',
      stage: 'Class KG–7 Foundation',
      focus: 'Build concepts in Maths & Science, start early exam awareness.',
      badge: 'Foundation',
    },
    {
      key: '8-10',
      stage: 'Class 8–10 Foundation',
      focus: 'Build concepts in Maths & Science, start early exam awareness.',
      badge: 'Foundation',
    },
    {
      key: '11-12',
      stage: 'Class 11–12 + NEET / JEE',
      focus: 'Strong boards + competitive prep with tests and analysis.',
      badge: 'Entrance Prep',
    },
    {
      key: 'college-career',
      stage: 'College & Career',
      focus: 'MBBS, Engineering, Allied Health, Management and more.',
      badge: 'Career Path',
    },
  ];

  return (
    <UserLayout>
      <main className="relative isolate kg-fade-in">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[#f7f7efe9]" />
          <div className="absolute left-0 right-0 top-0 h-[360px] bg-green-700" />
          <svg
            className="absolute left-0 right-0 top-[340px] h-10 w-full"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#c9cc19ff"
              d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,58.7C1120,53,1280,43,1360,37.3L1440,32L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
            />
          </svg>

          <div className="absolute left-0 right-0 top-[420px] h-[240px] bg-orange-500 " />
          <svg
            className="absolute left-0 right-0 top-[640px] h-12 w-full"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#052e2b"
              d="M0,48L80,53.3C160,59,320,69,480,69.3C640,69,800,59,960,53.3C1120,48,1280,48,1360,48L1440,48L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
            />
          </svg>

          <div className="absolute left-0 right-0 top-[680px] bottom-0 bg-[#052e2b]" />
          <svg
            className="absolute left-0 right-0 bottom-0 h-14 w-full"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#f6efe9"
              d="M0,64L80,58.7C160,53,320,43,480,37.3C640,32,800,32,960,37.3C1120,43,1280,53,1360,58.7L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"
            />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl space-y-8 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Intro section */}
        <section className="mb-2">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white">Students</h1>
              <p className="mt-3 text-sm md:text-base text-emerald-100 max-w-3xl">
                This page is a demo view for students and parents using the KG2PG portal. You can later connect it to
                real onboarding flows, counselling forms and class recommendations.
              </p>
            </div>
            {/* <div>
              <Link
                to="/user/students/list"
                className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                View Students List
              </Link>
            </div> */}
          </div>
        </section>

        {showOnboarding && (
          <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-4 py-4 md:px-6 md:py-5 border-b border-slate-100">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={backToJourney}
                      className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
                    >
                      Back
                    </button>
                    <h2 className="text-lg md:text-xl font-extrabold text-slate-900">Student Onboarding</h2>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 max-w-3xl">
                    Create account, choose class & subjects, select institute, choose ₹199 plan and complete payment to access classes.
                  </p>
                </div>
                <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                  <p className="text-[11px] font-semibold text-amber-700">PLAN PRICE</p>
                  <p className="mt-0.5 text-lg font-extrabold text-slate-900">₹{plan.price}</p>
                  <p className="mt-0.5 text-xs text-slate-600">One plan for demo onboarding</p>
                </div>
              </div>
            </div>

            <div className="px-4 py-4 md:px-6 md:py-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <aside className="md:col-span-4 lg:col-span-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                    <p className="text-[11px] font-semibold text-slate-500">STEPS</p>
                    <div className="mt-2 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
                      {steps.map((s, idx) => {
                        const isActive = idx === activeStep;
                        const isDone = idx < activeStep;
                        return (
                          <button
                            key={s.key}
                            type="button"
                            onClick={() => setActiveStep(idx)}
                            className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-sm font-semibold transition ${
                              isActive
                                ? 'border-amber-300 bg-white text-slate-900 shadow-sm'
                                : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                            }`}
                          >
                            <span className="truncate">{s.label}</span>
                            <span
                              className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                                isDone
                                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                  : 'bg-slate-50 text-slate-600 border border-slate-200'
                              }`}
                            >
                              {isDone ? 'Done' : `Step ${idx + 1}`}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </aside>

                <div className="md:col-span-8 lg:col-span-9">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-5">
                  {activeStep === 0 && (
                    <div>
                      <h3 className="text-base md:text-lg font-extrabold text-slate-900">1) Create a student account</h3>
                      <p className="mt-1 text-sm text-slate-600">Fill basic details to create the account.</p>

                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-semibold text-slate-500">FULL NAME</label>
                          <input
                            value={form.fullName}
                            onChange={(e) => setField('fullName', e.target.value)}
                            placeholder="Student name"
                            className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200 ${
                              errors.fullName ? 'border-rose-300' : 'border-slate-200'
                            }`}
                          />
                          {errors.fullName && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.fullName}</p>}
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-slate-500">EMAIL</label>
                          <input
                            value={form.email}
                            onChange={(e) => setField('email', e.target.value)}
                            placeholder="name@example.com"
                            className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200 ${
                              errors.email ? 'border-rose-300' : 'border-slate-200'
                            }`}
                          />
                          {errors.email && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-slate-500">PHONE</label>
                          <input
                            value={form.phone}
                            onChange={(e) => setField('phone', e.target.value)}
                            placeholder="+91 ..."
                            className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200 ${
                              errors.phone ? 'border-rose-300' : 'border-slate-200'
                            }`}
                          />
                          {errors.phone && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.phone}</p>}
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-slate-500">PASSWORD</label>
                          <input
                            type="password"
                            value={form.password}
                            onChange={(e) => setField('password', e.target.value)}
                            placeholder="Minimum 6 characters"
                            className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200 ${
                              errors.password ? 'border-rose-300' : 'border-slate-200'
                            }`}
                          />
                          {errors.password && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.password}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 1 && (
                    <div>
                      <h3 className="text-base md:text-lg font-extrabold text-slate-900">2) Choose coaching / institute / college / university</h3>
                      <p className="mt-1 text-sm text-slate-600">Select where the student wants to study.</p>

                      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <label className="text-[11px] font-semibold text-slate-500">TYPE</label>
                          <select
                            value={form.instituteType}
                            onChange={(e) => setField('instituteType', e.target.value)}
                            className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-200 ${
                              errors.instituteType ? 'border-rose-300' : 'border-slate-200'
                            }`}
                          >
                            {['Coaching', 'Institute', 'College', 'University'].map((t) => (
                              <option key={t} value={t}>
                                {t}
                              </option>
                            ))}
                          </select>
                          {errors.instituteType && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.instituteType}</p>}
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-slate-500">NAME</label>
                          <input
                            value={form.instituteName}
                            onChange={(e) => setField('instituteName', e.target.value)}
                            placeholder="e.g., ABC Coaching"
                            className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200 ${
                              errors.instituteName ? 'border-rose-300' : 'border-slate-200'
                            }`}
                          />
                          {errors.instituteName && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.instituteName}</p>}
                        </div>

                        <div>
                          <label className="text-[11px] font-semibold text-slate-500">CITY</label>
                          <input
                            value={form.instituteCity}
                            onChange={(e) => setField('instituteCity', e.target.value)}
                            placeholder="e.g., Lucknow"
                            className={`mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-200 ${
                              errors.instituteCity ? 'border-rose-300' : 'border-slate-200'
                            }`}
                          />
                          {errors.instituteCity && <p className="mt-1 text-xs font-semibold text-rose-600">{errors.instituteCity}</p>}
                        </div>
                      </div>

                      <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <p className="text-[11px] font-semibold text-slate-500">PREVIEW</p>
                        <p className="mt-1 text-sm font-semibold text-slate-900">
                          {form.instituteType} • {form.instituteName || '—'} • {form.instituteCity || '—'}
                        </p>
                      </div>
                    </div>
                  )}

                  {activeStep === 2 && (
                    <div>
                      <h3 className="text-base md:text-lg font-extrabold text-slate-900">3) Choose plan</h3>
                      <p className="mt-1 text-sm text-slate-600">Plan should be ₹199.</p>

                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                          type="button"
                          onClick={() => setField('planId', plan.id)}
                          className={`text-left rounded-2xl border p-4 shadow-sm transition hover:shadow-md ${
                            form.planId === plan.id ? 'border-amber-300 bg-amber-50' : 'border-slate-200 bg-white'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-sm font-extrabold text-slate-900">{plan.name}</p>
                              <p className="mt-1 text-xs text-slate-600">Best for Class KG–12 students</p>
                            </div>
                            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-sm font-extrabold text-slate-900 border border-slate-200">
                              ₹{plan.price}
                            </span>
                          </div>
                          <div className="mt-3 flex flex-col gap-2">
                            {plan.features.map((f) => (
                              <div key={f} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700">
                                {f}
                              </div>
                            ))}
                          </div>
                        </button>

                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                          <p className="text-[11px] font-semibold text-slate-500">SUMMARY</p>
                          <div className="mt-2 space-y-2 text-sm">
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-slate-600">Student</span>
                              <span className="font-semibold text-slate-900">{form.fullName || '—'}</span>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-slate-600">Class</span>
                              <span className="font-semibold text-slate-900">{form.studentClass || '—'}</span>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-slate-600">Plan</span>
                              <span className="font-semibold text-slate-900">₹{plan.price}</span>
                            </div>
                          </div>
                          {errors.planId && <p className="mt-3 text-xs font-semibold text-rose-600">{errors.planId}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeStep === 3 && (
                    <div>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <h3 className="text-base md:text-lg font-extrabold text-slate-900">4) Payment and access</h3>
                          <p className="mt-1 text-sm text-slate-600">This is a demo payment step. Connect to Razorpay/Stripe later.</p>
                        </div>
                        <div className={`rounded-xl border px-4 py-3 ${paid ? 'border-emerald-200 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
                          <p className="text-[11px] font-semibold text-slate-500">PAYMENT STATUS</p>
                          <p className={`mt-1 text-sm font-extrabold ${paid ? 'text-emerald-700' : 'text-slate-900'}`}>{paid ? 'Paid' : 'Pending'}</p>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                          <p className="text-[11px] font-semibold text-slate-500">ORDER</p>
                          <div className="mt-2 space-y-2 text-sm">
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-slate-600">Plan</span>
                              <span className="font-semibold text-slate-900">{plan.name}</span>
                            </div>
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-slate-600">Amount</span>
                              <span className="font-extrabold text-slate-900">₹{plan.price}</span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setPaid(true)}
                            disabled={paid}
                            className={`mt-4 w-full inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-extrabold shadow-sm transition ${
                              paid ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-amber-400 text-slate-900 hover:bg-amber-300'
                            }`}
                          >
                            {paid ? 'Payment completed' : `Pay ₹${plan.price} and Activate`}
                          </button>
                          <p className="mt-2 text-xs text-slate-500">For real payments, connect payment gateway and verify server-side.</p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <p className="text-[11px] font-semibold text-slate-500">ACCESS</p>
                          {paid ? (
                            <div className="mt-2">
                              <p className="text-sm font-semibold text-slate-900">You can now attend classes.</p>
                              <div className="mt-3 flex flex-col gap-2">
                                <a
                                  href="/user/classes/live"
                                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-extrabold text-white hover:bg-slate-800"
                                >
                                  Go to Live Classes
                                </a>
                                <a
                                  href="/user/classes"
                                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
                                >
                                  Browse All Classes
                                </a>
                              </div>
                            </div>
                          ) : (
                            <div className="mt-2">
                              <p className="text-sm text-slate-700">Complete payment to unlock access.</p>
                              <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3">
                                <p className="text-xs font-semibold text-slate-700">Selected</p>
                                <p className="mt-1 text-sm font-extrabold text-slate-900">
                                  {form.studentClass} • {form.subjects.join(', ')}
                                </p>
                                <p className="mt-1 text-xs text-slate-600">
                                  {form.instituteType} • {form.instituteName || '—'} • {form.instituteCity || '—'}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={back}
                      disabled={activeStep === 0}
                      className={`inline-flex items-center justify-center rounded-xl border px-4 py-2 text-sm font-extrabold transition ${
                        activeStep === 0 ? 'border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed' : 'border-slate-200 bg-white text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      Back
                    </button>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-500">Step</span>
                      <span className="text-xs font-extrabold text-slate-900">
                        {activeStep + 1} / {steps.length}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={next}
                      disabled={activeStep === steps.length - 1}
                      className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-extrabold shadow-sm transition ${
                        activeStep === steps.length - 1 ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'bg-slate-900 text-white hover:bg-slate-800'
                      }`}
                    >
                      Next
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Journey cards */}
        {!showOnboarding && (
          <section>
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">Typical KG to PG journey</h2>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              {journeys.map((item) => (
                <Link
                  key={item.stage}
                  to={`/user/students/${item.key}`}
                  className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 flex flex-col justify-between hover:border-amber-300 hover:shadow-md transition"
                >
                  <div>
                    <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-700">
                      {item.badge}
                    </span>
                    <h3 className="mt-2 text-sm md:text-base font-semibold text-gray-900">{item.stage}</h3>
                    <p className="mt-2 text-xs md:text-sm text-gray-600">{item.focus}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Simple CTA block */}
        <section className="bg-slate-900 text-slate-50 rounded-xl px-4 py-6 md:px-8 md:py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-lg md:text-xl font-semibold">Ready to plan your path?</h2>
            <p className="mt-2 text-sm md:text-base text-slate-200 max-w-xl">
              Replace this area with a real counselling form or WhatsApp / call-to-action so families can connect
              with your team for guidance.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-amber-300 focus:outline-none"
          >
            Demo button – connect later
          </button>
        </section>
        </div>
      </main>
    </UserLayout>
  );
};

export default UserStudents;
