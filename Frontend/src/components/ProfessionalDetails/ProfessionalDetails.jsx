import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const ProfessionalDetails = () => {
    const { professionalsId } = useParams();
    const [professional, setProfessionals] = useState([]);
    useEffect(() => {
        fetch(`/Info.json`)
            .then((res) => res.json())
            .then((data) => setProfessionals(data));
    }, [professionalsId]);
    // console.log(professionalsId);
    // console.log(professional)
    const Appointment = professional.filter(sr => sr.id !== professionalsId);
    // console.log(Appointment);

    return (
        <div>
            <Navbar/>
            <div className='w-full flex flex-row h-auto bg-slate-100 py-4 text-start px-10 text-md font-mono text-slate-600 font-semibold'>
                <Link to={"/"}
                    className='hover:text-black mark flex flex-col flex-wrap first-letter mr-2' >Home
                    <div className='line'></div>
                </Link> /
                <Link to={"/allProffesionals"}>
                    <div className='hover:text-black mark flex flex-col flex-wrap first-letter mr-2 cursor-pointer px-2'>Professionals
                        <div className='line1'>
                        </div>
                    </div>
                </Link>/
                {Appointment[(professionalsId - 1)]?.name}
            </div>
            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                <div
                    className='container px-5 py-24 mx-auto'
                    style={{ cursor: 'auto' }}>
                    <div className='lg:w-4/5 mx-auto flex flex-wrap'>
                        <div>
                            <img
                                alt='professionals_pic'
                                className=' w-full  h-64 object-cover object-center rounded-lg mb-5'
                                src={Appointment[(professionalsId - 1)]?.img}
                                style={{ cursor: 'auto' }}
                            />
                            <Link to="/appoinment">
                                <div className='flex'>
                                    <span className='title-font font-medium text-3xl text-gray-900 '></span>
                                    <button className='flex text-white bg-[#106731] border-0 py-2 px-6 focus:outline-none hover:bg-[#043919] rounded ml-0'>
                                        Book an Appointment
                                    </button>
                                </div>
                            </Link>
                        </div>
                        <div

                            className='ml-10'
                            style={{ cursor: 'auto' }}>

                            <h2
                                className='text-md title-font text-gray-900 tracking-widest'
                                style={{ cursor: 'auto' }}>
                                {Appointment[(professionalsId - 1)]?.prof}
                                {Appointment[(professionalsId - 1)]?.name}
                            </h2>


                            <p className='leading-relaxed mb-2'>
                                {Appointment[(professionalsId - 1)]?.degree}
                            </p>


                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ProfessionalDetails;