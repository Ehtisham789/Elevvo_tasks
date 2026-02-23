import { useState } from "react";
import { motion } from "framer-motion";

export default function Profile() {
  const [form, setForm] = useState({
    name: "James Walker",
    email: "jameswalker@example.com",
    role: "Freelance Developer",
    bio: "Building modern web applications with React and Node.js",
    password: "",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-5xl mx-auto space-y-8"
    >
      <h2 className="text-2xl font-semibold text-gray-800">
        Profile Settings
      </h2>

      {/* Profile Header Card */}
      <div className="bg-white rounded-2xl shadow-sm border p-6 flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="avatar"
          className="w-24 h-24 rounded-full object-cover"
        />
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-800">
            {form.name}
          </h3>
          <p className="text-gray-500">{form.role}</p>
          <button className="mt-3 text-sm text-blue-600 font-medium hover:underline">
            Change Avatar
          </button>
        </div>
      </div>

      {/* Main Settings Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-sm border p-8 space-y-8"
      >
        {/* Personal Info */}
        <div>
          <h4 className="text-lg font-semibold text-gray-700 mb-6">
            Personal Information
          </h4>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-500">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Email</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm text-gray-500">Role</label>
            <input
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="mt-6">
            <label className="text-sm text-gray-500">Bio</label>
            <textarea
              name="bio"
              rows="4"
              value={form.bio}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
          </div>
        </div>

        {/* Password Section */}
        <div className="border-t pt-8">
          <h4 className="text-lg font-semibold text-gray-700 mb-6">
            Security
          </h4>

          <div className="max-w-md">
            <label className="text-sm text-gray-500">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full mt-2 p-3 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Notifications */}
        <div className="border-t pt-8 flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-700">
              Email Notifications
            </h4>
            <p className="text-sm text-gray-500">
              Receive updates about projects and payments.
            </p>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="notifications"
              checked={form.notifications}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 transition"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
          </label>
        </div>

        {/* Danger Zone */}
        <div className="border-t pt-8 flex justify-between items-center">
          <button
            type="button"
            className="text-red-600 font-medium hover:underline text-sm"
          >
            Delete Account
          </button>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Save Changes
          </button>
        </div>
      </form>
    </motion.div>
  );
}