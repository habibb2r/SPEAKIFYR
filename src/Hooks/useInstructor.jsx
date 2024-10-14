import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useInstructor = () => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data: isInstructor, isLoading: isIsInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled:!loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/isInstructor?email=${user?.email}`)
            return res.data
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;