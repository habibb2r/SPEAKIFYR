import { Link } from "react-router-dom";
import useMyClass from "../../../Hooks/useMyClass";
import MyTable from "./MyTable";


const MyClasses = () => {
    const [myadd, refetch, isLoading] = useMyClass();
    if(isLoading){
        return <span className="loading loading-spinner text-9xl text-info text-center"></span>
    }
    return (
        <div>
            <div className="flex-col justify-center items-center">
                <div className="font-semibold uppercase flex justify-evenly align-middle items-center my-6">
                        
                        <div className="md:w-5/12 mx-auto text-center my-4">
                        <h3>My Added Classes : {myadd.length}</h3>
                        </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Remove</th>
                            
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                            myadd.map((item , index )=> <MyTable item={item} refetch={refetch} index={index} key={item._id}></MyTable>)
                        }

                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClasses;