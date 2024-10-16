import { useForm } from "react-hook-form";

const AddCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Add a Course</h1>
      <div>
        <form className="flex flex-col justify-center items-center gap-3" onSubmit={handleSubmit(onSubmit)}>
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
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-semibold">
                Details
              </span>
            </div>
            
            <textarea
            className="input input-bordered input-primary w-full max-w-xs" placeholder="Details about instructor"
            {...register("instructor_details", {})}
          />
            </label>
          

          <button className="btn-accent px-3 py-2 rounded-lg font-semibold" type="submit">Add Course</button>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
