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
      const session = await getSession();
      const role = session?.user?.role;

      if (role === "admin") router.push("/dashboard");
      else if (role === "consumer") router.push("/consumer");
      else if (role === "author") router.push("/author");
      else router.push("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm border"
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Welcome Back 👋
        </h1>

        <div className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              className="border rounded-lg p-2 w-full text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              className="border rounded-lg p-2 w-full text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 rounded-lg cursor-pointer"
          >
            Sign In
          </button>
        </div>

        <p className="text-center text-gray-600 text-sm mt-4">
          Don’t have an account?  
          <span className="text-blue-600 cursor-pointer"> Contact Admin</span>
        </p>
      </form>
    </div>
  );
}
