import React from "react";
import { NavLink } from "react-router-dom";

const EnrolledSidebar = () => {
  return (
    <div>
      <div className="text-start mx-8">
        <NavLink
          to="all-courses"
          className={({ isActive }) =>
            isActive
              ? "mr-1 font-semibold px-2 py-3 text-black border-b-2 border-[#99CC33]"
              : "mr-1 font-semibold px-2 py-3 text-[#ABABAB] hover:text-black"
          }
        >
          All Courses
        </NavLink>
        <NavLink
          to="active-courses"
          className={({ isActive }) =>
            isActive
              ? "mr-1 font-semibold px-2 py-3 text-black border-b-2 border-[#99CC33]"
              : "mr-1 font-semibold px-2 py-3 text-[#ABABAB] hover:text-black"
          }
        >
          Active Courses
        </NavLink>
        <NavLink
          to="complete-courses"
          className={({ isActive }) =>
            isActive
              ? "mr-1 font-semibold px-2 py-3 text-black border-b-2 border-[#99CC33]"
              : "mr-1 font-semibold px-2 py-3 text-[#ABABAB] hover:text-black"
          }
        >
          Completed Courses
        </NavLink>
      </div>
    </div>
  );
};

export default EnrolledSidebar;
