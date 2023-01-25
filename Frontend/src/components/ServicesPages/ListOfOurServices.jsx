import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import "../static/css/listOfservices/listOfServices.css"

const ListOfOurServices = () => {
    return (
        <div>
            <Navbar />
            <div className='w-full h-auto bg-slate-100 py-4 text-start px-10 text-md font-mono text-slate-600 font-semibold'>
                <a className='hover:text-black' href={"/"}>Home</a> / List of our services
            </div>
            <div className='lg:my-20'>
                <div className="lg:mx-24 mt-10 px-10">
                    <div className="grid lg:grid-cols-3">
                        <div className="max-w-sm p-2 rounded-lg">
                            <div>
                                <div className='cardImage rounded-b-lg h-56'>
                                    <p className='text-xl font-semibold mt-36 text-white p-3 absolute leading-3'>Psycological Counselling</p>
                                </div>

                                <div className="text-left">
                                    <p className="mt-8 mb-3 leading-7 font-sans font-medium text-gray-500 dark:text-gray-400">LifeSpring is a comprehensive mental health service provider in the country with psychological counseling being one of its core services provided by the respective proficient professionals. Counseling helps with emotional balance, self-confidence, assertiveness, mitigating anxiety and</p>
                                    <a href={"/"} className="inline-flex items-center py-3 px-8 text-md font-medium text-center text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="max-w-sm p-2 rounded-lg">
                            <div>
                                <div className='cardImage1 rounded-b-lg h-56'>
                                    <p className='text-xl font-semibold mt-36 text-white p-3 absolute leading-3'>Corporate Service</p>
                                </div>
                                <div className="text-left">
                                    <p className="mt-8 mb-3 leading-7 font-sans font-medium text-gray-500 dark:text-gray-400">LifeSpring also provides mental support to corporate teams with an aim to assist professionals reach their true potential. There are two types of corporate services we are currently providing. It includes regular psychological services, training and workshops to improve employees' productivity, work-life balance and
                                    </p>
                                    <a href={"/"} className="inline-flex items-center py-3 px-8 text-md font-medium text-center text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="max-w-sm p-2 rounded-lg ">
                            <div>
                                <div className='cardImage2 rounded-b-lg h-56'>
                                    <p className='text-xl font-semibold mt-36 text-white p-3 absolute leading-3'>Child Development</p>
                                </div>
                                <div className="text-left">
                                    <p className="mt-8 mb-3 font-sans leading-7 font-medium text-gray-500 dark:text-gray-400">LifeSpring can be your best companion in terms of child development. Our experts provide solution you probably have been searching for ages. We are working relentlessly to provide diagnosis and intervention for developmental delays in children, autism, and other neurodevelopmental disorders.</p>
                                    <a href={"/"} className="inline-flex items-center py-3 px-8 text-md font-medium text-center text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ListOfOurServices