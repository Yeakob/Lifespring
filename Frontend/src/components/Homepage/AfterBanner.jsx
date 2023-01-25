import React from 'react'
import Slider from "react-slick";

const AfterBanner = () => {
    const settings = {
        className: "carouselab",
        infinite: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
    };
  return (
    <div>
        <div className='lg:mt-20 mt-10 mb-10'>
                    <div className='lg:mx-[30%]'>
                        <div className="lg:m-5">
                            <Slider {...settings}>
                                <div>
                                    <h2 className='px-10 py-5 text-white font-semibold text-3xl bg-green-700'>Educated 1 million +</h2>
                                </div>
                                <div>
                                    <h2 className='px-10 py-5 text-white font-semibold text-3xl bg-green-700'>Reached 10 million +</h2>
                                </div>
                                <div>
                                    <h2 className='px-10 py-5 text-white font-semibold text-3xl bg-green-700'>Served 150K+ Paitent</h2>
                                </div>
                            </Slider>
                        </div>
                    </div>

                </div>
    </div>
  )
}

export default AfterBanner