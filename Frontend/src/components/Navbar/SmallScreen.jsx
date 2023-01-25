import React from 'react'
import './style.css'
import { Link } from "react-router-dom";


const SmallScreen = () => {
  return (
    
    <div className='block z-10 lg:hidden duration-1000 w-[18rem] absolute right-0 top-[8.5rem] bg-slate-500 justify-end'>
  

              <ul className="w-full duration-500">
               <li className="dropdown text-white hover:text-blue-400 cursor-pointer font-semibold text-base py-5">
                  <button href = {"/allProffesionals"} className=' w-1/2 flex flex-col justify-start items-start px-5'>Professionals <div className='ub'></div></button>
                   <div className="dropdown-menu hidden h-auto duration-75 pt-4">
                       <ul className="block w-[20rem] rounded-sm py-2 ">
                           <li className=" flex justify-start items-start px-5 py-2.5"><Link to= '/allProffesionals' className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">All Department </Link></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><Link to ='/psychiatrist'  className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Psychiatris </Link></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><Link to ='/psychologist'  className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Psychologist </Link></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><Link to ='/counselor'     className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Counselor </Link></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><Link to ='/child'         className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Child and Adolescent </Link></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><Link to ='/dermatologist' className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Dermatologist </Link></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><Link to ='/sexual-health' className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Sexual Health </Link></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><Link to ='/gynechologist' className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Gynechologist </Link></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><Link to ='/internal-med'  className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Internal Medicine </Link></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><Link to ='/therapist'     className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Development Therapist </Link></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><Link to ='/ent'           className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">ENT </Link></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><Link to ='/nutritionist'  className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Nutritionist </Link></li>
                           <li className=" flex justify-start items-start px-5 py-2.5"><Link to ='/paediatrics' className=" block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Paediatrics </Link></li>  
                       </ul>
                       
                   </div>
                  
               </li>
               <div className='w-4/5 ml-[1.2rem] h-[.05rem] bg-black  '></div>
               <li className="dropdown tran text-white hover:text-blue-400 cursor-pointer font-semibold text-base py-5">
                  <button className=' w-1/3 flex justify-start flex-col items-start px-5'><a href={"/listOfServices"}> Services </a><div className='ub'></div></button>
                   <div className="dropdown-menu hidden h-auto trans pt-4">
                       <ul className="block w-[20rem] mt-0 rounded-sm py-2 justify-center items-center">
                           <li className="flex justify-start items-start px-5 py-2.5"><Link to ='/psychologicalCounseling' className="block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Psychological Counseling</Link></li>
                           <li className="flex justify-start items-start px-5 py-2.5"><Link to ='/corporateService' className="block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Corporate Service</Link></li>
                           <li className="flex justify-start items-start px-5 py-2.5"><Link to ='/childDevelopment' className="block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Child Developement</Link></li>
                           <li className="flex justify-start items-start px-5 py-2.5"><Link to ='/mentalHealthTest' className="block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Free Mental health Test</Link></li>
                       </ul>
                   </div>
               </li>
               <div className='w-4/5 ml-[1.2rem] h-[.05rem] bg-black  '></div>
               <li className=" flex justify-start items-start px-5 text-white hover:text-blue-400 cursor-pointer font-semibold text-base py-5 "><button className='btn'> <Link to="/courses">Courses </Link><div className='ub1'></div></button></li>
               <div className='w-4/5 ml-[1.2rem] h-[.05rem] bg-black  '></div>
               <li className=" flex justify-start items-start px-5 text-white hover:text-blue-400 cursor-pointer font-semibold text-base py-5 "><button className='btn'><Link to="/blog">Blogs</Link><div className='ub1'></div></button></li>
               <div className='w-4/5 ml-[1.2rem] h-[.05rem] bg-black  '></div>
               <li className="dropdown text-white hover:text-blue-400 cursor-pointer font-semibold text-base py-5">
                <button className=' flex w-1/2 justify-start flex-col items-start px-5'>Testimonials<div className='ub'></div></button>
                   <div className="dropdown-menu hidden duration-1000 h-auto pt-4">
                       <ul className="block w-[20rem] rounded-sm  py-2 justify-start items-start">
                           <li className="flex justify-start items-start px-5 py-2.5"><Link to = '/clientsFeedback' className="block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Clients Feedback</Link></li>
                           <li className="flex justify-start items-start px-5 py-2.5"><Link to = '/clientsReview' className="block text-sm text-white font-bold hover:text-green-600 cursor-pointer">Purify Class Review</Link></li>
                       </ul>
                   </div>
                 </li>
                 
               </ul>
    </div>
  )
}

export default SmallScreen
