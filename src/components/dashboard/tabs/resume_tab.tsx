import { Button } from "@/components/ui/button";
import React from "react";
import { BsCloudDownload } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { GoGoal } from "react-icons/go";
import { IoShareOutline } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
function ResumeTab() {
  return (
    <div className="lg:flex justify-between gap-10 w-[1020px] ">
      <div className="flex gap-8 md:mt-14 ">
        <div className="border-2 rounded-md w-[200px] h-[300px] cursor-pointer">
          k
        </div>
        <div>
          <div className="grid gap-1 mb-6">
            <h2 className="text-xl">Untitled</h2>
            <p className="text-sm text-gray-500">Updated 10 February, 23:31</p>
          </div>
          <div className="flex align-center justify-center text-sm rounded-md gap-3 py-2 bg-gray-100 w-[170px] ">
            <div className="bg-red-400 text-white rounded-md font-semibold px-1 py-1 flex items-center justify-center">
              15%
            </div>
            <div className="pt-1">Resume score</div>
          </div>
          <div className="grid gap-3">
            <div className="flex gap-3 align-center mt-8 ">
              <div className="text-[24px] text-[#1a91f0]">
                <GoGoal />
              </div>
              <h2 className="text-lg hover:text-blue-400 cursor-pointer">
                Tailor to job listing
              </h2>
              <div className="bg-blue-100 font-semibold p-1 rounded-md text-[#1a91f0]">
                NEW
              </div>
            </div>
            <div className="flex gap-3 align-center ">
              <div className="text-[24px] text-[#1a91f0]">
                <MdOutlineModeEdit />
              </div>
              <h2 className="text-lg hover:text-blue-400 cursor-pointer">
                Edit
              </h2>
            </div>

            <div className="flex gap-3 align-center ">
              <div className="text-[24px] text-[#1a91f0]">
                <IoShareOutline />
              </div>
              <h2 className="text-lg hover:text-blue-400 cursor-pointer">
                Share a link
              </h2>
            </div>

            <div className="flex gap-3 align-center ">
              <div className="text-[24px] text-[#1a91f0]">
                <BsCloudDownload />
              </div>
              <h2 className="text-lg hover:text-blue-400 cursor-pointer">
                Download PDF
              </h2>
            </div>

            <div className="flex gap-3 align-center ">
              <div className="text-[24px] text-[#1a91f0]">
                <FiMoreHorizontal />
              </div>
              <h2 className="text-lg hover:text-blue-400 cursor-pointer">
                More
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="gap-8 md:mt-14 hidden md:flex ">
        <div className="flex items-center justify-center border-2 rounded-md w-[200px] h-[300px] cursor-pointer">
          <div
            className="bg-gray-100 h-20 w-20 flex items-center cursor-pointer justify-center text-gray-500 text-5xl rounded-full
          hover:bg-[#1a91f0] hover:text-white "
          >
            <span>+</span>
          </div>
        </div>
        <div>
          <div className="grid gap-1 mb-6">
            <h2 className="text-xl">New Resume</h2>
            <p className="text-sm text-gray-500 w-[250px]">
              Create a tailored resume for each job application. Dboule your
              chances of getting hired!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeTab;
