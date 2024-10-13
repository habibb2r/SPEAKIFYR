import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useMyClass = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { isLoading, refetch: refetchMyClass, data: myadd = [] } = useQuery({
        queryKey: ['myadd', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure.get(`/myclass?email=${user?.email}`)
            return response.data;
          },
      })
      return [myadd, refetchMyClass, isLoading];
};

export default useMyClass;