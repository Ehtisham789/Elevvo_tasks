import { useState } from "react";
import { useJobs } from "../context/JobContext";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { addJob } = useJobs();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    company: "",
    title: "",
    status: "Applied",
    date: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addJob(form);
    navigate("/");
  };

  const handleBack = () => {
    navigate(-1); // go back
  };

  return (
    <div className="max-w-xl mx-auto">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="mb-6 inline-flex items-center gap-2
                   text-indigo-600 font-semibold
                   hover:underline"
      >
        ← Back to Dashboard
      </button>

      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-8 space-y-5"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Add New Application
        </h2>

        <input
          name="company"
          placeholder="Company Name"
          required
          value={form.company}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <input
          name="title"
          placeholder="Job Title"
          required
          value={form.title}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        >
          <option>Applied</option>
          <option>Interviewing</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        <input
          type="date"
          name="date"
          required
          value={form.date}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <textarea
          name="notes"
          placeholder="Notes..."
          value={form.notes}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg font-semibold
                     bg-gradient-to-r from-indigo-600 to-purple-600
                     text-white shadow-md
                     hover:shadow-lg hover:scale-[1.02]
                     transition duration-200"
        >
          Save Application
        </button>
      </form>
    </div>
  );
};

export default AddJob;