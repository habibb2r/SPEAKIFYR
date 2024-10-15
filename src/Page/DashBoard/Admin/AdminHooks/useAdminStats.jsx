import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdminStats = () => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data: adminStats, isLoading: loadAdminStats} = useQuery({
        queryKey: ['adminStats'],
        enabled: !loading,
        queryFn: async() => {
            const res = await axiosSecure.get(`/adminStats?email=${user?.email}`)
            return res.data
        }
    })
    return [adminStats, loadAdminStats]
};

export default useAdminStats;