import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function EffectiveJob() {
  return (
    <div className="bg-[#282b8f] text-white w-screen text-center py-20 px-10 flex flex-col lg:flex-row items-center justify-center">
      <Image
        src={"/resume_snip.JPG"}
        alt="resume example"
        height={600}
        width={400}
        className="mx-auto lg:mr-auto lg:order-2 lg:w-[500px] lg:mx-0 "
      />
      <div className="mt-10 flex flex-col gap-3 lg:order-1 lg:ml-auto lg:text-left lg:mr-28">
        <h2 className="text-[#f9ad70] font-bold tracking-wider ">
          START BUILDING YOUR CAREER
        </h2>
        <h1 className="text-3xl font-bold max-w-[450px] md:text-4xl mx-auto lg:mx-0 ">
          Professional resumes for effective job interviews
        </h1>
        <p className="text-[1.1rem] tracking-wide max-w-[600px] mx-auto lg:w-[450px] lg:mx-0">
          A great job application leads to a good interview. An amazing resume
          is what makes it all possible. Start off strong with the hiring
          manager by creating a positive professional image. A job interview can
          be much easier if they have a favorable view of your resume and cover
          letter.
        </p>
        <div className="flex flex-col md:inline gap-3 mt-5">
          <Button className="w-fit mx-auto bg-[#1a91f0] py-7 px-[48px] text-[1.1rem] hover:bg-blue-500 md:mr-5">
            Get Started Now
          </Button>
          <Button className="w-fit mx-auto bg-[#282b8f] border-2 border-white py-7 px-10 text-[1.1rem] hover:text-blue-500 hover:bg-[#282b8f] hover:border-blue-500">
            Resume Examples
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EffectiveJob;
