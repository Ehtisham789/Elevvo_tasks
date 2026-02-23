import { projects } from "../data/mockData";

export default function Projects() {
  const statusColor = (status) => {
    if (status === "Completed")
      return "bg-green-100 text-green-600";
    if (status === "In Progress")
      return "bg-yellow-100 text-yellow-600";
    return "bg-gray-100 text-gray-600";
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-6">
        Projects
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-gray-500 border-b">
              <th className="py-3">Project</th>
              <th>Status</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-4 font-medium text-gray-700">
                  {project.name}
                </td>
                <td>
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${statusColor(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="text-gray-600">
                  {project.deadline}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}