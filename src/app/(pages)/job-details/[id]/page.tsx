"use client";
import JobDetailsCard from "@/components/JobDetailsCard";
import { useJobDetails } from "@/hooks/useJobDetails";
import { useParams, useRouter } from "next/navigation";

export default function JobDetailsPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const jobId = decodeURIComponent(params.id);

  const { job, isLoading, error } = useJobDetails(jobId);

  if (isLoading) return <p className="text-xl font-bold my-4">Loading job details...</p>;
  if (error) return <p className="text-xl font-bold my-4">Error fetching job details</p>;
  if (!job) return <p className="text-xl font-bold my-4">Job not found</p>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-blue-400 hover:bg-blue-600 text-white rounded"
      >
        ← Back
      </button>

      <JobDetailsCard job={job} />
    </div>
  );
}
