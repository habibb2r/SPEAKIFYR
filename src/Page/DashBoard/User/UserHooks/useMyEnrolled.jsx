import { useQuery } from "@tanstack/react-query";

import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const useMyEnrolled = () => {
    const { user , loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data: myEnrolled, isLoading: loadEnrolledClass, refetch} = useQuery({
        queryKey: ['myEnrolled'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/myEnrolledClass?email=${user?.email}`)
            return res.data
        }
    })
    return [myEnrolled, refetch, loadEnrolledClass]
};

export default useMyEnrolled;