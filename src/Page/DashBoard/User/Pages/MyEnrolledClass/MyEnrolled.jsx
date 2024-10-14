import Loading from "../../../../Shared/Loading";
import useMyEnrolled from "../../Hooks/useMyEnrolled";
import EnrolledCard from "./EnrolledCard";


const MyEnrolled = () => {
    const [myEnrolled, , loadEnrolledClass] = useMyEnrolled()
    if(loadEnrolledClass){
        return <Loading></Loading>
    }
    console.log(myEnrolled)
    return (
       <div>
         <h1 className="text-3xl font-bold text-center py-3">My Enrolled Class</h1>
         {
            myEnrolled.length>0 ? <div className="grid grid-cols-1">
                {myEnrolled.map((enrolledClass, index)=> <EnrolledCard key={index} enrolledClass={enrolledClass}></EnrolledCard>)}
            </div> :  <div className="">
            <div role="alert" className="alert alert-warning">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>No Enrollment Yet!</span>
            </div>
        </div>
         }
       </div>
    );
};

export default MyEnrolled;