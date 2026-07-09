
import { jobs } from "@/data/jobs";
import JobCard from "./JobCard";

export default function FeaturedJobs() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold mb-8">
        Featured Jobs
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            id={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            salary={job.salary}
            type={job.type}
          />
        ))}
      </div>
    </section>
  );
}