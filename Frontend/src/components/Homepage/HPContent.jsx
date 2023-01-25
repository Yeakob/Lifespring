import React from 'react'
import Slider from "react-slick";
import "../static/css/Homepage/hpcontent.css"
import Image1 from "../static/img/HPImage/yahia-amin.jpg"
import Image2 from "../static/img/HPImage/sayedul-ashraf.jpg"
import Image3 from "../static/img/HPImage/aklima.jpg"
import Image4 from "../static/img/HPImage/kamrun.jpg"
import Image5 from "../static/img/HPImage/hasibul.jpg"
import Image6 from "../static/img/HPImage/mehedi.jpg"
import Image7 from "../static/img/HPImage/afroza-jesmin.jpg"
import Image8 from "../static/img/HPImage/ashfia.jpg"
import Image9 from "../static/img/HPImage/azharul.jpg"
import Image10 from "../static/img/HPImage/Fariduzzaman.jpg"

const HPContent = () => {
    const cardlist = []
    const informations = [
        {
            name: "Yahia MD Amin",
            prof: "PSYCHOLOGIST",
            img: Image1,
            degree: ""
        },
        {
            name: "Dr. Sayedul Ashraf",
            prof: "PSYCHIATRIST",
            img: Image2,
            degree: ""
        },
        {
            name: "Dr. Aklima Zakaria Zinan",
            prof: "GYNECOLOGIST",
            img: Image3,
            degree: ""
        },
        {
            name: "Dr. Kamrun Nahar",
            prof: "GYNECOLOGIST",
            img: Image4,
            degree: ""
        },
        
        {
            name: "Md. Hasibul Azim Akash",
            prof: "PSYCHOLOGIST",
            img: Image5,
            degree: "MS in Educational Psychology, DU"
        },
        {
            name: "Mr. Md. Mehedi Hasan",
            prof: "PSYCHOLOGIST",
            img: Image6,
            degree: "M.S. Counselling Psychology (DU)"
        },
        {
            name: "Mr. Md. Mehedi Hasan",
            prof: "PSYCHOLOGIST",
            img: Image7,
            degree: "M.S. Counselling Psychology (DU)"
        },
        {
            name: "Mr. Md. Mehedi Hasan",
            prof: "PSYCHOLOGIST",
            img: Image8,
            degree: "M.S. Counselling Psychology (DU)"
        },
        {
            name: "Mr. Md. Mehedi Hasan",
            prof: "PSYCHOLOGIST",
            img: Image9,
            degree: "M.S. Counselling Psychology (DU)"
        },
        {
            name: "Mr. Md. Mehedi Hasan",
            prof: "PSYCHOLOGIST",
            img: Image10,
            degree: "M.S. Counselling Psychology (DU)"
        },
        
        
    ]
    informations.forEach((information) => {
        cardlist.push(
            <div className='px-1'>
                <div className="bg-white max-w-sm">
                    <div className='overflow-hidden rounded-lg'>
                        <img className="hover:scale-125 ease-in-out duration-500" src={information.img} alt="" />
                    </div>
                    <div className="py-5">
                        <div className='my-1 text-left'>
                            <p className="prof-cat text-teal-800 bg-teal-200"> {information.prof} </p>
                        </div>
                        <div className='mt-2 text-left'>
                            <a href={'/'} className="mb-3 font-mono font-bold text-md text-gray-500 hover:text-green-800"> {information.name} </a>
                            <p className="mb-3 font-sanstext-md text-gray-500"> {information.degree} </p>
                        </div>
                        <div className='text-left'>
                            <a href={'/'} className="text-sm text-lime-700 font-bold hover:text-black"> Book an appointment </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
    const settings = {
        className: "center hpContentSlide",
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 5,
        slidesToScroll: 4,
        swipeToSlide: true,
        
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}`
            );
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };

    return (
        <div>
            <hr className='my-10' />
            <div className='mx-10 lg:mx-28 mb-20' id="healthProffessionals">
                <div className="grid grid-cols-2 lg:h-16">
                    <div className="hpTitle text-left lg:text-2xl my-3 font-sans">
                        <h2>Our <b className='text-green-600'>Health Professionals</b> </h2>
                    </div>
                    <div className="hpViewAllBtn text-right my-3 font-sans">
                        <button type="button" className="m-2 h-8 w-24 text-sm font-medium text-green-500 hover:bg-green-600 focus:outline-none bg-white rounded-md border border-green-200 hover:text-white">View All</button>
                    </div>
                </div>
                <div className='mx-5'>
                    <Slider {...settings}>
                        {cardlist}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default HPContent