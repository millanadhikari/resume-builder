import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useEffect } from "react";
import {
  MdOutlineEdit,
  MdOutlineModeEditOutline,
  MdOutlineMoreHoriz,
} from "react-icons/md";
import QuillEditor from "../../quill-editor";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Delete from "../ui/Delete";
import { ui } from "../ui/ui";

interface SocialLink {
  header: string;
  edit: boolean;
  fields: any[]; // You might want to define a specific type for fields as well
}
interface Props {
  education: SocialLink[];
  handleEducation: () => void;
  deleteEducation: (id: any) => void;
  setEducation: React.Dispatch<React.SetStateAction<SocialLink[]>>;
}

function Education({
  education,
  deleteEducation,
  handleEducation,
  setEducation,
}: Props) {
  useEffect(() => {
    console.log("education", education);
  }, [education]);
  return (
    <div className="grid gap-1 my-5">
      <div className="flex items-center  gap-2 ">
        <h1 className="text-xl  md:text-2xl font-bold">
          {education[0].header}
        </h1>
        <div className="text-2xl text-gray-400 cursor-pointer hover:text-blue-500">
          <MdOutlineEdit />
        </div>
      </div>
      <p className="text-[0.9rem] md:text-[1rem] text-gray-500">
        A varied education on your resume sumps up the value that your learnings
        and background will bring to job.
      </p>
      <div className="grid gap-5 mt-4">
        {education[0].fields.map((field: any, index: any) => (
          <div key={field.id} className="">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <div className="flex justify-between w-full items-center pr-3">
                    <div>
                      {field.school === "" ? (
                        <div className="font-bold">(Not Specified)</div>
                      ) : (
                        field.school
                      )}{" "}
                      {field.degree === "" ? "" : "at"}{" "}
                      {field.degree === "" ? "" : field.degree}
                    </div>
                    <span className="text-2xl pt-2">
                      {" "}
                      <Popover>
                        <PopoverTrigger>
                          <MdOutlineMoreHoriz />
                        </PopoverTrigger>
                        <PopoverContent>
                          <div className="flex flex-col gap-4">
                            <div className="flex gap-2 cursor-pointer">
                              <span className="text-2xl text-blue-500">
                                <MdOutlineModeEditOutline />
                              </span>
                              <p>Edit</p>
                            </div>

                            <Delete
                              id={field.id}
                              ui={ui()}
                              onDelete={deleteEducation}
                            />
                          </div>
                        </PopoverContent>
                      </Popover>
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-8 md:grid-cols-2 items-center ">
                    <div className=" ">
                      <p className="text-[0.9rem] md:text-[1rem] text-gray-500 mb-1">
                        Job Title
                      </p>
                      <div className="">
                        <Input
                          className="bg-gray-200 w-full md:w-/12"
                          value={field.school}
                          onChange={(e) => {
                            let newData = [...education];
                            newData[0].fields[index].school = e.target.value;
                            setEducation(newData);
                          }}
                        />
                      </div>
                    </div>
                    <div className=" ">
                      <p className="text-[0.9rem] md:text-[1rem] text-gray-500 mb-1">
                        Degree
                      </p>
                      <div className="">
                        <Input
                          className="bg-gray-200 w-full md:w-/12"
                          value={field.degree}
                          onChange={(e) => {
                            let newData = [...education];
                            newData[0].fields[index].degree = e.target.value;
                            setEducation(newData);
                          }}
                        />
                      </div>
                    </div>
                    <div className=" ">
                      <p className="text-[0.9rem] md:text-[1rem] text-gray-500 mb-1">
                        Start & End Date
                      </p>
                      <div className="flex gap-4">
                        <Input
                          className="bg-gray-200 w-1/2 md:w-/12"
                          value={field.startDate}
                          onChange={(e) => {
                            let newData = [...education];
                            newData[0].fields[index].startDate = e.target.value;
                            setEducation(newData);
                          }}
                        />
                        <Input
                          className="bg-gray-200 w-1/2 md:w-/12"
                          value={field.endDate}
                          onChange={(e) => {
                            let newData = [...education];
                            newData[0].fields[index].endDate = e.target.value;
                            setEducation(newData);
                          }}
                        />
                      </div>
                    </div>
                    <div className=" ">
                      <p className="text-[0.9rem] md:text-[1rem] text-gray-500 mb-1">
                        City
                      </p>
                      <div className="">
                        <Input
                          className="bg-gray-200 w-full md:w-/12"
                          value={field.city}
                          onChange={(e) => {
                            let newData = [...education];
                            newData[0].fields[index].city = e.target.value;
                            setEducation(newData);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 ">
                    <p className="text-[0.9rem] md:text-[1rem] text-gray-500 mb-1">
                      Description
                    </p>
                    <div className="mt-2">
                      <QuillEditor
                        desc={education[0].fields[index].description}
                        setSummary={(content: any) => {
                          let newData = [...education];
                          newData[0].fields[index].description = content;
                          setEducation(newData);
                        }}
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
      <Button
        onClick={handleEducation}
        className="bg-white text-[#1a91f0] font-bold text-md hover:bg-blue-100 py-6 mr-auto"
      >
        + Add {education[0].fields.length <= 0 ? "education" : "one more"}
      </Button>
    </div>
  );
}

export default Education;
