"use client";
import JobListCard from "@/components/JobListCard";
import { useRemoveJob } from "@/hooks/useRemoveJob";

export default function LikedJobsPage() {
  const { likedJobs, removeJob } = useRemoveJob();

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Liked Jobs</h1>
      {likedJobs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {likedJobs.map((job) => (
            <JobListCard key={job.job_id} job={job} onRemoveJob={removeJob} />
          ))}
        </div>
      ) : (
        <p>No liked jobs yet.</p>
      )}
    </div>
  );
}
