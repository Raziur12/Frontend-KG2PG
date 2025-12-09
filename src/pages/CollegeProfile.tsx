import React from 'react';

const CollegeProfile: React.FC = () => {
  const facilities = [
    'Modern classrooms & smart boards',
    'Separate hostel for boys & girls',
    'Indian mess & vegetarian food options',
    '24x7 library and reading hall',
    'On-campus hospital exposure',
  ];

  return (
    <div className="w-full">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-1">
            <img
              src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="College campus"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-2 p-6 space-y-4">
            <div className="border-b pb-3 mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Sample Medical College, Pune</h3>
                <p className="text-sm text-gray-500 mt-1">Demo profile used to visualise UI for an Indian medical college.</p>
              </div>
              <div className="mt-3 sm:mt-0 text-sm text-gray-600">
                <p>Intake: August 2025</p>
                <p>Seats available: 120</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold mb-1">Location</p>
                <p className="text-gray-600">Pune, Maharashtra (India)</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Affiliation</p>
                <p className="text-gray-600">Recognised by WHO &amp; NMC (demo text)</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Course Duration</p>
                <p className="text-gray-600">6 years including internship</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Medium of Instruction</p>
                <p className="text-gray-600">English</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="font-semibold mb-2 text-sm">Key Facilities</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {facilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeProfile;
