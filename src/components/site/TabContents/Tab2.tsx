import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGoogle, IoPersonSharp } from "react-icons/io5";

function Tab2() {
  return (
    <div className=" flex bg-white w-fit px-6 py-16  rounded-b-md overflow-hidden ">
      <div className="md:w-[55%]">
        <h1 className="font-semibold text-2xl text-blue-600 ">
          {" "}
          Achieve Beauty With Ease
        </h1>
        <p className="text-[1.1rem] mt-2 text-gray-600">
        Achieve Beauty With Ease Choose one of our beautiful, professionally
          designed resume or cover letter formats. Add your personal info and
          choose and edit the necessary sections. Customize the layout and
          visuals as much (or as little) as you want. We provide a ton of ready
          content with lots of room for your own creativity and needs.
        </p>
      </div>
      <div className="hidden relative md:flex items-center justify-center w-[45%] ">
        <span className="absolute bottom-[-70px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="h-40 w-full rotate-90 z-99"
          >
            <path
              fill="none"
              stroke="#dde3f0"
              stroke-width="3"
              stroke-dasharray="4,4"
              stroke-linecap="round"
              d="M 5,90 Q 50,10 90,90"
            />
          </svg>
        </span>
        <span className="absolute right-[-30px] top-[-70px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="h-40 w-full rotate-90 z-99"
          >
            <path
              fill="none"
              stroke="#dde3f0"
              stroke-width="3"
              stroke-dasharray="4,4"
              stroke-linecap="round"
              d="M 5,90 Q 50,10 90,90"
            />
          </svg>
        </span>
        <div className="bg-gray-100  p-14 rounded-full z-0">
          <div className="text-3xl text-[#a9faff] bg-[#21277f] p-5 rounded-full">
            <IoPersonSharp />
          </div>
        </div>
        <span className="border-[6px] border-dashed rounded-full h-16 w-16 absolute top-1 left-0"></span>
        <span className="border-[6px] border-dashed rounded-full h-16 w-16 absolute top-1 right-[-40px]"></span>
        <span className="bg-white shadow-md h-[70px] w-[70px] rounded-full text-3xl flex items-center justify-center text-red-600 absolute left-12">
          <IoLogoGoogle />
        </span>

        <span className="bg-white shadow-md h-[70px] w-[70px] rounded-full text-3xl flex items-center justify-center text-[#164c94] absolute right-16 top-2">
          <FaLinkedinIn />
        </span>

        <span className="bg-white shadow-md h-[70px] w-[70px] rounded-full text-3xl flex items-center justify-center text-[#164c94] absolute right-16 bottom-2">
          <FaFacebookF />
        </span>
      </div>
    </div>
  );
}

export default Tab2;
