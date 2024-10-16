import useGetUser from "../AdminHooks/useGetUser";

const AddInstructor = () => {
    const [userList, refetch, loadUsers] = useGetUser();
    const filteruser = userList.filter(user => user.role === 'student')
    return (
        <div> 
            <h1 className="font-bold text-3xl text-center py-3">Add Instructor</h1>
            <div className="grid grid-cols-1 gap-3 px-5 py-3">
                {filteruser.map(user=> <div className="bg-yellow-600 bg-opacity-25 px-3 py-3 flex justify-between items-center gap-5" key={user._id}>
                    <div className="flex justify-center items-center gap-3">
                        <img className="h-[80px] w-[80px] rounded-2xl shadow-md shadow-primary" src={user.photo} alt="" />
                        <div>
                            <h1 className="font-semibold">{user.name}</h1>
                            <h1 className="font-semibold">{user.email}</h1>
                        </div>
                    </div>
                    <div>
                        <p className={`font-serif py-2 px-3 bg-accent rounded-2xl`}>{user.role}</p>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default AddInstructor;