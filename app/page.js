"use client";

import ProtectedButton from "@/components/ProtectedButton";

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="p-8 bg-white rounded shadow-md text-center">
        <h1 className="text-3xl font-bold">Public Home Page</h1>
        <p className="mt-4">This page is open to everyone.</p>

        <ProtectedButton />
      </div>
    </div>
  );
}
