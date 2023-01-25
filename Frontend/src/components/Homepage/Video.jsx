import React from "react";
import "./ss.css";
import { SlControlPlay } from "react-icons/sl";
import { Link } from "react-router-dom";

const Video = () => {
  // const [video, setVideo] = useState(false);
  // const video2 = () => {
  //     setVideo(false);
  // }
  return (
    <div className="mt-5">
      <div className="flex justify-between mx-20">
        <p className="text-3xl">
          Our <span className="text-green-700">Videos</span>
        </p>
      </div>

      <div className="lg:mx-20 mx-5">
        <div className="grid lg:grid-cols-4 lg:gap-8">
          <div className="my-5">
          <Link to="/singleVideo/1">
            <a href="https://www.lifespringint.com/#lg=1&slide=0">
              <div className="">
                <div className="box hover:scale-105 ease-in-out duration-1000">
                  <img
                    src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/12/mqdefault.jpg"
                    className="img-video"
                    alt=""
                  />

                  <div className="video-container">
                    <div className="video-animation">
                      <p className="icon">
                        <SlControlPlay className="text-4xl font-bold text-white" />
                      </p>
                    </div>
                  </div>
                </div>
                <p className="font-bold text-gray-400 lg:text-xl">
                  প্রেসার বাড়লে যা করবেন
                </p>
              </div>
            </a>
          </Link>
          </div>
          <div className="my-5">
          <Link to="/singleVideo/2">
            <a href="https://www.lifespringint.com/#lg=1&slide=0">
              <div className="">
                <div className="box hover:scale-105 ease-in-out duration-1000">
                  <img
                    src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2022/01/%E0%A6%AE%E0%A7%87%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%A6%E0%A7%87%E0%A6%B0-%E0%A6%85%E0%A6%A4%E0%A6%BF%E0%A6%B0%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%A4-%E0%A6%B8%E0%A6%BE%E0%A6%A6%E0%A6%BE-%E0%A6%B8%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AC.jpg"
                    className="img-video"
                    alt=""
                  />

                  <div className="video-container">
                    <div className="video-animation">
                      <p className="icon">
                        <SlControlPlay className="text-4xl font-bold text-white" />
                      </p>
                    </div>
                  </div>
                </div>
                <p className="font-bold text-gray-400 lg:text-xl">
                  মেয়েদের অতিরিক্ত সাদা স্রাব
                </p>
              </div>
            </a>
          </Link>
          </div>
          <div className="my-5">
          <Link to="/singleVideo/3">
            <a href="https://www.lifespringint.com/#lg=1&slide=0">
              <div className="">
                <div className="box hover:scale-105 ease-in-out duration-1000">
                  <img
                    src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2022/01/biye.jpg"
                    className="img-video"
                    alt=""
                  />

                  <div className="video-container">
                    <div className="video-animation">
                      <p className="icon">
                        <SlControlPlay className="text-4xl font-bold text-white" />
                      </p>
                    </div>
                  </div>
                </div>
                <p className="font-bold text-gray-400 lg:text-xl">
                  বিয়ের পরেও তাকে মনে পড়ে
                </p>
              </div>
            </a>
          </Link>
          </div>
          <div className="my-5">
          <Link to="/singleVideo/4">
            <div className="">
              <div className="box hover:scale-105 ease-in-out duration-1000">
                <img
                  src="https://lifespringcdn.s3.amazonaws.com/wp-content/uploads/2021/12/mqdefault-4.jpg"
                  className="img-video"
                  alt=""
                />

                <div className="video-container">
                  <div className="video-animation">
                    <p className="icon">
                      <SlControlPlay className="text-4xl font-bold text-white" />
                    </p>
                  </div>
                </div>
              </div>
              <p className="font-bold text-gray-400 lg:text-xl">
                অভিভাবক হিসেবে করণীয়
              </p>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
