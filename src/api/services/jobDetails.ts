import { JobDetailsParams } from "@/types/jobDetailsParams";
import clientApi from "../clientApi";

export const getJobDetails = async (params: JobDetailsParams) => {
  const { data } = await clientApi.get(`/job-details`, { params });
  return data;
};