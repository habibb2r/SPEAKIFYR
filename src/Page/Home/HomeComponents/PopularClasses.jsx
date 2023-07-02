import usePopularCl from "../../../Hooks/usePopularCl";
import Card from "../../Classes/Card";


const PopularClasses = () => {
    const [popularcl] = usePopularCl();
    return (
        <div>
            <div className="my-10">
            <h1 className="font-thin text-3xl text-center">Here is Our Popular Classes</h1>
            <h1 className="font-thin text-xl text-center mt-3">With High Price Demand</h1>
            <div className="divider w-[50%] mx-auto"></div>       
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-5 my-10">
           {
                        popularcl.map(item => <Card 
                        key={item._id}
                        item={item}
                        ></Card>)
            }
           </div>        
        </div>
        </div>
    );
};

export default PopularClasses;