import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useGetNewInstructor from "../AdminHooks/useGetNewInstructor";
import { Link } from "react-router-dom";


const CourseUpdate = () => {
    const [axiosSecure] = useAxiosSecure()
    const [newInstructor, refetch, loadInstructor] = useGetNewInstructor()
    const {data: adminCourses, refetch: refetchCourses, isLoading: loadCourses} = useQuery({
        queryKey: ['adminCourses'],
        queryFn: async () => {
            const res = await axiosSecure.get('/adminClasses')
            return res.data
        }
    })

    const handleClass = (id) => {
        console.log(id)
    }
    console.log(adminCourses)
    return (
        <div>
            <h1>Courses</h1>
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
                        <div className="flex flex-col justify-start items-start gap-2 bg-green-300 bg-opacity-30 px-2 py-3 rounded">
                            <h1 className="font-semibold text-primary">Course Info</h1>
                            <div>
                                <p>Price: <span className="font-semibold">{item.price} tk</span></p>
                                <p>Sit Left: <span className="font-semibold">{item.sit}</span></p>
                                <p>Course Start: <span className="font-semibold">{item.camp_start}</span></p>
                                <p>Course End: <span className="font-semibold">{item.camp_end}</span></p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="flex justify-end items-end gap-5 bg-yellow-500 py-3 px-2 bg-opacity-30 shadow-inner">
                        <button className="px-2 py-2 btn-secondary rounded font-semibold">Update Course</button>
                        <button className="px-2 py-2 btn-primary rounded font-semibold" onClick={() => handleClass(item._id)}>Select Course</button>
                        <Link to={`/dashboard/updateCourse/${item._id}`} state={item} className="btn btn-accent">Go</Link>
                                            </div>
                    </div>)}
            </div>
        </div>
    );
};

export default CourseUpdate;