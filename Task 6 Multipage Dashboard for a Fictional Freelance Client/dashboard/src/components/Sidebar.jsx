import { NavLink } from "react-router-dom";

export default function Sidebar({ open, setOpen }) {
  const base =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium";

  const active =
  "bg-indigo-600 text-gray-900 font-semibold";

  const inactive = "text-gray-600 hover:bg-gray-100 hover:text-gray-900";

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-20 md:hidden ${
          open ? "block" : "hidden"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed md:static z-30 w-64 bg-white border-r border-gray-200 h-full transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300`}
      >
        <div className="p-6 text-lg font-semibold border-b border-gray-200">
          <span className="text-gray-800">Freelancer</span>
          <span className="text-blue-600 ml-1">Pro</span>
        </div>

        <nav className="p-4 space-y-2">
          <NavLink
            to="/overview"
            className={({ isActive }) =>
              `${base} ${isActive ? active : inactive}`
            }
          >
            Overview
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${base} ${isActive ? active : inactive}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${base} ${isActive ? active : inactive}`
            }
          >
            Profile
          </NavLink>
        </nav>
      </aside>
    </>
  );
}