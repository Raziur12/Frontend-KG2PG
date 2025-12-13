import React from 'react';
import { Route } from 'react-router-dom';
import UserHome from '../pages/user/UserHome';
import UserCourses from '../pages/user/UserCourses';
import UserUniversities from '../pages/user/UserUniversities';
import UserFees from '../pages/user/UserFees';
import UserProfile from '../pages/user/UserProfile';
import UserProfileSettings from '../pages/user/UserProfileSettings';
import UserPayments from '../pages/user/UserPayments';
import UserPaymentsSubscriptions from '../pages/user/UserPaymentsSubscriptions';
import UserPaymentsInvoices from '../pages/user/UserPaymentsInvoices';
import UserResources from '../pages/user/UserResources';
import UserResourcesVideos from '../pages/user/UserResourcesVideos';
import UserResourcesNotes from '../pages/user/UserResourcesNotes';
import UserResourcesDownloads from '../pages/user/UserResourcesDownloads';
import UserSupport from '../pages/user/UserSupport';
import UserSupportFaq from '../pages/user/UserSupportFaq';
import UserSupportTickets from '../pages/user/UserSupportTickets';
import UserSupportContact from '../pages/user/UserSupportContact';
import UserClasses from '../pages/user/UserClasses';
import UserClassesLive from '../pages/user/UserClassesLive';
import UserClassesRecorded from '../pages/user/UserClassesRecorded';
import UserClassesCalendar from '../pages/user/UserClassesCalendar';
import UserClassesBooked from '../pages/user/UserClassesBooked';
import UserClassesNotes from '../pages/user/UserClassesNotes';
import UserTeachersAll from '../pages/user/UserTeachersAll';
import UserTeachersMy from '../pages/user/UserTeachersMy';
import UserTeachersProfiles from '../pages/user/UserTeachersProfiles';
import UserTeachersChat from '../pages/user/UserTeachersChat';
import UserProfileExtended from '../pages/user/UserProfileExtended';
import UserAbout from '../pages/user/UserAbout';
import UserStudents from '../pages/user/UserStudents';
import UserStudentsDetail from '../pages/user/UserStudentsDetail';
import UserExamsNeet from '../pages/user/UserExamsNeet';
import UserExamsOther from '../pages/user/UserExamsOther';
import UserExamsJee from '../pages/user/UserExamsJee';
import UserExamsTestSeries from '../pages/user/UserExamsTestSeries';
import UserExamsAiDoubt from '../pages/user/UserExamsAiDoubt';
import UserExamsReports from '../pages/user/UserExamsReports';
import UserDashboard from '../pages/user/UserDashboard';
import UserDashboardCalendar from '../pages/user/UserDashboardCalendar';
import UserDashboardPerformance from '../pages/user/UserDashboardPerformance';
import UserDashboardReviews from '../pages/user/UserDashboardReviews';

export const userRoutes = (
  <>
    <Route path="/user" element={<UserHome />} />
    <Route path="/user/about-us" element={<UserAbout />} />
    <Route path="/user/students" element={<UserStudents />} />
    <Route path="/user/students/:segment" element={<UserStudentsDetail />} />
    <Route path="/user/teachers" element={<UserTeachersAll />} />
    <Route path="/user/teachers/my" element={<UserTeachersMy />} />
    <Route path="/user/teachers/profiles" element={<UserTeachersProfiles />} />
    <Route path="/user/teachers/chat" element={<UserTeachersChat />} />
    <Route path="/user/exams/neet" element={<UserExamsNeet />} />
    <Route path="/user/exams/jee" element={<UserExamsJee />} />
    <Route path="/user/exams/other" element={<UserExamsOther />} />
    <Route path="/user/exams/test-series" element={<UserExamsTestSeries />} />
    <Route path="/user/exams/ai-doubt-solver" element={<UserExamsAiDoubt />} />
    <Route path="/user/exams/reports" element={<UserExamsReports />} />
    <Route path="/user/dashboard" element={<UserDashboard />} />
    <Route path="/user/dashboard/calendar" element={<UserDashboardCalendar />} />
    <Route path="/user/dashboard/performance" element={<UserDashboardPerformance />} />
    <Route path="/user/dashboard/reviews" element={<UserDashboardReviews />} />
    <Route path="/user/courses" element={<UserCourses />} />
    <Route path="/user/universities" element={<UserUniversities />} />
    <Route path="/user/fees" element={<UserFees />} />
    <Route path="/user/profile" element={<UserProfile />} />
    <Route path="/user/profile/settings" element={<UserProfileSettings />} />
    <Route path="/user/payments" element={<UserPayments />} />
    <Route path="/user/payments/subscriptions" element={<UserPaymentsSubscriptions />} />
    <Route path="/user/payments/invoices" element={<UserPaymentsInvoices />} />
    <Route path="/user/resources" element={<UserResources />} />
    <Route path="/user/resources/videos" element={<UserResourcesVideos />} />
    <Route path="/user/resources/notes" element={<UserResourcesNotes />} />
    <Route path="/user/resources/downloads" element={<UserResourcesDownloads />} />
    <Route path="/user/support" element={<UserSupport />} />
    <Route path="/user/support/faq" element={<UserSupportFaq />} />
    <Route path="/user/support/tickets" element={<UserSupportTickets />} />
    <Route path="/user/support/contact" element={<UserSupportContact />} />
    <Route path="/user/classes" element={<UserClasses />} />
    <Route path="/user/classes/live" element={<UserClassesLive />} />
    <Route path="/user/classes/recorded" element={<UserClassesRecorded />} />
    <Route path="/user/classes/calendar" element={<UserClassesCalendar />} />
    <Route path="/user/classes/booked" element={<UserClassesBooked />} />
    <Route path="/user/classes/resources" element={<UserClassesNotes />} />
    <Route path="/user/profile/extended" element={<UserProfileExtended />} />
  </>
);
