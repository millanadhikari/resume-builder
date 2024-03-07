import React from "react";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustomTab from "./CustomTab";
import Tab1 from "./TabContents/Tab1";
import Tab2 from "./TabContents/Tab2";
import Tab3 from "./TabContents/Tab3";

const tabs = [
  { label: "1. Sign Up", content: <Tab1 /> },
  { label: "2. Create", content: <Tab2 /> },
  { label: "3. Download", content: <Tab3 /> },
];
function Perfect() {
  return (
    <div className="flex flex-col justify-center my-10">
      <img
        src="https://resume.io/assets/landing/home/how/icon-580ea8bcc1e527c9acb382f70dbe3b5f81dc9a03428cfcf7ee715fd4266afc0c.svg"
        className="h-20 w-20 mx-auto"
      />

      <h1 className="text-2xl md:text-4xl font-bold my-5 text-center ">
        Create perfect resumes for the <br />
        modern job market
      </h1>
      <p className="text-center md:text-[18px] text-[16px] ">
        Creating a resume has never been this easy! In three simple steps,
        <br className="hidden md:inline" />
        screate the perfect document to impress hiring managers and employers.{" "}
        <br className="hidden md:inline" />
        Minimum time, maximum professional quality.
      </p>
      <Button
        // onClick={() => router.push("/resume-templates")}
        className="bg-[#1a91f0] mx-auto px-7 py-7 text-md md:text-lg font-semibold my-10 hover:bg-blue-500"
      >
        Create My Resume
      </Button>
      {/* <MultiTab /> */}
      <CustomTab tabs={tabs} />
    </div>
  );
}

export default Perfect;
