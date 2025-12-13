import React from 'react';

const Fees: React.FC = () => {
  const feeRows = [
    {
      program: 'MBBS – Government College (India)',
      year: '1st Year',
      tuition: '₹60,000',
      hostel: '₹30,000',
      misc: '₹20,000',
    },
    {
      program: 'MBBS – Private College (India)',
      year: '1st Year',
      tuition: '₹7,50,000',
      hostel: '₹1,00,000',
      misc: '₹60,000',
    },
    {
      program: 'NEET Classroom Program',
      year: '1 Year Batch',
      tuition: '₹1,20,000',
      hostel: '₹0',
      misc: '₹10,000',
    },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Fees Overview</h3>
        </div>
        <div className="p-6 grid gap-4 md:grid-cols-3 text-sm text-gray-700">
          <div>
            <p className="text-xs text-gray-500">Average 1st year package</p>
            <p className="mt-1 text-2xl font-semibold text-gray-800">₹5–6 Lakh</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">What is included</p>
            <p className="mt-1 text-gray-600">Tuition fee, hostel, visa support, and initial documentation.</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Note</p>
            <p className="mt-1 text-gray-600">All values shown below are sample/demo figures for UI only.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h4 className="text-md font-semibold text-gray-800">Sample Fee Structure</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Program</th>
                <th className="px-6 py-3">Year</th>
                <th className="px-6 py-3">Tuition</th>
                <th className="px-6 py-3">Hostel</th>
                <th className="px-6 py-3">Other / Misc</th>
              </tr>
            </thead>
            <tbody>
              {feeRows.map((row, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{row.program}</td>
                  <td className="px-6 py-4">{row.year}</td>
                  <td className="px-6 py-4">{row.tuition}</td>
                  <td className="px-6 py-4">{row.hostel}</td>
                  <td className="px-6 py-4">{row.misc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Fees;
