import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAuth from '../../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const useGetInstructorStats = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user,loading} = useAuth()
    const {data: instructorStats, isLoading: loadInstructorStats} = useQuery({
        queryKey: ['instructorStats'],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/instructorStats?email=${user?.email}`)
            return res.data
        }
    })
    return [instructorStats, loadInstructorStats]
};

export default useGetInstructorStats;