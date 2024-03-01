'use client'
import React, { useEffect } from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { IoMdPeople, IoMdSchool } from "react-icons/io";
import { MdStickyNote2 } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";

function NewYork({
  resumeDetails,
  employment,
  education,
  socialLinks,
  skills,
  custom,
  summary,
}: any) {
  const summaryHTML = (data: any) => {
    return <div dangerouslySetInnerHTML={{ __html: data }} />;
  };

  useEffect(() => {
    console.log("manai taho", socialLinks);
  }, [socialLinks]);

  return (
    <div
      className={`w-full  bg-white lg:w-[700px] mt-10 rounded-md h-max pb-50 md:h-[850px] py-6 px-3 `}
    >
      <h1 className="w-full text-xl md:text-3xl font-bold">
        {resumeDetails[0].fields[1].value}
      </h1>
      <p className="text-sm">{resumeDetails[0].fields[0].value}</p>
      <div className="flex justify-between ">
        <div>
          <div className="flex items-left mt-10 gap-3">
            <span className="mt-[5px]">
              <IoPerson />
            </span>
            <div>
              <h2 className="text-[1rem] md:text-[1.3rem] font-semibold">
                Profile
              </h2>
              <p>{summaryHTML(summary)}</p>
            </div>
          </div>

          <div className="flex items-left mt-5 gap-3">
            <span className="mt-[6px]">
              <BsFillBriefcaseFill />
            </span>
            <div>
              <h2 className="text-[1rem] md:text-[1.3rem] font-semibold">
                Employment History
              </h2>
              <div className="grid gap-3">
                {employment[0].fields.map((item: any) => (
                  <div key={item.id} className="">
                    <h2 className="text-[0.8rem] md:text-[1rem] font-semibold">
                      {item.jobTitle} at {item.employer}, {item.city}
                    </h2>
                    <div className="flex gap-2 text-sm text-gray-500">
                      <p>{item.startDate}</p>
                      <p>-</p>
                      <p>{item.endDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-left mt-5 gap-3">
            <span className="mt-[6px]">
              <IoMdSchool />
            </span>
            <div>
              <h2 className="text-[1rem] md:text-[1.3rem] font-semibold">
                Education
              </h2>
              <div className="grid gap-3">
                {education[0].fields.map((item: any) => (
                  <div key={item.id}>
                    <h2 className="text-[0.8rem] md:text-[1rem] font-semibold">
                      {item.degree}, {item.school}, {item.city}
                    </h2>
                    <div className="flex gap-2 text-sm text-gray-500">
                      <p>{item.startDate}</p>
                      <p>-</p>
                      <p>{item.endDate}</p>
                    </div>
                    <p>{summaryHTML(item.description)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="">
            {custom.map((course: any) => (
              <div key={course.id}>
                {course.header === "Courses" && course.fields.length > 0 && (
                  <div className="flex items-left mt-5 gap-3">
                    <span className="mt-[6px]">
                      <MdStickyNote2 />
                    </span>
                    <div>
                      <h2 className="text-[1rem] md:text-[1.3rem] font-semibold">
                        Courses
                      </h2>{" "}
                      <div className="grid gap-2">
                        {course.fields.map((item: any) => (
                          <div key={item.id}>
                            <h2 className="text-[0.8rem] md:text-[1rem] font-semibold">
                              {item.course}
                            </h2>
                            <div className="flex gap-2 text-sm text-gray-500">
                              <p>{item.startDate}</p>
                              <p>-</p>
                              <p>{item.endDate}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {custom.map((references: any) => (
            <div key={references.id}>
              {references.header === "References" && (
                <div className="flex items-left mt-5 gap-3">
                  <span className="mt-[6px]">
                    <HiSpeakerphone />{" "}
                  </span>
                  <div>
                    <h2 className="text-[1rem] md:text-[1.3rem] font-semibold">
                      References
                    </h2>
                    {references.checked === true ? (
                      <div>
                        {references.fields.map((item: any) => (
                          <div key={item.id}>
                            <h2 className="text-[0.8rem] md:text-[1rem] font-semibold">
                              {item.fullName} from {item.employer}
                            </h2>
                            <div className="flex gap-2 text-sm text-gray-500">
                              <p>{item.email}</p>
                              <p>-</p>
                              <p>{item.phone}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[0.9rem]">
                        References available upon request
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="flex items-left mt-5 gap-3">
            <span className="mt-[6px]">
              <IoMdPeople />
            </span>
            <div>
              <h2 className="text-[1rem] md:text-[1.3rem] font-semibold">
                Internships
              </h2>
              <h2 className="text-[0.8rem] md:text-[1rem] font-semibold">
                Intern at Australia Post
              </h2>
              <div className="flex gap-2 text-sm text-gray-500">
                <p>January 2024</p>
                <p>-</p>
                <p>March 2024</p>
              </div>
              <p>lkjasdlkfj</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5">
          <div>
            <h2 className="font-semibold text-[1rem] md:text-[1.1rem]">
              Details
            </h2>
            <div className="text-sm">
              <p>{resumeDetails[0].fields[7].value}</p>
              <p>
                {resumeDetails[0].fields[6].value},{" "}
                {resumeDetails[0].fields[5].value}
              </p>
              <p>{resumeDetails[0].fields[8].value}</p>
              <p>{resumeDetails[0].fields[4].value}</p>
              <p>{resumeDetails[0].fields[3].value}</p>
            </div>
          </div>

          {socialLinks[0].fields.length > 0 && (
            <div>
              <h2 className="font-semibold text-[1rem] md:text-[1.1rem]">
                Links
              </h2>
              {socialLinks[0].fields?.map((item: any) => (
                <div key={item.id} className="text-sm">
                  <p>{item.label}</p>
                  
                </div>
              ))}
            </div>
          )}

          <div>
            <h2 className="font-semibold text-[1rem] md:text-[1.1rem]">
              Skills
            </h2>
            <div className="text-sm">
              <p>Linkden Profile</p>
              <p>Github Profile</p>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-[1rem] md:text-[1.1rem]">
              Hobbies
            </h2>
            <div className="text-sm">
              <p>Singing, Coding</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewYork;
