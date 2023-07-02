import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer";
import NavBar from "./Shared/NavBar";


const Main = () => {
    return (
        <div className="bg-[#9bbad12f] ">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;