import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAuth from '../../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const useGetEnrolledData = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user, loading} = useAuth()
    const {data: enrolledData, isLoading: loadEnrolledData} = useQuery({
        queryKey: ['enrolledData'],
        enabled: !loading,
        queryFn: async() => {
            const res = await axiosSecure.get(`/enrolledStudents?email=${user?.email}`)
            return res.data
        }
        
    })
    return [enrolledData, loadEnrolledData]
};

export default useGetEnrolledData;