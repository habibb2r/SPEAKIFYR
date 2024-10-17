import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading';
import unassign from '../../../../assets/icons/001-remove.png'
import removeInstructor from '../../../../assets/icons/002-user.png'

const UpdateInstructor = () => {
    const [axiosSecure] = useAxiosSecure()
    const{data: instructors, refetch, isLoading} = useQuery({
        queryKey: ['getInstructors'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/getInstructors')
            return res.data
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }
    console.log(instructors)
    return (
        <div>
            <h1 className='text-center text-3xl font-bold py-3'>Update Instructors</h1>
            <div className='grid grid-cols-2 gap-5 py-5'>
                {
                    instructors.map(item => <div className='shadow-md shadow-accent' key={item._id}>
                        <div className='flex justify-between items-center gap-2 '>
                        <div className='flex justify-start items-center gap-4 px-3 py-2'>
                            <img className='h-[100px] rounded-2xl shadow-md' src={item.image} alt="" />
                            <div>
                                <h1 className='font-semibold text-xl'>{item.name}</h1>
                                <h1 className='font-semibold'>{item.email}</h1>
                            </div>
                        </div>
                        <div className='flex flex-col justify-end items-center gap-3 px-2'>
                            <button className='flex justify-center items-center gap-2 btn-accent px-2 py-2 rounded-md font-semibold'><img className='h-[25px]' src={unassign} alt="" /><p>Unassign</p></button>
                            <button className='flex justify-center items-center gap-2 btn-primary px-2 py-2 rounded-md font-semibold'><img className='h-[25px]' src={removeInstructor} alt="" /><p>Remove</p></button>
                        </div>
                        </div>
                        <div className='flex flex-col justify-start items-start gap-4 bg-yellow-500 bg-opacity-20 py-3 px-3'>
                            <h1>Course : <span className='font-semibold'>{item.courseID === 'not-assigned' ? 'Not Assigned' : 'Assigned'}</span></h1>
                            
                            {
                                item.courseID === 'not-assigned' ? '' : <div>
                                    <div className="divider divider-success"></div>
                                    <h1>Course Name : <span  className='font-semibold'>{item.course}</span></h1>
                                    <h1>Course Tag : <span  className='font-semibold'>{item.tag}</span></h1>
                                </div>
                            }
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UpdateInstructor;