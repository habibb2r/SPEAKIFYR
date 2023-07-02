import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useMyClass from "../../../Hooks/useMyClass";

const UserLI = () => {
    const [myadd, refetch, ] = useMyClass();
    refetch();
    return (
        <>
                        <li><NavLink to='home'><FaHome></FaHome> User Home </NavLink></li>
                        <li><NavLink to='myclasses'> My Selected Class {myadd.length}</NavLink></li>
                        <li><NavLink to='enrol'> My Enrolled Class </NavLink></li>
                        
         </>
    );
};

export default UserLI;