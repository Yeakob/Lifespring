import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import '../static/css/Homepage/hServices.css'

const HealthServices = () => {
    return (
        <div>
            <hr className='my-10' />

            <div className='mx-10 lg:mx-28 mb-20 hServices'>
                <div className="grid grid-cols-2 lg:h-16">
                    <div className="hpTitle text-left lg:text-2xl my-3 font-sans">
                        <h2>Health <b className='text-green-600'>Blog</b> </h2>
                    </div>
                    <div className="hpViewAllBtn text-right lg:my-3 font-sans">
                        <button type="button" className="m-2 h-8 w-24 text-sm font-medium text-green-500 hover:bg-green-600 focus:outline-none bg-white rounded-md border border-green-200 hover:text-white">View All</button>
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 gap-5 justify-center items-center'>
                    <div className='rounded-md shadow-lg shadow-gray-400'>
                        <img className='w-full' src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2022/01/a.png" alt="" />
                        <h2 className='text-2xl font-semibold p-5'>Physcological Counseling</h2>
                        <button style={{ borderTop: "1px solid gray" }} className="hbtn border-x-2 mt-10 text-md font-bold text-[#99cc33] hover:text-white duration-500 p-5 w-full flex justify-center items-center">Learn More<span className='ml-2 mt-1'><FaArrowRight /></span> </button>
                    </div>
                    <div className='rounded-md shadow-lg shadow-gray-400'>
                        <img className='w-full' src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2022/01/b.png" alt="" />
                        <h2 className='text-2xl font-semibold p-5'>Corporate Services</h2>
                        <button style={{ borderTop: "1px solid gray" }} className="hbtn border-x-2 mt-10 text-md font-bold text-[#99cc33] hover:text-white duration-500 p-5 w-full flex justify-center items-center">Learn More<span className='ml-2 mt-1'><FaArrowRight /></span> </button>
                    </div>
                    <div className='rounded-md shadow-lg shadow-gray-400'>
                        <img className='w-full' src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2022/01/c.png" alt="" />
                        <h2 className='text-2xl font-semibold p-5'>Child development</h2>
                        <button style={{ borderTop: "1px solid gray" }} className="hbtn border-x-2 mt-10 text-md font-bold text-[#99cc33] hover:text-white duration-500 p-5 w-full flex justify-center items-center">Learn More<span className='ml-2 mt-1'><FaArrowRight /></span> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthServices;