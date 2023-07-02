import { FaHome, FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const AdminLi = () => {
    return (
        <>
                        <li><NavLink to='home'><FaHome></FaHome> Admin Home </NavLink></li>
                        <li><NavLink to='users'><FaUsers></FaUsers> All Users</NavLink></li>
                        </>
    );
};

export default AdminLi;