import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import React, { useEffect } from "react";
import { FaAngleLeft, FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { TfiMoreAlt } from "react-icons/tfi";
import { TiTick } from "react-icons/ti";

function Head({ template, setTemplate, preview, setPreview, colors, setColor }: any) {
  


  useEffect(() => {
    console.log("template", template);
  }, [template]);
  return (
    <div className="bg-[#0f141e] cursor-pointer flex lg:justify-between justify-center py-4 px-4 text-lg">
      <div
        onClick={() => setPreview(!preview)}
        className="hidden lg:flex items-center gap-3 text-white cursor-pointer hover:bg-gray-500 rounded-full px-4 py-2"
      >
        <FaAngleLeft />
        <p>Back to editor </p>
      </div>
      <div className="hidden lg:flex text-white items-center">
        <div className="text-white flex items-center gap-3">
          <span className="cursor-pointer rounded-full hover:bg-gray-500 p-3">
            <FaMinus />
          </span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <p>Aa</p>
              </TooltipTrigger>
              <TooltipContent>
                <div className="mt-8 text-sm bg-[#0f141e] py-3 px-3">
                  <h2>Line Spacing</h2>
                  <p className="mt-1">100%</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <span className="cursor-pointer rounded-full hover:bg-gray-500 p-3">
            <FiPlus />
          </span>
        </div>
        <div className="border-l-2 pl-6 ml-2 border-gray-500 flex items-center gap-3">
          {colors.map((color: any) => (
            <div
              onClick={() => setColor(color.color)}
              className={`relative bg-${color.color} flex items-center justify-center ring-2 ring-gray-500 h-7 w-7 rounded-full cursor-pointer group`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`bg-white w-2 h-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:${template.color == color.color ? 'opacity-0' : 'opacity-100'}`}></div>
              </div>
              {template.color == color.color && (
                <span className="">
                  <TiTick />
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-2 mr-6 ">
        <Button className="bg-[#1a91f0]  focus:outline-none text-[1rem] font-semibold py-5 hover:bg-blue-400">
          Download PDF
        </Button>
        <span>
          {" "}
          <Button className=" bg-[#1a91f0] text-[1rem]  font-bold py-5 hover:bg-blue-400">
            <TfiMoreAlt />
          </Button>
        </span>
      </div>
      <div
        onClick={() => setPreview(!preview)}
        className="lg:hidden text-white absolute right-9 text-4xl top-[18px] cursor-pointer"
      >
        <IoClose />
      </div>
    </div>
  );
}

export default Head;
