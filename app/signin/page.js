"use client";

import { signIn, getSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      ...form,
      redirect: false,
    });

    if (!res?.error) {
      // ⭐ GET SESSION SAFELY (NO FETCH!)
      const session = await getSession();
      const role = session?.user?.role;

      if (role === "admin") router.push("/dashboard");
      else if (role === "consumer") router.push("/consumer");
      else if (role === "author") router.push("/author");
      else router.push("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <h1 className="text-black text-xl font-bold mb-4">Sign In</h1>

        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2 w-full mb-3 text-black"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-2 w-full mb-3 text-black"
        />

        <button className="bg-blue-600 text-white w-full p-2 cursor-pointer">Submit</button>
      </form>
    </div>
  );
}
