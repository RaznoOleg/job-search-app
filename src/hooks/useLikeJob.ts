import { useState, useEffect } from "react";
import { Job } from "@/types/job";

export function useLikeJob(job: Job) {
  const [isLiked, setIsLiked] = useState(false);
  const [likedJobs, setLikedJobs] = useState<Job[]>([]);

  useEffect(() => {
    const likedJobs = JSON.parse(localStorage.getItem("likedJobs") || "[]");
    if (likedJobs.find((likedJob: { job_id: string }) => likedJob.job_id === job.job_id)) {
      setIsLiked(true);
    }
  }, [job]);

  const toggleLike = (onRemoveJob?: (jobId: string) => void) => {
    let likedJobs = JSON.parse(localStorage.getItem("likedJobs") || "[]");

    if (isLiked) {
      likedJobs = likedJobs.filter((likedJob: { job_id: string }) => likedJob.job_id !== job.job_id);
      if (onRemoveJob) onRemoveJob(job.job_id);
    } else {
      likedJobs.push(job);
    }

    localStorage.setItem("likedJobs", JSON.stringify(likedJobs));
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    const likedJobsFromStorage = JSON.parse(localStorage.getItem("likedJobs") || "[]");
    setLikedJobs(likedJobsFromStorage);
  }, []);

  const removeJob = (jobId: string) => {
    const updatedLikedJobs = likedJobs.filter((job) => job.job_id !== jobId);
    setLikedJobs(updatedLikedJobs);
    localStorage.setItem("likedJobs", JSON.stringify(updatedLikedJobs));
  };

  return { isLiked, likedJobs, toggleLike, removeJob };
}
