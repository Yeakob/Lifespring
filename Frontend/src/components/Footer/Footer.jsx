import React from 'react'
import { BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa'
import footerLogo from '../static/img/lifespring-footer-logo.png'
import sslCommerzLogo from '../static/img/SSLCOMMERZLogo.png'
const Footer = () => {
    return (
        <div>
            <hr className='mt-10' />
            <div className='py-10 lg:px-16 px-4' id="fcontent1">
                <div className="grid lg:grid-cols-7 px-5">
                    <div id="col1" className='col-span-2'>
                        <div className='lg:m-3' id="col1element">
                            <div className="grid grid-cols-2">
                                <img src={footerLogo} alt="" />
                                <div></div>
                            </div>
                            <div className='text-left'>
                                <h6 className='py-6 text-gray-700 text-lg'><b>LifeSpring Consultancy Limited</b></h6>
                                <div className="font-sans text-gray-500 leading-4">
                                    <b className="mt-5">Main Branch</b>
                                    <br />
                                    House # 55/2,
                                    <br />
                                    Union Heights, Level # 6 & 14,
                                    <br />
                                    West Panthapath, Dhaka-1205,
                                    <br />
                                    Bangladesh.
                                    <br /><br />
                                    <b className="mt-5">Banani Branch</b>
                                    <br />
                                    House # 108, Road # 12, Block # E,
                                    <br />
                                    Manama Urban Forest Center, Level # 4,
                                    <br />
                                    Banani, Dhaka-1213, Bangladesh

                                    <br /><br />
                                    <b className="mt-5">Ph : +8809638 505 505 , <br /> +8801763 438 148</b>
                                    <br />
                                    contact@lifespringint.com
                                </div>
                            </div>
                            <div className='py-6 text-left font-sans text-gray-500'>
                                <p>© 2022 LifeSpring. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                    <div id="col2" className='col-span-2'>
                        <div className='m-3 text-left' id="col2element">
                            <div className="grid grid-cols-2">
                                <div className="m-2">
                                    <div className="mb-3">
                                        <h3 className="mb-3"> <b> Links </b> </h3>
                                        <p className="mb-3 font-sans text-gray-500"> News & Blogs </p>
                                        <p className="mb-3 font-sans text-gray-500"> Terms of Service </p>
                                        <p className='font-sans text-gray-500'> Free Mental Health Tests </p>
                                    </div>

                                </div>
                                <div className="m-2">
                                    <div className="mb-3">
                                        <h3 className="mb-3"> <b> About </b> </h3>
                                        <p className="mb-3 font-sans text-gray-500"> About Us </p>
                                        <p className="mb-3 font-sans text-gray-500"> Courses </p>
                                        <p className="mb-3 font-sans text-gray-500"> Refund Policy </p>
                                        <p className='font-sans text-gray-500'> Privacy Policy </p>
                                    </div>
                                </div>
                                <div id="socialLinks" className='grid grid-cols-4 gap-2'>
                                    <a className='m-auto p-3 text-blue-700 text-xl' target="blank" href={'https://www.facebook.com/lifespringinstitute/'}> <BsFacebook /> </a>
                                    <a className='m-auto p-3 text-red-700 text-xl' target="blank" href={'https://www.youtube.com/channel/UCIhnNMshTmGQmkJaBLGe5aw'}> <BsYoutube /> </a>
                                    <a className='m-auto p-3 hover:text-green-600 text-xl' target="blank" href={'https://www.instagram.com/lifespringinstitute/'}> <BsInstagram /> </a>
                                    <a className='m-auto p-3 text-blue-400 text-xl' target="blank" href={"https://www.linkedin.com/company/lifespring/"}> <FaLinkedinIn /> </a>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-3" id="col3">
                        <div className="lg:m-5">
                            <div classNmae="mapouter">
                                <div className="gmap_canvas">
                                    <iframe title='googleMap' id="gmap_canvas" className='h-[450px] w-full' src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=k&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-5">
                    <div className="lg:px-10">
                        <div className="lg:px-10">
                            <div className="lg:p-3">
                            <div className="lg:px-5">
                                <img className='m-auto' src={sslCommerzLogo} alt="" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div id="fcontent2">

            </div>
        </div>
    )
}

export default Footer