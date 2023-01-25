import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import img2 from '../images/Banner2.png';
import img3 from '../images/WhatsApp Image 2022-10-22 at 2.26.08 PM.jpeg';
import { Autoplay } from 'swiper';
const Banner = () => {
    return (
        <div className='overflow-hidden bg-gray-100'>
            {/*<hr className='my-10 ' />*/}
            <div className='mx-5'>
                <Swiper
                    //autoplay={{
                    //    delay:2000,
                    //    disableOnInteraction: false,
                    //}}
                    navigation = {true} loop = {true}
                    pagination={true} modules={[Pagination, Navigation]}

                    className="mySwiper aa">
                    <SwiperSlide>
                        <div className='grid grid-cols-[30%_70%] w-full'>
                            <div className='flex mr-[20px] flex-col container justify-center items-center'>
                                <p className='ml-10 mr-[20px] mb-36 text-5xl font-bold'>Our Services</p>
                                <p className='bg-green-700 text-white  pt-2 pb-2 pl-14 pr-14 rounded-full hover:bg-green-500 hover:text-black uppercase'>enroll course</p>
                                <p className='bg-green-700 text-white pr-8 pl-8 pt-2 pb-2 rounded-full hover:bg-green-500 hover:text-black uppercase mt-2'>Book an appointment</p>
                                <p className='bg-green-700 text-white pr-8 pl-8 pt-2 pb-2 rounded-full hover:bg-green-500 hover:text-black uppercase mt-2'>Free Mental health test</p>
                            </div>
                            <div>
                                <img src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2022/01/Banner3.png" className='mb-5 mt-10' alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/*<p className='ml-10 text-6xl float-left font-bold'>Oue Servicess</p>*/}
                        <div className='grid grid-cols-[30%_70%] w-full'>
                            <div className='flex flex-col mx-auto container justify-center items-center'>
                                <p className='ml-10 mb-36 text-5xl font-bold'>Our Services</p>
                                <p className=' bg-green-700 text-white  pt-2 pb-2 pl-14 pr-14 rounded-full hover:bg-green-500 hover:text-black uppercase'>enroll course</p>
                                <p className='bg-green-700 text-white pr-8 pl-8 pt-2 pb-2 rounded-full hover:bg-green-500 hover:text-black uppercase mt-2'>Book an appointment</p>
                                <p className='bg-green-700 text-white pr-8 pl-8 pt-2 pb-2 rounded-full hover:bg-green-500 hover:text-black uppercase
                                    mt-2'>Free Mental health test</p>
                            </div>

                            <div>
                                <img src={img2} className='w-full pt-5' alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img3} className='w-full' alt="" />
                        </div>

                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    );
};

export default Banner;