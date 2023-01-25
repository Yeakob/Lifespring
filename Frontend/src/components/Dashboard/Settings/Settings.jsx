import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../DashboardHeader";
import SettingsSidebar from "./SettingsSidebar";

const Settings = () => {
  return (
    <div className="space-y-6 mt-3">
      <DashboardHeader />

      <div className="bg-[#F8F8F8] h-screen">
        <div className="space-y-4 mt-6 ">
          <h3 className="capitalize font-extrabold text-2xl text-left pl-8">
            Settings
          </h3>

          <div className="flex flex-col text-start text-[#ABABAB]">
            <div className="basis-1/4">
              <SettingsSidebar />
            </div>
            <div className="basis-3/4 ml-8 mt-10">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
