type NullableString = string | null;
type NullableNumber = number | null;
type Higlights = {
  Responsibilities: [],
  Benefits: [],
  Qualifications: []
}

export interface Job {
  job_id: string;
  job_title: NullableString;
  employer_name: NullableString;
  employer_logo: NullableString;
  employer_website: NullableString;
  job_publisher: NullableString;
  job_employment_type: NullableString;
  job_apply_link: NullableString;
  job_description: NullableString;
  job_is_remote: true | false;
  job_posted_at: NullableString;
  job_posted_at_timestamp: NullableNumber;
  job_posted_at_datetime_utc: NullableString;
  job_location: NullableString;
  job_city: NullableString;
  job_state: NullableString;
  job_country: NullableString;
  job_google_link: NullableString;
  job_salary: NullableNumber;
  job_min_salary: NullableNumber;
  job_highlights: Higlights;
  job_max_salary: NullableNumber;
  job_salary_period: NullableString;
}