import { JobSearchParams } from "@/types/jobSearchParams";
import clientApi from "../clientApi";

export const getJobs = async (params: JobSearchParams) => {
  const { data } = await clientApi.get('/search', { params });
  return data;
};