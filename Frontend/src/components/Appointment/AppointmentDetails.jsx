
import { Progress } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../../context/AuthContext';
import { useState } from 'react';

const AppointmentDetails = () => {

    const { order , setOrder } = useContext(AuthContext);
    const { order2 , setOrder2 } = useContext(AuthContext);
    const { order3 , setOrder3 } = useContext(AuthContext);


    const [n ,setn ]= useState("");
    const [p ,setp ]= useState("");
    const [e ,sete ]= useState("");


    console.log(order)
    console.log(order2)
    console.log(order3)
    return (
        <div>
            <Navbar />
            <div className='w-full h-auto bg-slate-100 py-4 text-start px-10 text-md font-mono text-slate-600 font-semibold mb-40'>
                <Link to={"/"}>Home</Link>
                /
                <Link to={"/appoinment"}>Appointment</Link>
            </div>

            <div className='min-h-full mx-10 md:mx-52 mt-10  mb-5 flex gap-1 justify-center'>
                <div className='w-60'>
                    <h5 className=' font-bold' style={{ color: "#11b24c" }}>1.Service </h5>
                    <Progress className=' h-4 rounded-l-lg' style={{ backgroundColor: "#11b24c" }} value={100} color="#11b24c" />

                </div>
                <div className='w-60'>
                    <h5 className='font-bold' style={{ color: "#11b24c" }}>2.Time</h5>
                    <Progress className='h-4' style={{ backgroundColor: "#11b24c" }} value={100} color="#11b24c" />
                </div>
                <div className='w-60'>
                    <h5 className='font-bold' style={{ color: "#11b24c" }}>3.Details</h5>
                    <Progress className='h-4' style={{ backgroundColor: "#11b24c" }} value={100} color="#11b24c" />
                </div>
                <div className='w-60'>
                    <h5 className='text-slate-400 font-bold'>3.Done</h5>
                    <Progress
                        className='bg-slate-300 h-4 rounded-r-lg'
                        value={0} color="green" />
                </div>
            </div>

            <div className=' min-h-full mx-10 md:mx-52 mt-10 lg:ml-40 '>
                <h5 className='text-slate-400 font-bold'>You selected a booking for Session by Mithila Khandaker at 3:00 pm on December 25, 2022. The price for the service is ৳3,000.00</h5>
                <h5 className='text-slate-400 font-bold'>
                    Please provide your details in the form below to proceed with booking.
                </h5>
            </div>
            <div className='flex gap-3 mx-10 min-h-full mt-10  justify-center'>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" style={{ color: "#11b24c" }} for="username">
                        Full name
                    </label>
                    <input onChange={(e)=>{setn(e.target.value)}} className="shadow appearance-none border-transparent bg-slate-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-green-500 " id="username" type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" style={{ color: "#11b24c" }} for="username">
                        Phone
                    </label>
                    <input onChange={(e)=>{setp(e.target.value)}} className="shadow appearance-none border-transparent bg-slate-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" style={{ color: "#11b24c" }} for="username">
                        Email
                    </label>
                    <input onChange={(e)=>{sete(e.target.value)}} className="shadow appearance-none border-transparent bg-slate-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
                </div>

            </div>

            <div>

                <hr className="my-8 h-px bg-slate-300 border-0 dark:bg-slate-700 mx-10 md:mx-52 mt-10 mb-5 lg:mx-80 lg:px-40 " />

                <div className='flex gap-4 justify-center'>
                    <Link to={"/appoinmenttime"}>
                        <button className=" font-bold px-5 py-2  mb-10 rounded text-white" style={{ backgroundColor: "#11b24c" }}>Back</button>
                        
                    </Link>
                   
                    <Link to={"/orders"}>
                        <button onClick={()=>{setOrder3({name : n , phone: p , email: e})}} className=" font-bold px-5 py-2  mb-10 rounded text-white" style={{ backgroundColor: "#11b24c" }}>Next</button>
                    </Link>
                </div>

                <h3 className='font-bold text-gray-600'>For urgent consultation please contact: <br />
                    +8809638 505 505 | +8801763 438 148 <br />
                    Time: 9:00 AM – 10:00 PM</h3>
                <Footer />
            </div>
        </div>
    );
};

export default AppointmentDetails;