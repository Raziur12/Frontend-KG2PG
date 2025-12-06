import React from 'react';

const Payments: React.FC = () => {
  const payments = [
    { id: 'pay_Fvj3kG9sL2dE1f', student: 'Amit Singh', amount: '₹499.00', date: '2025-11-28', status: 'Success' },
    { id: 'pay_Fvi9sA4dK1cE2g', student: 'Sneha Patil', amount: '₹1,299.00', date: '2025-11-27', status: 'Failed' },
  ];

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Success':
        return 'px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full';
      case 'Failed':
        return 'px-2 py-1 text-xs font-medium text-red-800 bg-red-100 rounded-full';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md w-full">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">Transaction History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">Transaction ID</th>
                <th scope="col" className="px-6 py-3">Student</th>
                <th scope="col" className="px-6 py-3">Amount</th>
                <th scope="col" className="px-6 py-3">Date</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono text-gray-700">{payment.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{payment.student}</td>
                  <td className="px-6 py-4">{payment.amount}</td>
                  <td className="px-6 py-4">{payment.date}</td>
                  <td className="px-6 py-4">
                    <span className={getStatusClass(payment.status)}>{payment.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 hover:underline">
                      {payment.status === 'Success' ? 'View Receipt' : 'Retry'}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Payments;
