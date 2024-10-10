import { Link,  NavLink,  Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useMyClass from "../../Hooks/useMyClass";
import useAdmin from "../../Hooks/useAdmin";

import AdminLi from "./Admin/AdminLi";
import UserLI from "./User/UserLI";
import { FaHome } from "react-icons/fa";
import { Helmet } from "react-helmet";



const Dashboard = () => {
    
    const [isAdmin] = useAdmin();
    
    
  
      const navOptions = 
      <>
      
      {
        isAdmin? <AdminLi></AdminLi> :  <UserLI></UserLI>
      }
         
      </>
      return (
          <>
          <div className="navbar  py-4 bg-opacity-20 max-w-screen-xl text-black text-lg bg-[#9bbad1]  font-semibold z-20">
            {
                isAdmin? <Helmet>
                <title>SPEAKIFYR | Admin</title>
            </Helmet> : <Helmet>
                <title>SPEAKIFYR | User</title>
            </Helmet>
            }
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-600 rounded-box w-52 text-lg">
                    {navOptions}
                  </ul>
                </div>
                <Link to='/' className=""><img className="h-[80px]" src='https://i.ibb.co/nD9Yfnf/logo-removebg-preview.png' alt="" /></Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg flex items-center">
                {navOptions}
                
                </ul>
                
              </div>
              
            </div>
            <Outlet></Outlet>
      </>
      );
};

export default Dashboard;