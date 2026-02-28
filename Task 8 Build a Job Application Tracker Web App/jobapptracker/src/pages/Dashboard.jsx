import { useState } from "react";
import { useJobs } from "../context/JobContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { jobs, setJobs } = useJobs();
  const [search, setSearch] = useState("");

  // ==============================
  // EXPORT FUNCTION
  // ==============================
  const exportJobs = () => {
    if (jobs.length === 0) {
      alert("No job applications to export.");
      return;
    }

    const blob = new Blob([JSON.stringify(jobs, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "job-applications.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  // ==============================
  // IMPORT FUNCTION
  // ==============================
  const importJobs = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);

        if (!Array.isArray(importedData)) {
          alert("Invalid JSON format.");
          return;
        }

        // Overwrite current jobs
        setJobs(importedData);
        alert("Job applications successfully imported!");
      } catch (error) {
        alert("Error importing file. Please upload a valid JSON file.");
      }
    };

    reader.readAsText(file);
  };

  // ==============================
  // FILTER SEARCH
  // ==============================
  const filteredJobs = jobs.filter(
    (job) =>
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.title.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case "Applied":
        return "bg-blue-100 text-blue-700";
      case "Interviewing":
        return "bg-yellow-100 text-yellow-700";
      case "Offer":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div>
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Applications</h1>
        <p className="text-gray-600">
          Track and manage your job search efficiently.
        </p>
      </div>

      {/* EXPORT / IMPORT BUTTONS */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={exportJobs}
          className="px-5 py-3 rounded-lg font-semibold
                     bg-gradient-to-r from-indigo-500 to-purple-600
                     text-white shadow-md
                     hover:shadow-lg hover:scale-105
                     transition duration-200"
        >
          ⬆ Export JSON
        </button>

        <label
          className="px-5 py-3 rounded-lg font-semibold
                     bg-gradient-to-r from-emerald-500 to-teal-600
                     text-white shadow-md cursor-pointer
                     hover:shadow-lg hover:scale-105
                     transition duration-200"
        >
          ⬇ Import JSON
          <input
            type="file"
            accept=".json"
            onChange={importJobs}
            className="hidden"
          />
        </label>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search by company or role..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 p-3 rounded-lg border focus:ring-2 focus:ring-indigo-400 outline-none"
      />

      {/* JOB LIST */}
      {filteredJobs.length === 0 ? (
        <p className="text-gray-500 text-center">No applications found.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <Link
              to={`/job/${job.id}`}
              key={job.id}
              className="bg-white/80 backdrop-blur-md border rounded-xl p-5 shadow hover:shadow-xl transition hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">{job.company}</h2>
                <span
                  className={`px-3 py-1 text-xs rounded-full font-medium ${getStatusStyle(
                    job.status
                  )}`}
                >
                  {job.status}
                </span>
              </div>

              <p className="text-gray-600">{job.title}</p>
              <p className="text-sm text-gray-400 mt-2">
                Applied on {job.date}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;