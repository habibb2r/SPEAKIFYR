import { FaCheckCircle, FaHeart, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useMyClass from "../../../../Hooks/useMyClass";
import Loading from "../../../Shared/Loading";


const UserLI = () => {
  const [myadd, , isLoading] = useMyClass();
  if (isLoading) {
    return <Loading></Loading>
  }
  return <>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                        <li><NavLink to='student'><FaHome></FaHome> User Home </NavLink></li>
                        <li><NavLink to='myclasses'><FaHeart /> Selected Course {myadd.length>0 ? <div className="badge badge-primary badge-xs"></div>: ''}</NavLink></li>
                        <li><NavLink to='enroll'><FaCheckCircle /> Enrolled Course </NavLink></li>
                </div></>;
};

export default UserLI;
