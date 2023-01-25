import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Counselling from '../static/img/ListOfServices/Counselling.jpg'

const PsychologicalCounseling = () => {
    return (
        <div>
            <Navbar />
            <div className='w-full h-auto bg-slate-100 py-4 text-start px-10 text-md font-mono text-slate-600 font-semibold'>
                <a className='hover:text-black' href={"/"}>Home</a> / <a href={'/listOfServices'} className='hover:text-black'>List of our services</a> / Psychological Counseling
            </div>
            <div className="lg:mt-20 mt-10 lg:mb-10">
                <div className="lg:mx-32">
                    <div className="lg:p-5 p-2">
                        <h2 className="lg:text-[2.2rem] text-2xl text-slate-900 font-sans pb-2 font-semibold">Counseling for Everyone</h2>
                    </div>
                </div>
            </div>
            <div className="lg:mx-32">
                <div className="grid lg:grid-cols-2 text-left lg:mx-5">
                    <div className="m-3">
                        <img className='m-auto' src={Counselling} alt="" />
                    </div>
                    <div className="p-3">
                        <div>
                            <div className='text-slate-500 font-medium mb-5 leading-8'>If you are looking for the most dynamic mental health or psychological counseling service, then LifeSpring is your one-stop center.</div>
                            <div className='text-slate-500 font-medium pb-5 leading-8'>LifeSpring is the most comprehensive and most competitive mental health service provider in the country with multi-disciplinary mental health experts. We provide face to face & online psychological counseling services. Our main target is to be easily available for everyone regardless of age. Our experienced counselors are dedicated to each and every patient no matter how major or how minor his/her mental issue is. Our clients' review will say it all. We are working hard to maintain quality and go beyond. We make sure that everyone can avail our services.</div>
                            <button className='rounded-lg px-8 py-3 text-white font-medium bg-green-700 hover:bg-lime-300 hover:text-green-600 '>Book an Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PsychologicalCounseling