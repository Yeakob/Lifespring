import React from "react";
import Slider from "react-slick";
import CourseInfo from "../Courses/Course.json";
import { AiOutlinePlayCircle, AiOutlineClockCircle } from "react-icons/ai";
import "../Courses/style.css";

const HCourses = () => {
  const hcourseslist = [];
  CourseInfo.forEach((cinfo) => {
    hcourseslist.push(
      <div className="px-2">
        <div className="bg-white max-w-sm h-[22rem] mb-5 rounded-lg">
          <div className="overflow-hidden rounded-lg w-full">
            <div className="absolute z-8 pt-3 ml-3">
              <div
                className={
                  cinfo.info === "Featured"
                    ? "bg-red-600 text-sm px-1 rounded-sm text-white"
                    : "bg-blue-600 text-sm px-1 rounded-sm text-white"
                }
              >
                {cinfo.info}
              </div>
            </div>
            <img
              className="hover:scale-110 ease-in-out duration-500 w-full z-2"
              src={cinfo.img}
              alt=""
            />
          </div>
          <div className="py-5 px-2">
            <div className="pl-3 my-1 text-left">
              <p className="mb-3 font-semibold text-base text-gray-700">
                {" "}
                {cinfo.name}{" "}
              </p>
            </div>
            <div className="mt-2 text-left"></div>
            <div className="pl-3 mt-2 text-left">
              <div className="pl-3 my-3 w-full flex flex-row flex-wrap justify-start items-start">
                <p className="w-1/2 mb-1 font-semibold text-sm text-gray-500 flex flex-row">
                  {cinfo.tag3 === "" ? (
                    <AiOutlinePlayCircle className="text-green-700 hidden font-semibold mx-1 text-lg" />
                  ) : (
                    <AiOutlinePlayCircle className="text-green-700 font-semibold mx-1 text-lg" />
                  )}{" "}
                  {cinfo.tag3}{" "}
                </p>
                <p className="w-1/2 mb-1 font-semibold text-sm text-gray-500 flex flex-row">
                  {cinfo.tag2 === "" ? (
                    <AiOutlineClockCircle className="text-green-700 hidden font-semibold mx-1 text-lg" />
                  ) : (
                    <AiOutlineClockCircle className="text-green-700 font-semibold mx-1 text-lg" />
                  )}{" "}
                  {cinfo.tag2}{" "}
                </p>
              </div>
              <p className="mb-3 text-lg font-bold  text-green-700 flex flex-row pl-3">
                $ {cinfo.price} <div className="text-sm pt-1">.00</div>{" "}
              </p>
              <div
                className={
                  cinfo.over
                    ? "pos bg-lime-500 text-white p-2 absolute ml-[12.5rem] rounded-md font-semibold"
                    : " pos hidden bg-lime-500 text-white rounded-md font-semibold p-2 absolute ml-[10rem] mb-[20rem]"
                }
              >
                Add to Watchlist
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  const settings = {
    className: "center hcoursesSlide",
    speed: 500,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,

    afterChange: function (index) {
      // console.log(
      //     `Slider Changed to: ${index + 1}`
      // );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="hCourse">
      <hr className="my-10" />
      <div className="mx-10 lg:mx-20 mb-20" id="healthProffessionals">
        <div className="grid grid-cols-2 lg:h-16">
          <div className="hpTitle text-left lg:text-2xl my-3 font-sans">
            <h2>
              Our <b className="text-green-600">Courses</b>{" "}
            </h2>
          </div>
          <div className="hpViewAllBtn text-right lg:my-3 font-sans">
            <button
              type="button"
              className="m-2 h-8 w-24 text-sm font-medium text-green-500 hover:bg-green-600 focus:outline-none bg-white rounded-md border border-green-200 hover:text-white"
            >
              View All
            </button>
          </div>
        </div>
        <div className="lg:mx-5 mt-5">
          <Slider {...settings}>{hcourseslist}</Slider>
        </div>
      </div>
    </div>
  );
};

export default HCourses;
