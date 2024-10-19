import React from 'react';
import useGetNewInstructor from '../AdminHooks/useGetNewInstructor';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import useClasses from '../../../../Hooks/useClasses';
import Loading from '../../../Shared/Loading';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const UpdateSelected = () => {
    const location = useLocation()
    const navigate = useNavigate()
    //UNSAFE_LocationContext
    const [, , refetch] = useClasses()
    const [newInstructor, refetchNewInstructor, loadInstructor] = useGetNewInstructor()
    const [axiosSecure] = useAxiosSecure();
 const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  if(loadInstructor){
    return <Loading></Loading>
  }
  const item = location?.state
  
  console.log(newInstructor)

  const onSubmit = async(data) => { 
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
            console.log(data)
          axiosSecure.patch(`/updateClass/${item._id}`, data)
          .then(res =>{
            console.log(res.data)
            if(res.data.status){
                refetch()
                refetchNewInstructor()
                reset()
                Swal.fire({
                    title: "Updated!!!",
                    text: "Your data is updated.",
                    icon: "success"
                  });
                  navigate('/dashboard/updateCourse')


            }
          })
         
        }
      });
    
  }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center py-3'>Update Course Data</h1>
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
                defaultValue={item.name}
                className="input input-bordered input-primary w-full max-w-xs"
                placeholder="Course Name.."
                {...register("name", {})}
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
                defaultValue={item.sit}
                className="input input-bordered input-primary w-full max-w-xs font-semibold text-primary"
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
                defaultValue={item.price}
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
                defaultValue={item.assign_room}
                {...register("assign_room", {})}
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
              defaultValue={item.course_tag}
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder=" ex: EXM"
              
              {...register("course_tag", {})}
            />
            </label>
          </div>
          <div className="divider divider-success"></div>
            <div className={`grid grid-cols-2 gap-2 pb-3 ${item.instructor === 'not-assigned' ? '' : 'hidden'}`}>
                <div className="px-3 py-2">
                    <p className="font-semibold text-center pb-3 text-primary">Select a new Instructor</p>
                    {newInstructor.length == 0 ? <p className="text-center text-error">Must Need a Instructor <br /> to Add Course</p>: ''}
                    <div className="flex flex-col justify-start gap-2">
                    {
                        newInstructor.map(instItem => <div className="flex items-center gap-2" key={instItem.email}>
                            <input  className="radio radio-info" type="radio" id={`${instItem.email}`} name={`${instItem.email}`} value={`${item.instructor === 'not-assigned' ? `${instItem.email}` : null}`} {...register(`${item.instructor === 'not-assigned' ? `inst_email` : null}`, {})}/>
                            <input className="hidden"  value={`${item.instructor === 'not-assigned' ? `${instItem.name}` : `${item.instructor}`}`} {...register("instructor", {})}/>
                            <label className='uppercase'>{instItem.name}</label>
                      </div>)
                    }
                    </div>
                
                </div>
            <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">
                Details
              </span>
            </div>
            
            <textarea
            className="input input-bordered input-primary w-[250px] max-w-xs" placeholder="Details about instructor"
            {...register(`${item.instructor === 'not-assigned' ? `details` : null}`, {})}
          />
            </label>
            </div>
          

          <button className={`btn-accent px-3 py-2 rounded-lg font-semibold`} type="submit">Add Course</button>
        </form>
        </div>
    );
};

export default UpdateSelected;