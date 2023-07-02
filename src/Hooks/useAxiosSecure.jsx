import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";


const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);

    const navigate = useNavigate();
    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000',
    });
    
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
    }, [logOut, navigate, axiosSecure]);
    return [axiosSecure];
};

export default useAxiosSecure;