import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useGetUser = () => {
    const [axiosSecure] = useAxiosSecure()
    const {data: userList = [], refetch , isLoading: loadUsers} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/userList")
            return res.data
        },
    })
    return [userList, refetch, loadUsers]
};

export default useGetUser;