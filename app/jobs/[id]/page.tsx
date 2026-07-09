import Link from "next/link";
import { jobs } from "@/data/jobs";
import {
  MapPin,
  IndianRupee,
  Building2,
  BriefcaseBusiness,
  ArrowRight,
} from "lucide-react";

interface JobPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function JobDetails({ params }: JobPageProps) {
  const { id } = await params;

  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <main className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-center text-3xl font-bold">Job not found</h1>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <div className="bg-gray-900 rounded-2xl border border-gray-800 p-10 shadow-xl">
        <h1 className="text-5xl font-bold">{job.title}</h1>

        <div className="mt-8 space-y-5 text-lg">
          <p className="flex items-center gap-3">
            <Building2 className="text-blue-500" />
            {job.company}
          </p>

          <p className="flex items-center gap-3">
            <MapPin className="text-red-500" />
            {job.location}
          </p>

          <p className="flex items-center gap-3">
            <BriefcaseBusiness className="text-green-500" />
            {job.type}
          </p>

          <p className="flex items-center gap-3 text-green-400 font-bold">
            <IndianRupee />
            {job.salary}
          </p>
        </div>

        <hr className="my-10 border-gray-700" />

        <h2 className="text-3xl font-bold mb-5">
          Job Description
        </h2>

        <p className="text-gray-400 leading-8">
          {job.description}
        </p>

        <div className="mt-12 flex gap-4">
          <Link href="/apply">
           <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl flex items-center gap-2">
             Apply Now
            <ArrowRight size={18} />
           </button>
          </Link>

          <Link href="/jobs">
            <button className="border border-gray-600 hover:border-blue-500 transition px-6 py-3 rounded-xl">
              ← Back to Jobs
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}