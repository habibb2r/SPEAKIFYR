import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useAuth from "../../Hooks/useAuth";
import useMyClass from "../../Hooks/useMyClass";
import AdminSection from "./Admin/AdminSection";
import UserSection from "./User/UserSection";
import { FaHome } from "react-icons/fa";


const NavDash = () => {
    const {user} = useAuth();
    const [myadd, refetch, ] = useMyClass();
    const [isAdmin] = useAdmin();
    console.log(myadd)
    refetch();
   
  
      const navOptions = 
      <>
      {
        isAdmin? <AdminSection/> :  <UserSection></UserSection>
      }
      
         
      </>
      return (
          <>
          <div className="navbar  py-4 bg-opacity-20 max-w-screen-xl text-black text-lg bg-[#9bbad1]  font-semibold z-20">
              <div className="navbar-start">
                <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-600 rounded-box w-52 text-lg">
                    {navOptions}
                  </ul>
                </div>
                <Link className=""><img className="h-[80px]" src='https://i.ibb.co/nD9Yfnf/logo-removebg-preview.png' alt="" /></Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg flex items-center">
                {navOptions}
                <li><Link><img className="h-[50px] rounded-[50%]" src={user.photoURL} alt="" /></Link></li>
                </ul>

                
              </div>
              
            </div>
      </>
      );
};

export default NavDash;