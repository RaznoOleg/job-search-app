"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Profile } from "@/types/profile";
import ProfileForm from "@/components/ProfileForm";
import { useProfile } from "@/context/profileContext";

export default function CreateProfilePage() {
  const router = useRouter();
  const { profile, updateProfile, logout } = useProfile();
  const [initialValues, setInitialValues] = useState<Profile>({
    name: "",
    jobTitle: "",
    aboutMe: "",
  });

  useEffect(() => {
    if (profile) {
      setInitialValues(profile);
    }
  }, [profile]);

  return (
    <div className="mx-auto mt-12 p-8 bg-white shadow-2xl max-w-5xl rounded-2xl hover:shadow-2xl transition-shadow mb-8">
      <h1 className="text-xl font-bold text-center text-gray-800">{profile ? "Edit Profile" : "Create Profile"}</h1>
      <ProfileForm
        initialValues={initialValues}
        onSubmit={(values) => {
          updateProfile(values);
          router.push("/jobs");
        }}
        showLogout={!!profile}
        onLogout={() => {
          logout();
          router.push("/jobs");
        }}
      />
    </div>
  );
}
