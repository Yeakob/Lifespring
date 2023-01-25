import React from 'react'
// import Courses from './Courses';
import Video from './Video';
import Navbar from '../Navbar/Navbar'
import HPContent from './HPContent'
import ClientsFeedBack from './ClientsFeedBack'
import HealthBlog from './HealthBlog'
import Footer from '../Footer/Footer';
import Bannar2 from './Bannar2';
import AfterBanner from './AfterBanner';
import HCourses from './HCourses';
// import Banner from './Banner';
import OurClients from './OurClients'
import HealthServices from './HealthServices'


import GotoTopBtn from '../GotoTopBtn/GotoTopBtn';

import './common.css'
import Img from './Overcoming-Depression.png'
import { useState } from 'react';



import './common.css';




const Homepage = () => {
  const [load, setLoad] = useState(false);
  const [hide, sethide] = useState(true)

  return (
    <div>
      {load === false && <div id="pop" className={hide === true ? 'pop_Up' : 'hidden'}>
        <div className="contain">
          <button id="close" onClick={() => {
            setLoad(true)
            sethide(false)
          }} className="button">&times;</button>
          <div className="top">
            <div >
              Say Goodbye to <br /> Depression
            </div>
            <img className='img' src={Img} alt="" />
          </div>
          <div className="form">
            <div className="elem first">Preview Of the book</div>
            <div className="elem"><button className="b1">Your email</button></div>
            <div className="elem"><button className="b2">Submit</button></div>
            <div className="elem last">Terms and conditions</div>
          </div>

        </div>
      </div>}
      <Navbar />
      <Bannar2 />
      {/* <Banner /> */}
      <AfterBanner />
      {/* <Courses /> */}
      <HCourses />
      <HPContent />
      <OurClients />
      <HealthServices />
      <ClientsFeedBack />
      <HealthBlog />
      <Video />
      <GotoTopBtn />
      <Footer />
    </div>
  )
}
export default Homepage