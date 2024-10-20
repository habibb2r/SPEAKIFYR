import { FaHome, FaSitemap, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const AdminLi = () => {
  return (
    <>
      <li>
        <NavLink to="admin">
          <FaHome></FaHome>Home{" "}
        </NavLink>
      </li>
      <li>
        <NavLink to="users">
          <FaUsers></FaUsers>Users
        </NavLink>
      </li>
      <li>
        <NavLink to="manageEverything">
        <FaSitemap />Manage
        </NavLink>
      </li>
    </>
  );
};

export default AdminLi;
