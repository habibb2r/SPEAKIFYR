import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUser = () => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data: isUser, isLoading: isUserLoading} = useQuery({
        queryKey: ['isUser', user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/isUser?email=${user?.email}`)
            return res.data
        }
    })
    return [isUser, isUserLoading]
};

export default useUser;