import Loading from "../../../Shared/Loading";
import useGetUser from "../AdminHooks/useGetUser";
import addasins from '../../../../assets/icons/001-add-user.png'
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddInstructor = () => {
    const [userList, refetch, loadUsers] = useGetUser();
    const [axiosSecure] = useAxiosSecure()
    if(loadUsers){
        return <Loading></Loading>
    }
    const filteruser = userList.filter(user => user.role === 'student')

    const handleMakeInstructor = (email) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make instructor!",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Instructor!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/makeInstructor?email=${email}`)
                .then(res=>{
                    if(res.data.status){
                        refetch()                       
                        Swal.fire({
                            title: "Inserted",
                            text: "Succesfully added as Instructor",
                            icon: "success"
                        });
                    }
                })
            }
          });
    }
    return (
        <div> 
            <h1 className="font-bold text-3xl text-center py-3">Add Instructor</h1>
            <div className="grid grid-cols-2 gap-3 px-5 py-3">
                {filteruser.map(user=> <div className="bg-yellow-600 bg-opacity-25 px-5 py-3 flex justify-between items-center gap-5 rounded-sm shadow-md" key={user._id}>
                    <div className="flex justify-center items-center gap-3">
                        <img className="h-[80px] w-[80px] rounded-2xl shadow-md shadow-primary" src={user.photo} alt="" />
                        <div>
                            <h1 className="font-semibold">{user.name}</h1>
                            <h1 className="font-semibold">{user.email}</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <p className={`font-serif py-2 px-3 bg-accent rounded-2xl`}>user</p>
                        <img onClick={()=>handleMakeInstructor(user.email)} className="h-[35px]" src={addasins} alt="" />
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default AddInstructor;