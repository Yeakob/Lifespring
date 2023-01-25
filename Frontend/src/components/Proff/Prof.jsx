import React, { useState } from "react";
import "../static/css/Homepage/hpcontent.css";
import Info from "./Info.json";
import Card from "./Card";
import "./style.css";
import { AiOutlineDown } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Prof = () => {
  const [active, setactive] = useState("ALL");

  return (
    <div>
      <Navbar />
      <div className="w-full h-auto bg-slate-100 py-4 text-start px-10 text-md font-mono text-slate-600 font-semibold">
        <a className="hover:text-black" href={"/"}>
          Home
        </a>{" "}
        / Professionals
      </div>
      <div className=" w-full h-auto flex flex-col justify-center items-center flex-wrap">
        <div className="bigScreen w-full h-auto px-10 pt-8 flex justify-center items-center flex-row flex-wrap sm:hidden lg:block md:block text-center">
          <button
            className="duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight"
            onClick={() => {
              setactive("ALL");
            }}
          >
            All
          </button>
          <button
            className="duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight"
            onClick={() => {
              setactive("Child");
            }}
          >
            Child and Adolescent Psychiatrist
          </button>
          <button
            className="duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight"
            onClick={() => {
              setactive("Counselor");
            }}
          >
            Counselor
          </button>
          <button
            className="duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight"
            onClick={() => {
              setactive("Dermatologist");
            }}
          >
            Dermatologist
          </button>
          <button
            className="duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight"
            onClick={() => {
              setactive("Therapist");
            }}
          >
            Developmental Therapist
          </button>
          <button
            className="duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight"
            onClick={() => {
              setactive("ENT");
            }}
          >
            ENT
          </button>
          <button
            className="duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight"
            onClick={() => {
              setactive("Gynecologist");
            }}
          >
            Gynecologist
          </button>
          <button
            className="duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight"
            onClick={() => {
              setactive("Internal");
            }}
          >
            Internal Medicine
          </button>
          <button
            className="duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight"
            onClick={() => {
              setactive("Psychiatrist");
            }}
          >
            Psychiatrist
          </button>
          <button
            className="duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight"
            onClick={() => {
              setactive("Psychologist");
            }}
          >
            Psychologist
          </button>
          <button
            className="duration-500 text-lg font-mono py-2 font-semibold hover:text-black text-slate-500 px-3 tracking-tight"
            onClick={() => {
              setactive("Sexual");
            }}
          >
            Sexual Health
          </button>
        </div>
        <div className="h-auto flex justify-center items-center lg:hidden md:hidden sm:block text-center p-5 w-1/2">
          <li className="dropdown inline px-4 text-slate-500 hover:text-blue-700 cursor-pointer font-semibold text-base tracking-wide">
            <button className=" border-2 px-6 w-full p-2 flex rounded-md flex-row justify-between">
              Professionals{" "}
              <div className="pt-1">
                <AiOutlineDown />
              </div>
            </button>
            <div className="dropdown-menu z-10 absolute hidden h-auto  pt-4">
              <ul className="block w-[21rem] sty bg-white px-10 shadow-lg rounded-sm py-2 justify-start items-start">
                <li
                  onClick={() => {
                    setactive("ALL");
                  }}
                  className=" py-2.5"
                >
                  <a
                    href="#!"
                    className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                  >
                    All Department
                  </a>
                </li>
                <li
                  onClick={() => {
                    setactive("Psychiatrist");
                  }}
                  className=" py-2.5"
                >
                  <a
                    href="#prof"
                    className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                  >
                    Psychiatris
                  </a>
                </li>
                <li
                  onClick={() => {
                    setactive("Psychologist");
                  }}
                  className=" py-2.5"
                >
                  <a
                    href="psy"
                    className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                  >
                    Psychologist
                  </a>
                </li>
                <li
                  onClick={() => {
                    setactive("Counselor");
                  }}
                  className=" py-2.5"
                >
                  <a
                    href="#prof"
                    className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                  >
                    Counselor
                  </a>
                </li>
                <li
                  onClick={() => {
                    setactive("Child");
                  }}
                  className=" py-2.5"
                >
                  <a
                    href="#prof"
                    className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                  >
                    Child and Adolescent
                  </a>
                </li>
                <li
                  onClick={() => {
                    setactive("Dermatologist");
                  }}
                  className=" py-2.5"
                >
                  <a
                    href="#prof"
                    className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                  >
                    Dermatologist
                  </a>
                </li>
                <li
                  onClick={() => {
                    setactive("Sexual");
                  }}
                  className=" py-2.5"
                >
                  <a
                    href="#prof"
                    className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                  >
                    Sexual Health
                  </a>
                </li>
                <li
                  onClick={() => {
                    setactive("Gynecologist");
                  }}
                  className=" py-2.5"
                >
                  <a
                    href="#prof"
                    className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                  >
                    Gynechologist
                  </a>
                </li>
                <li
                  onClick={() => {
                    setactive("Internal");
                  }}
                  className=" py-2.5"
                >
                  <a
                    href="#prof"
                    className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                  >
                    Internal Medicine
                  </a>
                </li>
                <li
                  onClick={() => {
                    setactive("Therapist");
                  }}
                  className=" py-2.5"
                >
                  <a
                    href="#prof"
                    className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                  >
                    Development Therapist
                  </a>
                </li>
                <li
                  onClick={() => {
                    setactive("ENT");
                  }}
                  className=" py-2.5"
                >
                  <a
                    href="#prof"
                    className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                  >
                    ENT
                  </a>
                </li>
                <li
                  onClick={() => {
                    setactive();
                  }}
                  className=" py-2.5"
                >
                  <a
                    href="#prof"
                    className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                  >
                    Nutritionist
                  </a>
                </li>
                <li
                  onClick={() => {
                    setactive();
                  }}
                  className=" py-2.5"
                >
                  <a
                    href="#prof"
                    className="block text-sm text-gray-500 font-bold hover:text-green-600 cursor-pointer"
                  >
                    Paediatrics
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </div>
        <div className="w-full h-auto p-8 flex flex-row flex-wrap justify-center items-center lg:justify-start lg:items-start lg:pl-14">
          {active === "ALL" &&
            Info.map((items) => {
              return (
                <Card
                  key={items.id}
                  img={items.img}
                  prof={items.prof}
                  name={items.name}
                  degree={items.degree}
                  id={items.id}
                />
              );
            })}
          {active === "Child" &&
            Info.map((items) => {
              if (items.prof === "CHILD-ADOLESCENT-PSYCHIATRIST") {
                return (
                  <Card
                    key={items.id}
                    img={items.img}
                    prof={items.prof}
                    name={items.name}
                    degree={items.degree}
                    id={items.id}
                  />
                );
              }
              return null;
            })}
          {active === "Counselor" &&
            Info.map((items) => {
              if (items.prof === "COUNSELOR") {
                return (
                  <Card
                    key={items.id}
                    img={items.img}
                    prof={items.prof}
                    name={items.name}
                    degree={items.degree}
                    id={items.id}
                  />
                );
              }
              return null;
            })}
          {active === "Dermatologist" &&
            Info.map((items) => {
              if (items.prof === "DERMATOLOGIST") {
                return (
                  <Card
                    key={items.id}
                    img={items.img}
                    prof={items.prof}
                    name={items.name}
                    degree={items.degree}
                    id={items.id}
                  />
                );
              }
              return null;
            })}
          {active === "Therapist" &&
            Info.map((items) => {
              if (items.prof === "DEVELOPMENTAL-THERAPIST") {
                return (
                  <Card
                    key={items.id}
                    img={items.img}
                    prof={items.prof}
                    name={items.name}
                    degree={items.degree}
                    id={items.id}
                  />
                );
              }
              return null;
            })}
          {active === "ENT" &&
            Info.map((items) => {
              if (items.prof === "ENT") {
                return (
                  <Card
                    key={items.id}
                    img={items.img}
                    prof={items.prof}
                    name={items.name}
                    degree={items.degree}
                    id={items.id}
                  />
                );
              }
              return null;
            })}
          {active === "Gynecologist" &&
            Info.map((items) => {
              if (items.prof === "GYNECOLOGIST") {
                return (
                  <Card
                    key={items.id}
                    img={items.img}
                    prof={items.prof}
                    name={items.name}
                    degree={items.degree}
                    id={items.id}
                  />
                );
              }
              return null;
            })}
          {active === "Internal" &&
            Info.map((items) => {
              if (items.prof === "INTERNAL-MEDICINE") {
                return (
                  <Card
                    key={items.id}
                    img={items.img}
                    prof={items.prof}
                    name={items.name}
                    degree={items.degree}
                    id={items.id}
                  />
                );
              }
              return null;
            })}
          {active === "Psychiatrist" &&
            Info.map((items) => {
              if (items.prof === "PSYCHIATRIST") {
                return (
                  <Card
                    key={items.id}
                    img={items.img}
                    prof={items.prof}
                    name={items.name}
                    degree={items.degree}
                    id={items.id}
                  />
                );
              }
              return null;
            })}
          {active === "Psychologist" &&
            Info.map((items) => {
              if (items.prof === "PSYCHOLOGIST") {
                return (
                  <Card
                    key={items.id}
                    img={items.img}
                    prof={items.prof}
                    name={items.name}
                    degree={items.degree}
                    id={items.id}
                  />
                );
              }
              return null;
            })}
          {active === "Sexual" &&
            Info.map((items) => {
              if (items.prof === "Sexual Health") {
                return (
                  <Card
                    key={items.id}
                    img={items.img}
                    prof={items.prof}
                    name={items.name}
                    degree={items.degree}
                    id={items.id}
                  />
                );
              }
              return null;
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Prof;
