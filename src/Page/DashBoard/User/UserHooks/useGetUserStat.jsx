import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const useGetUserStat = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user, loading} = useAuth()
    const {data: userStats, isLoading: loadUserStats} = useQuery({
        queryKey: ['userStats'],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/userStats?email=${user?.email}`)
            return res.data
        }
    })
    return [userStats, loadUserStats]
};

export default useGetUserStat;