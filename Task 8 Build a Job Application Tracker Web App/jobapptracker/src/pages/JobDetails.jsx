import { useParams, useNavigate } from "react-router-dom";
import { useJobs } from "../context/JobContext";
import { useState } from "react";

const JobDetails = () => {
  const { id } = useParams();
  const { jobs, updateJob, deleteJob } = useJobs();
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return <p className="text-center mt-10">Job not found.</p>;
  }

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(job);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {
    updateJob(form);
    setEditMode(false);
  };

  const handleDelete = () => {
    deleteJob(id);
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
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

      <div className="bg-white rounded-xl shadow-lg p-8 space-y-4">
        {editMode ? (
          <>
            <input
              name="company"
              value={form.company}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />

            <button
              onClick={handleUpdate}
              className="w-full py-3 rounded-lg font-semibold
                         bg-gradient-to-r from-emerald-500 to-teal-600
                         text-white shadow-md
                         hover:shadow-lg hover:scale-[1.02]
                         transition duration-200"
            >
            Update Application
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold">{job.company}</h2>
            <p className="text-gray-600">{job.title}</p>
            <p className="text-sm mt-2">Status: {job.status}</p>
            <p className="text-sm">Date: {job.date}</p>
            <p className="mt-4">{job.notes}</p>

            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setEditMode(true)}
                className="flex-1 py-3 rounded-lg font-semibold
                           bg-gradient-to-r from-blue-500 to-indigo-600
                           text-white shadow-md
                           hover:shadow-lg hover:scale-[1.02]
                           transition duration-200"
              >
              Edit
              </button>

              <button
                onClick={handleDelete}
                className="flex-1 py-3 rounded-lg font-semibold
                           bg-gradient-to-r from-red-500 to-pink-600
                           text-white shadow-md
                           hover:shadow-lg hover:scale-[1.02]
                           transition duration-200"
              >
              Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default JobDetails;