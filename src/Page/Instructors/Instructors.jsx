import { Helmet } from "react-helmet";
import useInstructors from "../../Hooks/useInstructors";
import CardIns from "./CardIns";


const Instructors = () => {
    const [instructors] = useInstructors();
    console.log(instructors);
    return (
        <div className="my-10">
            <Helmet>
                <title>SPEAKIFYR | Instructors</title>
            </Helmet>
            <h1 className="text-3xl font-thin text-center">Our Instructors</h1>
            <div className="divider"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5 my-10">
            {
                        instructors.map(item => <CardIns 
                        key={item._id}
                        item={item}
                        ></CardIns>)
            }
            </div>
        </div>
    );
};

export default Instructors;