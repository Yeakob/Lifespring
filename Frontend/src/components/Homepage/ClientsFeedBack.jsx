import React from 'react'
import { RiDoubleQuotesR } from 'react-icons/ri'
import Slider from "react-slick";
import '../static/css/Homepage/clientsfeedback.css'
import Image1 from "../static/img/ClientReview/golam.jpg"
import Image2 from "../static/img/ClientReview/munmun.jpg"
import Image3 from "../static/img/ClientReview/man2.jpg"
import Image4 from "../static/img/ClientReview/woman2.jpg"

const ClientsFeedBack = () => {
    const iconStyle = {
        color: "#E0E3E6",
        fontSize: "4rem",
        float: "right",
        marginTop: "-40px",
    }
    const reviewlist = []
    const informations = [
        {
            img: Image1,
            clientsOf: "Patient of DR. GOLAM MOSTOFA MILON",
            comment: "Hello sir. finally I got married that's going almost 3 month & Alhamdulillah we are good in our couple life If you don't understand my problem that's not happen today that's why i think all credit goes to you behind my marriage life, Thank you so much sir.",
            name: "",
            prof: ""
        },
        {
            img: Image2,
            clientsOf: "Patient of DR. MUNMUN JAHAN",
            comment: "Assalamualaikum apu. I could not resist sharing this with you. My eyes filled up with tears after today's session. Because nobody has talked to me with such kindness in a very long time. Your encouraging words has truly touched me apu. You showed empathy towards each of my problem, no matter how small or silly they were. Thank you very much. Looking forward to have more sessions with you. May Allah bless you with better rewards.",
            name: "",
            prof: ""
        },
        {
            img: Image3,
            clientsOf: "Corporate Client of LifeSpring",
            comment: "Mental health is very important for all of us, especially today in our modern fast-paced lives. As we struggle with a lot of stress in our daily lives it's very important to have a support system like LifeSpring, to help us find answers to the questions we have for ourselves and to be at ease. Having a partnership with LifeSpring & employees of BATB could go through some difficult times during this pandemic. This platform helped us to open up, talk about the problems that we all face, and make it a normal thing so that we can support each other. So, having this kind of support system is vital for all organizations in this day and age. ",
            name: "",
            prof: ""
        },
        {
            img: Image4,
            clientsOf: "Corporate Client of LifeSpring",
            comment: "Unilever believes that when we put our people first, our people will put the business first. That's why we try to take care of the holistic well-being of our employees. And in this journey, LifeSpring has been a wonderful partner since 2018. They helped us to set up a 24/7 helpline for our employees and their family members. Along with over-the-call counseling, they also arranged many sessions on raising awareness, empathetic leadership, and how to deal with the stress of losing a family member or friend during this pandemic. I am truly grateful to this organization and all its professionals for providing support to our employees & helping them through this difficult time. Thank you, LifeSpring.",
            name: "SAKSHI HANDA",
            prof: "Human Resources Director Unilever Bangladesh"
        },
    ]
    informations.forEach((information) => {
        reviewlist.push(
            <div className="p-10 rounded-lg">
                <div>
                    <div className="testimonialQuoteIcon">
                        <RiDoubleQuotesR className='text-lg' style={iconStyle} />
                    </div>
                    <div className='mb-10'>
                        <div className="c-img overflow-hidden rounded-full w-16 lg:mx-[47%] mx-[40%]">
                            <img src={information.img} alt="" />
                        </div>
                    </div>
                    <div className="cmmntTitle mb-3">
                        <h2 className='mt-2 text-black font-semibold text-lg'> {information.clientsOf} </h2>
                    </div>
                    <div className="cmnt mb-5">
                        <p className='text-black font-semibold font-sans text-md lg:text-lg text-center space-x-2 leading-6 lg:leading-10'>
                            "{information.comment}" </p>
                    </div>
                    <div className="rest">
                        <h3 className="name font-bold leading-6"> {information.name} <span className="prof text-slate-400 ml-3"> {information.prof} </span> </h3>
                    </div>
                </div>
            </div>
        );
    });
    const settings = {
        className: "clientsFeedBack",
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
    };
    return (
        <div className='bg-slate-50'>
            <hr className='my-10' />
            <div className='mx-5 lg:mx-28 mb-20' id="healthProffessionals">
                <div className="grid grid-cols-2 lg:h-16">
                    <div className="hpTitle text-left lg:text-2xl my-3 font-sans">
                        <h2>Clients<b className='text-green-600'> Feedback</b> </h2>
                    </div>
                    <div className="hpViewAllBtn text-right my-3 font-sans">
                        <button type="button" className="m-2 h-10 w-20 text-sm font-medium text-white hover:bg-lime-500 focus:outline-none bg-green-600 rounded-md border border-green-200 hover:text-black">View All</button>
                    </div>
                </div>
                <div className='mx-5'>
                    <Slider {...settings}>
                        {reviewlist}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ClientsFeedBack