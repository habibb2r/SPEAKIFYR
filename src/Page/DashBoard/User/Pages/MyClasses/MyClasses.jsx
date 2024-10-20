
import useMyClass from "../../../../../Hooks/useMyClass";
import MyTable from "./MyTable";
import Loading from "../../../../Shared/Loading";

const MyClasses = () => {
  const [myadd, refetchMyClass, isLoading] = useMyClass();
  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <div className="flex-col justify-center items-center">
        <div className="font-semibold uppercase flex justify-evenly align-middle items-center my-6">
          <div className="md:w-5/12 mx-auto text-center my-4">
            <h3 className="text-xl ">Sellected Courses for Enroll : {myadd.length}</h3>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Class Image</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Payment</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {myadd.length == 0 ? <tr className="text-xl text-error bg-accent bg-opacity-10">No Course Selected... Please Select a course first</tr>: ''}
              {/* row 1 */}
              {myadd.map((item, index) => (
                <MyTable
                  item={item}
                  refetchMyClass={refetchMyClass}
                  index={index}
                  key={item._id}
                ></MyTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
