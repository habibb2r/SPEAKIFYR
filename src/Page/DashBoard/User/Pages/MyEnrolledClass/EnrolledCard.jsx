const EnrolledCard = ({ enrolledClass }) => {
  const {
    camp_end,
    camp_start,
    classData,
    date,
    time,
    room,
    entry_code,
    price,
    transactionId,
  } = enrolledClass;

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-3 bg-yellow-600 rounded-md py-3 px-2 bg-opacity-30 shadow-md shadow-accent ">
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-start gap-4">
        <img
          className="h-[200px] rounded-sm shadow-inner shadow-accent"
          src={classData.image}
          alt=""
        />
        <div className="flex flex-col justify-start items-start gap-3">
          <h1 className="text-2xl font-bold">{classData?.name}</h1>
          <p className="font-semibold">Instructor: {classData.instructor}</p>
          <p className="">Starting date: <span className="font-semibold">{camp_start}</span></p>
          <p className="">Will end : <span className="font-semibold">{camp_end}</span></p>
          <p className="">Price : <span className="font-semibold">{price} tk</span></p>
        </div>
      </div>
      <div className="flex flex-col justify-start md:justify-center items-center md:items-start gap-3 px-3">
            <p className="text-xl">Entry Code : <span className="font-bold">{entry_code}</span></p>
            <p>Class Room : <span className="font-semibold">{room}</span></p>
            <div className="flex flex-col justify-start items-start gap-3 mt-3">
                <p className="text-xl font-bold underline">Enroll Information</p>
                <p>Enroll date & time : <span className="font-semibold">{date} {" "}{time}</span></p>
                <p>TrxID: <span className="font-semibold">{transactionId}</span></p>
            </div>
      </div>
    </div>
  );
};

export default EnrolledCard;
