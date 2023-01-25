import React from "react";
import { BiError } from "react-icons/bi";
import { BsPlayBtn, BsCheckCircle } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import DashboardHeader from "./DashboardHeader";

const ActivePage = () => {
  return (
    <div className="space-y-6 mt-12">
      <DashboardHeader />

      <div className="bg-[#F8F8F8] h-screen">
        <div className="space-y-4  mb-6">
          {/* <h3 className="capitalize font-extrabold text-2xl text-left pl-8">
            Dashboard
          </h3> */}

          <div className="grid lg:grid-cols-2 gap-3 mx-12">
            <div className="mt-6">
              <div className="flex justify-start space-x-6 items-center">
                <div className="flex justify-center items-center  w-14 h-14 rounded-full">
                  <BiError className="text-7xl text-orange-400" />
                </div>
                <div className="text-start">
                  <h6 className="text-2xl font-extrabold text-start">
                    Complete Your Profile
                  </h6>
                  <p className="">
                    Complete your profile so people can know more about you! Go
                    to Profile <span className="text-semibold">Settings</span>
                  </p>
                  <ul className="flex gap-4">
                    {/* <BsDot className="text-7xl text-orange-400" /> */}
                    <li>
                      Set Your{" "}
                      <span className="text-semibold">Profile Photo</span>
                    </li>
                    <li>
                      Set Your{" "}
                      <span className="text-semibold">Profile Photo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 mt-6">
              <h2>67% Complete.You are almost done!</h2>
              <div className="justify-start space-x-8 items-center">
                <div className="w-full  max-w-sm my-4 mx-auto rounded-lg overflow-hidden border border-gray-300">
                  <div
                    className="bg-yellow-300 text-xs leading-none py-1"
                    style={{ width: "67%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 mt-6 ">
          <h3 className="capitalize font-extrabold text-2xl text-left pl-8">
            Dashboard
          </h3>

          <div className="grid lg:grid-cols-3 gap-6 mx-8">
            <div className="shadow bg-white rounded-lg p-6">
              <div className="flex justify-start space-x-8 items-center">
                <div className="flex justify-center items-center border border-blue-600 w-14 h-14 rounded-full">
                  <SlBookOpen className="text-3xl text-blue-600" />
                </div>
                <div className="text-start">
                  <span className="text-3xl font-extrabold text-start">0</span>
                  <p className="capitalize  text-start">enroll courses</p>
                </div>
              </div>
            </div>

            <div className="shadow bg-white rounded-lg p-6">
              <div className="flex justify-start space-x-8 items-center">
                <div className="flex justify-center items-center border border-yellow-400 w-14 h-14 rounded-full">
                  <BsPlayBtn className="text-3xl text-yellow-400" />
                </div>
                <div className="text-start">
                  <span className="text-3xl font-extrabold">0</span>
                  <p className="capitalize">active courses</p>
                </div>
              </div>
            </div>

            <div className="shadow bg-white rounded-lg p-6">
              <div className="flex justify-start space-x-8 items-center">
                <div className="flex justify-center items-center border border-green-600 w-14 h-14 rounded-full">
                  <BsCheckCircle className="text-3xl text-green-600" />
                </div>
                <div className="text-start">
                  <span className="text-3xl font-extrabold">0</span>
                  <p className="capitalize">active courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivePage;
