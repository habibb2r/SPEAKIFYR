import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {BsTrashFill} from 'react-icons/bs'
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useMyClass from "../../../Hooks/useMyClass";


const MyTable = ({item, index}) => {
    const [axiosSecure] = useAxiosSecure();
    const [myAdd, refetch, ] = useMyClass();
    const {_id, name, price, image, classId} = item; 
    refetch();

    const  handleDelete = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                axiosSecure.delete(`/addClass/${id}?classId=${classId}`)
                .then(data =>{
                    console.log(data);
                    refetch();
                })

              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }


    return (
        <tr>
        <td>
        <label>
            <p>{index+1}</p>
        </label>
        </td>
        <td>
        <div className="flex items-center space-x-3">
            <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
            </div>
            
        </div>
        </td>
        <td>
        <p className="font-semibold">{name}</p>
        </td>
        <td className="">{price}$</td>
        <td>
        <Link to='/dashboard/payment'><button className="btn btn-warning">Pay</button></Link>
        </td>
        <td>
        <button onClick={()=>handleDelete(_id)} className="btn btn-error text-white text-xl"><BsTrashFill/></button>
        </td>
    </tr>
    );
};

export default MyTable;