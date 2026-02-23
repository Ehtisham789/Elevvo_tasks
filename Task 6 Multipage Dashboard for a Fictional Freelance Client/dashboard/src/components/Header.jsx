import NotificationDropdown from "./NotificationDropdown";

export default function Header({ toggleSidebar }) {
  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
      <button
        onClick={toggleSidebar}
        className="md:hidden text-gray-600 text-xl"
      >
        ☰
      </button>

      <h1 className="text-lg font-semibold text-gray-700">
        Admin Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <NotificationDropdown />
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700 hidden md:block">
            James Walker
          </span>
        </div>
      </div>
    </header>
  );
}