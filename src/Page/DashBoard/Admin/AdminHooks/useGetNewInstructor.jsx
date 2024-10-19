
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useGetNewInstructor = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: newInstructor = [], refetch: refetchNewInstructor, isLoading: loadInstructor } = useQuery({
        queryKey: ['newInstructor'],
        queryFn: async () => {
            const res = await axiosSecure.get('/newInstructor')
            return res.data
        }
    })
    return [newInstructor, refetchNewInstructor, loadInstructor]
};

export default useGetNewInstructor;