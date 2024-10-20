import React from 'react';
import useGetInstructorStats from '../InstructorHooks/useGetInstructorStats';
import Loading from '../../../Shared/Loading';

const InstrauctorHome = () => {
    const [instructorStats, loadInstructorStats] = useGetInstructorStats()
    console.log(instructorStats)
    if(loadInstructorStats){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='flex justify-center items-center gap-3 py-3'>
                <img className='h-[80px] w-[80px] rounded-full border-2 border-green-600 ' src={instructorStats.photo} alt="" />
                <div>
                    <h1 className='font-semibold text-xl'>{instructorStats.name}</h1>
                    <h1 className='font-semibold'>{instructorStats.email}</h1>
                </div>
            </div>
            <div className='bg-accent bg-opacity-10 px-5 py-5'>
                <div className=''>
                <h1 className='font-semibold text-xl pb-3 text-center'>My Course</h1>
                <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
                <div className='flex flex-col md:flex-row justify-start items-start gap-3'>
                    <img className='h-[150px] rounded-md shadow-md shadow-green-500' src={instructorStats.image} alt="" />
                    <div className='flex flex-col justify-start items-start gap-2'>
                    <h1 className='font-semibold text-xl'>{instructorStats.course}</h1>
                    <p>Sit Left: <span className='font-semibold'>{instructorStats.sit}</span></p>
                    <p>Duration: <span className='font-semibold'>{instructorStats.camp_start} to {instructorStats.camp_end}</span></p>
                    <p>Price: <span className='font-semibold'>{instructorStats.price} tk</span></p>
                    <p>Room No: <span className='font-semibold'>{instructorStats.assign_room}</span></p>
                    </div>
                    
                </div>

                <div className='flex justify-center items-center gap-3'>
                    <div className='flex flex-col justify-center items-center gap-2 bg-secondary bg-opacity-10 px-3 py-3 rounded-md shadow-md shadow-accent'>
                        <h1 className='font-semibold text-xl'>Total Enrolled</h1>
                        <p className='font-bold text-xl text-primary'>{instructorStats.totalEnrolled}</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 bg-secondary bg-opacity-10 px-3 py-3 rounded-md shadow-md shadow-accent'>
                        <h1 className='font-semibold text-xl'>Total Earned</h1>
                        <p className='font-bold text-xl text-primary'>{instructorStats.earned} tk</p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default InstrauctorHome;