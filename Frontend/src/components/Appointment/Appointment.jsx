import { Progress } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useState } from 'react';


const Appointment = () => {

    const { order , setOrder } = useContext(AuthContext);


    const [branch ,setbranch ] = useState("")
    const [deprtment ,setdepartment ] = useState("")
    const [session  ,setsession ] = useState("")
    const [consultant , setconsultant ] = useState("")
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
                    <h5 className='text-slate-400 font-bold'>2.Time</h5>
                    <Progress className='bg-slate-300 h-4' value={0} color="green" />
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

            <div>
                <div className=' min-h-full mx-10 md:mx-52 mt-10 lg:ml-40 '>
                    <h5 className='text-slate-400 font-bold'>Please select service:</h5>
                </div>

                <div className='min-h-full mx-10 md:mx-52 mt-10  mb-5 flex gap-3 justify-center'>

                    <div className='w-60'>
                        <label for="countries" className="font-bold block mb-2 text-sm  dark:text-white" style={{ color: "#11b24c" }}>Branch</label>
                        <select id="countries"  value={branch} onChange={(e)=>{setbranch(e.target.value)}} className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select branch</option>
                            <option value="Banani">Banani Branch</option>
                            <option value="Panthapath">Panthapath Branch</option>
                            <option value="Online">Online</option>

                        </select>
                    </div>

                    <div className='w-60'>
                        <label for="countries" className="font-bold block mb-2 text-sm  dark:text-white" style={{ color: "#11b24c" }}>Department</label>
                        <select id="countries" value={deprtment} onChange={(e)=>{setdepartment(e.target.value)}} className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select category</option>
                            <option value="Banani">Psychiatry Department</option>
                            <option value="Panthapath">Psychologist</option>
                            <option value="Online">Child & Adolescent Psychiatrist</option>
                            <option value="Panthapath">Counselor</option>
                            <option value="Panthapath">Internal Medicine</option>
                            <option value="Panthapath">Pediatric</option>
                            <option value="Panthapath">Dermatology</option>
                            <option value="Panthapath">Sexual Health</option>
                            <option value="Panthapath">Gynecology</option>
                            <option value="Panthapath">ENT</option>

                        </select>
                    </div>

                    <div className='w-60'>
                        <label for="countries" className="font-bold block mb-2 text-sm  dark:text-white" style={{ color: "#11b24c" }}>Session length</label>
                        <select id="countries"  value={session} onChange={(e)=>{setsession(e.target.value)}} className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select a session length</option>
                            <option  value="10 min">Short Session(10 min)</option>
                            <option  value="1 hours">Session (1 hr)</option>
                            <option  value="15 min">Session (15 min)</option>
                            <option  value="10 min">Session (10 min)</option>
                            <option  value="1 hours 15 min">Session ( 1h 15min)</option>


                        </select>
                    </div>

                    <div className='w-60'>
                        <label for="countries" className="font-bold block mb-2 text-sm  dark:text-white" style={{ color: "#11b24c" }}>Consultant</label>
                        <select id="countries" value={consultant} onChange={(e)=>{setconsultant(e.target.value)}} className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Any</option>
                            <option value="Banani">Yahia MD Amin</option>
                            <option value="Panthapath">Dr. Sayedul Ashraf</option>
                            <option value="Online">Dr. Kamrun Nahar</option>
                            <option value="Online">Dr. Aklima Zakaria Zinan</option>
                            <option value="Online">Mr. Md. Mehedi Hasan</option>
                            <option value="Online">Dr. Tumpa Indrani Ghose</option>
                            <option value="Online">Sonia Hasan</option>

                        </select>
                    </div>


                </div>
            </div>
            <hr className="my-8 h-px bg-slate-300 border-0 dark:bg-slate-700 mx-10 md:mx-52 mt-10 mb-5 lg:mx-80 lg:px-40 " />
            
            <Link to={"/appoinmenttime"}>
                <button onClick={()=>{setOrder({branch: branch , department : deprtment , session : session , consultant : consultant})}}  className=" font-bold px-5 py-2 mx-10 mb-10 rounded text-white" style={{ backgroundColor: "#11b24c" }}>Next</button>
            </Link>
            <h3 className='font-bold text-gray-600'>For urgent consultation please contact: <br />
                +8809638 505 505 | +8801763 438 148 <br />
                Time: 9:00 AM – 10:00 PM</h3>
            <Footer />
        </div>
    );
};

export default Appointment;