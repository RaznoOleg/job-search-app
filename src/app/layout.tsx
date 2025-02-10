import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ProfileProvider } from "@/context/profileContext";
import { AuthProvider } from "@/context/authContext";
import { Toaster } from "react-hot-toast";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-100`}>
        <AuthProvider>
          <ProfileProvider>
            <Toaster position="top-right" />
            <Navbar />
            <main className="container mx-auto p-4">{children}</main>
          </ProfileProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
