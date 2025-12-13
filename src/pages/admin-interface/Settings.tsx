import React from 'react';

const Settings: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200 w-full">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800">General Settings</h3>
          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="site-name" className="block text-sm font-medium text-gray-700">Site Name</label>
              <input type="text" id="site-name" defaultValue="KG2PG Platform" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="site-logo" className="block text-sm font-medium text-gray-700">Site Logo</label>
              <input type="file" id="site-logo" className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-800">Payment Gateway</h3>
          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="razorpay-key" className="block text-sm font-medium text-gray-700">Razorpay Key ID</label>
              <input type="text" id="razorpay-key" defaultValue="rzp_test_1234567890ABCD" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Save Settings</button>
        </div>
      </div>
  );
};

export default Settings;
