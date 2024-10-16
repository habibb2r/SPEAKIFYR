import { Link } from "react-router-dom";
import ico1 from '../../../../assets/icons/001-add-user.png'
import ico2 from '../../../../assets/icons/002-add.png'
import ico3 from '../../../../assets/icons/003-loop.png'
import ico4 from '../../../../assets/icons/004-update.png'

const Manage = () => {
    return (
        <div>
            <h1 className="font-bold text-center text-3xl py-3">Manage All</h1>
            <div className="flex flex-wrap justify-center items-center gap-5 py-4">
                <div className="flex justify-center items-center px-3 py-2 bg-green-500 bg-opacity-30 font-semibold rounded gap-2">
                    <img className="h-[25px]" src={ico1} alt="" />
                    <Link>Add Instructor</Link>
                </div>
                <div className="flex justify-center items-center px-3 py-2 bg-green-500 bg-opacity-30 font-semibold rounded gap-2">
                    <img className="h-[25px]" src={ico2} alt="" />
                    <Link>Add a Course</Link>
                </div>
                <div className="flex justify-center items-center px-3 py-2 bg-green-500 bg-opacity-30 font-semibold rounded gap-2">
                    <img className="h-[25px]" src={ico3} alt="" />
                    <Link>Update Instructor</Link>
                </div>
                <div className="flex justify-center items-center px-3 py-2 bg-green-500 bg-opacity-30 font-semibold rounded gap-2">
                    <img className="h-[25px]" src={ico4} alt="" />
                    <Link>Update Course</Link>
                </div>
            </div>
        </div>
    );
};

export default Manage;