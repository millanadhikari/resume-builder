"use client";
import { Input } from "@/components/ui/input";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineDashboardCustomize, MdOutlineEdit } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import QuillEditor from "../quill-editor";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import WebsiteSocial from "./misc/website-social";
import Employment from "./misc/employment";
import Education from "./misc/education";
import Skills from "./misc/skills";
import { addSection, personal } from "./misc/data";
import Custom from "./misc/custom";
import { useAppStore } from "@/store/store";
import { v4 as uuidv4 } from "uuid";

interface SocialLink {
  header: string;
  edit: boolean;
  fields: any[]; // You might want to define a specific type for fields as well
}
function Details() {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const ref1 = useRef<any>(null);

  const { resumeDetails, setResumeDetails } = useAppStore();

  const { summary, setSummary } = useAppStore();

  const { education, setEducation } = useAppStore();

  const { employment, setEmployment } = useAppStore();

  const { socialLinks, setSocialLinks } = useAppStore();

  // const [skills, setSkills] = useState<any>([
  //   {
  //     header: "Skills",
  //     edit: true,
  //     fields: [],
  //     ability: [
  //       "Adaptability",
  //       "Detail Oriented",
  //       "Excellent Communication Skills",
  //       "Collaboration & Teamwork",
  //       "Creativity",
  //       "Decision Making",
  //       "Critical thinking and problem solving",
  //       "Management Skills",
  //       "Time Management Skills",
  //       "Marketing",
  //     ],
  //   },
  // ]);

  const { skills, setSkills } = useAppStore();

  // const [custom, setCustom] = useState<any>([]);
  const { custom, setCustom } = useAppStore();

  const isDisabled = (item: any) => {
    if (custom.some((jhandu: any) => jhandu.header === item.title)) {
      return true;
    } else {
      false;
    }
  };
  const handleSkills = (label = "default value") => {
    const updatedFields = [...skills];
    const newData = {
      id: 1,
      label: label !== "default value" ? label : "",
      level: "Expert",
    };
    const oldData = {
      id: skills[0].fields.length + 1,
      label: label !== "default value" ? label : "",
      level: "Expert",
    };
    skills[0].fields.length <= 0
      ? updatedFields[0].fields.push(newData)
      : updatedFields[0].fields.push(oldData);

    setSkills(updatedFields);
  };
  const handleInputChange = (
    itemIndex: number,
    fieldIndex: number,
    value: string
  ) => {
    const updatedResumeDetails = [...resumeDetails];
    updatedResumeDetails[itemIndex].fields[fieldIndex].value = value;
    setResumeDetails(updatedResumeDetails);
  };

  const handleEducation = () => {
    const updatedFields = [...education];
    const newData = {
      id: 1,
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    };
    const oldData = {
      id: education[0].fields.length + 1,
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    };
    education[0].fields.length <= 0
      ? updatedFields[0].fields.push(newData)
      : updatedFields[0].fields.push(oldData);

    setEducation(updatedFields);
  };

  const handleEmployment = () => {
    const updatedFields = [...employment];
    const newData = {
      id: 1,
      jobTitle: "",
      employer: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    };
    const oldData = {
      id: employment[0].fields.length + 1,
      jobTitle: "",
      employer: "",
      startDate: "",
      endDate: "",
      city: "",
      description: "",
    };
    employment[0].fields.length <= 0
      ? updatedFields[0].fields.push(newData)
      : updatedFields[0].fields.push(oldData);

    setEmployment(updatedFields);
  };

  const handleSocialLinks = () => {
    const updatedFields = [...socialLinks];
    const newData = {
      id: 1,
      label: "",
      link: "",
    };
    const oldData = {
      id: socialLinks[0].fields.length + 1,
      label: "",
      link: "",
    };
    socialLinks[0].fields.length <= 0
      ? updatedFields[0].fields.push(newData)
      : updatedFields[0].fields.push(oldData);

    setSocialLinks(updatedFields);
  };

  const addCustom = (title: string, id?: number) => {
    const newData = [...custom];
    const course1 = {
      id: 1,
      header: title,
      type: "course",
      edit: true,
      fields: [
        {
          id: 1,
          course: "",
          startDate: "",
          endDate: "",
        },
      ],
    };
    const course2 = {
      id: newData.length + 1,
      header: title,
      type: "course",
      edit: false,
      fields: [
        {
          id: 1,
          course: "",
          startDate: "",
          endDate: "",
        },
      ],
    };
    const extra = {
      id: 1,
      header: title,
      edit: true,
      type: "Extra-curricular Activities",
      fields: [
        {
          id: 1,
          functionTitle: "",
          startDate: "",
          endDate: "",
          Employer: "",
          city: "",
          description: "",
        },
      ],
    };
    const extra2 = {
      id: newData.length + 1,
      header: title,
      edit: false,
      type: "Extra-curricular Activities",

      fields: [
        {
          id: 1,
          functionTitle: "",
          startDate: "",
          endDate: "",
          Employer: "",
          city: "",
          description: "",
        },
      ],
    };
    const intern1 = {
      id: 1,
      header: title,
      type: "internship",
      edit: true,
      fields: [
        {
          id: 1,
          internshipTitle: "",
          startDate: "",
          endDate: "",
          Employer: "",
          city: "",
          description: "",
        },
      ],
    };
    const intern2 = {
      id: newData.length + 1,
      header: title,
      type: "internship",
      edit: false,
      fields: [
        {
          id: 1,
          internshipTitle: "",
          startDate: "",
          endDate: "",
          Employer: "",
          city: "",
          description: "",
        },
      ],
    };

    const hobbies1 = {
      id: 1,
      header: title,
      edit: false,
      type: "internship",
      fields: [
        {
          id: 1,
          like: "",
        },
      ],
    };
    const hobbies2 = {
      id: newData.length + 1,
      header: title,
      edit: false,
      type: "internship",
      fields: [
        {
          id: 1,
          like: "",
        },
      ],
    };

    const references1 = {
      id: 1,
      header: title,
      type: "reference",
      edit: false,
      checked: false,
      fields: [
        {
          id: 1,
          fullName: "",
          company: "",
          phone: "",
          email: "",
        },
      ],
    };
    const references2 = {
      id: newData.length + 1,
      header: title,
      type: "reference",
      edit: false,
      checked: false,
      fields: [
        {
          id: 1,
          fullName: "",
          company: "",
          phone: "",
          email: "",
        },
      ],
    };
    switch (title) {
      case "Courses":
        newData.length <= 0 ? newData.push(course1) : newData.push(course2);

        setCustom(newData);
        break;
      case "Extra-curricular Activities":
        newData.length <= 0 ? newData.push(extra) : newData.push(extra2);

        setCustom(newData);
        break;

      case "Internships":
        newData.length <= 0 ? newData.push(intern1) : newData.push(intern2);

        setCustom(newData);
        break;

      case "Hobbies":
        newData.length <= 0 ? newData.push(hobbies1) : newData.push(hobbies2);

        setCustom(newData);
        break;

      case "References":
        newData.length <= 0
          ? newData.push(references1)
          : newData.push(references2);

        setCustom(newData);
        break;

      default:
        const data = {
          id: uuidv4(),
          header: "",
          edit: true,
          type: "custom",
          fields: [
            {
              id: 1,
              activityName: "",
              startDate: "",
              endDate: "",
              city: "",
              description: "",
            },
          ],
        };
        const maya = {
          id: uuidv4(),
          header: "",
          edit: false,
          type: "custom",
          fields: [
            {
              id: 1,
              activityName: "",
              startDate: "",
              endDate: "",
              city: "",
              description: "",
            },
          ],
        };
        newData.length <= 0 ? newData.push(data) : newData.push(maya);

        setCustom(newData);
    }
  };

  const addReference = () => {
    const laya = custom.map((item: any) => {
      if (item.type == "reference") {
        return {
          ...item,
          fields: [
            ...item.fields,
            {
              id: uuidv4(),
              fullName: "",
              company: "",
              phone: "",
              email: "",
            },
          ],
        };
      }
      return item;
    });
    setCustom(laya);
  };

  const addExtraCurricular = () => {
    const laya = custom.map((item: any) => {
      if (item.type == "Extra-curricular Activities") {
        return {
          ...item,
          fields: [
            ...item.fields,
            {
              id: uuidv4(),
              functionTitle: "",
              startDate: "",
              endDate: "",
              Employer: "",
              city: "",
              description: "",
            },
          ],
        };
      }
      return item;
    });
    setCustom(laya);
  };
  const addSubCustom = (type: any) => {
    const laya = custom.map((item: any) => {
      if (item.type === type && type === "custom") {
        return {
          ...item,
          fields: [
            ...item.fields,
            {
              id: uuidv4(),
              activityName: "",
              startDate: "",
              endDate: "",
              city: "",
            },
          ],
        };
      }
      if (item.type === type && type === "course") {
        return {
          ...item,
          fields: [
            ...item.fields,
            {
              id: uuidv4(),
              course: "",
              startDate: "",
              endDate: "",
            },
          ],
        };
      }
      if (item.type === type && type === "internship") {
        return {
          ...item,
          fields: [
            ...item.fields,
            {
              id: uuidv4(),
              internshipTitle: "",
              startDate: "",
              endDate: "",
              Employer: "",
              city: "",
              description: "",
            },
          ],
        };
      }
      return item;
    });
    setCustom(laya);
  };
  const deleteCustom = (id: any) => {
    const newData = [...custom];
    const maya = newData.filter((item) => item.id !== id);

    setCustom(maya);
  };

  const deleteEmployment = (id: any) => {
    let newData = [...employment];
    const maya = newData[0].fields.filter((item) => item.id !== id);
    newData[0].fields = maya;
    setEmployment(newData);
  };

  const deleteSocialLinks = (id: any) => {
    let newData = [...socialLinks];
    const maya = newData[0].fields.filter((item) => item.id !== id);
    newData[0].fields = maya;
    console.log("maya", maya);
    setSocialLinks(newData);
  };

  const deleteEducation = (id: any) => {
    let newData = [...education];
    const maya = newData[0].fields.filter((item) => item.id !== id);
    newData[0].fields = maya;
    setEducation(newData);
  };

  const deleteSkills = (id: any) => {
    let newData = [...skills];
    const maya = newData[0].fields.filter((item) => item.id !== id);
    newData[0].fields = maya;
    setSkills(newData);
  };

  const deleteSubCustom = (id: any, id2: any) => {
    let maya = [...custom];
    //Find the object by id
    const newData = maya.map((obj: any) => {
      //Find the index of the item to delete
      const itemIndex = obj.fields.findIndex((item: any) => item.id === id2);

      //If itemIndex is not -1, i.e., item exists
      if (itemIndex !== -1) {
        //Create a new array with the item removed
        obj.fields.splice(itemIndex, 1);
      }
      return obj;
    });
    setCustom(newData);
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref1.current && !ref1.current.contains(event.target)) {
        resumeDetails[0].edit = !resumeDetails[0].edit;
        console.log("hey", resumeDetails);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref1]);

  useEffect(() => {
    console.log("omg", summary);
  }, [summary]);
  return (
    <div className="w-full my-10 ">
      <div className="w-full ">
        {resumeDetails.map((item, itemIndex) => (
          <div>
            <div className="flex items-center mb-4 ">
              <input
                className="text-xl md:text-2xl font-bold placeholder:text-black focus:outline-none bg-white"
                disabled={item.edit}
                placeholder={item.header}
              ></input>
              <div
                onClick={() => {
                  const updatedResumeDetails = [...resumeDetails];
                  updatedResumeDetails[itemIndex].edit =
                    !updatedResumeDetails[itemIndex].edit;

                  setResumeDetails(updatedResumeDetails);
                }}
                ref={ref1}
                className="text-2xl text-gray-400 cursor-pointer hover:text-blue-500"
              >
                <MdOutlineEdit />
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2 items-center ">
              {item.fields.map((field, fieldIndex) => (
                <div className=" " key={fieldIndex}>
                  <p className="text-[0.9rem] md:text-[1rem] text-gray-500 mb-1">
                    {field.label}
                  </p>
                  <div className="">
                    <Input
                      placeholder={field.name == "title" ? "e.g. Teacher" : ""}
                      className="bg-gray-200 w-full md:w-/12"
                      value={field.value}
                      onChange={(e) =>
                        handleInputChange(itemIndex, fieldIndex, e.target.value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full my-5">
        <div className="grid gap-1">
          <div className="flex items-center  gap-2 ">
            <h1 className="text-xl  md:text-2xl font-bold">
              Professional Summary
            </h1>
            <div className="text-2xl text-gray-400 cursor-pointer hover:text-blue-500">
              <MdOutlineEdit />
            </div>
          </div>
          <p className="text-[0.9rem] md:text-[1rem] text-gray-500">
            Write 2-4 short & energetic sentences to interest the reader!
            Mention your role, experience & most importantly-your{" "}
            <br className="hidden md:inline" /> biggest achievements, best
            qualities and skills.
          </p>
        </div>
        <div className="mt-4">
          <QuillEditor desc={summary} setSummary={setSummary} />
        </div>
        <p className="mt-12 text-[0.8rem] md:text-[0.9rem] text-gray-500">
          Recruiter tip: write 5-200 characters to increase interview chances.
        </p>
      </div>
      <Employment
        employment={employment}
        handleEmployment={handleEmployment}
        setEmployment={setEmployment}
        deleteEmployment={deleteEmployment}
      />
      {/* dnd */}
      <div className="w-full my-5">
        <WebsiteSocial
          socialLinks={socialLinks}
          handleSocialLinks={handleSocialLinks}
          setSocialLinks={setSocialLinks}
          deleteSocialLinks={deleteSocialLinks}
        />
        <Education
          education={education}
          handleEducation={handleEducation}
          setEducation={setEducation}
          deleteEducation={deleteEducation}
        />
        <Skills
          skills={skills}
          handleSkills={handleSkills}
          setSkills={setSkills}
          deleteSkills={deleteSkills}
        />
        {custom.length > 0 &&
          custom?.map((item: any, index: number) => (
            <Custom
              custom={custom}
              key={item.id}
              item={item}
              index={index}
              setCustom={setCustom}
              addCustom={addCustom}
              deleteCustom={deleteCustom}
              addReference={addReference}
              addSubCustom={addSubCustom}
              deleteSubCustom={deleteSubCustom}
              addExtraCurricular={addExtraCurricular}
            />
          ))}
      </div>
      <div className="mt-4">
        <h1 className="text-lg font-bold">Add Section</h1>
        <div className="my-3 grid gap-4 md:grid-cols-2">
          {addSection.map((item, index) => (
            <button
              key={item.id}
              disabled={custom.some(
                (jhandu: any) => jhandu.header === item.title
              )}
              className={`flex gap-3 items-center cursor-pointer ${
                isDisabled(item) && "text-gray-400"
              }`}
              onClick={() => addCustom(item.title, item.id)}
            >
              <span
                className={`text-4xl text-[#1a91f0] ${
                  isDisabled(item) && "text-gray-400"
                }`}
              >
                {item.icon}
              </span>
              <h2
                className={`text-md md:text-lg hover:text-[#1a91f0] ${
                  isDisabled(item) && "hover:text-gray-400"
                }`}
              >
                {item.title}
              </h2>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
