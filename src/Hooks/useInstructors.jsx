import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useInstructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data: instructors= [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructors'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/instructors')
            return res.data;
        }
    })
    return [instructors, loading, refetch];
};

export default useInstructors;