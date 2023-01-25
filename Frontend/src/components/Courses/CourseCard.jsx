import React from 'react'
import { AiOutlineHeart, AiOutlinePlayCircle, AiOutlineMenuUnfold, AiOutlineClockCircle } from "react-icons/ai";
import './style.css';
import { useState } from 'react';

const CourseCard = ({ name, details, price, tag1, tag2, tag3, info, img }) => {

  const [over, setOver] = useState(false);

  return (
    <div className='mt-5 w-[18rem] h-[33rem] mx-3 animation shadow-lg rounded-lg'>
      <div className="bg-white max-w-sm rounded-lg">
        <div className='overflow-hidden rounded-lg w-full'>
          <div className='absolute z-8 pt-3 ml-3'>
            <div className={info === "Featured" ? 'bg-red-600 text-sm px-1 rounded-sm text-white' : 'bg-blue-600 text-sm px-1 rounded-sm text-white'}>{info}</div>
          </div>
          <img className="hover:scale-110 ease-in-out duration-500 w-full z-2" src={img} alt="" />
        </div>
        <div className="py-5 px-2">
          <div className='pl-3 my-1 text-left'>
            <p className="text-xl font-semibold text-mono"> {name} </p>
          </div>
          <div className='mt-2 text-left'>

          </div>
          <div className='pl-3 mt-2 text-left'>
            <p className="mb-3 font-semibold text-sm text-gray-500"> {details} </p>

            <div className='pl-3 my-3 w-full flex flex-row flex-wrap justify-start items-start'>
              <p className="w-1/2 mb-1 font-semibold text-sm text-gray-500 flex flex-row">{(tag3 === "") ? <AiOutlinePlayCircle className='text-green-700 hidden font-semibold mx-1 text-lg' /> : <AiOutlinePlayCircle className='text-green-700 font-semibold mx-1 text-lg' />} {tag3} </p>
              <p className="w-1/2 mb-1 font-semibold text-sm text-gray-500 flex flex-row">{(tag2 === "") ? <AiOutlineClockCircle className='text-green-700 hidden font-semibold mx-1 text-lg' /> : <AiOutlineClockCircle className='text-green-700 font-semibold mx-1 text-lg' />} {tag2} </p>
              <p className="w-1/2 mb-1 font-semibold text-sm text-gray-500 flex flex-row"><AiOutlineMenuUnfold className=' text-green-700 mx-1 text-lg' />{tag1} </p>
            </div>
            <p className="mb-3 text-lg font-bold  text-green-700 flex flex-row pl-3">$ {price} <div className='text-sm pt-1'>.00</div> </p>
            <div className={over ? 'pos bg-lime-500 text-white p-2 absolute ml-[12.5rem] rounded-md font-semibold' : ' pos hidden bg-lime-500 text-white rounded-md font-semibold p-2 absolute ml-[10rem] mb-[20rem]'}>Add to Watchlist</div>
          </div>
          <div className='text-left flex flex-row justify-around items-center flex-wrap'>
            <div className=" flex justify-center text-white bg-lime-500 py-2.5 text-md px-5 w-3/4 font-bold rounded-md shadow-md hover:bg-green-700 duration-500 cursor-pointer"> Add to cart </div>
            <div className=" flex justify-center text-white bg-lime-500 text-md w-1/6 rounded-md shadow-md hover:bg-green-700 py-3 font-bold text-lg duration-500 cursor-pointer" onMouseOver={() => { setOver(true) }} onMouseLeave={() => { setOver(false) }}> <AiOutlineHeart className='' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard