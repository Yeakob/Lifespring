import React from "react";
import { FaUserCircle } from "react-icons/fa";

const DashboardHeader = () => {
  return (
    <div>
      <div className="flex justify-start items-center space-x-6 bg-white pl-8">
        <span>
          <FaUserCircle className="text-6xl" />
        </span>
        <span className="capitalize font-extrabold text-xl">
          howdy, al amin
        </span>
      </div>
    </div>
  );
};

export default DashboardHeader;
