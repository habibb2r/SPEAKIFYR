import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useGetInfo = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user, loading} = useAuth()
    
    const {data: userInfo, isLoading: loadUserInfo} = useQuery({
        queryKey: ['userInfo', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/userInfo?email=${user?.email}`)
        }

    })

    return [userInfo, loadUserInfo]
};

export default useGetInfo;