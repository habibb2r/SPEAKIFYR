import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import TableUsers from "./TableUsers";
import Loading from "../../../Shared/Loading";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: userList = [], refetch , isLoading } = useQuery(["userList"], async () => {
    const res = await axiosSecure.get("/userList");
    return res.data;
  });

  if(isLoading){
    return <Loading></Loading>
  }
  return (
    <div>
      <Helmet>
        <title>SPEAKIFYR-Admin| All Users</title>
      </Helmet>
      <div className="stat flex flex-col justify-center items-center">
    <div className="stat-figure text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    </div>
    <div className="stat-title">Total Users</div>
    <div className="stat-value text-primary">{userList.length}</div>
    <div className="stat-desc">21% more than last month</div>
  </div>
      <div className="divider divider-success"></div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {userList.map((user, index) => (
              <TableUsers
                user={user}
                refetch={refetch}
                index={index}
                key={user._id}
              ></TableUsers>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
