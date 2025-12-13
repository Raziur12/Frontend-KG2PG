import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserProfileExtended: React.FC = () => {
  return (
    <UserLayout>
      <main className="space-y-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6">
            <h1 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Profile Details (Extended Demo)</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm text-gray-700">
              <p><span className="font-medium">Full Name:</span> Amit Singh</p>
              <p><span className="font-medium">Date of Birth:</span> 15 Aug 2007</p>
              <p><span className="font-medium">Parent Name:</span> Rajesh Singh</p>
              <p><span className="font-medium">Parent Contact:</span> +91 98765 40000</p>
              <p><span className="font-medium">Current Class:</span> 12 (Science)</p>
              <p><span className="font-medium">Target Exam:</span> NEET UG</p>
              <p><span className="font-medium">City:</span> Pune, Maharashtra</p>
              <p><span className="font-medium">School:</span> Demo Public School</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6 text-xs md:text-sm text-gray-700">
            <h2 className="text-md font-semibold text-gray-900 mb-2">KYC / Documents (Demo)</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Aadhaar uploaded</li>
              <li>School ID uploaded</li>
              <li>Parent consent form pending</li>
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 md:p-6">
          <h2 className="text-md md:text-lg font-semibold text-gray-900 mb-3">Communication Preferences</h2>
          <ul className="space-y-2 text-xs md:text-sm text-gray-700">
            <li>Email updates: Enabled</li>
            <li>SMS alerts: Enabled</li>
            <li>WhatsApp notifications: Enabled</li>
          </ul>
        </section>
      </main>
    </UserLayout>
  );
};

export default UserProfileExtended;
