import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResumeTab from "./tabs/resume_tab";
import CoverTab from "./tabs/cover_tab";

export function DashboardTab() {
  return (
    <Tabs defaultValue="resume" className="w-full ">
      <div className="md:flex justify-between md:border-b-4 pb-1 relative ">
        <div className="">
          <TabsList className="grid w-full grid-cols-2 md:w-[300px] ">
            <TabsTrigger value="resume">Resumes</TabsTrigger>
            <TabsTrigger value="cover letters">Cover Letters</TabsTrigger>
          </TabsList>
        </div>
        <Button
          className="bg-[#1a91f0] px-7 py-6 my-7 md:my-0 text-md font-semibold  w-full
         hover:bg-blue-400 md:w-[150px] md:absolute top-[-40px] right-0 "
        >
          + New Resume
        </Button>
      </div>

      <TabsContent value="resume">
        <ResumeTab />
      </TabsContent>
      <TabsContent value="cover letters">
        <CoverTab />
      </TabsContent>
    </Tabs>
  );
}
