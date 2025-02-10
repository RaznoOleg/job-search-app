# Job Search App

## Overview
Job Search App is a Next.js 14 application built with TypeScript. It provides a job searching experience with authentication, profile creation, job listings, and the ability to save liked jobs.

## Technologies Used
- **Next.js 14** with **TypeScript**
- **Tailwind CSS** for styling (basic styles for readability and structure)
- **Formik** for form handling
- **Yup** for form validation
- **Axios** for HTTP requests with **SWR** hooks (`useSWR`)
- **Vercel** for deployment

## Project Structure
```
📂 job-search-app/
│📂 public/
│📂 src/
│├── 📂 api/
││ ├── 📂 services/
│├── 📂 app/ (Next.js App Router)
││ ├── 📂 pages/
││ ├── 📂 auth/
││ ├── 📂 create-profile/
││ ├── 📂 job-details/
││ ├── 📂 jobs/
││ ├── 📂 liked/
│├── 📂 components/ (Reusable UI components)
││ ├── 📂 AuthForm/
││ ├── 📂 JobDetailsCard/
││ ├── 📂 JobListCard/
││ ├── 📂 Navbar/
││ ├── 📂 ProfileForm/
││ ├── 📂 SearchBar/
│├── 📂 context/ (Global context management)
│├── 📂 hooks/ (Custom React hooks)
│├── 📂 schemas/ (Validation schemas with Yup)
│├── 📂 types/ (TypeScript types & assets)
│├── .env.local (Environment variables)
```

## Environment Variables
Create a `.env.local` file and add the following environment variables:
```
NEXT_PUBLIC_RAPIDAPI_KEY=your_api_key
NEXT_PUBLIC_RAPIDAPI_HOST=your_api_host
NEXT_PUBLIC_CLIENT_API_URL=your_client_api_url
NEXT_PUBLIC_AUTH_API_URL=your_auth_api_url
```

## Installation & Setup
### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/job-search-app.git
cd job-search-app
```

### 2. Install Dependencies
```sh
npm install
# or
yarn install
```

### 3. Run the Development Server
```sh
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

### 4. Build for Production
```sh
npm run build
```

### 5. Deployment
The app is deployed using **Vercel**. To deploy, use:
```sh
vercel
```

## Contributing
Feel free to fork this repository and submit pull requests with improvements!

## License
This project is licensed under the MIT License.

