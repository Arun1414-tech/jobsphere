import { jobs } from "@/data/jobs";
import JobCard from "@/components/JobCard";
import Breadcrumb from "@/components/Breadcrumb";



interface JobsPageProps {
  searchParams: Promise<{
    search?: string;
    location?: string;
  }>;
}

export default async function JobsPage({ searchParams }: JobsPageProps) {
  const params = await searchParams;

  const search = params.search?.toLowerCase() || "";
  const location = params.location?.toLowerCase() || "";

  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(search) &&
      job.location.toLowerCase().includes(location)
    );
  });

  return (
    <main className="max-w-6xl mx-auto py-16 px-6">
    <Breadcrumb
       items={[
       { label: "Home", href: "/" },
       { label: "Jobs" },
        ]}
    />
      <h1 className="text-5xl font-bold mb-10">
        Available Jobs
      </h1>

      {filteredJobs.length === 0 ? (
        <p className="text-xl text-gray-400">
          No jobs found.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
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
      )}
    </main>
  );
}