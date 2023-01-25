import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import DashboardHeader from "./DashboardHeader";

const AddBlog = () => {
  const { user } = useAuthContext();

  const hangleAddBlogs = (e) => {
    e.preventDefault();
    const addblogs = {
      title: e.target.title.value,
      description: e.target.description.value,
    };

    console.log(addblogs);
    fetch("/api/blogs/", {
      method: "POST",
      headers: {
        authorization: `Bearer ${user.user}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(addblogs),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
  };
  return (
    <div className="space-y-6 mt-12">
      <DashboardHeader />

      <div className="bg-[#F8F8F8] h-screen">
        <div className="space-y-4 ">
          <div className="mx-auto max-w-6xl e py-20 px-12 lg:px-24 shadow-xl mb-24">
            <form onSubmit={hangleAddBlogs}>
              <label className="uppercase tracking-wide text-black  font-semibold text-3xl">
                Add New Blog
              </label>
              <div className="e   px-8 pt-2 pb-8 mb-2 flex flex-col">
                <div className="-mx-3 md:flex mb-2">
                  <div className="md:w-full px-3 text-start">
                    <label
                      className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="company"
                    >
                      Blog Title
                    </label>
                    <input
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="application-link"
                      type="text"
                      name="title"
                      placeholder="Mental Health"
                    />
                  </div>
                </div>
                <div className="-mx-3 md:flex mb-2">
                  <div className="md:w-full px-3 text-start">
                    <label
                      className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="application-link"
                    >
                      Blog Text
                    </label>
                    {/* <input
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="application-link"
                      type="text"
                      placeholder="http://...."
                    /> */}
                    <textarea
                      rows="10"
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3  mb-3  px-0 text-sm  dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                      placeholder="   Write a blog..."
                      name="description"
                      required
                    ></textarea>
                  </div>
                </div>
                {/* <div className="-mx-3 md:flex mb-2">
                  <div className="md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                    <label
                      className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="location"
                    >
                      Price
                    </label>
                    <input
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="title"
                      type="text"
                      placeholder="5000"
                    />
                  </div>
                  <div className="md:w-1/2 px-3 text-start">
                    <label
                      className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="job-type"
                    >
                      Lessons
                    </label>
                    <input
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="title"
                      type="text"
                      placeholder="10"
                    />
                  </div>
                  <div className="md:w-1/2 px-3 text-start">
                    <label
                      className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="department"
                    >
                      Hours
                    </label>
                    <input
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="title"
                      type="text"
                      placeholder="90"
                    />
                  </div>
                </div> */}
                <div className="-mx-3 md:flex mt-2">
                  <div className="md:w-full px-3">
                    <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4  rounded-full">
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
