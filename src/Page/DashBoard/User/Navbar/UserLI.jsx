import { FaCheckCircle, FaHeart, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useMyClass from "../../../../Hooks/useMyClass";


const UserLI = () => {
  const [myadd, refetch] = useMyClass();
  refetch();
  return <>
   <div className="flex items-center gap-2">
                <li><NavLink to='home'><FaHome></FaHome> User Home </NavLink></li>
                        <li><NavLink to='myclasses'><FaHeart /> Selected Course {myadd.length>0 ? <div className="badge badge-primary badge-xs"></div>: ''}</NavLink></li>
                        <li><NavLink to='enrol'><FaCheckCircle /> Enrolled Course </NavLink></li>
                </div></>;
};

export default UserLI;
