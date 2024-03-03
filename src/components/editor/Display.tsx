"use client";
import React, { useEffect } from "react";
import Head from "./components/Head";
import { BottomDrawer } from "./components/BottomDrawer";
import { TEMPLATES } from "@/lib/data";
import Image from "next/image";
import Toronto from "../resume-samples/Toronto";
import { useAppStore } from "@/store/store";
import NewYork from "../resume-samples/NewYork";
import Home from "../icons/home";
import Stockholm from "../resume-samples/Stockholm";
import { TiTick } from "react-icons/ti";
function Display({ preview, setPreview }: any) {
  const { resumeDetails } = useAppStore();
  const { employment } = useAppStore();
  const { education } = useAppStore();
  const { socialLinks } = useAppStore();
  const { skills } = useAppStore();
  const { custom } = useAppStore();
  const { summary } = useAppStore();
  const { template, setTemplate } = useAppStore();

  const colors = [
    { id: 1, color: "gray-700" },
    { id: 2, color: "blue-500" },
    { id: 3, color: "red-500" },
    { id: 4, color: "green-500" },
    { id: 5, color: "black" },
  ];

  
  const setColor = (color: any) => {
    let newData = { ...template };
    newData.color = color;
    setTemplate(newData);
  };

  useEffect(() => {
    !template?.component &&
      setTemplate({
        id: 1,
        name: "Toronto",
        text: "A web-inspired resume template perfect for chatting up your achievements.",
        img: "/resume_templates/Toronto.jpg",
        design: "Simple",
        type: ["pdf", "docx"],
        component: Toronto,
        color:""
        // props: {
        //   resumeDetails: resumeDetails,
        //   education: education,
        //   employment: employment,
        //   socialLinks: socialLinks,
        //   skills: skills,
        //   custom: custom,
        //   summary: summary,
        // },
      });
  }, []);
 
  return (
    <div className="bg-[#495163] h-screen w-screen ">
      <Head colors={colors} setColor={setColor} template={template} setTemplate={setTemplate} preview={preview} setPreview={setPreview} />
      <div className="">
        <BottomDrawer setColor={setColor} colors={colors} template={template} setTemplate={setTemplate} />
      </div>
      <div className="flex">
        <div
          className="hidden lg:flex flex-col w-[370px]  border-r-2
         border-gray-500 h-screen overflow-auto no-scrollbar"
        >
          {TEMPLATES.map((item) => (
            <div
              key={item.id}
              className=" relative flex flex-col items-center justify-center mt-10 gap-2 cursor-pointer"
              onClick={() => setTemplate(item)}
            >
              <p className="text-white text-[1.2rem] font-semibold">
                {item.name}
              </p>
              <div className="relative">
                <Image
                  src={item?.img}
                  alt="resume_templates"
                  className={`hover:border-4 border-blue-500 ${
                    item.id === template.id && "border-4"
                  } border-blue-500`}
                  width={220}
                  height={80}
                />
                <span className="absolute right-1 bottom-1 flex gap-1 ">
                  {item.type.map((type) => (
                    <div
                      key={type}
                      className="bg-orange-600 p-1 font-semibold text-white rounded-md text-[0.7rem]"
                    >
                      {type.toUpperCase()}
                    </div>
                  ))}
                </span>
              </div>
              {item.id === template.id && (
                <span className="bg-blue-500 text-white text-3xl rounded-full absolute">
                  <TiTick />
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="h-screen flex justify-center w-full px-5   ">
          {/* <Toronto
            resumeDetails={resumeDetails}
            education={education}
            employment={employment}
            socialLinks={socialLinks}
            skills={skills}
            custom={custom}
            summary={summary}
          /> */}

          {/* {<template.component
              resumeDetails={resumeDetails}
              education={education}
              employment={employment}
              socialLinks={socialLinks}
              skills={skills}
              custom={custom}
              summary={summary}
            />} */}
          {template?.component && (
            <template.component
              resumeDetails={resumeDetails}
              education={education}
              employment={employment}
              socialLinks={socialLinks}
              skills={skills}
              custom={custom}
              summary={summary}
              template = {template}
            />
          )}

          {/* <NewYork
            resumeDetails={resumeDetails}
            education={education}
            employment={employment}
            socialLinks={socialLinks}
            skills={skills}
            custom={custom}
            summary={summary}
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Display;
