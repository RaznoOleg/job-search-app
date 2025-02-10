import { useEffect, useState } from "react";
import { Job } from "@/types/job";

export function useRemoveJob() {
  const [likedJobs, setLikedJobs] = useState<Job[]>([]);

  useEffect(() => {
    const likedJobsFromStorage = JSON.parse(localStorage.getItem("likedJobs") || "[]");
    setLikedJobs(likedJobsFromStorage);
  }, []);

  const removeJob = (jobId: string) => {
    const updatedLikedJobs = likedJobs.filter((job) => job.job_id !== jobId);
    setLikedJobs(updatedLikedJobs);
    localStorage.setItem("likedJobs", JSON.stringify(updatedLikedJobs));
  };

  return { likedJobs, removeJob };
}
