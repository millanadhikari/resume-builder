import { DashboardTab } from "@/components/dashboard/dashboard-tab";
import { Button } from "@/components/ui/button";
import React from "react";

function Page() {
  return (
    <>
      <section className="h-full w-full pt-[50px] relative flex  justify-center flex-col px-5">
        <div className="lg:w-[1000px]  lg:mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold my-5  ">
            Resume & Cover Letters
          </h1>
          <DashboardTab />
        </div>

        <div></div>
      </section>
    </>
  );
}

export default Page;
