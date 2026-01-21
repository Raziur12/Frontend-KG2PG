import React, { useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { ReactNode } from 'react';

interface UserLayoutProps {
    children: ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isCoursesOpen, setIsCoursesOpen] = useState(false);
    const [isTeachersOpen, setIsTeachersOpen] = useState(false);
    const [isExamsOpen, setIsExamsOpen] = useState(false);
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [isPaymentsOpen, setIsPaymentsOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isSupportOpen, setIsSupportOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isAdminOpen, setIsAdminOpen] = useState(false);
    const [isKg2pgOpen, setIsKg2pgOpen] = useState(false);

    const closeTimersRef = useRef<Record<string, ReturnType<typeof setTimeout> | null>>({});

    const openMenu = (key: string, setter: (v: boolean) => void) => {
        const existing = closeTimersRef.current[key];
        if (existing) {
            clearTimeout(existing);
            closeTimersRef.current[key] = null;
        }
        setter(true);
    };

    const closeMenuWithDelay = (key: string, setter: (v: boolean) => void) => {
        const existing = closeTimersRef.current[key];
        if (existing) {
            clearTimeout(existing);
        }
        closeTimersRef.current[key] = setTimeout(() => {
            setter(false);
            closeTimersRef.current[key] = null;
        }, 120);
    };

    const toggleNav = () => setIsNavOpen((prev) => !prev);
    const closeNav = () => setIsNavOpen(false);
    const toggleCourses = () => setIsCoursesOpen((prev) => !prev);
    const toggleTeachers = () => setIsTeachersOpen((prev) => !prev);
    const toggleExams = () => setIsExamsOpen((prev) => !prev);
    const toggleDashboard = () => setIsDashboardOpen((prev) => !prev);
    const togglePayments = () => setIsPaymentsOpen((prev) => !prev);
    const toggleResources = () => setIsResourcesOpen((prev) => !prev);
    const toggleSupport = () => setIsSupportOpen((prev) => !prev);
    const toggleProfile = () => setIsProfileOpen((prev) => !prev);
    const toggleAdmin = () => setIsAdminOpen((prev) => !prev);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col overflow-x-hidden">
            {/* Top navigation */}
            <header className="fixed top-0 inset-x-0 z-30 border-b border-slate-200 bg-white text-slate-900 shadow-md">
                <div className="max-w-6xl mx-auto pl-0 pr-4 md:pl-0 md:pr-6 h-16 md:h-20 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="flex flex-col leading-tight p-5">
                            <span className="text-xl md:text-2xl font-extrabold tracking-wide text-amber-500">KG2PG</span>
                            <span className="hidden sm:inline text-xs md:text-sm text-slate-600 whitespace-nowrap">Student Portal</span>
                        </div>
                    </div>

                    <div className="flex items-center">
                        {/* Mobile menu button on right */}
                        <button
                            type="button"
                            className="md:hidden mr-1 flex items-center justify-center h-9 w-9 rounded-full border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 hover:border-slate-400"
                            onClick={toggleNav}
                        >
                            {isNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>

                        {/* Desktop nav links */}
                        <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-700 ml-6">

                        <a href="/user" className="hover:text-amber-500">Home</a>
                        <a href="/user/about-us" className="hover:text-amber-500">About Us</a>
                        {/* <div className="relative">
                            <button
                                type="button"
                                className="inline-flex items-center text-slate-700 hover:text-amber-500 bg-transparent border-0 p-0 m-0 focus:outline-none"
                                onClick={toggleTeachers}
                            >
                                <span>Teachers</span>
                                <span className="ml-1 text-xs">{isTeachersOpen ? "▲" : "▼"}</span>
                            </button>
                            {isTeachersOpen && (
                                <div className="absolute left-0 mt-2 bg-slate-900 border border-slate-800 rounded shadow-lg py-2 text-sm min-w-[220px] z-40">
                                    <a href="/user/teachers" className="block px-4 py-1 hover:text-amber-400">All Teachers</a>
                                    <a href="/user/teachers/my" className="block px-4 py-1 hover:text-amber-400">My Teachers</a>
                                    <a href="/user/teachers/profiles" className="block px-4 py-1 hover:text-amber-400">Teacher Profiles</a>
                                    <a href="/user/teachers/chat" className="block px-4 py-1 hover:text-amber-400">Chat / Messages</a>
                                </div>
                            )}
                        </div> */}
                        {/* <a href="/user/students" className="hover:text-amber-400">Students</a> */}

                        <div
                            className="relative"
                            onMouseEnter={() => openMenu('kg2pg', setIsKg2pgOpen)}
                            onMouseLeave={() => closeMenuWithDelay('kg2pg', setIsKg2pgOpen)}
                        >
                            <button
                                type="button"
                                className="inline-flex items-center text-slate-700 hover:text-amber-500 bg-transparent border-0 p-0 m-0 focus:outline-none"
                                onFocus={() => setIsKg2pgOpen(true)}
                                onBlur={() => setIsKg2pgOpen(false)}
                                aria-haspopup="menu"
                                aria-expanded={isKg2pgOpen}
                            >
                                <span>KG2PG</span>
                                <span className="ml-1 text-xs">{isKg2pgOpen ? "▲" : "▼"}</span>
                            </button>
                            {isKg2pgOpen && (
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 mt-3 bg-white border border-slate-200 rounded shadow-lg px-6 py-3 text-sm w-max z-40"
                                    onMouseEnter={() => openMenu('kg2pg', setIsKg2pgOpen)}
                                    onMouseLeave={() => closeMenuWithDelay('kg2pg', setIsKg2pgOpen)}
                                >
                                    <div className="flex items-center gap-x-10 whitespace-nowrap">
                                        <a href="/user/teachers" className="block hover:text-amber-500">Teachers</a>
                                        <a href="/user/coaching" className="block hover:text-amber-500">Coaching</a>
                                        <a href="/user/colleges" className="block hover:text-amber-500">Colleges</a>
                                        <a href="/user/universities" className="block hover:text-amber-500">Universities</a>
                                        <a href="/user/institutes" className="block hover:text-amber-500">Institutes</a>
                                        <a href="/user/students" className="block hover:text-amber-500">Students</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className="relative"
                            onMouseEnter={() => openMenu('exams', setIsExamsOpen)}
                            onMouseLeave={() => closeMenuWithDelay('exams', setIsExamsOpen)}
                        >
                            <button
                                type="button"
                                className="inline-flex items-center text-slate-700 hover:text-amber-500 bg-transparent border-0 p-0 m-0 focus:outline-none"
                                onClick={toggleExams}
                            >
                                <span>Exams &amp; Prep</span>
                                <span className="ml-1 text-xs">{isExamsOpen ? "▲" : "▼"}</span>
                            </button>
                            {isExamsOpen && (
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white border border-slate-200 rounded shadow-lg px-6 py-3 text-sm w-max z-40"
                                    onMouseEnter={() => openMenu('exams', setIsExamsOpen)}
                                    onMouseLeave={() => closeMenuWithDelay('exams', setIsExamsOpen)}
                                >
                                    <div className="flex items-center gap-x-10 whitespace-nowrap">
                                        <a href="/user/exams/neet" className="block hover:text-amber-500">NEET Courses</a>
                                        <a href="/user/exams/jee" className="block hover:text-amber-500">JEE Courses</a>
                                        <a href="/user/exams/other" className="block hover:text-amber-500">CUET / Other Exams</a>
                                        <a href="/user/exams/test-series" className="block hover:text-amber-500">Test Series</a>
                                        <a href="/user/exams/ai-doubt-solver" className="block hover:text-amber-500">AI Doubt Solver</a>
                                        <a href="/user/exams/reports" className="block hover:text-amber-500">Progress &amp; Reports</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* <div className="relative">
                            <button
                                type="button"
                                className="inline-flex items-center text-slate-100/80 hover:text-amber-400 bg-transparent border-0 p-0 m-0 focus:outline-none"
                                onClick={toggleDashboard}
                            >
                                <span>Dashboard</span>
                                <span className="ml-1 text-xs">{isDashboardOpen ? "▲" : "▼"}</span>
                            </button>
                            {isDashboardOpen && (
                                <div className="absolute left-0 mt-2 bg-slate-900 border border-slate-800 rounded shadow-lg py-2 text-sm min-w-[220px] z-40">
                                    <a href="/user/dashboard" className="block px-4 py-1 hover:text-amber-400">Student Dashboard</a>
                                    <a href="/user/dashboard/calendar" className="block px-4 py-1 hover:text-amber-400">Class Calendar</a>
                                    <a href="/user/dashboard/performance" className="block px-4 py-1 hover:text-amber-400">Performance Reports</a>
                                    <a href="/user/dashboard/reviews" className="block px-4 py-1 hover:text-amber-400">Ratings &amp; Reviews</a>
                                </div>
                            )}
                        </div> */}
                        {/* <div className="relative">
                            <button
                                type="button"
                                className="inline-flex items-center text-slate-100/80 hover:text-amber-400 bg-transparent border-0 p-0 m-0 focus:outline-none"
                                onClick={togglePayments}
                            >
                                <span>Payments</span>
                                <span className="ml-1 text-xs">{isPaymentsOpen ? "▲" : "▼"}</span>
                            </button>
                            {isPaymentsOpen && (
                                <div className="absolute left-0 mt-2 bg-slate-900 border border-slate-800 rounded shadow-lg py-2 text-sm min-w-[220px] z-40">
                                    <a href="/user/payments" className="block px-4 py-1 hover:text-amber-400">My Payments / Orders</a>
                                    <a href="/user/payments/subscriptions" className="block px-4 py-1 hover:text-amber-400">Subscriptions</a>
                                    <a href="/user/payments/invoices" className="block px-4 py-1 hover:text-amber-400">Invoices &amp; Receipts</a>
                                </div>
                            )}
                        </div> */}
                        <div
                            className="relative"
                            onMouseEnter={() => openMenu('resources', setIsResourcesOpen)}
                            onMouseLeave={() => closeMenuWithDelay('resources', setIsResourcesOpen)}
                        >
                            <button
                                type="button"
                                className="inline-flex items-center text-slate-700 hover:text-amber-500 bg-transparent border-0 p-0 m-0 focus:outline-none"
                                onClick={toggleResources}
                            >
                                <span>Resources</span>
                                <span className="ml-1 text-xs">{isResourcesOpen ? "▲" : "▼"}</span>
                            </button>
                            {isResourcesOpen && (
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white border border-slate-200 rounded shadow-lg px-6 py-3 text-sm w-max z-40"
                                    onMouseEnter={() => openMenu('resources', setIsResourcesOpen)}
                                    onMouseLeave={() => closeMenuWithDelay('resources', setIsResourcesOpen)}
                                >
                                    <div className="flex items-center gap-x-10 whitespace-nowrap">
                                        <a href="/user/resources/videos" className="block hover:text-amber-500">Recorded Videos</a>
                                        <a href="/user/resources/notes" className="block hover:text-amber-500">PDF Notes</a>
                                        <a href="/user/resources/downloads" className="block hover:text-amber-500">Downloads</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className="relative"
                            onMouseEnter={() => openMenu('support', setIsSupportOpen)}
                            onMouseLeave={() => closeMenuWithDelay('support', setIsSupportOpen)}
                        >
                            <button
                                type="button"
                                className="inline-flex items-center text-slate-700 hover:text-amber-500 bg-transparent border-0 p-0 m-0 focus:outline-none"
                                onClick={toggleSupport}
                            >
                                <span>Support</span>
                                <span className="ml-1 text-xs">{isSupportOpen ? "▲" : "▼"}</span>
                            </button>
                            {isSupportOpen && (
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white border border-slate-200 rounded shadow-lg px-6 py-3 text-sm w-max z-40"
                                    onMouseEnter={() => openMenu('support', setIsSupportOpen)}
                                    onMouseLeave={() => closeMenuWithDelay('support', setIsSupportOpen)}
                                >
                                    <div className="flex items-center gap-x-10 whitespace-nowrap">
                                        <a href="/user/support/faq" className="block hover:text-amber-500">Help &amp; FAQs</a>
                                        <a href="/user/support/tickets" className="block hover:text-amber-500">Support Tickets</a>
                                        <a href="/user/support/contact" className="block hover:text-amber-500">Contact Us</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className="relative"
                            onMouseEnter={() => openMenu('classes', setIsCoursesOpen)}
                            onMouseLeave={() => closeMenuWithDelay('classes', setIsCoursesOpen)}
                        >
                            <button
                                type="button"
                                className="inline-flex items-center text-slate-700 hover:text-amber-500 bg-transparent border-0 p-0 m-0 focus:outline-none"
                                onClick={toggleCourses}
                            >
                                <span>Classes</span>
                                <span className="ml-1 text-xs">{isCoursesOpen ? "▲" : "▼"}</span>
                            </button>
                            {isCoursesOpen && (
                                <div
                                    className="absolute right-0 mt-2 bg-white border border-slate-200 rounded shadow-lg px-6 py-3 text-sm w-max max-w-[calc(100vw-2rem)] overflow-x-auto z-40"
                                    onMouseEnter={() => openMenu('classes', setIsCoursesOpen)}
                                    onMouseLeave={() => closeMenuWithDelay('classes', setIsCoursesOpen)}
                                >
                                    <div className="flex items-center gap-x-10 whitespace-nowrap">
                                        <a href="/user/classes" className="block hover:text-amber-500">K-12</a>
                                        <a href="/user/classes/live" className="block hover:text-amber-500">Live Classes</a>
                                        <a href="/user/classes/recorded" className="block hover:text-amber-500">Recorded Courses</a>
                                        <a href="/user/classes/calendar" className="block hover:text-amber-500">Class Calendar</a>
                                        <a href="/user/classes/booked" className="block hover:text-amber-500">My Booked Classes</a>
                                        <a href="/user/classes/resources" className="block hover:text-amber-500">Notes / PDF Download</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className="relative"
                            onMouseEnter={() => openMenu('profile', setIsProfileOpen)}
                            onMouseLeave={() => closeMenuWithDelay('profile', setIsProfileOpen)}
                        >
                            <button
                                type="button"
                                className="inline-flex items-center text-slate-700 hover:text-amber-500 bg-transparent border-0 p-0 m-0 focus:outline-none"
                                onClick={toggleProfile}
                            >
                                <span>Profile</span>
                                <span className="ml-1 text-xs">{isProfileOpen ? "▲" : "▼"}</span>
                            </button>
                            {isProfileOpen && (
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 mt-2 bg-white border border-slate-200 rounded shadow-lg px-6 py-3 text-sm w-max z-40"
                                    onMouseEnter={() => openMenu('profile', setIsProfileOpen)}
                                    onMouseLeave={() => closeMenuWithDelay('profile', setIsProfileOpen)}
                                >
                                    <div className="flex items-center gap-x-10 whitespace-nowrap">
                                        <a href="/user/profile" className="block hover:text-amber-500">My Profile</a>
                                        <a href="/user/profile/settings" className="block hover:text-amber-500">Settings</a>
                                        <a href="/logout" className="block hover:text-amber-500">Logout</a>
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* <div className="relative">
                            <button
                                type="button"
                                className="inline-flex items-center text-slate-100/80 hover:text-amber-400 bg-transparent border-0 p-0 m-0 focus:outline-none"
                                onClick={toggleAdmin}
                            >
                                <span>Admin</span>
                                <span className="ml-1 text-xs">{isAdminOpen ? "▲" : "▼"}</span>
                            </button>
                            {isAdminOpen && (
                                <div className="absolute right-0 mt-2 bg-slate-900 border border-slate-800 rounded shadow-lg py-2 text-sm min-w-[220px] z-40">
                                    <a href="/admin/teachers/verification" className="block px-4 py-1 hover:text-amber-400">Teacher Verification</a>
                                    <a href="/admin/categories" className="block px-4 py-1 hover:text-amber-400">Manage Categories</a>
                                    <a href="/admin/classes/review" className="block px-4 py-1 hover:text-amber-400">Review Classes</a>
                                    <a href="/admin/payments" className="block px-4 py-1 hover:text-amber-400">Payments &amp; Settlements</a>
                                    <a href="/admin/coupons" className="block px-4 py-1 hover:text-amber-400">Coupons / Offers</a>
                                    <a href="/admin/reports" className="block px-4 py-1 hover:text-amber-400">Analytics &amp; Reports</a>
                                    <a href="/admin/payouts" className="block px-4 py-1 hover:text-amber-400">Payout History</a>
                                </div>
                            )}
                        </div> */}
                    </nav>
                    </div>
                </div>

                {/* Mobile nav dropdown (accordion style) */}
                {isNavOpen && (
                    <nav className="md:hidden border-t border-slate-200 bg-white text-slate-900">
                        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col space-y-2 text-sm font-medium">
                            {/* Simple links */}
                            <a href="/user" onClick={closeNav} className="py-1 hover:text-amber-500">Home</a>
                            <a href="/user/about-us" onClick={closeNav} className="py-1 hover:text-amber-500">About Us</a>
                            <a href="/user/students" onClick={closeNav} className="py-1 hover:text-amber-500">Students</a>

                            {/* Teachers */}
                            <button
                                type="button"
                                className="flex items-center justify-between hover:text-amber-500 bg-transparent border-0 text-left w-full"
                                onClick={toggleTeachers}
                            >
                                <span >Teachers</span>
                                <span className="ml-1 text-xs">{isTeachersOpen ? "▲" : "▼"}</span>
                            </button>
                            {isTeachersOpen && (
                                <div className="pl-3 flex flex-col space-y-1 text-[13px]">
                                    <a href="/user/teachers" onClick={closeNav} className="hover:text-amber-500">All Teachers</a>
                                    <a href="/user/teachers/my" onClick={closeNav} className="hover:text-amber-500">My Teachers</a>
                                    <a href="/user/teachers/profiles" onClick={closeNav} className="hover:text-amber-500">Teacher Profiles</a>
                                    <a href="/user/teachers/chat" onClick={closeNav} className="hover:text-amber-500">Chat / Messages</a>
                                </div>
                            )}

                            {/* Exams & Prep */}
                            <button
                                type="button"
                                className="flex items-center justify-between py-1 hover:text-amber-500 bg-transparent border-0 text-left w-full"
                                onClick={toggleExams}
                            >
                                <span>Exams &amp; Prep</span>
                                <span className="ml-1 text-xs">{isExamsOpen ? "▲" : "▼"}</span>
                            </button>
                            {isExamsOpen && (
                                <div className="pl-3 flex flex-col space-y-1 text-[13px]">
                                    <a href="/user/exams/neet" onClick={closeNav} className="hover:text-amber-500">NEET Courses</a>
                                    <a href="/user/exams/jee" onClick={closeNav} className="hover:text-amber-500">JEE Courses</a>
                                    <a href="/user/exams/other" onClick={closeNav} className="hover:text-amber-500">CUET / Other Exams</a>
                                    <a href="/user/exams/test-series" onClick={closeNav} className="hover:text-amber-500">Test Series</a>
                                    <a href="/user/exams/ai-doubt-solver" onClick={closeNav} className="hover:text-amber-500">AI Doubt Solver</a>
                                    <a href="/user/exams/reports" onClick={closeNav} className="hover:text-amber-500">Progress &amp; Reports</a>
                                </div>
                            )}

                            {/* Dashboard */}
                            <button
                                type="button"
                                className="flex items-center justify-between py-1 hover:text-amber-500 bg-transparent border-0 text-left w-full"
                                onClick={toggleDashboard}
                            >
                                <span>Dashboard</span>
                                <span className="ml-1 text-xs">{isDashboardOpen ? "▲" : "▼"}</span>
                            </button>
                            {isDashboardOpen && (
                                <div className="pl-3 flex flex-col space-y-1 text-[13px]">
                                    <a href="/user/dashboard" onClick={closeNav} className="hover:text-amber-500">Student Dashboard</a>
                                    <a href="/user/dashboard/calendar" onClick={closeNav} className="hover:text-amber-500">Class Calendar</a>
                                    <a href="/user/dashboard/performance" onClick={closeNav} className="hover:text-amber-500">Performance Reports</a>
                                    <a href="/user/dashboard/reviews" onClick={closeNav} className="hover:text-amber-500">Ratings &amp; Reviews</a>
                                </div>
                            )}

                            {/* Payments */}
                            <button
                                type="button"
                                className="flex items-center justify-between py-1 hover:text-amber-500 bg-transparent border-0 text-left w-full"
                                onClick={togglePayments}
                            >
                                <span>Payments</span>
                                <span className="ml-1 text-xs">{isPaymentsOpen ? "▲" : "▼"}</span>
                            </button>
                            {isPaymentsOpen && (
                                <div className="pl-3 flex flex-col space-y-1 text-[13px]">
                                    <a href="/user/payments" onClick={closeNav} className="hover:text-amber-500">My Payments / Orders</a>
                                    <a href="/user/payments/subscriptions" onClick={closeNav} className="hover:text-amber-500">Subscriptions</a>
                                    <a href="/user/payments/invoices" onClick={closeNav} className="hover:text-amber-500">Invoices &amp; Receipts</a>
                                </div>
                            )}

                            {/* Resources */}
                            <button
                                type="button"
                                className="flex items-center justify-between py-1 hover:text-amber-500 bg-transparent border-0 text-left w-full"
                                onClick={toggleResources}
                            >
                                <span>Resources</span>
                                <span className="ml-1 text-xs">{isResourcesOpen ? "▲" : "▼"}</span>
                            </button>
                            {isResourcesOpen && (
                                <div className="pl-3 flex flex-col space-y-1 text-[13px]">
                                    <a href="/user/resources/videos" onClick={closeNav} className="hover:text-amber-500">Recorded Videos</a>
                                    <a href="/user/resources/notes" onClick={closeNav} className="hover:text-amber-500">PDF Notes</a>
                                    <a href="/user/resources/downloads" onClick={closeNav} className="hover:text-amber-500">Downloads</a>
                                </div>
                            )}

                            {/* Support */}
                            <button
                                type="button"
                                className="flex items-center justify-between py-1 hover:text-amber-500 bg-transparent border-0 text-left w-full"
                                onClick={toggleSupport}
                            >
                                <span>Support</span>
                                <span className="ml-1 text-xs">{isSupportOpen ? "▲" : "▼"}</span>
                            </button>
                            {isSupportOpen && (
                                <div className="pl-3 flex flex-col space-y-1 text-[13px]">
                                    <a href="/user/support/faq" onClick={closeNav} className="hover:text-amber-500">Help &amp; FAQs</a>
                                    <a href="/user/support/tickets" onClick={closeNav} className="hover:text-amber-500">Support Tickets</a>
                                    <a href="/user/support/contact" onClick={closeNav} className="hover:text-amber-500">Contact Us</a>
                                </div>
                            )}

                            {/* Classes */}
                            <button
                                type="button"
                                className="flex items-center justify-between py-1 hover:text-amber-500 bg-transparent border-0 text-left w-full"
                                onClick={toggleCourses}
                            >
                                <span>Classes</span>
                                <span className="ml-1 text-xs">{isCoursesOpen ? "▲" : "▼"}</span>
                            </button>
                            {isCoursesOpen && (
                                <div className="pl-3 flex flex-col space-y-1 text-[13px]">
                                    <a href="/user/classes" onClick={closeNav} className="hover:text-amber-500">Browse All Classes (KG2PG)</a>
                                    <a href="/user/classes/live" onClick={closeNav} className="hover:text-amber-500">Live Classes</a>
                                    <a href="/user/classes/recorded" onClick={closeNav} className="hover:text-amber-500">Recorded Courses</a>
                                    <a href="/user/classes/calendar" onClick={closeNav} className="hover:text-amber-500">Class Calendar</a>
                                    <a href="/user/classes/booked" onClick={closeNav} className="hover:text-amber-500">My Booked Classes</a>
                                    <a href="/user/classes/resources" onClick={closeNav} className="hover:text-amber-500">Notes / PDF Download</a>
                                </div>
                            )}

                            {/* Profile */}
                            <button
                                type="button"
                                className="flex items-center justify-between py-1 hover:text-amber-500 bg-transparent border-0 text-left w-full"
                                onClick={toggleProfile}
                            >
                                <span>Profile</span>
                                <span className="ml-1 text-xs">{isProfileOpen ? "▲" : "▼"}</span>
                            </button>
                            {isProfileOpen && (
                                <div className="pl-3 flex flex-col space-y-1 text-[13px]">
                                    <a href="/user/profile" onClick={closeNav} className="hover:text-amber-500">My Profile</a>
                                    <a href="/user/profile/settings" onClick={closeNav} className="hover:text-amber-500">Settings</a>
                                    <a href="/logout" onClick={closeNav} className="hover:text-amber-500">Logout</a>
                                </div>
                            )}

                            {/* Admin (no role check yet) */}
                            <button
                                type="button"
                                className="flex items-center justify-between py-1 hover:text-amber-500 bg-transparent border-0 text-left w-full"
                                onClick={toggleAdmin}
                            >
                                <span>Admin</span>
                                <span className="ml-1 text-xs">{isAdminOpen ? "▲" : "▼"}</span>
                            </button>
                            {isAdminOpen && (
                                <div className="pl-3 flex flex-col space-y-1 text-[13px]">
                                    <a href="/admin/teachers/verification" onClick={closeNav} className="hover:text-amber-500">Teacher Verification</a>
                                    <a href="/admin/categories" onClick={closeNav} className="hover:text-amber-500">Manage Categories</a>
                                    <a href="/admin/classes/review" onClick={closeNav} className="hover:text-amber-500">Review Classes</a>
                                    <a href="/admin/payments" onClick={closeNav} className="hover:text-amber-500">Payments &amp; Settlements</a>
                                    <a href="/admin/coupons" onClick={closeNav} className="hover:text-amber-500">Coupons / Offers</a>
                                    <a href="/admin/reports" onClick={closeNav} className="hover:text-amber-500">Analytics &amp; Reports</a>
                                    <a href="/admin/payouts" onClick={closeNav} className="hover:text-amber-500">Payout History</a>
                                </div>
                            )}
                        </div>
                    </nav>
                )}
</header>
                {/* Main content area */}
                <main className="flex-1 pt-16 md:pt-20">
                    <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 md:py-6">
                        {children}
                    </div>
                </main>
                {/* Footer */}
                <footer className="border-t border-slate-800 bg-slate-900 mt-4 text-slate-100">
                    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-xs md:text-sm">
                        <div>
                            <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                                <span className="inline-block h-2 w-2 rounded-sm bg-amber-400" />
                                <span>KG2PG</span>
                            </h3>
                            <p className="text-xs md:text-sm text-slate-200/80">
                                Demo student &amp; parent information portal for coaching, MBBS guidance, and fee details.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-white mb-2">Quick Links</h3>
                            <ul className="space-y-1">
                                <li><a href="/user/courses" className="hover:text-amber-400">Courses</a></li>
                                <li><a href="/user/universities" className="hover:text-amber-400">Medical Colleges</a></li>
                                <li><a href="/user/fees" className="hover:text-amber-400">Fees</a></li>
                                <li><a href="/user/profile" className="hover:text-amber-400">My Profile</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-white mb-2">College Information</h3>
                            <p className="text-xs md:text-sm text-slate-200/80">
                                Showcase key information about partner colleges, seat matrix, and admission process here for clients.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-white mb-2">Contact &amp; Policies</h3>
                            <p className="text-xs md:text-sm text-slate-200/80">Email: info@kg2pg-demo.in</p>
                            <p className="text-xs md:text-sm text-slate-200/80">Phone: +91 98765 43210</p>
                            <div className="mt-2 space-x-3 text-xs md:text-sm">
                                <a href="#" className="hover:text-amber-400">Privacy Policy</a>
                                <a href="#" className="hover:text-amber-400">Terms</a>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-800 bg-slate-950/95">
                        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 text-[11px] md:text-xs text-slate-300 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <span> {new Date().getFullYear()} KG2PG (Demo)</span>
                            <span>Student &amp; Parent Information Portal UI</span>
                        </div>
                    </div>
                </footer>
        </div>
    );
};


export default UserLayout;
