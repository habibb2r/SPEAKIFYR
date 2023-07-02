import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../Hooks/useAxiosSecure";



const img_hosting_token = import.meta.env.VITE_IMGAPI;
// Validaton Work Remaining, must do it at the end

const SignUp = () => {
    const [axiosSecure] = useAxiosSecure();
    const {createUser, updateUser} = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imageUpload =>{
            if(imageUpload.success) {
                const imgURL  = imageUpload.data.display_url;
                console.log(imgURL);
                createUser(data.email, data.password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    updateUser( data.name, imgURL)
                    .then(() => {
                        // reset();
                        const saveUser = {name: data.name, photo: imgURL,  email: data.email, role: 'student'}
                        axiosSecure.post('/userList', saveUser)
                        .then(data => {
                            if(data.data.insertedId){
                                  reset();
                                  navigate('/');
                            }
                        })
                    })
                })
                .catch(error => console.log(error));
                }
        })    
                    
    };
                
    return (
        <div>
            <Helmet>
                <title>SPEAKIFYR | Sign Up</title>
            </Helmet>
            <form  onSubmit={handleSubmit(onSubmit)}>
            <div className="hero min-h-screen bg-base-200">
                
                <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
                    <div className="text-center lg:text-left">
                    
                    <img className="rounded-[30%]" src="https://i.ibb.co/DD449GH/ezgif-com-optimize-1.gif" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                    <h1 className="text-3xl font-thin my-5">Sign Up Now</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  {...register("name", { required: true })} placeholder="Enter Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-500">Name is required</span>}
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file" {...register("image", {required: true})}className="file-input file-input-bordered w-full " />
                        
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email", { required: true })} placeholder="Enter Email" className="input input-bordered" />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                        
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true })} placeholder="Enter Password" className="input input-bordered" />
                        {errors.password && <span className="text-red-500">Password is required</span>}
                       
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;