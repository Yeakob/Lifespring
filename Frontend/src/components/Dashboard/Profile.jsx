import React, { useEffect } from "react";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import DashboardHeader from "./DashboardHeader";

const Profile = () => {
  const { user } = useAuthContext();
  const [updateUser, setUpdateUser] = useState({});

  useEffect(() => {
    fetch("/api/user/profile/", {
      method: "GET",
      headers: {
        authorization: `Bearer ${user.user}`,
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setUpdateUser(data));
  }, [user.user]);

  return (
    <div className="space-y-6 mt-12">
      <DashboardHeader />

      <div className="bg-[#F8F8F8] h-screen">
        <div className="space-y-4 mt-6 pl-8">
          <h3 className="capitalize font-extrabold text-2xl text-left">
            My Profile
          </h3>
          <div className="flex flex-row text-start text-[#ABABAB]">
            <div className="basis-1/4">
              <p className="font-semibold my-2">First Name</p>
              <p className="font-semibold my-2">Last Name</p>
              <p className="font-semibold my-2">Username</p>
              <p className="font-semibold my-2">Email</p>
              <p className="font-semibold my-2">Phone Number</p>
              <p className="font-semibold my-2">Job Title</p>
              <p className="font-semibold my-2">Bio</p>
            </div>
            <div className="basis-3/4">
              <p className="my-2">{updateUser?.user?.first}</p>
              <p className="my-2">{updateUser?.user?.last}</p>
              <p className="my-2">{updateUser?.user?.name}</p>
              <p className="my-2">{updateUser?.user?.email}</p>
              <p className="my-2">{updateUser?.user?.mobile}</p>
              <p className="my-2">{updateUser?.user?.jobTitle}</p>
              <p className="my-2">{updateUser?.user?.bio}</p>
            </div>
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
