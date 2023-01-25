import React from 'react'
import Slider from "react-slick";
import '../static/css/Homepage/carouselSlider.css'
import bannarImage1 from '../static/img/CarouselImage/Banner2.jpg'
import bannarImage2 from '../static/img/CarouselImage/Banner3.png'
import ExImage1 from '../static/img/HPImage/yahia-amin.jpg'
import ExImage2 from '../static/img/HPImage/sayedul-ashraf.jpg'
import ExImage3 from '../static/img/HPImage/Shusama.jpg'

const Bannar2 = () => {
    const settings = {
        className: "carousel",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='bannerbg'>
            <div className="lg:mx-14">
                <Slider {...settings}>
                    <div className='lg:mx-4'>
                        <div className="grid lg:grid-cols-3">
                            <div className='my-auto lg:ml-28 lg:mr-[-70px]'>
                                <div className='lg:mb-40 mb-5'>
                                    <h1 className='lg:text-5xl text-md font-serif hOne-Shadow tracking-tight font-bold'>Our Services</h1>
                                </div>

                                <div>
                                    <button className='mbtn-shadow my-2 z-10 bg-green-700 text-white lg:py-2 w-44 rounded-full lg:w-[80%] lg:text-sm hover:bg-green-500 hover:text-black uppercase text-xs'>Book an appointment</button><br />
                                    <button className='mbtn-shadow my-2 z-10 bg-green-700 text-white lg:py-2 w-44 rounded-full lg:w-[80%] lg:text-sm hover:bg-green-500 hover:text-black uppercase text-xs'>Enroll Course</button><br />
                                    <button className='mbtn-shadow my-2 z-10 bg-lime-700 text-white lg:py-2 w-44 rounded-full lg:w-[80%] lg:text-sm hover:bg-green-500 hover:text-black uppercase text-xs'>Free Mental Health</button><br />
                                </div>
                            </div>
                            <div className='lg:col-span-2 mt-5 '>
                                <img className='bg-transparent' src={bannarImage1} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='lg:mx-4'>
                        <div className="grid lg:grid-cols-3">
                            <div className='my-auto lg:ml-28 lg:mr-[-70px]'>
                                <div className='lg:mb-40 mb-5'>
                                    <h1 className='lg:text-5xl text-md font-serif hOne-Shadow tracking-tight font-bold'>Paitent base</h1>
                                </div>

                                <div>
                                    <button className='mbtn-shadow my-2 z-10 bg-green-700 text-white lg:py-2 text-xs w-44 rounded-full lg:w-[80%] lg:text-sm hover:bg-green-500 hover:text-black uppercase'>Book an appointment</button><br />
                                    <button className='mbtn-shadow my-2 z-10 bg-green-700 text-white lg:py-2 text-xs w-44 rounded-full lg:w-[80%] lg:text-sm hover:bg-green-500 hover:text-black uppercase'>Enrol Course</button><br />
                                    <button className='mbtn-shadow my-2 z-10 bg-lime-700 text-white lg:py-2 text-xs w-44 rounded-full lg:w-[80%] lg:text-sm hover:bg-green-500 hover:text-black uppercase'>Free Mental Health</button><br />
                                </div>
                            </div>
                            <div className='lg:col-span-2 mt-5'>
                                <img className='bg-transparent' src={bannarImage2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='lg:mx-4'>
                        <div className="grid lg:grid-cols-3">
                            <div className='my-auto lg:ml-28 lg:mr-[-70px]'>
                                <div className='lg:mb-40 mb-5'>
                                    <h1 className='lg:text-5xl text-md font-serif hOne-Shadow tracking-tight font-bold'>Our Experts</h1>
                                </div>

                                <div>
                                    <button className='mbtn-shadow my-2 z-10 bg-green-700 text-white text-xs lg:py-2 rounded-full lg:w-[80%] lg:text-sm w-44 hover:bg-green-500 hover:text-black uppercase'>Book an appointment</button><br />
                                    <button className='mbtn-shadow my-2 z-10 bg-green-700 text-white text-xs lg:py-2 rounded-full lg:w-[80%] lg:text-sm w-44 hover:bg-green-500 hover:text-black uppercase'>Enroll Course</button><br />
                                    <button className='mbtn-shadow my-2 z-10 bg-lime-700 text-white text-xs lg:py-2 rounded-full lg:w-[80%] lg:text-sm w-44 hover:bg-green-500 hover:text-black uppercase'>Free Mental Health</button><br />
                                </div>
                            </div>
                            <div className='lg:col-span-2'>
                                <div className="lg:ml-48">
                                    <div className="grid grid-cols-2 lg:gap-20">
                                        <div className="my-auto mx-auto lg:w-56 w-28 rounded-lg overflow-hidden">
                                            <img src={ExImage2} alt="" />
                                        </div>
                                        <div className="my-auto mr-6">
                                            <div className='lg:mb-20 mb-10 lg:mt-20 mt-10 lg:mr-20 mx-auto lg:w-56 w-28 rounded-lg overflow-hidden'>
                                                <img src={ExImage1} alt="" />
                                            </div>
                                            <div className='lg:mb- mb-10 lg:ml-[-50px] lg:w-56 rounded-lg w-28 overflow-hidden'>
                                                <img src={ExImage3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Bannar2