"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session || session.user.role !== "admin") {
      router.replace("/signin");
    }

    // ✅ Print login details in console (same as your screenshot)
    console.log("Admin session.user:", session?.user);

  }, [session, status]);

  if (status === "loading" || !session) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* BOX CONTAINER */}
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl text-black font-bold mb-4">Admin Dashboard</h1>

        <p className="text-black mb-6">Welcome, {session.user.name}</p>

        <button
          onClick={() =>
            signOut({ redirect: false }).then(() => router.push("/"))
          }
          className="text-red-600 hover:underline"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
