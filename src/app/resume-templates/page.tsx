import { TabsDemo } from "@/components/templates/tabs";
import { Button } from "@/components/ui/button";
import React from "react";

const Page = () => {
  return (
    <>
      <section className="h-full w-full pt-[50px] relative flex items-center justify-center flex-col px-5">
        <h1 className="text-3xl md:text-4xl font-bold my-2 ">
          Job-winning resume templates
        </h1>
        <p className="text-center md:text-[18px] text-[17px] md:w-[800px]">
          Each resume template is exactly designed and follows the exact "resume
          rules" hiring managers look for. Stand out and gert hired faster with
          field-tested resume templates.
        </p>
        <Button className="bg-[#1a91f0] px-7 py-7 text-lg font-semibold my-7 hover:bg-blue-500">
          Create My Resume
        </Button>
        <div>
          <TabsDemo />
        </div>
      </section>
    </>
  );
};

export default Page;
