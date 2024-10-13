
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructorInfo = () => {

    const{ user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data: instructorInfo, isLoading: loadInstructor} = useQuery({
        queryKey: ['instructorInfo', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/userList/instructorInfo?email=${user?.email}`)
            return res.data.instructor
        }
    })
    return [instructorInfo, loadInstructor]
};

export default useInstructorInfo;