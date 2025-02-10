"use client"
import { getJobs } from "@/api/services/jobs";
import { Job } from "@/types/job";
import { JobSearchParams } from "@/types/jobSearchParams";
import useSWR from "swr";

export const useJobs = (query: string) => {
  const params: JobSearchParams = {
    query
  };

  const { data, error, isLoading } = useSWR<{ data: Job[] }>(query ? ["jobs", params] : null, () => getJobs(params), {
    revalidateOnFocus: false,
  });
  return { jobs: data?.data || [], error, isLoading };
};