import React from "react";
import { NavLink } from "react-router-dom";

const SettingsSidebar = () => {
  return (
    <div>
      <div className="text-start mx-8">
        <NavLink
          to="setting-profile"
          className={({ isActive }) =>
            isActive
              ? "mr-1 font-semibold px-2 py-3 text-black border-b-2 border-[#99CC33]"
              : "mr-1 font-semibold px-2 py-3 text-[#ABABAB] hover:text-black"
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="reset-password"
          className={({ isActive }) =>
            isActive
              ? "mr-1 font-semibold px-2 py-3 text-black border-b-2 border-[#99CC33]"
              : "mr-1 font-semibold px-2 py-3 text-[#ABABAB] hover:text-black"
          }
        >
          Reset Password
        </NavLink>
      </div>
    </div>
  );
};

export default SettingsSidebar;
