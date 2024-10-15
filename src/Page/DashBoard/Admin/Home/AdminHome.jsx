import React from 'react';
import useAdminStats from '../AdminHooks/useAdminStats';
import Loading from '../../../Shared/Loading';

const AdminHome = () => {
    const [adminStats, loadAdminStats] = useAdminStats()
    if(loadAdminStats){
        return <Loading></Loading>
    }
    console.log(adminStats)
    return (
        <div>
            <h1 className='font-bold text-3xl text-center py-5'>Admin Dashboard</h1>
            <div className='flex items-start gap-5'>
                <div className='flex flex-col justify-start items-start px-5 py-5 w-1/3 bg-green-600 bg-opacity-20 rounded'>
                    <h1 className='font-semibold text-xl pt-2'>Admin Info</h1>
                    <div className="divider divider-success"></div>
                    <img className='h-[150px] rounded-md border-4 border-green-400 shadow-md shadow-accent' src={adminStats.adminInfo.photo} alt="" />
                    <p className='font-semibold pt-2'>{adminStats.adminInfo.name}</p>
                    <p>{adminStats.adminInfo.email}</p>
                </div>
                <div className='bg-yellow-600 bg-opacity-20 px-5 w-2/3  py-4 rounded h-[300px]'>
                    <h1 className='font-semibold text-xl text-center'>Website Statistics</h1>
                    <div className="divider divider-success"></div>
                  <div className='flex flex-wrap justify-center items-center gap-4'>
                  <div className='flex flex-col justify-center items-center gap-2 bg-yellow-400 bg-opacity-30 px-3 py-3 shadow-md shadow-secondary rounded-md'>
                        <h1 className='text-xl font-bold'>Total Classes</h1>
                        <p className='text-xl font-bold font-mono'>{adminStats.totalClasses}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 bg-yellow-400 bg-opacity-30 px-3 py-3 shadow-md shadow-secondary rounded-md'>
                        <h1 className='text-xl font-bold'>Enrolled Students</h1>
                        <p className='text-xl font-bold font-mono'>{adminStats.totalEnrolledClass}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 bg-yellow-400 bg-opacity-30 px-3 py-3 shadow-md shadow-secondary rounded-md'>
                        <h1 className='text-xl font-bold'>Total Users</h1>
                        <p className='text-xl font-bold font-mono'>{adminStats.totalUser}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 bg-yellow-400 bg-opacity-30 px-3 py-3 shadow-md shadow-secondary rounded-md'>
                        <h1 className='text-xl font-bold'>Total Transaction</h1>
                        <p className='text-xl font-bold font-mono'>{adminStats.totalTransaction} tk</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;