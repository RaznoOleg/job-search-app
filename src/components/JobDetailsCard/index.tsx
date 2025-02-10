"use client";
import { useProfile } from "@/context/profileContext";
import { useLikeJob } from "@/hooks/useLikeJob";
import { Job } from "@/types/job";
import Link from "next/link";

interface JobDetailsCardProps {
  job: Job;
}

export default function JobDetailsCard({ job }: JobDetailsCardProps) {
  const { isLiked, toggleLike } = useLikeJob(job);
  const { profile } = useProfile();

  return (
    <div className="border p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow bg-white max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">{job.job_title}</h2>
        {<p className="text-l italic text-gray-500 mt-1 text-end">Posted: {job.job_posted_at ? job.job_posted_at : 'n/a'}</p>}
        <div className="flex items-center gap-3">
          {profile &&
            <button onClick={() => toggleLike()} className="text-xl hover:text-red-600">
              <img
                src={isLiked ? "/images/filled_heart.png" : "/images/blank_heart.png"}
                alt="Like"
                className="w-6 h-6 cursor-pointer"
              />
            </button>}
        </div>
      </div>

      <div className="flex mt-4 p-4 bg-gray-100 rounded-lg justify-between">
        <div className="flex flex-col justify-between">
          <p className="text-xl font-bold text-gray-700">{job.employer_name}</p>
          {job.employer_website && (
            <Link href={job.employer_website} target="_blank" className="text-blue-500 hover:underline">
              {job.employer_website}
            </Link>
          )}
        </div>
        <div className="flex align-middle">
          {job.employer_logo && (
            <img
              src={job.employer_logo}
              alt={job.employer_name || "Company Logo"}
              className="h-16 w-16 object-cover rounded-full"
            />
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-4 text-gray-700">
        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
          {job.job_is_remote ? "Remote" : "On-site"}
        </span>
        {job.job_salary && (
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md">
            {job.job_salary}
          </span>
        )}
        {job.job_employment_type && <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-md">{job.job_employment_type}</span>}
        <span className="bg-fuchsia-100 text-fuchsia-700 px-3 py-1 rounded-md">{`${job.job_location}, ${job.job_city}, ${job.job_state}, ${job.job_country}`}</span>
      </div>

      {job.job_apply_link && (
        <div className="mt-4">
          <Link href={job.job_apply_link} target="_blank">
            <button className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 rounded-lg hover:from-blue-700 hover:to-teal-700 duration-300">
              Apply Now
            </button>
          </Link>
        </div>
      )}

      {job.job_highlights && (
        <div className="mt-6">
          {job.job_highlights.Qualifications && job.job_highlights.Qualifications.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Qualifications</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {job.job_highlights.Qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </div>
          )}

          {job.job_highlights.Benefits && job.job_highlights.Benefits.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Benefits</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {job.job_highlights.Benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          {job.job_highlights.Responsibilities && job.job_highlights.Responsibilities.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Responsibilities</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {job.job_highlights.Responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
