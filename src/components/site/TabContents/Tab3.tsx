import React from "react";
import { BsFiletypeDocx } from "react-icons/bs";
import { FaFacebookF, FaFilePdf, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGoogle, IoPersonSharp } from "react-icons/io5";
import { RiDownload2Line } from "react-icons/ri";
import { TbFileTypeDocx } from "react-icons/tb";

function Tab3() {
  return (
    <div className=" flex bg-white w-fit px-6 py-16  rounded-b-md overflow-hidden ">
      <div className="md:w-[55%]">
        <h1 className="font-semibold text-2xl text-blue-600 ">
          {" "}
          Now It’s Yours!
        </h1>
        <p className="text-[1.1rem] mt-2 text-gray-600">
          Export your new resume, CV or application letter in one of the
          available formats. PDF will provide you with the best and most
          consistent visual formatting. Word files allow you to edit the
          document further or submit the resume to an online application system.
          You can also share your career updates online.
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
        <span className="absolute right-[-30px] top-[-100px] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="h-40 w-full rotate-180 z-99"
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
        <div className="bg-blue-50  p-8 rounded-full z-0">
          <div className="bg-blue-100  p-6 rounded-full z-0">
            <div className="text-3xl text-white bg-[#1a91f0] p-5 rounded-full">
              <RiDownload2Line />
            </div>
          </div>
        </div>
        <span className="border-[6px] border-dashed rounded-full h-16 w-16 absolute top-1 left-0"></span>
        <span className="border-[6px] border-dashed rounded-full h-12 w-12 absolute bottom-1 right-[-10px]"></span>
        <span className="bg-white shadow-md h-[80px] w-[80px] rounded-full text-4xl flex items-center justify-center text-red-600 absolute left-12">
          <TbFileTypeDocx />
        </span>

        <span className="bg-white shadow-md h-[80px] w-[80px] rounded-full text-4xl flex items-center justify-center text-[#164c94] absolute right-16 top-2">
          <FaFilePdf />
        </span>
      </div>
    </div>
  );
}

export default Tab3;

// <h1 className="font-semibold text-2xl text-blue-600">
//           {" "}
//           Now It’s Yours!
//         </h1>
//         <p className="text-[1.1rem] mt-2 text-gray-600">
//           Export your new resume, CV or application letter in one of the
//           available formats. PDF will provide you with the best and most
//           consistent visual formatting. Word files allow you to edit the
//           document further or submit the resume to an online application system.
//           You can also share your career updates online.
//         </p>
