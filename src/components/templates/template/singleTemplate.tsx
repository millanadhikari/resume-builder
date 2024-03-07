"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Template {
  id: number;
  name: string;
  text: string;
  img: string;
  design: string;
  type: string[];
}

interface Props {
  template: any;
  handleTemplate: (template: any) => void;
}
const SingleTemplate = ({ template, handleTemplate }: Props) => {
  const router = useRouter();
  const handleResume = () => {
    handleTemplate(template);
    router.push("/create-resume");
  };
  return (
    <div className="my-5 ">
      <div className="relative flex align-center justify-center w-full md:w-[550px] h-[700px] bg-blue-50 mx-auto ">
        <div className="w-full m-5 md:mx-10 h-[620px]  bg-white flex items-center justify-center ">
          <Image
            src={template.img}
            alt={"resume_templates"}
            height={700}
            width={420}
          />
        </div>
        <Button
          onClick={handleResume}
          className="absolute bottom-40 left-40 md:left-[180px] bg-[#1a91f0] text-md font-semibold py-7 px-5 hover:bg-blue-400"
        >
          Use This Template
        </Button>
        <div className="absolute flex align-center justify-between w-full bottom-4 px-5 md:px-10">
          <div className="flex gap-4">
            <p className="h-4 w-4 bg-black rounded-full cursor-pointer hover:bg-white hover:ring-4 ring-black"></p>
            <p className="h-4 w-4 bg-green-800 rounded-full cursor-pointer hover:bg-white hover:ring-4 ring-green-800"></p>

            <p className="h-4 w-4 bg-purple-700 rounded-full cursor-pointer hover:bg-white hover:ring-4 ring-purple-700"></p>
            <p className="h-4 w-4 bg-red-500 rounded-full cursor-pointer hover:bg-white hover:ring-4 ring-red-500"></p>
          </div>
          <div className="flex gap-3">
            <p className="rounded-sm text-sm  bg-gray-400 px-2 font-semibold text-white cursor-pointer">
              PDF
            </p>
            <p className="bg-gray-400 rounded-sm text-sm  px-2 font-semibold text-white cursor-pointer">
              DOCX
            </p>
          </div>
        </div>
      </div>
      <div className="py-5 px-5 md:px-10 cursor-pointer ">
        <h2 className="text-xl font-semibold hover:text-[#1a91f0]">
          {template.name}
        </h2>
        <p className="text-[0.9rem] text-gray-500">
          A web-inspired resume template perfect for chatting up your
          achievements.
        </p>
      </div>
    </div>
  );
};

export default SingleTemplate;
