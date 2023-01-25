import React from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import DashboardHeader from "./DashboardHeader";

const AddCourse = () => {
  const { user } = useAuthContext();

  const handleAddCourses = (e) => {
    e.preventDefault();
    const addCourse = {
      title: e.target.title.value,
      img: e.target.img.value,
      price: e.target.price.value,
      lession: e.target.lession.value,
      hour: e.target.hour.value,
    };

    fetch("/api/courses/", {
      method: "POST",
      headers: {
        authorization: `Bearer ${user.user}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(addCourse),
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
            <form onSubmit={handleAddCourses}>
              <label className="uppercase tracking-wide text-black  font-semibold text-3xl">
                Add New Course
              </label>
              <div className="e   px-8 pt-2 pb-8 mb-2 flex flex-col">
                <div className="-mx-3 md:flex mb-2">
                  <div className="md:w-full px-3 text-start">
                    <label
                      className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="company"
                    >
                      Course Title
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
                      Course Image Link
                    </label>
                    <input
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="application-link"
                      type="text"
                      name="img"
                      placeholder="http://...."
                    />
                  </div>
                </div>
                <div className="-mx-3 md:flex mb-2">
                  <div className="md:w-1/2 px-3 mb-6 md:mb-0 text-start">
                    <label
                      className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                      htmlFor="location"
                    >
                      Price
                    </label>
                    <input
                      className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                      id="price"
                      type="text"
                      name="price"
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
                      id="lession"
                      type="text"
                      name="lession"
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
                      id="hour"
                      type="text"
                      name="hour"
                      placeholder="90"
                    />
                  </div>
                </div>
                <div className="-mx-3 md:flex mt-2">
                  <div className="md:w-full px-3">
                    <button
                      type="submit"
                      className="md:w-full bg-gray-900 text-white font-bold py-2 px-4  rounded-full"
                    >
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

export default AddCourse;
