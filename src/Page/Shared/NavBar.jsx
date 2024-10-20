import { useContext } from "react";
import { NavLink , Link} from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

import useGetInfo from "../DashBoard/User/UserHooks/useGetInfo";
import Loading from "./Loading";




const NavBar = () => {
  // console.log(import.meta.env.VITE_apiKey)
  const {user,logOut, loading} = useContext(AuthContext);
  const [userInfo, loadUserInfo] = useGetInfo()
  
  
  if(loading || loadUserInfo){
    return <Loading></Loading>
  }
 
  const handleLogOut = () =>{
    logOut()
    .then(() =>{})
    .catch((error) => {console.log(error)});
  }

    const navOptions = 
    <>
      <li><NavLink to='/'>Home</NavLink></li>  
      <li><NavLink to='/instructors'>Instructors</NavLink></li>  
      <li><NavLink to='classes'>Classes</NavLink></li>  
      {
        user ?  <li><NavLink to={`dashboard/${userInfo?.role}`}>Dashboard</NavLink></li> 
         : <li></li>
      }  
      {
        user ? <li><img className="h-[60px] w-[70px] rounded-[50%] bg-cover" src={user.photoURL} alt="" /></li> 
         : <li></li>
      }
      {
        user ? <li><Link><button onClick={handleLogOut} className="btn bg-[#3d486b] text-[#63c45b]">Log Out</button></Link></li> 
         : <li><Link to='/login'><button className="btn bg-[#3d486b] text-white">Log In</button></Link></li>
      }
    </>
    return (
        <>
        <div className="navbar fixed md:relative  md:py-4 bg-opacity-30 max-w-screen-xl text-black text-lg bg-[#a3d2f7]  font-semibold z-20">
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
              </ul>
            </div>
            
          </div>
    </>
    );
};

export default NavBar;