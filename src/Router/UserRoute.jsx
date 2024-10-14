
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Page/Shared/Loading';
import useUser from '../Hooks/useUser';
import useAuth from '../Hooks/useAuth';

const UserRoute = ({children}) => {
    const {user, loading}= useAuth();
    const[isUser, isUserLoading] = useUser()
    const location = useLocation();
    if(loading || isUserLoading){
        return <Loading/>
    }
    if(user && isUser){
        return children;
    }
    return <Navigate to='/' state={{from: location}}  replace></Navigate>
};

export default UserRoute;