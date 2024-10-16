
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useGetNewInstructor = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: newInstructor = [], refetch, isLoading: loadInstructor } = useQuery({
        queryKey: ['newInstructor'],
        queryFn: async () => {
            const res = await axiosSecure.get('/newInstructor')
            return res.data
        }
    })
    return [newInstructor, refetch, loadInstructor]
};

export default useGetNewInstructor;