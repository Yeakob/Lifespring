import React from "react";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import "./style.css";
import { Rotate as Hamburger } from "hamburger-react";
import SmallScreen from "./SmallScreen";
import { useState } from "react";
import Logo from "../static/img/lifespring-footer-logo.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
// import Blogs from "../Blogs/Blogs";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const [color, setColor] = useState(false);
  const ChangeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", ChangeColor);
  const [click, setClick] = useState(false);

  return (
    <div
      className={
        color
          ? "navDropFromUpAnim w-full z-10 h-auto flex justify-center items-center flex-wrap flex-col fixed top-0 "
          : "w-full h-auto flex justify-center items-center flex-wrap flex-col"
      }
    >
      <div
        className="w-full h-auto flex justify-center items-center flex-wrap p-2 "
        style={{ backgroundColor: "#1C6732" }}
      >
        <div className="lg:w-1/2 w-full flex justify-center items-center flex-row flex-wrap lg:p-0 p-[.1rem]">
          <div className="ttext cursor-pointer text-white hover:text-yellow-400 trns font-semibold px-3 bder flex flex-row justify-center items-center">
            <AiFillPhone className="text-yellow-400" /> +8809638 505 505{" "}
          </div>
          <div className="ttext cursor-pointer text-white hover:text-yellow-400 trns font-semibold px-3 bder">
            +8801763 438 148{" "}
          </div>
          <div className="ttext cursor-pointer text-white hover:text-yellow-400 trns font-semibold px-3 flex flex-row justify-center items-center">
            <AiOutlineMail className="font-bold mx-1 text-yellow-400" />
            Email
          </div>
        </div>
        <div className="lg:w-1/2 w-full flex justify-center items-center flex-row flex-wrap lg:p-0 p-[.1rem]">
          <div className="text-sm text-white cursor-pointer hover:text-yellow-400 trns font-semibold px-2 bder">
            {" "}
            {user ? (
              <Link to="/dashboard"> Dashboard </Link>
            ) : (
              <Link to="/login"> Log in </Link>
            )}
          </div>
          <div className="text cursor-pointer text-white hover:text-yellow-400 trns font-semibold px-3 bder">
            {user ? (
              <button onClick={() => logout()}>Logout</button>
            ) : (
              <Link to="/signup"> Register </Link>
            )}
          </div>
          <div className="text cursor-pointer text-white hover:text-yellow-400 trns font-semibold px-3 ">
            <Link
              className=""
              target="blank"
              to="https://www.facebook.com/lifespringinstitute/"
            >
              {" "}
              <BsFacebook />{" "}
            </Link>
          </div>
          <div className="text cursor-pointer text-white hover:text-yellow-400 trns font-semibold px-3 ">
            <Link
              className=""
              target="blank"
              to="https://www.youtube.com/channel/UCIhnNMshTmGQmkJaBLGe5aw"
            >
              {" "}
              <BsYoutube />{" "}
            </Link>
          </div>
          <div className="text cursor-pointer text-white hover:text-yellow-400 trns font-semibold px-3 ">
            <Link
              className=""
              target="blank"
              to="https://www.instagram.com/lifespringinstitute/"
            >
              {" "}
              <BsInstagram />{" "}
            </Link>
          </div>
          <div className="text cursor-pointer text-white hover:text-yellow-400 trns font-semibold px-3 ">
            <Link
              className=""
              target="blank"
              to="https://www.linkedin.com/company/lifespring/"
            >
              {" "}
              <FaLinkedinIn />{" "}
            </Link>
          </div>
        </div>
      </div>

      <div
        className={
          color ? "w-full h-[5rem] bg-white" : "w-full h-[5rem] bg-[#E4FAFF]"
        }
      >
        <div className=" w-full flex flex-row justify-between items-center p-2">
          <div className=" lg:w-1/5 h-4/5 lg:pl-28 flex flex-row">
            <Link to="/">
              {" "}
              <img className="w-[11rem]" src={Logo} alt="" />{" "}
            </Link>
          </div>
          <div className="lg:hidden block trans">
            <Hamburger toggled={click} toggle={setClick} />
            {click === true && <SmallScreen />}
          </div>

          <div className=" lg:block hidden w-4/5 pl-[18rem] flex-row justify-end items-center py-2">
            <div>
              <ul className="w-full">
                <li className="dropdown inline px-4 text-black hover:text-blue-700 cursor-pointer font-semibold text-base tracking-wide">
                  <button className="btn">
                    {" "}
                    Professionals <div className="ub"></div>
                  </button>
                  <div className="dropdown-menu z-10 absolute hidden  h-auto  pt-4">
                    <ul className="block w-[17rem] ml-[5rem] sty bg-white px-10 shadow-lg rounded-sm py-2 justify-start items-start">
                      {/* <li onClick={()=>{}} className=" py-2.5"><Link className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer">All Department</Link></li> */}
                      <li className=" py-2.5">
                        <Link
                          to="/allProffesionals"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          All Department
                        </Link>
                      </li>
                      <li className=" py-2.5">
                        <Link
                          to="/psychiatrist"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Psychiatris
                        </Link>
                      </li>
                      <li className=" py-2.5">
                        <Link
                          to="/psychologist"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Psychologist
                        </Link>
                      </li>
                      <li className=" py-2.5">
                        <Link
                          to="/counselor"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Counselor
                        </Link>
                      </li>
                      <li className=" py-2.5">
                        <Link
                          to="/child"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Child and Adolescent
                        </Link>
                      </li>
                      <li className=" py-2.5">
                        <Link
                          to="/dermatologist"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Dermatologist
                        </Link>
                      </li>
                      <li className=" py-2.5">
                        <Link
                          to="/sexual-health"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Sexual Health
                        </Link>
                      </li>
                      <li className=" py-2.5">
                        <Link
                          to="/gynechologist"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Gynechologist
                        </Link>
                      </li>
                      <li className=" py-2.5">
                        <Link
                          to="/internal-med"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Internal Medicine
                        </Link>
                      </li>
                      <li className=" py-2.5">
                        <Link
                          to="/therapist"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Development Therapist
                        </Link>
                      </li>
                      <li className=" py-2.5">
                        <Link
                          to="/ent"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          ENT
                        </Link>
                      </li>
                      <li className=" py-2.5">
                        <Link
                          to="/nutritionist"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Nutritionist
                        </Link>
                      </li>
                      <li className=" py-2.5">
                        <Link
                          to="/paediatrics"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Paediatrics
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown inline px-4 text-black hover:text-blue-700 cursor-pointer font-semibold text-base tracking-wide">
                  <button className="btn">
                    {" "}
                    <Link to="/listOfServices"> Services </Link>{" "}
                    <div className="ub"></div>
                  </button>
                  <div className="dropdown-menu z-10 absolute hidden h-auto pt-4">
                    <ul className="block w-[17rem] mt-0 sty bg-white px-10 shadow-lg rounded-sm py-2 justify-start items-start ml-[12rem]">
                      <li className="py-2.5">
                        <Link
                          to="/psychologicalCounseling"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Psychological Counseling
                        </Link>
                      </li>
                      <li className="py-2.5">
                        <Link
                          to="/corporateService"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Corporate Service
                        </Link>
                      </li>
                      <li className="py-2.5">
                        <Link
                          to="/childDevelopment"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Child Development
                        </Link>
                      </li>
                      <li className="py-2.5">
                        <Link
                          to="/mentalHealthTest"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Free Mental health Test
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="inline px-4 text-black hover:text-blue-600 cursor-pointer font-semibold text-base tracking-wide">
                  {" "}
                  <Link to="/courses">
                    {" "}
                    <button className="btn">
                      Courses<div className="ub1"></div>
                    </button>
                  </Link>
                </li>

                <li className="inline px-4 text-black hover:text-blue-600 cursor-pointer font-semibold text-base tracking-wide">
                  <button className="btn">
                    <Link to="/blog">Blogs</Link> <div className="ub1"></div>
                  </button>
                </li>

                {/* <li className="inline px-4 text-black hover:text-blue-600 cursor-pointer font-semibold text-base tracking-wide">
                  {" "}
                  <Link to="/blog">
                    {" "}
                    <button className="btn">
                      Blogs<div className="ub1"></div>
                    </button>
                  </a>
                </li> */}

                <li className="dropdown inline px-4 text-black hover:text-blue-700 cursor-pointer font-semibold text-base tracking-wide">
                  <button className="btn">
                    Testimonials<div className="ub"></div>
                  </button>
                  <div className="dropdown-menu z-10 absolute hidden h-auto pt-4">
                    <ul className="block w-[17rem] mt-0 sty bg-white px-10 shadow-lg rounded-sm  py-2 justify-start items-start ml-[30rem]">
                      <li className="py-2.5">
                        <Link
                          to="/clientsFeedback"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Clients Feedback
                        </Link>
                      </li>
                      <li className="py-2.5">
                        <Link
                          to="/clientsReview"
                          className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                        >
                          Purify Class Review
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto"></div>
    </div>
  );
};

export default Navbar;
