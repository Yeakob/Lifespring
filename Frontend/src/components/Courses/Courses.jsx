import React from 'react'
import Course from './Course.json'
import CourseCard from './CourseCard'
import { useState } from 'react'
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Courses = () => {
  const [pageNo, setpageNo] = useState(1);
  const [on, seton] = useState("all");
  return (
    <div>
      <Navbar />
      <div className='w-full h-auto flex flex-col justify-center items-center'>
        <div className='w-full flex-wrap lg:mb-10 text-left h-auto flex flex-row justify-start items-start bg-[#106732]'>
          <div className='drop-shadow-sm lg:w-[70%] lg:pl-20 lg:py-14 p-8 w-full h-auto lg:text-4xl text-lg text-white font-mono font-bold flex items-start justify-start'>
            Let’s bring a balance in your mental and physical health
          </div>
          <div className='lg:w-[30%] w-full flex lg:justify-end items-center lg:h-[10rem] lg:pt-10'>
            <button className='lg:ml-10 m-5 bg-white px-16 hover:bg-lime-500 duration-300 sm:mb-10 hover:text-white rounded-lg text-lg font-bold text-green-800 shadow-md shadow-slate-500 py-4'>Get Started</button>
          </div>

        </div>
        <div>
          <div className='pt-5 w-full flex-wrap h-auto flex flex-row justify-center items-center'>
            <div onClick={() => { seton("all") }} className={on === 'all' ? 'bg-lime-400 text-white duration-300 py-3 px-8 mx-5 text-md rounded-full shadow-lg font-bold cursor-pointer' : 'cursor-pointer hover:bg-lime-400 hover:text-white duration-300 py-3 px-8 m-3 text-md rounded-full shadow-lg font-bold'}>All Courses</div>
            <div onClick={() => { seton("certificate") }} className={on === 'certificate' ? 'bg-lime-400 text-white duration-300 py-3 px-8 mx-5 text-md rounded-full shadow-lg font-bold cursor-pointer' : 'cursor-pointer hover:bg-lime-400 hover:text-white duration-300 py-3 px-8 m-3 text-md rounded-full shadow-lg font-bold'}>Certification</div>
            <div onClick={() => { seton("child") }} className={on === 'child' ? 'bg-lime-400 text-white duration-300 py-3 px-8 mx-5 text-md rounded-full shadow-lg font-bold cursor-pointer' : 'cursor-pointer hover:bg-lime-400 hover:text-white duration-300 py-3 px-8 m-3 text-md rounded-full shadow-lg font-bold'}>Child Development</div>
            <div onClick={() => { seton("emotional") }} className={on === 'emotional' ? 'bg-lime-400 text-white duration-300 py-3 px-8 mx-5 text-md rounded-full shadow-lg font-bold cursor-pointer' : 'cursor-pointer hover:bg-lime-400 hover:text-white duration-300 py-3 px-8 m-3 text-md rounded-full shadow-lg font-bold'}>Emotional Balance</div>
            <div onClick={() => { seton("offer") }} className={on === 'offer' ? 'bg-lime-400 text-white duration-300 py-3 px-8 mx-5 text-md rounded-full shadow-lg font-bold cursor-pointer' : 'cursor-pointer hover:bg-lime-400 hover:text-white duration-300 py-3 px-8 m-3 text-md rounded-full shadow-lg font-bold'}>Offer course</div>
            <div onClick={() => { seton("physical") }} className={on === 'physical' ? 'bg-lime-400 text-white duration-300 py-3 px-8 mx-5 text-md rounded-full shadow-lg font-bold cursor-pointer' : ' cursor-pointer hover:bg-lime-400 hover:text-white duration-300 py-3 px-8 m-3 text-md rounded-full shadow-lg font-bold'}>Physical and Mental Health</div>
            <div onClick={() => { seton("relationship") }} className={on === 'relationship' ? 'bg-lime-400 text-white duration-300 py-3 px-8 mx-5 text-md rounded-full shadow-lg font-bold cursor-pointer' : 'cursor-pointer hover:bg-lime-400 hover:text-white duration-300 py-3 px-8 m-3 text-md rounded-full shadow-lg font-bold'}>Relationship</div>
            <div onClick={() => { seton("spritual") }} className={on === 'spritual' ? 'bg-lime-400 text-white duration-300 py-3 px-8 mx-5 text-md rounded-full shadow-lg font-bold cursor-pointer' : 'cursor-pointer hover:bg-lime-400 hover:text-white duration-300 py-3 px-8 m-3 text-md rounded-full shadow-lg font-bold'}>Spirituality</div>
          </div>
        </div>
        <div className='w-full flex lg:justify-start justify-center pl-10 items-center flex-row flex-wrap h-auto pt-5 pb-10'>

          {on === 'all' &&
            Course.map((items) => {
              if (items.id <= (pageNo * 8) && items.id > ((pageNo - 1) * 8)) {
                return (

                  <CourseCard name={items.name} price={items.price} tag1={items.tag1} tag3={items.tag3} tag2={items.tag2} info={items.info} img={items.img} details={items.details} />
                )
              }
              return null
            })
          }
          {on === 'certificate' &&
            Course.map((items) => {
              if (items.catagory === 'certification') {
                return (
                  <CourseCard name={items.name} price={items.price} tag1={items.tag1} tag3={items.tag3} tag2={items.tag2} info={items.info} img={items.img} details={items.details} />
                )
              }
              return null
            })
          }
          {on === 'child' &&
            Course.map((items) => {
              if (items.catagory === 'child') {
                return (
                  <CourseCard name={items.name} price={items.price} tag1={items.tag1} tag3={items.tag3} tag2={items.tag2} info={items.info} img={items.img} details={items.details} />
                )
              }
              return null
            })
          }
          {on === 'emotional' &&
            Course.map((items) => {
              if (items.catagory === 'emotional') {
                return (
                  <CourseCard name={items.name} price={items.price} tag1={items.tag1} tag3={items.tag3} tag2={items.tag2} info={items.info} img={items.img} details={items.details} />
                )
              }
              return null
            })
          }
          {on === 'offer' &&
            Course.map((items) => {
              if (items.catagory === 'offer') {
                return (
                  <CourseCard name={items.name} price={items.price} tag1={items.tag1} tag3={items.tag3} tag2={items.tag2} info={items.info} img={items.img} details={items.details} />
                )
              }
              return null
            })
          }
          {on === 'physical' &&
            Course.map((items) => {
              if (items.catagory === 'physical') {
                return (
                  <CourseCard name={items.name} price={items.price} tag1={items.tag1} tag3={items.tag3} tag2={items.tag2} info={items.info} img={items.img} details={items.details} />
                )
              }
              return null
            })
          }
          {on === 'relationship' &&
            Course.map((items) => {
              if (items.catagory === 'relationship') {
                return (
                  <CourseCard name={items.name} price={items.price} tag1={items.tag1} tag3={items.tag3} tag2={items.tag2} info={items.info} img={items.img} details={items.details} />
                )
              }
              return null
            })
          }
          {on === 'spritual' &&
            Course.map((items) => {
              if (items.catagory === 'spritual') {
                return (
                  <CourseCard name={items.name} price={items.price} tag1={items.tag1} tag3={items.tag3} tag2={items.tag2} info={items.info} img={items.img} details={items.details} />
                )
              }
              return null
            })
          }

        </div>
        <div className={on === 'all' ? 'w-full h-auto flex flex-row justify-center items-center flex-wrap mb-5' : 'hidden'}>
          <button onClick={() => { setpageNo(pageNo - 1) }} className={pageNo === 1 ? 'hidden ' : 'block px-3 p-1 duration-500 h-[2.5rem] w-[2.5rem] text-lg font-semibold hover:text-lime-400 rounded-full text-slate-500'}><AiOutlineDoubleLeft /></button>
          <button onClick={() => { setpageNo(1) }} className={pageNo === 1 ? 'bg-lime-400 text-white px-3 p-1 duration-500 h-[2.5rem] w-[2.5rem] text-lg font-semibold rounded-full' : ' px-3 p-1 duration-500 h-[2.5rem] w-[2.5rem] text-lg font-semibold hover:text-lime-400 rounded-full text-slate-500'}>1</button>
          <button onClick={() => { setpageNo(2) }} className={pageNo === 2 ? 'bg-lime-400 text-white px-3 p-1 duration-500 h-[2.5rem] w-[2.5rem] text-lg font-semibold rounded-full' : ' px-3 p-1 duration-500 h-[2.5rem] w-[2.5rem] text-lg font-semibold hover:text-lime-400 rounded-full text-slate-500'}>2</button>
          <button onClick={() => { setpageNo(pageNo + 1) }} className={pageNo === 2 ? 'hidden' : 'block px-3 p-1 duration-500 h-[2.5rem] w-[2.5rem] text-lg font-semibold hover:text-lime-400 rounded-full text-slate-500'}><AiOutlineDoubleRight /></button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Courses