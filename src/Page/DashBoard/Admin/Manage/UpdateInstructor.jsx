import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading';

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
            <div>
                {
                    instructors.map(item => <div key={item._id}>
                        <div className='flex justify-start items-center gap-4'>
                            <img className='h-[100px] rounded-2xl shadow-md' src={item.image} alt="" />
                            <div>
                                <h1 className='font-semibold text-xl'>{item.name}</h1>
                                <h1 className='font-semibold'>{item.email}</h1>
                            </div>
                        </div>
                        <div>
                            <h1>Course : {item.courseID === 'not-assigned' ? 'Not Assigned' : 'Assigned'}</h1>
                            
                            {
                                item.courseID === 'not-assigned' ? '' : <div>
                                    <div className="divider divider-success">Success</div>
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