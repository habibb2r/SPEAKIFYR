import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useMyClass from "../../../Hooks/useMyClass";


const UserSection = () => {
    const [myadd, refetch, ] = useMyClass();
    refetch();
    return (
        <>
                        <div className="flex items-center gap-3">
                        <li><NavLink to='home'><FaHome></FaHome> User Home </NavLink></li>
                        <li><NavLink to='myclasses'><FaHome></FaHome> My Selected Class {myadd.length}</NavLink></li>
                        <li><NavLink to='/userdash/home'><FaHome></FaHome> My Enrolled Class </NavLink></li>
                        </div>
                        
         </>
    );
};

export default UserSection;