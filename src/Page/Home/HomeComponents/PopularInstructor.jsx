import Marquee from "react-fast-marquee";
import useInstructors from "../../../Hooks/useInstructors";
import CardOfPopularIns from "./CardOfPopularIns";


const PopularInstructor = () => {
    const [instructors] = useInstructors();
    return (
        <div className="my-10">
            <h1 className="font-thin text-3xl text-center">Here is Our Popular Instructors</h1>
            <div className="divider w-[50%] mx-auto"></div>
            <Marquee>
            
            {
                        instructors.map(item => <CardOfPopularIns 
                        key={item._id}
                        item={item}
                        ></CardOfPopularIns>)
            }
            
            </Marquee>
        </div>
    );
};

export default PopularInstructor;