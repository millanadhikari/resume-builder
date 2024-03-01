'use client'

import { useAppStore } from "@/store/store";
import React, { useEffect, useState } from "react";

function Toronto({
  resumeDetails,
  employment,
  education,
  socialLinks,
  skills,
  custom,
  summary,
  template
}: any) {
  const [spacing, setSpacing] = useState(3);
  const [color, setColor] = useState("blue");
  // const {resumeDetails } = useAppStore()


  useEffect(() => {
    console.log("manai taho", resumeDetails);
  }, [resumeDetails]);

  const summaryHTML = (data: any) => {
    return <div dangerouslySetInnerHTML={{ __html: data }} />;
  };
  return (
    <div
      className={`w-full  bg-white  lg:w-[700px] mt-10 rounded-md h-max pb-50 md:h-[850px] py-6 px-3 text-${template.color}`}
    >
      <div className="flex gap-4 border-b-2 pb-5">
        <div className="w-2/5 ">
          <h2 className="font-bold">{resumeDetails[0].fields?.[0].value}</h2>
          <p className={`text-[0.6rem] mt-${spacing}`}>
            {resumeDetails[0].fields?.[3].value}
          </p>
          <p className="text-[0.6rem]"> {resumeDetails[0].fields?.[4].value}</p>
          <p className="text-[0.6rem] mt-5">
            {resumeDetails[0].fields?.[7].value}
          </p>
          <p className="text-[0.6rem] ">
            {resumeDetails[0].fields?.[6].value},{" "}
            {resumeDetails[0].fields?.[5].value}
          </p>
          <p className="text-[0.6rem]">{resumeDetails[0].fields?.[8].value}</p>
        </div>
        <div className="w-full">
          <div className={`flex flex-col  `}>
            <h1 className="text-4xl font-bold">
              {resumeDetails[0].fields?.[1].value}
            </h1>
            <h1 className={`text-4xl font-bold mt-${spacing}`}>
              {resumeDetails[0].fields?.[2].value}
            </h1>
          </div>
          {summary == !"" && (
            <div
              className={`bg-gray-200 rounded-xl py-3 px-3 mt-${spacing} w-full`}
            >
              <h2 className="text-xl font-bold">Profile</h2>
              <p className="font-bold text-[0.6rem]">{summaryHTML(summary)}</p>
              {/* <p className="text-[0.6rem] mt-1">
              lkj sdlfkj asldkfjlaskdfj lksdjf lksdjflksdfj{" "}
            </p> */}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between w-full mt-5">
        <div className="w-1/2 flex flex-col gap-4">
          {employment[0].fields.length > 0 && (
            <div>
              <h1 className="text-xl font-bold">Employment History</h1>
              {employment[0].fields.map((item: any) => (
                <div key={item.id}>
                  <h2
                    className={`mt-${spacing} w-fit bg-${template?.color} text-sm text-white px-2 font-bold`}
                  >
                    {item.employer}, {item.city}
                  </h2>
                  <div className="flex mt-1 text-[0.8rem]">
                    <p> {item.startDate}</p>
                    <p>-</p>
                    <p> {item.endDate}</p>
                  </div>
                  <div className="text-[0.6rem]">
                    {summaryHTML(item.description)}
                  </div>
                </div>
              ))}
            </div>
          )}
          {education[0].fields.length > 0 && (
            <div>
              <h1 className="text-xl font-bold">Education</h1>
              {education[0].fields?.map((item: any) => (
                <div key={item.id}>
                  <h2
                    className={`mt-${spacing} w-fit bg-${template?.color} text-sm text-white px-2 font-bold`}
                  >
                    {item.school}, {item.city}
                  </h2>
                  <div className="flex mt-1 text-[0.8rem]">
                    <p>{item.startDate}</p>
                    <p>-</p>
                    <p>{item.endDate}</p>
                  </div>
                  <div className="text-[0.6rem]">
                    {summaryHTML(item.description)}
                  </div>
                </div>
              ))}
            </div>
          )}
          {custom.map((internships: any) => (
            <div key={internships.id}>
              {internships.header === "Internships" && (
                <div>
                  <h1 className="text-xl font-bold">Internships</h1>
                  {internships.fields.map((item: any) => (
                    <div key={item.id}>
                      <h2
                        className={`mt-${spacing} w-fit bg-gray-800 text-sm text-white px-2 font-bold`}
                      >
                        {item.employer}, {item.city}
                      </h2>
                      <div className="flex mt-1 text-[0.8rem]">
                        <p> {item.startDate}</p>
                        <p>-</p>
                        <p> {item.endDate}</p>
                      </div>
                      <div className="text-[0.6rem]">
                        lkja sdflkj asdlkfj laskdjf laksdjflkasdjf lkadsjf
                        lkasdj f
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={`w-2/5`}>
          {socialLinks[0].fields.length > 0 && (
            <div className={`bg-gray-200 rounded-lg py-2 px-3 `}>
              <h1 className="text-xl font-bold">Links</h1>
              {socialLinks[0].fields?.map((item: any) => (
                <div key={item.id}>
                  <p className="text-[0.6rem] underline">{item.label}</p>
                </div>
              ))}
            </div>
          )}
          {skills[0].fields.length > 0 && (
            <div className={`bg-gray-200 rounded-lg py-2 px-3 mt-${spacing}`}>
              <h1 className="text-xl font-bold">Skills</h1>
              <div className="text-[0.6rem] font-bold">
                <div className="flex justify-between flex-col">
                  {skills[0].fields?.map((item: any) => (
                    <div key={item.id} className="flex  justify-between">
                      <h2>{item.label}</h2>
                      <p>
                        {item.level === "Novice" && "1"}
                        {item.level === "Beginner" && "2"}
                        {item.level === "Skillfull" && "3"}
                        {item.level === "Experienced" && "4"}
                        {item.level === "Expert" && "5"}/5
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {custom.map((course: any) => (
            <div key={course.id}>
              {course.header === "Courses" && course.fields.length > 0 && (
                <div
                  className={`bg-gray-200 rounded-lg py-2 px-3 mt-${spacing}`}
                >
                  <h1 className="text-xl font-bold">Courses</h1>
                  {course.fields.map((item: any) => (
                    <div key={item.id}>
                      <h2 className="text-[0.6rem] font-bold">{item.course}</h2>
                      <div className="flex text-[0.6rem]">
                        <p>{item.startDate}</p>
                        <p>-</p>
                        <p>{item.endDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {custom.map((references: any) => (
            <div key={references.id}>
              {references.header === "References" && (
                <div
                  className={`bg-gray-200 rounded-lg py-2 px-3 mt-${spacing}`}
                >
                  <h1 className="text-xl font-bold">References</h1>
                  {references.checked === true ? (
                    <div>
                      {references.fields.map((reference: any) => (
                        <div key={reference.id} className="mt-1">
                          <h2 className="text-[0.6rem] font-bold">
                            {reference.fullName} from {reference.employer}
                          </h2>
                          <div className="text-[0.6rem]">
                            <p>{reference.email}</p>
                            <p>{reference.phone}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[0.7rem]">
                      References available upon request
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}

          {custom.map((hobbies: any) => (
            <div key={hobbies.id}>
              {hobbies.header === "Hobbies" && (
                <div
                  className={`bg-gray-200 rounded-lg py-2 px-3 mt-${spacing}`}
                >
                  <h1 className="text-xl font-bold">Hobbies</h1>

                  {hobbies.fields.map((hobby: any) => (
                    <div key={hobby.id}>
                      <div className="text-[0.6rem]">
                        <p>{hobby.like}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Toronto;
