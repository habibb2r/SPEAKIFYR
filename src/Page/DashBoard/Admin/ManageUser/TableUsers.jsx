import { BsFillTrash3Fill } from "react-icons/bs";
import { FaUsersCog } from "react-icons/fa";

import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const TableUsers = ({ user, index, refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const handleDelete = (removeUser) => {
    const email = removeUser.email

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/removeuser?email=${email}`)
        .then(res=>{
          if(res.data.status){
            refetch();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: `${removeUser.name} Removed`,
                  showConfirmButton: false,
                  timer: 1500,
                });
          }
        }
        )
      }
    });
    
  };
  const handleMakeAdmin = (user) => {
    console.log(user);
    Swal.fire({
      title: "Are you sure?",
      text: "Set to make admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/userList/admin/${user._id}`).then((data) => {
          console.log(data.data);
          if (data.data.modifiedCount) {
            console.log(data);
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${user.name} added as admin`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };
  const { name, email } = user;
  return (
    <tr>
      <td>
        <label>
          <p>{index + 1}</p>
        </label>
      </td>
      <td>
        <div className="flex items-center space-x-3">
          <p>{name}</p>
        </div>
      </td>
      <td>
        <p>{email}</p>
      </td>
      <td className="">
        {user.role === "admin" ? (
          <div className="badge badge-accent">Admin</div>
        ) : user.role === "student" ? (
          <button
            onClick={() => handleMakeAdmin(user)}
            className="btn btn-ghost btn-lg"
          >
            <FaUsersCog></FaUsersCog>
          </button>
        ) : (
          <div className="badge badge-accent">Instructor</div>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDelete(user)}
          className="btn btn-ghost btn-lg"
        >
          <BsFillTrash3Fill></BsFillTrash3Fill>
        </button>
      </td>
    </tr>
  );
};

export default TableUsers;
