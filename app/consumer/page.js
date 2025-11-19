"use client";

import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ConsumerDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session || session.user.role !== "consumer") {
      router.replace("/signin");
    }

    // ✅ Print login data in console (matches your screenshot)
    console.log("Consumer session.user:", session?.user);

  }, [session, status]);

  if (status === "loading" || !session) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <div className="bg-white w-full max-w-md p-8 rounded-t-2xl shadow-lg text-center">
        <h1 className="text-2xl font-bold text-black mb-4">Welcome, Consumer!</h1>
        <p className="text-black mb-6">You are logged in as a consumer.</p>

        <button
          onClick={() =>
            signOut({ redirect: false }).then(() => router.push("/"))
          }
          className="text-red-600 font-medium hover:underline"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
