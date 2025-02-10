export interface JobSearchParams {
  query: string;
  page?: number;
  num_pages?: number;
  country?: string;
  language?: string;
  date_posted?: 'all' | 'today' | '3days' | 'week' | 'month';
  work_from_home?: boolean;
  employment_types?: string;
  job_requirements?: string;
  radius?: number;
  exclude_job_publishers?: string;
  fields?: string;
}