import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const useMyEnrolled = () => {
    const { user , loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data: myEnrolled, isLoading, refetch} = useQuery({
        queryKey: ['myEnrolled'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/myEnrolled?email=${user?.email}`)
            return res.data
        }
    })
    return [myEnrolled, refetch, isLoading]
};

export default useMyEnrolled;