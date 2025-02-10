"use client"
import { Profile } from "@/types/profile";
import { createContext, useState, ReactNode, useContext, useEffect } from "react";

interface ProfileContextType {
  profile: Profile | null;
  updateProfile: (newProfile: Profile) => void;
  logout: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem("profile");
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const updateProfile = (newProfile: Profile) => {
    setProfile(newProfile);
    localStorage.setItem("profile", JSON.stringify(newProfile));
  };

  const logout = () => {
    setProfile(null);
    localStorage.removeItem("profile");
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile, logout }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}