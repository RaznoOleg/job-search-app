"use client";
import { useProfile } from "@/context/profileContext";
import { useLikeJob } from "@/hooks/useLikeJob";
import { Job } from "@/types/job";
import Link from "next/link";

interface JobListCardProps {
  job: Job;
  onRemoveJob: (jobId: string) => void;
}

export default function JobListCard({ job, onRemoveJob }: JobListCardProps) {
  const { isLiked, toggleLike } = useLikeJob(job);
  const { profile } = useProfile();

  return (
    <div className="p-6 rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow mb-4 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-semibold text-gray-800">{job.job_title}</h2>
        {job.employer_logo && (
          <img
            src={job.employer_logo}
            alt={job.employer_name || "Company Logo"}
            className="h-12 w-12 object-cover rounded-full"
          />
        )}
      </div>

      <p className="text-gray-600">{job.employer_name}</p>
      <p className="text-gray-500">{job.job_location}</p>

      <p className="text-gray-700 mt-2 text-justify">
        {job.job_description && job.job_description.length > 200
          ? `${job.job_description.slice(0, 200)}...`
          : job.job_description}
      </p>

      <div className="flex justify-between items-center mt-4">
        <Link href={`/job-details/${job.job_id}`}>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Details
          </button>
        </Link>

        {profile &&
          <button onClick={() => toggleLike(onRemoveJob)}>
            <img
              src={isLiked ? "/images/filled_heart.png" : "/images/blank_heart.png"}
              alt="Like"
              className="w-6 h-6 cursor-pointer"
            />
          </button>}
      </div>
      {<p className="text-xs italic text-gray-500 mt-1 text-end">Posted: {job.job_posted_at ? job.job_posted_at : 'n/a'}</p>}
    </div>
  );
}
