import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { Helmet } from "react-helmet";
import TableUsers from "./TableUsers";

const ManageUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: userList = [], refetch } = useQuery(["userList"], async () => {
    const res = await axiosSecure.get("/userList");
    return res.data;
  });
  return (
    <div>
      <Helmet>
        <title>SPEAKIFYR-Admin| All Users</title>
      </Helmet>
      <h3 className="font-semibold text-3xl">
        Total Users : {userList.length}
      </h3>
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
