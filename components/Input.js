export default function Input({ label, type = "text" }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-700">{label}</label>
      <input
        type={type}
        className="border p-2 rounded w-full"
      />
    </div>
  );
}
