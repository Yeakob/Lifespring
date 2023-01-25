import React from 'react'
import { Link } from 'react-router-dom'
import "../static/css/Homepage/hpcontent.css"
import './style.css'


const Card = ({ img, prof, name, degree, id }) => {

    return (
        <div className='px-1 lg:w-[18rem] mx-3 animation'>
            <div className="bg-white max-w-sm">
                <div className='overflow-hidden rounded-lg'>
                    <Link to={`/allProffesionals/profDetails/${id}`}>
                        <img className="hover:scale-125 ease-in-out duration-500" src={img} alt="" />
                    </Link>


                </div>
                <div className="py-5">
                    <div className='my-1 text-left'>
                        <p className="prof-cat text-teal-800 bg-teal-200"> {prof} </p>
                    </div>
                    <div className='mt-2 text-left'>

                        <Link
                            to={`/allProffesionals/profDetails/${id}`} className="mb-3 font-mono font-bold text-md text-gray-500 hover:text-green-800">{name}</Link>
                        <p className="mb-3 font-sanstext-md text-gray-500"> {degree} </p>
                    </div>
                    <div className='text-left'>
                        {/* <a href='/appointment' className="text-sm text-lime-700 font-bold hover:text-black cursor-pointer"> Book an appointment </a> */}
                        <Link to={"/appoinment"} 
                            className="text-sm text-lime-700 font-bold hover:text-black cursor-pointer"
                        >Book an appointment</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card