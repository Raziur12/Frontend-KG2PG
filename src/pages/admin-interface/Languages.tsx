import React from 'react';

const Languages: React.FC = () => {
  const languages = [
    { name: 'English', level: 'Advanced', usage: 'Online classes, official communication' },
    { name: 'Hindi', level: 'Native', usage: 'North & Central India counselling' },
    { name: 'Marathi', level: 'Fluent', usage: 'Maharashtra students & parents' },
    { name: 'Tamil', level: 'Fluent', usage: 'Tamil Nadu students & parents' },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Supported Languages</h3>
        </div>
        <div className="p-6 grid gap-4 md:grid-cols-3 text-sm text-gray-700">
          <div>
            <p className="font-semibold">Primary Communication</p>
            <p className="mt-1 text-gray-600">English &amp; Hindi for students and parents across India.</p>
          </div>
          <div>
            <p className="font-semibold">Regional Languages</p>
            <p className="mt-1 text-gray-600">Marathi, Tamil, Telugu, Bengali etc. for regional support.</p>
          </div>
          <div>
            <p className="font-semibold">Usage</p>
            <p className="mt-1 text-gray-600">Counselling, documentation, and pre-departure sessions.</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md">
        <div className="px-6 py-4 border-b flex justify-between items-center">
          <h4 className="text-md font-semibold text-gray-800">Language Matrix</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">Language</th>
                <th className="px-6 py-3">Proficiency</th>
                <th className="px-6 py-3">Used For</th>
              </tr>
            </thead>
            <tbody>
              {languages.map((lang, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{lang.name}</td>
                  <td className="px-6 py-4">{lang.level}</td>
                  <td className="px-6 py-4">{lang.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Languages;
