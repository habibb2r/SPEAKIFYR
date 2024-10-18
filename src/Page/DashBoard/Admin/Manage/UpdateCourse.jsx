import useClasses from "../../../../Hooks/useClasses";


const UpdateCourse = () => {
    const [classes, loading, refetch] = useClasses();
    console.log(classes)
    return (
        <div>
            <h1 className="text-3xl text-center font-bold">Update Courses</h1>
            <div className="grid grid-cols-2 gap-2">
                {
                    classes.map(item => <div key={item._id}>
                        <div className="flex justify-between items-start gap-5" >
                        <div className="flex justify-start items-start gap-3">
                            <img className="h-[150px] w-[170px] rounded-md shadow-md shadow-accent" src={item.image} alt="" />
                            <div>
                                <h1 className="font-semibold text-xl">{item.name}</h1>
                                <h1>"{item.course_tag}"</h1>
                                <h1>Instructor: <span className="font-semibold">{item.instructor}</span></h1>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start items-start gap-2">
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
                    <div>
                        <button></button>
                    </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UpdateCourse;