import { useQuery } from "@tanstack/react-query";


const usePopularCl = () => {
    const {data: popularcl= [], isLoading: loading, refetch} = useQuery({
        queryKey: ['popularcl'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/popularclass');
            return res.json();
        }
    })
    return [popularcl, loading, refetch];
};

export default usePopularCl;