import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import CorporateServicePic from '../static/img/ListOfServices/Corporate-1.jpg'

const CorporateService = () => {
  return (
    <div>
            <Navbar />
            <div className='w-full h-auto bg-slate-100 py-4 text-start px-10 text-md font-mono text-slate-600 font-semibold'>
                <a className='hover:text-black' href={"/"}>Home</a> / <a href={'/listOfServices'} className='hover:text-black'>List of our services</a> / Corporate Services
            </div>
            <div className="lg:mt-20 mt-10 lg:mb-10">
                <div className="lg:mx-32">
                    <div className="lg:p-5 p-2">
                        <h2 className="lg:text-[2.2rem] text-lg text-slate-900 font-sans pb-2 font-semibold">LifeSpring Provides Specialized Services for Corporates</h2>
                    </div>
                </div>
            </div>
            <div className="lg:mx-32">
                <div className="grid lg:grid-cols-2 text-left lg:mx-5">
                    <div className="m-3">
                        <img className='m-auto' src={CorporateServicePic} alt="" />
                    </div>
                    <div className="p-3">
                        <div>
                            <div className='text-slate-500 font-medium mb-5 leading-8'>LifeSpring provides the best business and mental support for corporate personnel. There are two types of corporate services LifeSpring is currently providing. Corporate Training and Mental Wellness Program. Corporate training includes psychometrics, NLP, consumer psychology, mindfulness, customized program, sales psychology, behavioral psychology, stress management, and personality trait analysis. On the other hand, the Mental Wellness Program includes basic psychoeducation, assessment, online counseling, psychiatric counseling, 24/7 phone service, and psychoeducation session.</div>
                            <div className='text-slate-500 font-medium pb-5 leading-8'>Get in touch with LifeSpring for the most lucrative corporate service in town.</div>
                            <button className='rounded-lg px-8 py-3 text-white font-medium bg-green-700 hover:bg-lime-300 hover:text-green-600 '>Book an Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
  )
}

export default CorporateService