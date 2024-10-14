

const EnrolledCard = ({enrolledClass}) => {
    const {camp_end, camp_start, classData, date, time, room, entry_code, price, transactionId} = enrolledClass
    
    return (
        <div className="bg-yellow-600 rounded-md py-3 px-2 bg-opacity-30 shadow-md shadow-accent">
            <div className="flex justify-start items-start gap-4">
                <img className="h-[200px] rounded-sm shadow-inner shadow-accent" src={classData.image} alt="" />
                <div>
                <h1 className="text-xl font-bold">{classData?.name}</h1>
                <p className="font-semibold">Instructor: {classData.instructor}</p>
                </div>
            </div>
        </div>
    );
};

export default EnrolledCard;