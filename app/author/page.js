"use client";

import { useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthorDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session || session.user.role !== "author") {
      router.replace("/signin");
    }

    // ✅ Print login info in console
    console.log("Author session.user:", session?.user);

  }, [session, status]);

  if (status === "loading" || !session) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl text-black font-bold mb-4">Welcome, Author!</h1>

        <p className="mb-6 text-black">
          You are logged in as an <b>author</b>.
        </p>

        <button
          onClick={() =>
            signOut({ redirect: false }).then(() => router.push("/"))
          }
          className="text-red-600 hover:underline"
        >
          Logout
        </button>

        <div className="mt-4 text-black">
          <p>Username: {session.user.name}</p>
          <p>Role: {session.user.role}</p>
        </div>
      </div>
    </div>
  );
}
