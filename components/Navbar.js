export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">LMS</h1>
      <div className="flex gap-4 text-gray-700">
        <a>Dashboard</a>
        <a>Courses</a>
        <a>Profile</a>
      </div>
    </nav>
  );
}
