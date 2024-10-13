import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";



const useGetInfo = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user, loading} = useAuth()
    
    const {data: userInfo, isLoading: loadUserInfo} = useQuery({
        queryKey: ['userInfo', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/userInfo?email=${user?.email}`)
            return res.data
        }

    })

    return [userInfo, loadUserInfo]
};

export default useGetInfo;