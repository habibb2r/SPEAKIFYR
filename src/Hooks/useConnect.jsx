import { useQuery } from "@tanstack/react-query";



const useConnect = () => {
    const now = new Date();
    const date = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
   const data = {
    date: date,
    time: time,
    browser: navigator.userAgent,
    platform: navigator.platform, 
    language: navigator.language,
   }
    const {data: connectUser, isLoading: loadConnection} = useQuery({
        queryKey: ['connectUser'],
        queryFn: async()=>{
            const res = await axiosSecure.post(`/connect`, data)
            return res.data
        }
    })
    return [connectUser, loadConnection];
};

export default useConnect;