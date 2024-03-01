import React from "react";
import { FaAngleRight, FaFacebook, FaLinkedinIn } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
interface Props {
  handleMulti: (e: any, title: any) => void;
}

function Main({ handleMulti }: Props) {
  return (
    <div className="mt-10 mx-5 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-[#1a91f0]">
        Connect your social profile
      </h1>
      <p className="text-md mt-3">
        Prefill your resume with data from your social profile
      </p>
      <div className="my-6 w-full md:w-[500px]">
        <div className="flex group border-b-2 border-gray-300 bg-blue-50 items-center justify-between px-10 py-6 rounded-t-md cursor-pointer hover:bg-blue-200">
          <div className="flex items-center gap-6 ">
            <span className="text-blue-500 text-2xl">
              <FaFacebook />
            </span>
            <p className="text-gray-500 group-hover:text-blue-600">Facebook</p>
          </div>
          <div className="text-blue-600  text-xl">
            <FaAngleRight />
          </div>
        </div>
        <div className="flex group border-b-2 border-gray-300 bg-blue-50 items-center justify-between px-10 py-6 rounded-t-md cursor-pointer hover:bg-blue-200">
          <div className="flex items-center gap-6 ">
            <span className="text-blue-500 text-2xl">
              <FcGoogle />
            </span>
            <p className="text-gray-500 group-hover:text-blue-600">Google</p>
          </div>
          <div className="text-blue-600  text-xl">
            <FaAngleRight />
          </div>
        </div>
        <div className="flex group rounded-b-md bg-blue-50 items-center justify-between px-10 py-6 rounded-t-md cursor-pointer hover:bg-blue-200">
          <div className="flex items-center gap-6 ">
            <span className="text-blue-500 text-2xl">
              <FaLinkedinIn />{" "}
            </span>
            <p className="text-gray-500 group-hover:text-blue-600">LinkedIn</p>
          </div>
          <div className="text-blue-600  text-xl">
            <FaAngleRight />
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full md:w-[500px] mt-10">
        <Button
          className="bg-white text-black border-2 hover:border-blue[#1a91f0] hover:text-[#1a91f0]  hover:bg-white border-gray-400 text-lg py-6 font-bold"
          onClick={(e) => handleMulti(e, "back")}
          type="submit"
        >
          Back
        </Button>
        <Button
          className="bg-[#1a91f0] text-lg py-6 font-bold hover:bg-blue-6s00"
          onClick={(e) => handleMulti(e, "front")}
          type="submit"
        >
          Skip
        </Button>
      </div>
    </div>
  );
}

export default Main;
