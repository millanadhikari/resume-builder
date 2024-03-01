'use client'
import { Button } from "@/components/ui/button";
import { Router } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <>
      <section className="h-full w-full pt-[100px] relative flex items-center justify-center flex-col px-5 bg-[#eff2f9]">
        <h2 className="font-semibold md:text-xl">ONLINE RESUME BUILDER</h2>

        <h1 className="text-3xl md:text-4xl font-bold my-5 ">
          Only 2% of resumes make it past <br />
          the first round. Be in the top 2%
        </h1>
        <p className="text-center md:text-[18px] text-[17px] md:w-[600px]">
          Use professional field-tested resume templates that follow the exact{" "}
          'resume rules' employers look for. Easy to use and done within minutes
          - try now for free!
        </p>
        <Button onClick={()=> router.push('/resume-templates')} className="bg-[#1a91f0] px-7 py-7 text-lg font-semibold my-7 hover:bg-blue-500">
          Create My Resume
        </Button>
        <div className="flex gap-3 items-center justify-center">
          <div className=" ring-1 rounded-full h-2 w-2 bg-green-500 animate-pulse"></div>
          <p>39,999 resumes created today</p>
        </div>
        <Image src="/dublin-resume-templates.avif" alt="resume_sample" height="800" width="800" className="px-7 mt-8 rounded-xl"/>
    <div className="my-9">
      <Image src="/forbes.png" alt="forbes" height={100} width={100}/>
    </div>
      </section>
    </>
  );
}
