import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import ChildDevelopmentPic from '../static/img/ListOfServices/child-development.jpg'

const ChildDevelopement = () => {
  return (
    <div>
            <Navbar />
            <div className='w-full h-auto bg-slate-100 py-4 text-start px-10 text-md font-mono text-slate-600 font-semibold'>
                <a className='hover:text-black' href={"/"}>Home</a> / <a href={'/listOfServices'} className='hover:text-black'>List of our services</a> / Child Development
            </div>
            <div className="lg:mt-20 mt-10 mb-10">
                <div className="lg:mx-16">
                    <div className="p-3">
                        <h2 className="lg:text-[2rem] text-lg text-green-600 font-sans pb-2 font-semibold">“If The World Is A Stage, Remember Our Children Are Sitting In The Front Row”</h2>
                    </div>
                </div>
            </div>
            <div className="lg:mx-16">
                <div className="grid lg:grid-cols-2 text-left lg:mx-5">
                    <div className="m-3">
                        <img className='m-auto' src={ChildDevelopmentPic} alt="" />
                    </div>
                    <div className="p-3">
                        <div>
                            <div className='text-slate-500 font-medium mb-5 leading-8'>Like adults, children can also develop any mental health conditions anytime which can be hard to identify for parents. If you think your child is having any mental issues, then LifeSpring can provide the best solution in the path of child development. We can proudly say that we are the very first mental health service provider that provides the IQ Test for children. We are also planning to add more children-based mental health development treatment very soon.</div>
                            <div className='text-slate-500 font-medium pb-5 leading-8'>If you ever see a red flag and are concerned about your child’s mental health, just don’t be late. LifeSpring can be your best companion in terms of child development service. Our experts will see your child and come up with a solution you probably have been searching for ages.</div>
                            <button className='rounded-lg px-8 py-3 text-white font-medium bg-green-700 hover:bg-lime-300 hover:text-green-600 '>Book an Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
  )
}

export default ChildDevelopement