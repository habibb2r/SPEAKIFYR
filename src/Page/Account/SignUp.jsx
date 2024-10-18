import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
const img_hosting = import.meta.env.VITE_img_host;
const img_upload_preset = import.meta.env.VITE_preset;
const img_cloud_name = import.meta.env.VITE_cloud;



// Validaton Work Remaining, must do it at the end

const SignUp = () => {
    const [axiosSecure] = useAxiosSecure();
    const {createUser, updateUser} = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const hosting_url = img_hosting;
    
    const onSubmit = async(data) => {
        const imgdata = new FormData();
    const image = data.image[0];
    imgdata.append("file", image);
    imgdata.append("upload_preset", img_upload_preset);
    imgdata.append("cloud_name", img_cloud_name);


    try {
        if (image === null) {
          return Swal.fire({
            position: "tCenter",
            icon: "error",
            title: "Please, Upload an Image",
            showConfirmButton: false,
            timer: 1500,
          });
        }
  
        const res = await fetch(hosting_url, {
          method: "POST",
          body: imgdata,
        });
  
        const cloudData = await res.json();
        // console.log(cloudData);
        const imgURL = cloudData.url;
        if (imgURL) {
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
                                  Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Account Created Successfully",
                                    showConfirmButton: false,
                                    timer: 1500,
                                  });
                                  navigate('/');
                            }
                        })
                    })
                })
                .catch(error => console.log(error));
                }

      } catch (error) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `{error.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(error);
      }   
                    
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