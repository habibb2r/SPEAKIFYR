import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const usePopularCl = () => {
    const [axiosSecure] = useAxiosSecure();
    const {data: popularcl= [], isLoading: loading, refetch} = useQuery({
        queryKey: ['popularcl'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/popularclass')
            return res.data;
        }
    })
    return [popularcl, loading, refetch];
};

export default usePopularCl;