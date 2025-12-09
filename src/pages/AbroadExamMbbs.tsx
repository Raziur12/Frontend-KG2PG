import React from 'react';

const AbroadExamMbbs: React.FC = () => {
  const exams = [
    { name: 'NEET UG', type: 'National Eligibility Test', attempt: 'India', mandatory: 'Yes' },
    { name: 'State Counselling', type: 'Online choice filling', attempt: 'State counselling portal', mandatory: 'Yes' },
    { name: 'Document Verification', type: 'Offline / Online', attempt: 'Allotted college / centre', mandatory: 'Yes' },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">MBBS Abroad Exam Overview</h3>
        </div>
        <div className="p-6 text-sm text-gray-700 space-y-3">
          <p>
            Students who are planning for <span className="font-semibold">MBBS in India</span> must clear NEET UG and
            then participate in All India and State level counselling.
          </p>
          <p>
            Use this section to track important steps, approximate timelines, and what your counselling team needs to
            communicate to parents for government and private colleges in India.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h4 className="text-md font-semibold text-gray-800">Key Exams &amp; Checks</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Exam / Step</th>
                <th className="px-6 py-3">Type</th>
                <th className="px-6 py-3">Attempt / Location</th>
                <th className="px-6 py-3">Mandatory</th>
              </tr>
            </thead>
            <tbody>
              {exams.map((exam, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{exam.name}</td>
                  <td className="px-6 py-4">{exam.type}</td>
                  <td className="px-6 py-4">{exam.attempt}</td>
                  <td className="px-6 py-4">{exam.mandatory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AbroadExamMbbs;
