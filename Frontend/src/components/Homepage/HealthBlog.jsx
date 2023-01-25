import React from 'react'
import Slider from "react-slick";
import DBTT from "../static/img/HealthBlog/DBTT.jpg"
import MentalHealth from "../static/img/HealthBlog/MentalHealth.jpg"
import WMentalHealth from "../static/img/HealthBlog/wMentalHealth.jpg"
import DCounsil from "../static/img/HealthBlog/DespressionCounsilDhaka.jpg"
import PsyOnCounsil from "../static/img/HealthBlog/PsychiatristOnlineConsultation.jpg"
import ChildDevCenter from "../static/img/HealthBlog/Child-Development-Center-In-Dhaka.jpg"
import CLinicalPsySpe from "../static/img/HealthBlog/What-Do-Clinical-Psychologists-Specialize.jpg"
import CounsellorsNearMe from "../static/img/HealthBlog/Best-Mental-Health-Counsellors-Near-You.jpg"
import WConsultAPsy from "../static/img/HealthBlog/When-Should-You-Consult-A-Psychiatrist.jpg"
import BDMentalHealth from "../static/img/HealthBlog/Mental-Health-in-Bangladesh.jpeg"

import "../static/css/Homepage/healthblog.css"

const HealthBlog = () => {
    const blogList = []
    const informations = [
        {
            img: DBTT,
            title: "Difference Between a Therapist, Psychologist and Psychiatrist",
            blog: "When it comes to mental health, there are a lot of different terms that get thrown around. You might have heard of a therapist, a psychologist, and a psychiatrist. But ... ",
        },
        {
            img: MentalHealth,
            title: "Mental Health: Best Child Psychiatrists in Dhaka City",
            blog: "Our childhood more or less shapes our adulthood and unresolved childhood trauma can affect our futures terribly. For many reasons, child psychiatrists in Dhaka may be of tremendous help to ... ",
        },
        {
            img: WMentalHealth,
            title: "How can you celebrate World Mental Health Day 2022?",
            blog: "What is the World Mental Health Day? World Mental Health Day is celebrated on the 10th of October. It is a day for mental health awareness, education, and policy advocacy. ...",
        },
        {
            img: DCounsil,
            title: "Depression Counselling In Dhaka: Where To Find?",
            blog: "Depression is a worldwide problem. Sadly, it's still a taboo in many countries and people would not go for help easily. In Dhaka only, 71% of the population is depressed. From ...",
        },
        {
            img: PsyOnCounsil,
            title: "Psychiatrist Online Consultation: How Easy Is It?",
            blog: "Psychiatrists are real-life heroes! With the increase in mental problems, it's more important than ever to reach out to professionals.  Sadly, accessibility problems have always been an issue. After all, ...",
        },
        {
            img: ChildDevCenter,
            title: "Child Development Center In Dhaka",
            blog: "Your toddler needs nurturing and care from the start! Apart from getting proper care at home, they need proper love and care from society. Here's where the child development centers ...",
        },
        {
            img: CLinicalPsySpe,
            title: "What Do Clinical Psychologists Specialize in?",
            blog: "Clinical psychologists specialize in the diagnosis, treatment, and prevention of mental, emotional, and behavioural disorders. Clinical psychologists deal with a wide range of mental health issues.  They may specialize in ...",
        },
        {
            img: CounsellorsNearMe,
            title: "Best Mental Health Counsellors Near You",
            blog: "'Best mental health counsellors near me' - is a commonly thought of phrase when one suffers through mental illnesses or sees someone close suffering gravely due to mental health issues.  ...",
        },
        {
            img: WConsultAPsy,
            title: "When Should You Consult A Psychiatrist",
            blog: "There are a number of different mental health professionals, each with their own area of expertise. So, how do you know when it's time to consult a psychiatrist? A psychiatrist ...",
        },
        {
            img: BDMentalHealth,
            title: "Mental Health in Bangladesh: Psychological Help Near Me",
            blog: "Mental health is a state of well-being in which an individual realizes his or her own abilities, can cope with the normal stresses of life, can work productively and fruitfully, ...",
        },
    ]
    informations.forEach((information) => {
        blogList.push(
            <div>
                <div className="bg-white mx-2 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href={"/"}>
                        <img className="rounded-t-lg" src={information.img} alt="" />
                    </a>
                    <div className="my-2 text-left">
                        <a href={"/"}>
                            <h5 className="mb-3 h-16 text-lg  font-bold text-gray-600 hover:text-lime-700 dark:text-white">{information.title}</h5>
                        </a>
                        <p className="mb-5 h-28 font-normal text-sm text-gray-700 dark:text-gray-400"> {information.blog} </p>
                        <a href={"/"} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        )
    });
    const settings = {
        dots: true,
        className: "center healthBlog",
        speed: 500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
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
                        <h2>Health <b className='text-green-600'>Blog</b> </h2>
                    </div>
                    <div className="hpViewAllBtn text-right lg:my-3 font-sans">
                        <button type="button" className="m-2 h-8 w-24 text-sm font-medium text-green-500 hover:bg-green-600 focus:outline-none bg-white rounded-md border border-green-200 hover:text-white">View All</button>
                    </div>
                </div>
                <div className='mx-5 mt-5'>
                    <Slider {...settings}>
                        {blogList}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default HealthBlog