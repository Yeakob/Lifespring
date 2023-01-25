import { useState } from "react";
import {
  AiOutlineUserAdd,
  AiOutlineBars,
  AiOutlineClose,
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineHeart,
  AiOutlineStar,
  AiOutlineShoppingCart,
  AiOutlineNodeIndex,
  AiOutlineContainer,
  AiOutlinePaperClip,
} from "react-icons/ai";
import { SiProtocolsdotio } from "react-icons/si";
import { MdOutlineDashboard } from "react-icons/md";
import { BsBook } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
// import logo from '../image/30-removebg-preview.png';

const Sidebar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [open, setOpen] = useState(false);

  return (
    <div
      className={
        open
          ? "shadow space-y-4 pt-8 min-h-screen w-[80px]  bg-white z-40"
          : "shadow space-y-4  min-h-screen w-[280px]  bg-white z-40"
      }
    >
      

      {/* menu start here */}

      <div className="">
      <div className="flex  items-center">
        {open ? (
          <button
            onClick={() => setOpen(!open)}
            className="pb-2 ml-8 block cursor-pointer"
          >
            <AiOutlineBars className="text-2xl text-[#99CC33] " />
          </button>
        ) : (
          <div className="flex justify-between">
            <Link to="/">
              <div className="flex justify-center items-center">
                <img
                  src={"/img/30-removebg-preview.png"}
                  width="200px"
                  height="100px"
                  alt=""
                />
              </div>
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="px-4 cursor-pointer"
            >
              <AiOutlineClose className="text-3xl text-[#99CC33]" />
            </button>
          </div>
        )}
      </div>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8"
              : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold"
          }
        >
          <MdOutlineDashboard className="text-2xl" />
          <span className={`ml-3 ${open && "hidden"}`}>Dashboard</span>
        </NavLink>
        {user?.user && user?.role === "admin" && (
          <NavLink
            to="addProfessionals"
            className={({ isActive }) =>
              isActive
                ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8 mt-2"
                : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold mt-2"
            }
          >
            <SiProtocolsdotio className="text-2xl" />
            <span className="ml-3">Professionals</span>
          </NavLink>
        )}
        <NavLink
          to="addCategory"
          className={({ isActive }) =>
            isActive
              ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8 mt-2"
              : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold mt-2"
          }
        >
          <AiOutlineNodeIndex className="text-2xl" />
          <span className={`ml-3 ${open && "hidden"}`}>Category</span>
        </NavLink>
        {user?.user && user?.role === "admin" && (
          <NavLink
            to="addCourse"
            className={({ isActive }) =>
              isActive
                ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8 mt-2"
                : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold mt-2"
            }
          >
            <AiOutlineContainer className="text-2xl" />
            <span className="ml-3">Add Courses</span>
          </NavLink>
        )}
        {user?.user && user?.role === "admin" && (
          <NavLink
            to="addBlogs"
            className={({ isActive }) =>
              isActive
                ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8 mt-2"
                : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold mt-2"
            }
          >
            <AiOutlinePaperClip className="text-base" />
            <span className="ml-3">Blogs</span>
          </NavLink>
        )}

        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive
              ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8 mt-2"
              : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold mt-2"
          }
        >
          <AiOutlineUserAdd className="text-2xl" />
          <span className={`ml-3 ${open && "hidden"}`}>My Profile</span>
        </NavLink>

        <NavLink
          to="enrolled-courses"
          className={({ isActive }) =>
            isActive
              ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8 mt-2"
              : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold mt-2"
          }
        >
          <BsBook className="text-2xl" />
          <span className={`ml-3 ${open && "hidden"}`}>Enroll Course</span>
        </NavLink>

        <NavLink
          to="wishlist"
          className={({ isActive }) =>
            isActive
              ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8 mt-2"
              : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold mt-2"
          }
        >
          <AiOutlineHeart className="text-2xl" />
          <span className={`ml-3 ${open && "hidden"}`}>Wishlist</span>
        </NavLink>

        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive
              ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8 mt-2"
              : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold mt-2"
          }
        >
          <AiOutlineStar className="text-2xl" />
          <span className={`ml-3 ${open && "hidden"}`}>Reviews</span>
        </NavLink>

        <NavLink
          to="purchase-history"
          className={({ isActive }) =>
            isActive
              ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3 font-semibold pl-8 mt-2"
              : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold mt-2"
          }
        >
          <AiOutlineShoppingCart className="text-2xl" />
          <span className={`ml-3 ${open && "hidden"}`}>Purchase History</span>
        </NavLink>

        {/* <hr /> */}

        <NavLink
          to="settings"
          className={({ isActive }) =>
            isActive
              ? "bg-[#99CC33] text-white flex justify-start items-center space-x-2 rounded-md p-3  pl-8 font-semibold mt-2"
              : "text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] font-semibold mt-2"
          }
        >
          <AiOutlineSetting className="text-2xl" />
          <span className={`ml-3 ${open && "hidden"}`}>Settings</span>
        </NavLink>

        <button
          onClick={() => logout()}
          className="text-[#99CC33] flex justify-start items-center space-x-2 rounded-md p-3 pl-8 hover:bg-[#EDF0F9] w-full"
        >
          <AiOutlineLogout className="text-2xl text-[#99CC33]" />
          <span className={`ml-3 ${open && "hidden"}`}>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;