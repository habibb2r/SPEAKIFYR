import { Link, useLocation, useNavigate} from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";



const Login = () => {
   
     const {signin, signInGoogle} = useContext(AuthContext);
     const [axiosSecure] = useAxiosSecure();
     let navigate = useNavigate();
     let location = useLocation();
     let from = location.state?.from?.pathname || "/";

    const handleGoogle = () =>{
        signInGoogle()
        .then((result)=>{
            const user = result.user;
            
            const saveUser = {name: user.displayName, photo: user.photoURL, email: user.email, role: 'student'}
            axiosSecure.post('/userList', saveUser)
                        .then(data => {
                            if(data.data){
                                  navigate(from, { replace: true });
                            }
                        })
            
        })
        .catch((error) => console.error(error));
    }

    const handlelogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email, password};
        console.log(user);

        signin(email, password)
        .then(result => {
            form.reset();
            const user= result.user;
            console.log(user);
            navigate(from, { replace: true });
        })
        .catch(error => console.log(error));
    }

    return (
        <div className="text-center my-10">
            <Helmet>
                <title>SPEAKIFYR | Log In</title>
            </Helmet>
        <h1 className=" text-3xl font-thin my-5">Log In Here</h1>
        
        <form onSubmit={handlelogin}>
            <div className="flex justify-center flex-col gap-5 items-center bg-[#3d486b] sm:mx-[30%] mx-[2%] rounded-2xl py-4 text-white">
            <div className="form-control text-center">
                <label className="label">
                    <span className="label-text text-white font-semibold">Your Email</span>
                </label>
                <label className="input-group">
                    <span className="text-black">Email</span>
                    <input  type="text" name='email' placeholder="Enter Email" className="input input-bordered text-black" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-white font-semibold">Your Password</span>
                </label>
                <label className="input-group">
                    <span className="text-black">Pass</span>
                    <input type="password" name="password" placeholder="Enter Password" className="input input-bordered text-black" />
                </label>
            </div>
            <div className="form-control">
            <input className="btn btn-block bg-[#7b94af] text-white animated-border" type="submit" value="Login" />
            </div>
            <p>Dont Have any Account? <Link to='/signup' className="text-[#c1c1c2] font-semibold">Register Here</Link></p>
        </div>
        </form>
        <div>
            <progress className="progress w-56 text-[#9b17dd]"></progress>
        </div>

        <div className="m-5 ">
        <button onClick={handleGoogle} className="btn btn-circle bg-white text-[#9b17dd] hover:bg-[#DCD1E1] animated-border">
            <FaGoogle></FaGoogle>
        </button>
        
        </div>
        </div>
        
    );
};

export default Login;