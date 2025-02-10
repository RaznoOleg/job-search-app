"use client"
import { getJobDetails } from "@/api/services/jobDetails";
import { Job } from "@/types/job";
import { JobDetailsParams } from "@/types/jobDetailsParams";
import useSWR from "swr";

export const useJobDetails = (job_id: string) => {
  const params: JobDetailsParams = {
    job_id
  };

  const { data, error, isLoading } = useSWR<{ data: Job[] }>(job_id ? [`/job-details`, params] : null, () => getJobDetails(params), {
    revalidateOnFocus: false,
  });
  return { job: data?.data[0] || null, isLoading, error };
};