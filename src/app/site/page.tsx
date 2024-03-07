"use client";
import EffectiveJob from "@/components/site/EffectiveJob";
import Perfect from "@/components/site/Perfect";
import { Button } from "@/components/ui/button";
import { Router } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
// import dublin from '/dublin-resume-templates.avif'
// import forbesMobile from '/forbes_desktop.JPG'

export default function Home() {
  const router = useRouter();
  return (
    <>
      <section className="h-full w-full pt-[100px] relative flex items-center justify-center flex-col px-5 bg-[#eff2f9]">
        <h2 className="font-semibold md:text-xl">ONLINE RESUME BUILDER</h2>

        <h1 className="text-2xl md:text-4xl font-bold my-5  text-center">
          Only 2% of resumes make it past <br className="hidden md:inline" />
          the first round. Be in the top 2%
        </h1>
        <p className="text-center md:text-[18px] text-[17px] md:w-[600px] mx-auto">
          Use professional field-tested resume templates that follow the exact{" "}
          `&apos`resume rules`&apos` employers look for. Easy to use and done
          within minutes - try now for free!
        </p>
        <Button
          onClick={() => router.push("/resume-templates")}
          className="bg-[#1a91f0] px-7 py-7 text-lg font-semibold my-7 hover:bg-blue-500"
        >
          Create My Resume
        </Button>
        <div className="flex gap-3 items-center justify-center">
          <div className=" ring-1 rounded-full h-2 w-2 bg-green-500 animate-pulse"></div>
          <p>39,999 resumes created today</p>
        </div>
        <Image
          src={"/dublin-resume-templates.avif"}
          alt="resume_sample"
          height="800"
          width="800"
          className="px-7 mt-8 rounded-xl"
        />
        <div className="my-9 w-screen bg-white relative flex mt-[0px]">
          <Image
            src="/forbes_desktop.JPG"
            alt="forbes"
            height={400}
            width={750}
            className=" py-10 hidden md:inline-flex mx-auto mb-5  "
          />
          <Image
            src="/forbes_mobile.JPG"
            alt="forbes"
            height={400}
            width={400}
            className="mx-auto py-10 md:hidden "
          />

          <div className="border-t-2 w-screen absolute bottom-[40px] border-gray-100 "></div>
        </div>
        <Perfect />
        <EffectiveJob />
      </section>
    </>
  );
}
