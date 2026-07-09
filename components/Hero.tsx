"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Hero() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const router = useRouter();

  const handleSearch = () => {
    router.push(
      `/jobs?search=${encodeURIComponent(search)}&location=${encodeURIComponent(location)}`
    );
  };

  return (
    <section className="text-center py-24 px-6">
      
       <h1 className="text-7xl font-extrabold leading-tight">
       Find Your
         <span className="text-blue-500"> Dream Job</span>
       </h1>

       <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto">
          Connecting talented professionals with the world's leading companies.
          Search thousands of verified opportunities and take the next step in your career.
       </p>

      <div className="flex justify-center gap-4 flex-wrap">
       <input
         type="text"
         placeholder="Search by title..."
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
         className="bg-gray-900 border border-gray-700 rounded-xl p-4 w-80 outline-none focus:border-blue-500"
        />

      <input
        type="text"
        placeholder="Location..."
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
        className="bg-gray-900 border border-gray-700 rounded-xl p-4 w-64 outline-none focus:border-blue-500"
       />

        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
>
          Search Jobs
        </button>
      </div>
    </section>
  );
}