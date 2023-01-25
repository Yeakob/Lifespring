import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardHome = () => {
  return (
    <div className="flex justify-start min-h-screen">
      <Sidebar />
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardHome;
