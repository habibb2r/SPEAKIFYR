import { Link, Outlet } from "react-router-dom";

import AdminLi from "../Admin/AdminNavbar/AdminLi";
import UserLI from "../User/Navbar/UserLI";
import { Helmet } from "react-helmet";
import Loading from "../../Shared/Loading";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructorInfo from "../../../Hooks/useInstructorInfo";
import InstructorNavbar from "../Instructor/InstructorNavbar/InstructorNavbar";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [instructorInfo, loadInstructor] = useInstructorInfo()


  if (isAdminLoading || loadInstructor) {
    return <Loading></Loading>;
  }

  const navOptions = <>{isAdmin ? <AdminLi></AdminLi> : (instructorInfo? <InstructorNavbar />: <UserLI/>)}</>;
  return (
    <>
      <div className="navbar fixed md:relative py-3 bg-opacity-20 max-w-screen-xl text-black text-lg bg-[#9bbad1]  font-semibold z-20">
        {isAdmin ? (
          <Helmet>
            <title>SPEAKIFYR | Admin - Dashboard</title>
          </Helmet>
        ) : ( instructorInfo?
        <Helmet>
            <title>SPEAKIFYR | Instructor - Dashboard</title>
          </Helmet> : <Helmet>
            <title>SPEAKIFYR | User - Dashboard</title>
          </Helmet>
        )}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-600 rounded-box w-52 text-lg"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="">
            <img
              className="h-[80px]"
              src="https://i.ibb.co/nD9Yfnf/logo-removebg-preview.png"
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg flex items-center">
            {navOptions}
          </ul>
        </div>
      </div>
      <div className="pt-[24%] md:pt-0">
      <Outlet></Outlet>
      </div>
    </>
  );
};

export default Dashboard;
