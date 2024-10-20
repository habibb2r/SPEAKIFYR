import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

import { Link } from "react-router-dom";
import remove from '../../../../assets/icons/delete.png'
import Swal from "sweetalert2";
import Loading from "../../../Shared/Loading";

const CourseUpdate = () => {
    const [axiosSecure] = useAxiosSecure()
    
    const {data: adminCourses, refetch: refetchCourses, isLoading: loadCourses} = useQuery({
        queryKey: ['adminCourses'],
        queryFn: async () => {
            const res = await axiosSecure.get('/adminClasses')
            return res.data
        }
    })

    if(loadCourses){
        return <Loading></Loading>
    }
   const handleRemove = (id, inst) => {
    console.log(inst)
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Remove!"
      }).then((result) => {
        if (result.isConfirmed) {
            if(inst === 'not-assigned'){
                axiosSecure.delete(`/removeCourse/${id}`)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.status){
                        refetchCourses()
                        Swal.fire({
                            title: "Deleted!",
                            text: "Course Removed.",
                            icon: "success"
                          });
                    }
                })

               
            }
            else{
                Swal.fire({
                    title: "Cannot Remove!",
                    text: "Firstly Unassign Instructor In Update Instructor",
                    icon: "error"
                  });
            }
          
        }
      });
       console.log(id)
   }
    
    return (
        <div>
            <h1 className="font-semibold text-3xl py-3 text-center">Courses</h1>
            <div className="grid grid-cols-2 gap-5">
                {adminCourses?.map(item => <div className="rounded-md shadow-md" key={item._id}>
                        <div className="flex justify-between items-start gap-5 px-2 py-2 bg-purple-400 bg-opacity-10" >
                        <div className="flex justify-start items-start gap-3">
                            <img className="h-[150px] w-[170px] rounded-md shadow-md shadow-accent" src={item.image} alt="" />
                            <div>
                                <h1 className="font-semibold text-xl">{item.name}</h1>
                                <h1>"{item.course_tag}"</h1>
                                <h1>Instructor: <span className="font-semibold">{item.instructor}</span></h1>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2 bg-green-300 bg-opacity-30 px-2 py-3 rounded w-[200px]">
                            <h1 className="font-semibold text-primary">Course Info</h1>
                            <div>
                                <p>Price: <span className="font-semibold">{item.price} tk</span></p>
                                <p>Sit Left: <span className="font-semibold">{item.sit}</span></p>
                                <p>Start: <span className="font-semibold">{item.camp_start}</span></p>
                                <p> End: <span className="font-semibold">{item.camp_end}</span></p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="flex justify-end items-end gap-5 bg-yellow-500 py-3 px-3 bg-opacity-30 shadow-inner">

                        <Link to={`/dashboard/updateCourse/${item._id}`} state={item} className="px-2 py-2 btn-secondary rounded font-semibold">Update Course</Link>

                        <button onClick={()=> handleRemove(item._id, item.instructor)}><img className="h-[40px]" src={remove} alt="" /></button>
                                            </div>
                    </div>)}
            </div>
        </div>
    );
};

export default CourseUpdate;