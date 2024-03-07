"use client";
import React, { useEffect, useState } from "react";
import { Progress } from "../ui/progress";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const CustomTab: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [count, setCount] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTabIndex((prevIndex) => (prevIndex + 1) % tabs.length);
    }, 10000); // Switch tabs every 10 seconds

    return () => clearInterval(timer);
  }, [tabs.length]);

  useEffect(() => {
    setCount(0); // Reset count to 0 when activeTabIndex changes
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount % 100) + 1); // Restart count from 1 when it reaches 100
    }, 100); // Update every 100 milliseconds (0.1 second)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [activeTabIndex]); // Empty dependency array ensures the effect runs only once

  return (
    <div className="w-full">
      <div className="flex w-full md:w-[800px] lg:w-[850px] justify-between md:mx-auto  ">
        {tabs.map((tab, index) => (
          <>
            <div key={index} className="bg-red-200 mx-auto md:hidden">
              {activeTabIndex === index && (
                <div
                  // key={index}
                  // className={index === activeTabIndex ? "active" : ""}
                  className={`flex w-[90vw]  flex-col gap-3 font-bold text-xl bg-white px-6 py-4 rounded-md justify-center`}
                  onClick={() => handleTabClick(index)}
                >
                  <span>{tab.label}</span>
                  <span>
                    {" "}
                    <Progress value={count} className="bg-blue-500" />
                  </span>
                </div>
              )}
            </div>

            <div className="mx-auto hidden md:w-full md:inline px-1  ">
              <div
                // key={index}
                // className={index === activeTabIndex ? "active" : ""}
                className={`flex flex-col gap-3 font-bold text-xl   px-6 py-4 rounded-t-md justify-center ${
                  activeTabIndex === index
                    ? "text-black bg-white"
                    : "text-gray-400 bg-[#f7f9fc]"
                }  `}
                onClick={() => handleTabClick(index)}
              >
                <span>{tab.label}</span>
                <span>
                  {" "}
                  {activeTabIndex === index ? (
                    <Progress value={count} className="bg-blue-500" />
                  ) : (
                    <Progress value={0} className="bg-blue-500" />
                  )}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="md:px-1 transition-transform duration-500 ">
        <div
          className={`max-w-[840px] md:w-[800px] lg:w-[850px] transition-all duration-500 
                  `}
        >
          {tabs[activeTabIndex].content}
        </div>
      </div>
      <div className="flex gap-3 justify-center my-4">
        <div
          onClick={() => setActiveTabIndex(0)}
          className={`cursor-pointer bg-blue-500 h-2 w-2 rounded-full ${
            activeTabIndex === 0 ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>
        <div
          onClick={() => setActiveTabIndex(1)}
          className={`cursor-pointer bg-blue-500 h-2 w-2 rounded-full ${
            activeTabIndex === 1 ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>
        <div
          onClick={() => setActiveTabIndex(2)}
          className={`cursor-pointer bg-blue-500 h-2 w-2 rounded-full ${
            activeTabIndex === 2 ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default CustomTab;
