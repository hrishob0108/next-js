"use client";

import { useSession } from "next-auth/react";

export default function ProtectedButton() {
  const { data: session } = useSession();

  if (session?.user?.role !== "admin") return null;

  return (
    <button className="bg-black text-white px-4 py-2 rounded">
      Admin Only Button
    </button>
  );
}
