import React, { useState } from "react";
import { BsFillShareFill } from "react-icons/bs";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

const SingleVideo = () => {
  const { id } = useParams();
  const [share, setShare] = useState(false);
  const shareBtnHandle = () => {
    setShare(!share);
  };
  return (
    <div className="bg-black w-full ">
      <div>
        <div className="mt-2 mr-2 float-right flex text-white">
          <button onClick={() => shareBtnHandle()}>
            <BsFillShareFill className="mr-5" />
          </button>
          {share && (
            <div className="absolute overflow-hidden bg-grey-200 ml-[-120px] mt-6 w-36">
              <div className=" bg-white text-black shadow-lg">
                <ul className="grid grid-cols-1">
                  <Link to="/" className="hover:bg-gray-200  p-2">
                    <li className=" ease-in-out flex items-center ml-4">
                      <FaFacebook className="text-xl bg-blue-700 rounded-full text-white" />
                      <span className="ml-2">Facebook</span>
                    </li>
                  </Link>
                  <Link to="/" className="hover:bg-gray-200  p-2">
                    <li className=" ease-in-out flex items-center ml-4">
                      <AiFillTwitterCircle className="text-xl bg-sky-400 rounded-full text-white" />
                      <span className="ml-2">Twitter</span>
                    </li>
                  </Link>
                  <Link to="/" className="hover:bg-gray-200  p-2">
                    <li className=" ease-in-out flex items-center ml-4">
                      <TiSocialGooglePlus className="text-xl bg-red-400 rounded-full text-white" />
                      <span className="ml-1">GooglePlus</span>
                    </li>
                  </Link>
                  <Link to="/" className="hover:bg-gray-200  p-2">
                    <li className=" ease-in-out flex items-center ml-4">
                      <FaPinterest className="text-xl bg-red-700 rounded-full text-white" />

                      <span className="ml-2">Pinterest</span>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          )}
          <Link to="/">
            <ImCross />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          {id === 1 && (
            <div>
              <iframe
                className="m-20"
                width="845"
                height="475"
                src="https://www.youtube.com/embed/NpIsCvK-03U"
                title="Ex boyfriend/girlfriend-র কাছে কি আবার ফিরে যাবো? | LifeSpring"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p className="text-white">fsdh</p>
            </div>
          )}

          {id === 2 && (
            <iframe
              className="m-20"
              width="845"
              height="475"
              src="https://www.youtube.com/embed/NpIsCvK-03U"
              title="Ex boyfriend/girlfriend-র কাছে কি আবার ফিরে যাবো? | LifeSpring"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {id === 3 && (
            <iframe
              className="m-20"
              width="845"
              height="475"
              src="https://www.youtube.com/embed/NpIsCvK-03U"
              title="Ex boyfriend/girlfriend-র কাছে কি আবার ফিরে যাবো? | LifeSpring"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
          {id === 4 && (
            <iframe
              width="845"
              height="475"
              src="https://www.youtube.com/embed/wT92vXNS6To"
              title="অভিভাবক হিসেবে আমার কী করণীয় ? | LifeSpring Adda"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
