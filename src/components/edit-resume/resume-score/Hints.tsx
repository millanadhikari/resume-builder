import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FaCircleQuestion } from "react-icons/fa6";

function Hints({
  emailApplied,
  jobApplied,
  summaryApplied,
  employmentApplied,
  educationApplied,
  skillsApplied,
  internshipApplied,
  total
}: any) {
  return (
    <div className="">
      <Popover>
        <PopoverTrigger>
          <span className="text-xl text-green-600">
            <FaCircleQuestion />
          </span>
        </PopoverTrigger>
        <div>
          <PopoverContent className="w-screen md:max-w-[959px] md:right-[-10px] bg-blue-50 border-none mx-auto px-10 md:absolute md:top-6   ">
            <div className="md:flex gap-40">
              <div className="grid gap-2">
                {!employmentApplied && (
                  <div className="flex gap-3">
                    <h2 className="font-bold text-green-600">+25%</h2>
                    <p className="text-gray-800">Add employment history</p>
                  </div>
                )}
                {!educationApplied && (
                  <div className="flex gap-3">
                    <h2 className="font-bold text-green-600">+15%</h2>
                    <p className="text-gray-800">Add education</p>
                  </div>
                )}
                {!emailApplied && (
                  <div className="flex gap-3">
                    <h2 className="font-bold text-green-600">+5%</h2>
                    <p className="text-gray-800">Add email</p>
                  </div>
                )}
              </div>

              <div className="grid gap-2 mt-2 md:mt-0">
                {!summaryApplied && (
                  <div className="flex gap-3">
                    <h2 className="font-bold text-green-600">+15%</h2>
                    <p className="text-gray-800">Add profile summary</p>
                  </div>
                )}
                {!jobApplied && (
                  <div className="flex gap-3">
                    <h2 className="font-bold text-green-600">+10%</h2>
                    <p className="text-gray-800">Add job title</p>
                  </div>
                )}
                {!skillsApplied && (
                  <div className="flex gap-3">
                    <h2 className="font-bold text-green-600">+4%</h2>
                    <p className="text-gray-800">Add skills</p>
                  </div>
                )}

                {!internshipApplied && (
                  <div className="flex gap-3">
                    <h2 className="font-bold text-green-600">+2%</h2>
                    <p className="text-gray-800">Add Intership</p>
                  </div>
                )}
              </div>
            </div>
          </PopoverContent>
        </div>
      </Popover>
    </div>
  );
}

export default Hints;
