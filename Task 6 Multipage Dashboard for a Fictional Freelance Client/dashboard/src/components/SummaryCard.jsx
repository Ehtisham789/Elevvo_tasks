export default function SummaryCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold mt-3 text-gray-800">{value}</h2>
    </div>
  );
}