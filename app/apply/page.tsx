"use client";

import { useState } from "react";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="max-w-2xl mx-auto py-20 px-6">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 text-center">
          <h1 className="text-4xl font-bold text-green-500">
            🎉 Application Submitted!
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Thank you for applying. We have received your application and will
            contact you if your profile matches our requirements.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10">

        <h1 className="text-4xl font-bold mb-8">
          Apply for this Job
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700"
          />

          <input
            type="url"
            placeholder="Resume Link (Google Drive / Dropbox)"
            required
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700"
          />

          <textarea
            rows={5}
            placeholder="Cover Letter"
            className="w-full p-4 rounded-xl bg-gray-800 border border-gray-700"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl w-full font-semibold"
          >
            Submit Application
          </button>

        </form>

      </div>
    </main>
  );
}