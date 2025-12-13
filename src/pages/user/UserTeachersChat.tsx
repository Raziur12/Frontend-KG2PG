import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserTeachersChat: React.FC = () => {
  const chats = [
    {
      teacher: 'Dr. Neha Sharma',
      lastMessage: "Please revise the diagrams from today's class.",
      time: '10:15 PM',
    },
    {
      teacher: 'Rahul Mehta',
      lastMessage: 'Solve example 3 and 4 from the DPP.',
      time: 'Yesterday',
    },
    {
      teacher: 'Anjali Verma',
      lastMessage: 'We will start aromatic compounds in the next session.',
      time: '2 days ago',
    },
    {
      teacher: 'Vikram Rao',
      lastMessage: 'Practice the previous year JEE questions from coordinate geometry.',
      time: '3 days ago',
    },
    {
      teacher: 'Pooja Kulkarni',
      lastMessage: 'Kindly read NCERT chapter once before tomorrow.',
      time: 'Last week',
    },
    {
      teacher: 'Sandeep Gupta',
      lastMessage: 'Next doubt-clearing session is on Saturday evening.',
      time: 'Last week',
    },
  ];

  return (
    <UserLayout>
      <main className="space-y-8">
        <section>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">Chat / Messages (Demo)</h1>
          <p className="mt-2 text-sm md:text-base text-gray-600 max-w-3xl">
            This is a sample messages screen. Later you can connect it to a real chat system or WhatsApp-style
            interface between students and teachers.
          </p>
        </section>

        <section className="bg-white rounded-lg border border-gray-100 shadow-sm divide-y divide-gray-100 text-xs md:text-sm text-gray-700">
          {chats.map((c) => (
            <div key={c.teacher} className="px-4 md:px-6 py-3 flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">{c.teacher}</p>
                <p className="text-[11px] md:text-xs text-gray-500 truncate max-w-xs">{c.lastMessage}</p>
              </div>
              <span className="text-[11px] text-gray-500">{c.time}</span>
            </div>
          ))}
        </section>
      </main>
    </UserLayout>
  );
};

export default UserTeachersChat;
