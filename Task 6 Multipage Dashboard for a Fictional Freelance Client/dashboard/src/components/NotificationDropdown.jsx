import { useState } from "react";
import { activities } from "../data/mockData";

export default function NotificationDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="relative text-gray-600 hover:text-blue-600 transition"
      >
        🔔
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-lg border p-4">
          <h3 className="font-semibold text-gray-700 mb-3">
            Recent Activity
          </h3>
          <ul className="space-y-3 text-sm">
            {activities.map((item, index) => (
              <li key={index} className="text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}