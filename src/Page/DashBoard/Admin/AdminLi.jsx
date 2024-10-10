import { FaHome, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const AdminLi = () => {
    return (
        <>
                        <li><NavLink to='home'><FaHome></FaHome>Home </NavLink></li>
                        <li><NavLink to='home'><FaHome></FaHome>Classes </NavLink></li>
                        <li><NavLink to='users'><FaUsers></FaUsers>Users</NavLink></li>
                        <li><NavLink to='users'><FaUsers></FaUsers>Manage</NavLink></li>
                        </>
    );
};

export default AdminLi;