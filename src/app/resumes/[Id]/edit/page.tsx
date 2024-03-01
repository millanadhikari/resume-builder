"use client";
import Details from "@/components/edit-resume/form/details";
import { IntroDialog } from "@/components/edit-resume/intro-dialog";
import Lady from "@/components/edit-resume/lady";
import { PopoverDemo } from "@/components/edit-resume/profile-select";
import Display from "@/components/editor/Display";
import Head from "@/components/editor/components/Head";
import PreviewIcon from "@/components/editor/components/PreviewIcon";
import Person from "@/components/icons/person";
import Image from "next/image";
import React, { useState } from "react";
import { BsDisplay } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";
import { HiDocumentText } from "react-icons/hi2";
function Page() {
  const [preview, setPreview] = useState<boolean>(false);
  return (
    <div className="w-full ">
      <div className="max-w-[1000px] mx-auto">
        {/* <IntroDialog/> */}
        <div className="absolute right-5 my-4">
          <PopoverDemo />
        </div>
        <section className="h-full w-full pt-[100px] relative flex items-center justify-center flex-col px-5">
          <div className="grid gap-2">
            <h1 className="text-2xl font-semibold">Untitled</h1>
            <div className="flex gap-2">
              <Image src={"/USA.JPG"} alt={"country"} height={10} width={40} />
              <p className="text-gray-400">English</p>
            </div>
          </div>

          <div className="bg-blue-50 w-full hover:bg-blue-100 flex items-center justify-between py-4 pr-5 rounded-md mt-10 gap-5 cursor-pointer">
            <div className="flex items-center gap-4">
              <Lady />
              <div className="">
                <h1 className="text-md md:text-lg font-bold">
                  Ensure your resume fits the job opening
                </h1>
                <p className="text-[0.9rem] text-gray-500">
                  Simply paste the link to the job listing. We`&apos`ll help you
                  optimize your resume
                </p>
              </div>
            </div>
            <div className="text-xl text-gray-400">
              <FaAngleRight />
            </div>
          </div>

          <Details />
        </section>
      </div>
      {sticky()}
      <span onClick={() => setPreview(!preview)}>
        <PreviewIcon />
      </span>
      {preview && (
        <div className="fixed top-0">
          <Display preview={preview} setPreview={setPreview} />
        </div>
      )}
    </div>
  );
}

export default Page;

const sticky = () => {
  return (
    <div
      className="w-[290px] gap-5 py-4 flex justify-center items-center 
  bg-[#1a91f0] fixed right-5  bottom-5 rounded-full cursor-pointer
  hover:bg-blue-400"
    >
      <div className="font-bold text-white text-lg">Preview & Download</div>
      <span className="text-4xl text-white">
        <HiDocumentText />{" "}
      </span>
    </div>
  );
};
