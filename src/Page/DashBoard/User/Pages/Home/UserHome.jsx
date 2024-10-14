import Loading from "../../../../Shared/Loading";
import useGetUserStat from "../../UserHooks/useGetUserStat";

const UserHome = () => {
  const [userStats, loadUserStats] = useGetUserStat();
  if (loadUserStats) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-full h-[100%] text-center">
      <div className="flex flex-col justify-center items-center gap-3 p-5">
        <img
          className="h-[100px] w-[100px] rounded-full border-2 border-green-300"
          src={userStats?.user?.photo}
          alt=""
        />
        <h1 className="font-semibold">{userStats?.user?.name}</h1>
        <h1 className="font-semibold">{userStats?.user?.email}</h1>
        <button className="btn-secondary rounded-md py-2 px-3 font-semibold">
          Update Profile
        </button>

        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="bg-accent bg-opacity-25 px-3 py-4 rounded-md shadow-md shadow-green-500">
            <h2>Selected Courses</h2>
            <h1 className="font-bold text-xl">{userStats?.cartData}</h1>
          </div>
          <div className="bg-accent bg-opacity-25 px-3 py-4 rounded-md shadow-md shadow-green-500">
            <h2>Enrolled Courses</h2>
            <h1 className="font-bold text-xl">{userStats?.totalEnrolled}</h1>
          </div>
          <div className="bg-accent bg-opacity-25 px-3 py-4 rounded-md shadow-md shadow-green-500">
            <h2>Paid</h2>
            <h1 className="font-bold text-xl">{userStats?.totalSpend} tk</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
