import { Helmet } from "react-helmet";
import useClasses from "../../Hooks/useClasses";
import Card from "./Card";



const Classes = () => {
    const [classes, , refetch] = useClasses();
    
    return (
        <div>
            <Helmet>
                <title>SPEAKIFYR | Classes</title>
            </Helmet>
            <div className="flex flex-col gap-2 justify-center items-center text-center my-4">
                    <p className="font-thin">In This Summer Campaign </p>
                    <h1 className="font-bold text-3xl">Our Classes are..</h1>
                    <div className="divider"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5 my-10">
            {
                        classes.map(item => <Card 
                        key={item._id}
                        item={item}
                        refetch={refetch}
                        ></Card>)
            }
            </div>
            
        </div>
    );
};

export default Classes;