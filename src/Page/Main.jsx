import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer";
import NavBar from "./Shared/NavBar";


const Main = () => {
    return (
        <div className="bg-[#9bbad12f] ">
            <NavBar></NavBar>
            <div className="pt-[18%] md:pt-0">
            <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Main;