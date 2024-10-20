import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";

export const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_backend}`,
});

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);

    const navigate = useNavigate();
    
    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response)=> response,
            async(error) => {
                if(error.response && ( error.response.status === 403)){
                    await logOut();
                    navigate('/login');
                }
                return Promise.reject(error);

            }
        );
    }, [logOut, navigate]);
    return [axiosSecure];
};

export default useAxiosSecure;