import Loading from "../../../Shared/Loading";
import useGetEnrolledData from "../InstructorHooks/useGetEnrolledData";

const ManageCourse = () => {
    const [enrolledData, loadEnrolledData] = useGetEnrolledData()
    if(loadEnrolledData){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-3xl font-bold text-center py-3">Enrolled Students</h1>
            <div>
                <p className="text-center text-xl">{enrolledData.course}</p>
                <div className="grid grid-cols-3 gap-3 py-5">
                    {enrolledData.students.map((student, index) => (
                        <div key={index} className="border-2 border-gray-400 p-3 rounded-md bg-yellow-400 bg-opacity-25">
                            <p>Entry Code: <span className="text-xl font-bold">{student.entry_code}</span></p>
                            <p>Name: <span className="font-semibold">{student.name ? student.name : "Not Found"}</span></p>
                            <p>Email: <span className="font-semibold">{student.email}</span></p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageCourse;