import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-screen p-4">
      <h1 className="text-xl font-bold mb-6">FormBuilder</h1>

      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block px-4 py-2 rounded ${
              isActive ? "bg-blue-600 text-white" : "hover:bg-gray-100"
            }`
          }
        >
          Forms
        </NavLink>

        <div className="text-gray-500 px-4 py-2">Settings</div>
        <div className="text-gray-500 px-4 py-2">Trash</div>
      </nav>
    </aside>
  );
}
