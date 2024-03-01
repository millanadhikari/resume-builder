import { Button } from "@/components/ui/button";
import React from "react";
import { BsCloudDownload } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { GoCopy, GoGoal } from "react-icons/go";
import { IoShareOutline } from "react-icons/io5";
import { MdOutlineModeEdit } from "react-icons/md";
function CoverTab() {
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
     
          <div className="grid gap-3">
          
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
              <GoCopy />
              </div>
              <h2 className="text-lg hover:text-blue-400 cursor-pointer">
               Make a copy
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
            <h2 className="text-xl">New Cover Letter</h2>
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

export default CoverTab;
