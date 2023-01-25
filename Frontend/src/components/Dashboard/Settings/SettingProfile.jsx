import React from "react";
import img from "../../../assets/images/cover-photo.jpg";
import user from "../../../assets/images/avatar-placeholder.jpg";
import { useAuthContext } from "../../../hooks/useAuthContext";

const SettingProfile = () => {
  const { user } = useAuthContext();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const updateProfile = {
      first: e.target.first.value,
      last: e.target.last.value,
      jobTitle: e.target.jobTitle.value,
      bio: e.target.bio.value,
      facebook: e.target.facebook.value,
      twitter: e.target.twitter.value,
      instagram: e.target.instagram.value,
      likedin: e.target.likedin.value,
      pinterest: e.target.pinterest.value,
      youtube: e.target.youtube.value,
      github: e.target.github.value,
    };

    fetch("/api/user/profile/", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${user.user}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProfile),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };
  return (
    <div>
      <form onSubmit={handleUpdateProfile}>
        <div className="grid lg:grid-cols-2 gap-6 mx-8">
          <div className="shadow bg-white rounded-lg p-6">
            <div className="flex justify-start space-x-8 items-center">
              <div>
                <h1 className="text-xl font-semibold text-black">
                  Contact information
                </h1>
                <p className="capitalize font-semibold">
                  Provide your details below to create your account profile
                </p>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 mt-3">
              <div className="flex justify-start space-x-8 items-center">
                <div>
                  <label className="text-black font-semibold">First Name</label>
                  <input
                    type="text"
                    name="first"
                    className="bg-[#EFEFEF] border-0 rounded w-auto"
                  />
                </div>
              </div>

              <div className="flex justify-start space-x-8 items-center">
                <div>
                  <label className="text-black font-semibold">Last Name</label>
                  <input
                    type="text"
                    name="last"
                    className="bg-[#EFEFEF] border-0 rounded w-auto"
                  />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-3">
              <div className="flex justify-start space-x-8 items-center">
                <div>
                  <label className="text-black font-semibold">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    className="bg-[#EFEFEF] border-0 rounded w-auto"
                  />
                </div>
              </div>

              <div className="flex justify-start space-x-8 items-center">
                <div>
                  <label className="text-black font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="bg-[#EFEFEF] border-0 rounded w-auto"
                  />
                </div>
              </div>
            </div>

            <div className=" gap-6 mt-3">
              <label className="text-black font-semibold">Bio</label>
              <div>
                <textarea
                  type="text"
                  name="bio"
                  className="bg-[#EFEFEF] border-0 rounded w-full"
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-3">
              <div className="flex justify-start space-x-8 items-center">
                <div>
                  <label className="text-black font-semibold">Facebook</label>
                  <input
                    type="text"
                    name="facebook"
                    className="bg-[#EFEFEF] border-0 rounded w-auto"
                  />
                </div>
              </div>

              <div className="flex justify-start space-x-8 items-center">
                <div>
                  <label className="text-black font-semibold">Twitter</label>
                  <input
                    type="text"
                    name="twitter"
                    className="bg-[#EFEFEF] border-0 rounded w-auto"
                  />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-3">
              <div className="flex justify-start space-x-8 items-center">
                <div>
                  <label className="text-black font-semibold">Instagram</label>
                  <input
                    type="text"
                    name="instagram"
                    className="bg-[#EFEFEF] border-0 rounded w-auto"
                  />
                </div>
              </div>

              <div className="flex justify-start space-x-8 items-center">
                <div>
                  <label className="text-black font-semibold">Linkedin</label>
                  <input
                    type="text"
                    name="likedin"
                    className="bg-[#EFEFEF] border-0 rounded w-auto"
                  />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-3">
              <div className="flex justify-start space-x-8 items-center">
                <div>
                  <label className="text-black font-semibold">Pinterest</label>
                  <input
                    type="text"
                    name="pinterest"
                    className="bg-[#EFEFEF] border-0 rounded w-auto"
                  />
                </div>
              </div>

              <div className="flex justify-start space-x-8 items-center">
                <div>
                  <label className="text-black font-semibold">Youtube</label>
                  <input
                    type="text"
                    name="youtube"
                    className="bg-[#EFEFEF] border-0 rounded w-auto"
                  />
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mt-3">
              <div className="flex justify-start space-x-8 items-center">
                <div>
                  <label className="text-black font-semibold">Github</label>
                  <input
                    type="text"
                    name="github"
                    className="bg-[#EFEFEF] border-0 rounded w-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 2nd col */}
          <div className="shadow bg-white rounded-lg p-6 h-min">
            <div className=" justify-start items-center">
              <div>
                <h1 className="text-xl font-semibold text-black">Photo</h1>
                <p className="capitalize font-semibold">
                  Upload your profile photo.
                </p>
              </div>

              <div className="">
                <div
                  className="grid grid-rows-2 grid-flow-col rounded-md"
                  style={{ height: "180px", backgroundImage: `url(${img})` }}
                >
                  <div className="text-end p-4">
                    <button className="btn bg-[#241436] rounded-full p-2">
                      Delete Icon
                    </button>
                  </div>
                  <div>
                    <div className="grid grid-cols-2">
                      <div>
                        <div className="text-start p-4">
                          <img
                            className="btn bg-[#EEEEEE] rounded-full p-2"
                            src={user}
                            alt=""
                            style={{ width: "130px", height: "130px" }}
                          />
                        </div>
                      </div>
                      <div className="text-end">
                        <div className="text-end p-4">
                          <button className="btn bg-[#99CC33] hover:bg-[#2F52C4] rounded-md p-2 text-white">
                            Upload Cover Photo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-end">
                  <p>Profile Photo Size: 200x200 pixels, </p>
                  <p>Cover Photo Size: 700x430 pixels,</p>
                </div>
              </div>

              <div className="mt-7">
                <label className="text-black font-semibold">
                  Display name publicly as
                </label>
                <div>
                  <select className="w-full rounded-md bg-[#EFEFEF] border-[#E5E5E5]">
                    <option value="name">name</option>
                  </select>
                  <p className="text-[#696981]">
                    The display name is shown in all public fields, such as the
                    author name, instructor name, student name, and name that
                    will be printed on the certificate.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="btn bg-[#256F46] text-white rounded-md w-1/2 px-5 py-3 hover:bg-[#74C13B] hover:text-black"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingProfile;
