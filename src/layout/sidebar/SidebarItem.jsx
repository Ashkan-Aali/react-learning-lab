import { NavLink } from "react-router";

const SidebarItem = ({ to, Children }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `block hover:bg-blue-50 p-2 rounded w-full h-full ${
            isActive ? "bg-blue-100" : ""
          }`
        }
      >
        {Children}
      </NavLink>
    </li>
  );
};

export default SidebarItem ;