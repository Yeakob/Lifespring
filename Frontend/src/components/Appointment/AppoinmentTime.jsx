import { Progress } from '@material-tailwind/react';
import React, { useState,useContext } from 'react';
//import Calendar from 'react-calendar'
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../../context/AuthContext';
import './Appoinment.css'


const AppoinmentTime = () => {
    const [date, setDate] = useState(new Date());
    const { order , setOrder } = useContext(AuthContext);
    const { order2 , setOrder2 } = useContext(AuthContext);
    const [time ,settime ]= useState('')
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
                    <h5 className='text-slate-400 font-bold'>3.Details</h5>
                    <Progress className='bg-slate-300 h-4' value={0} color="green" />
                </div>
                <div className='w-60'>
                    <h5 className='text-slate-400 font-bold'>3.Done</h5>
                    <Progress className='bg-slate-300 h-4 rounded-r-lg' value={0} color="green" />
                </div>
            </div>
            <div className=' min-h-full mx-10 md:mx-52 mt-10 lg:ml-40 '>
                <h5 className='text-slate-400 font-bold'>Below you can find a list of available time slots for Session by Naima Zannat.
                    Click on a time slot to proceed with booking</h5>
                <br />
                <br />
                <h5 className='text-slate-400 font-bold'>
                    By default, Dhaka's time is being shown. If you are in another time zone, you may select yours and the time-slots will be shown according to your selection.
                </h5>
            </div>

            <div className='min-h-full mx-10 md:mx-52 mt-10  mb-5  gap-3 justify-center lg:mx-80 '>

                <div className='w-60'>
                    <label for="countries" className="font-bold block mb-2 text-sm  dark:text-white" style={{ color: "#11b24c" }}>Branch</label>
                    <select id="countries" className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5">
                        <option selected>Select branch</option>
                        <option value="Banani">Banani Branch</option>
                        <option value="Panthapath">Panthapath Branch</option>
                        <option value="Online">Online</option>

                    </select>
                </div>

                <div className='flex'>
                    {/* <h1 className='text-center'>React Calendar</h1> */}
                    <div className='calendar-container rounded ' >
                     {/*<Calendar onChange={setDate} value={date} />*/}
                    </div>
                    <div className='flex flex-col'>

                        <button className='ml-10 rounded p-5 mb-2' style={{ backgroundColor: "#11b24c" }}>
                            {/* <span className='bold'>Selected Date:</span> */}
                            {/* {' '} */}
                            {date.toDateString()}

                        </button>
                        <button onClick={(e)=>{settime(e.target.value)}} value='3:00 pm' className='ml-10 rounded p-5 border mb-2'>3:00 pm</button>
                        <button onClick={(e)=>{settime(e.target.value)}} value='4:00 pm' className='ml-10 rounded p-5 border mb-2'>4:00 pm</button>
                        <button onClick={(e)=>{settime(e.target.value)}} value='5:00 pm' className='ml-10 rounded p-5 border mb-2'>5:00 pm</button>
                    </div>

                </div>


            </div>

            <hr className="my-8 h-px bg-slate-300 border-0 dark:bg-slate-700 mx-10 md:mx-52 mt-10 mb-5 lg:mx-80 lg:px-40 " />


            <div className='flex gap-4 justify-center'>
                <Link to={"/appoinment"}>
                    <button className=" font-bold px-5 py-2  mb-10 rounded text-white" style={{ backgroundColor: "#11b24c" }}>Back</button>
                </Link>
                <Link to={"/appoinmentdetails"}>
                    <button onClick={()=>{setOrder2({time: time , ddate : date , amount : '4500'})}}  className=" font-bold px-5 py-2  mb-10 rounded text-white" style={{ backgroundColor: "#11b24c" }}>Next</button>
                </Link>
            </div>
            <h3 className='font-bold text-gray-600'>For urgent consultation please contact: <br />
                +8809638 505 505 | +8801763 438 148 <br />
                Time: 9:00 AM – 10:00 PM</h3>
            <Footer />
        </div>
    );
};

export default AppoinmentTime;