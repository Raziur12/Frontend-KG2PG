import React from 'react';
import UserLayout from '../../components/UserLayout';

const UserExamsAiDoubt: React.FC = () => {
  return (
    <UserLayout>
      <main className="space-y-8">
        <section className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white rounded-xl shadow-sm px-4 py-6 md:px-8 md:py-10">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">AI Doubt Solver (Demo)</h1>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-emerald-50/90">
            This page represents your future AI doubt-solving system where students can upload questions or images and
            get instant help. Connect this later to your real AI backend or chat assistant.
          </p>
        </section>

        <section className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 md:p-6 text-sm text-gray-700">
          <p>
            For now, this is only a design preview. You could show:
          </p>
          <ul className="mt-2 list-disc list-inside space-y-1 text-xs md:text-sm">
            <li>Recent questions asked by the student</li>
            <li>Topics where the student asks repeated doubts</li>
            <li>Links to concept videos and notes suggested by AI</li>
          </ul>
        </section>
      </main>
    </UserLayout>
  );
};

export default UserExamsAiDoubt;
