"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/context/authContext";
import { useProfile } from "@/context/profileContext";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const { profile } = useProfile();
  const { user, logout } = useAuth();

  const handleClearSearch = () => {
    router.push("/jobs", { scroll: false });
  };

  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    router.push("/auth");
  };

  const toggleDropdown = () => {
    setShowDropdown(prev => !prev);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-5 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={handleClearSearch} className="font-bold hover:text-gray-300 transition-colors">
          Job Search
        </button>
        <div className="flex items-center relative">
          {!user ? (
            <Link href="/auth" className="mx-4 hover:text-gray-300 transition-colors font-bold">Login</Link>
          ) : (
            <>
              <Link href="/create-profile" className="mx-4 hover:text-gray-300 transition-colors font-bold">Profile</Link>
              {profile && (
                <Link href="/liked" className="mx-4 hover:text-gray-300 transition-colors font-bold">
                  Liked Jobs
                </Link>
              )}

              <div className="relative">
                <span
                  className="mx-4 font-bold cursor-pointer  hover:text-gray-300"
                  onClick={toggleDropdown}
                >
                  {user}
                </span>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-500 hover:rounded-md hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}