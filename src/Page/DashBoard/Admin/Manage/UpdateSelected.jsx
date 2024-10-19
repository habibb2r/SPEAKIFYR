import React from 'react';
import useGetNewInstructor from '../AdminHooks/useGetNewInstructor';
import { useForm } from 'react-hook-form';
import { UNSAFE_LocationContext, useLocation } from 'react-router-dom';

const UpdateSelected = () => {
    const location = useLocation()
    //UNSAFE_LocationContext
    const [newInstructor, , loadInstructor] = useGetNewInstructor()
 const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  const item = location?.state
  console.log(item)
  const onSubmit = async(data) => { console.log(data)}
    return (
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
                    <div className="flex flex-col justify-start gap-2">
                    {
                        newInstructor.map(item => <div className="flex items-center gap-2" key={item.email}>
                            <input  className="radio radio-info" type="radio" id={`${item.email}`} name={`${item.email}`} value={`${item.email}`} {...register("instructor_email", {})}/>
                            <input className="hidden"  value={`${item.name}`} {...register("instructor", {})}/>
                            <label>{item.name}</label>
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
            {...register("details", {})}
          />
            </label>
            </div>
          

          <button className={`btn-accent px-3 py-2 rounded-lg font-semibold ${newInstructor.length == 0 ? 'btn-disabled': ''}`} type="submit">Add Course</button>
        </form>
        </div>
    );
};

export default UpdateSelected;