"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import { useJobs } from "@/hooks/useJobs";
import { Job } from "@/types/job";
import JobListCard from "@/components/JobListCard";
import { useRemoveJob } from "@/hooks/useRemoveJob";
import { useProfile } from "@/context/profileContext";

function JobsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>(searchParams.get("q") || "");
  const { removeJob } = useRemoveJob();
  const { profile } = useProfile();
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setSearchQuery(searchParams.get("q") || "");
    setIsSearching(!!searchParams.get("q"));
  }, [searchParams]);

  const handleSearch = (query: string) => {
    setIsSearching(!!query);
    router.push(query ? `/jobs?q=${encodeURIComponent(query)}` : "/jobs", { scroll: false });
  };

  const { jobs, error, isLoading } = useJobs(searchQuery);
  const { jobs: recommendedJobs } = useJobs(profile?.jobTitle || "");

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} searchQuery={searchQuery} />
      {profile && !isSearching ? (
        <div>
          <h1 className="text-2xl font-bold my-4">Recommended Jobs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendedJobs.map((job: Job) => (
              <JobListCard key={job.job_id} job={job} onRemoveJob={removeJob} />
            ))}
          </div>
        </div>
      ) : (
        <>
          {jobs.length > 0 && <h1 className="text-2xl font-bold my-4">Job Listings</h1>}
          {isLoading && (
            <p className="flex justify-center items-center h-64 text-lg font-semibold text-gray-500">
              Loading jobs...
            </p>
          )}
          {error && (
            <p className="flex justify-center items-center h-64 text-lg font-semibold text-red-500">
              Error fetching jobs
            </p>
          )}
          {jobs.length === 0 && !isLoading && (
            <p className="flex justify-center items-center h-64 text-lg font-semibold text-gray-400">
              No jobs found
            </p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.map((job: Job) => (
              <JobListCard key={job.job_id} job={job} onRemoveJob={removeJob} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function JobsPage() {
  return (
    <Suspense>
      <JobsContent />
    </Suspense>
  );
}