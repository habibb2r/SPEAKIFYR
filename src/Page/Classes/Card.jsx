import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import useMyClass from "../../Hooks/useMyClass";
import useUser from "../../Hooks/useUser";
import Loading from "../Shared/Loading";


const Card = ({item, refetch}) => {
    // console.log(item)
    const {user} = useAuth();
    let navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();
    const[, refetchMyClass, ] = useMyClass()
    const[isUser, isUserLoading] = useUser()

    const handleAddMyClass = id =>{
        
            if(user){
                isUserLoading ? <Loading></Loading> : ''
                if(isUser){
                    if(user.email){
                        const addClass = {classId: id, name: item.name, email: user.email, price: item.price, pay: 'pending', image: item.image}
                        console.log(addClass)
                        axiosSecure.post('/addClass', addClass)
                        .then(data =>{
                            console.log(data)
                            if(data.data.status){
                                refetch()
                                refetchMyClass()
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Added to Cart, Check Your Dashboard',
                                    showConfirmButton: true,
                    
                                  })
                            }else if(data.data.message){
                                Swal.fire({
                                    position: 'center',
                                    icon: 'error',
                                    title: `${data.data.message}`,
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                            }
                        })
                    }
                }else{
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: `Only Student Can Join`,
                        showConfirmButton: true,
                        
                      })
                }
            
           
                
            }else{
                navigate('/login')
            }
       
        
    }
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
            <figure><img className="h-[250px]" src={item.image} alt="Class" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p className="font-semibold my-2">Instructor : {item.instructor}</p>
                <div className="flex justify-between font-semibold my-2">
                    <p>Price : <span className="badge badge-warning">{item.price}</span>$</p>
                    <p>Sit Left : {item.sit}</p>
                </div>
                <div className="py-2">
                    <p className="font-semibold">Starting From : <span className="badge badge-success font-semibold">{item.camp_start}</span></p>
                </div>
                <div className="card-actions justify-center">
                <button onClick={()=> handleAddMyClass(item._id)} className="btn btn-primary">Join Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;