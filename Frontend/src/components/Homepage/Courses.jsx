import React from 'react';
import img1 from '../images/emotional-selfcare-480x304.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/bundle";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './common.css'
const courses = [{
    "name": "Emotional Selfcare",
    "price": 4000,
    "lesson": "45 lessons",
    "img": "https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/12/NEW_700x430RI_UPDATE-480x304.jpg",
    "time": "16 hours"
},
{
    "name": "Emotional Selfcare",
    "price": 5000,
    "img": "https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2022/03/NEW_Purify-480x304.jpg",
    "lesson1": "45 lessons",
    "lesson2": "45 lessons",
    "time": "16 hours"
}, {
    "name": "Emotional Selfcare",
    "price": 5000,
    "lesson1": "45 lessons",
    "lesson2": "45 lessons",
    "img": "https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2022/03/NEW_Purify-480x304.jpg",
    "time": "16 hours"
}, {
    "name": "Emotional Selfcare",
    "price": 5000,
    "lesson": "45 lessons",
    "img": "https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2022/03/NEW_Purify-480x304.jpg",
    "time": "16 hours"
}, {
    "name": "Emotional Selfcare",
    "price": 5000,
    "lesson": "45 lessons",
    "img": "https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2022/03/NEW_Purify-480x304.jpg",
    "time": "16 hours"
}
]

const Courses = () => {
    return (
        <>
            <div className='flex justify-between mt-5 mx-20'>
                    <p className='text-3xl'>Our <span className='text-green-700'>Courses</span></p>
                    <button className='pr-5 pl-5 text-green-700 rounded-md bg-gray-300 hover:bg-green-700 ease-in-out hover:text-white'>View all</button>
                </div>
        <div className='bg-gray-200 mt-5'>
            <div className='mx-20'>
                
                <Swiper
                    slidesPerView={4}
                    spaceBetween={15}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true} modules={[Navigation]}
                    className="mySwiper pb-5"
                >
                    {
                        courses.map(course => {
                            const { name, img, lesson1,lesson2,price } = course;
                            return (
                                <SwiperSlide className='mt-5'>
                                <div className="max-w-sm dark:bg-gray-800 dark:border-gray-700 hover:overflow-hidden">
                            
                                <img className="rounded-t-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:overflow-hidden duration-500" src={img} alt="" />
                            
                            <div className="p-5 text-left">
                                <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-green-500">{name}</h5>
                                            </a>
                                            <p className='text-gray-500'><span>{lesson1}</span> <span>{lesson2} </span> </p>
                                            <p className="mb-3 text-[#031f42] dark:text-gray-400 text-2xl font-bold">৳ { price}</p>

                            </div>
                        </div>
                            </SwiperSlide>
                           )
                        })
                    }
                   
                </Swiper>
            </div>
            </div>
            </>
    );
};

export default Courses;