import { useForm } from "react-hook-form";
import useGetNewInstructor from "../AdminHooks/useGetNewInstructor";
import Loading from "../../../Shared/Loading";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
const img_hosting = import.meta.env.VITE_img_host;
const img_upload_preset = import.meta.env.VITE_preset;
const img_cloud_name = import.meta.env.VITE_cloud;

const AddCourse = () => {
    const [newInstructor, refetch, loadInstructor] = useGetNewInstructor()
    const [axiosSecure] = useAxiosSecure()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const hosting_url = img_hosting;

  if(loadInstructor){
    return <Loading></Loading>
}
  const onSubmit = async(data) => {
    console.log(data)
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
            const updateData = {
                ...data, 
                image: imgURL
            }
            axiosSecure.post("/addCourse", updateData).then((res) => {
            if (res.data.status) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Added Courses Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something went wrong",
            showConfirmButton: false,
            timer: 1500,
          });
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
  
    console.log(data)

};
  console.log(errors);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Add a Course</h1>
      <div>
        <form className="flex flex-col justify-center items-center gap-3 pb-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap justify-center items-center gap-5">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">
                  Name
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered input-primary w-full max-w-xs"
                placeholder="Course Name.."
                {...register("name", {})}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">
                  Image
                </span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered file-input-accent w-full max-w-xs"
                {...register("image", {})}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">
                  Sit
                </span>
              </div>
              <input
                type="number"
                className="input input-bordered input-primary w-full max-w-xs"
                placeholder="Available Sit"
                {...register("sit", { max: 20, min: 0 })}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">
                  Price
                </span>
              </div>
              <input
                type="number"
                className="input input-bordered input-primary w-full max-w-xs"
                placeholder="Course Price"
                {...register("price", {})}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">
                  Room
                </span>
              </div>
              <input
                type="number"
                className="input input-bordered input-primary w-full max-w-xs"
                placeholder="Room No "
                {...register("assign_room", {})}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">
                  Course Start Date
                </span>
              </div>
              <input
                type="date"
                className="border-2 rounded px-1 py-1 border-primary"
                placeholder="camp_start"
                {...register("camp_start", {})}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text font-semibold">
                  Course End Date
                </span>
              </div>
              <input
                type="date"
                className="border-2 rounded px-1 py-1 border-primary"
                placeholder="camp_end"
                {...register("camp_end", {})}
              />
            </label>
            <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">
                Tag
              </span>
            </div>
            
            <input
              type="text"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Use 3 letter of Tag ex: EXM"
              {...register("course_tag", {})}
            />
            </label>
          </div>
          <div className="divider divider-success"></div>
            <div className="grid grid-cols-2 gap-2 pb-3">
                <div className="px-3 py-2">
                    <p className="font-semibold text-center pb-3 text-primary">Select a new Instructor</p>
                    {newInstructor.length == 0 ? <p className="text-center text-error">Must Need a Instructor <br /> to Add Course</p>: ''}
                    {
                        newInstructor.map(item => <div className="flex items-center gap-2" key={item.email}>
                            <input  className="checkbox checkbox-info" type="checkbox" id={`${item.email}`} name={`${item.email}`} value={`${item.email}`} {...register("instructor_email", {})}/>
                            <input className="hidden"  value={`${item.name}`} {...register("instructor", {})}/>
                            <label>{item.name}</label>
                      </div>)
                    }
                
                </div>
            <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">
                Details
              </span>
            </div>
            
            <textarea
            className="input input-bordered input-primary w-[250px] max-w-xs" placeholder="Details about instructor"
            {...register("details", {})}
          />
            </label>
            </div>
          

          <button className={`btn-accent px-3 py-2 rounded-lg font-semibold ${newInstructor.length == 0 ? 'btn-disabled': ''}`} type="submit">Add Course</button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
