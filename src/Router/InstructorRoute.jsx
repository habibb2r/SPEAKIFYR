
import useInstructor from '../Hooks/useInstructor';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Page/Shared/Loading';

const InstructorRoute = () => {
    const {user, loading}= useAuth();
    const[isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation();
    if(loading || isInstructorLoading){
        return <Loading/>
    }
    if(user && isInstructor){
        return children;
    }
    return <Navigate to='/' state={{from: location}}  replace></Navigate>
};

export default InstructorRoute;