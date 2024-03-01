import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import {
  MdOutlineDeleteOutline,
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

interface SocialLink {
  header: string;
  edit: boolean;
  fields: any[]; // You might want to define a specific type for fields as well
}
interface Props {
  employment: SocialLink[];
  handleEmployment: () => void;
  setEmployment: React.Dispatch<React.SetStateAction<SocialLink[]>>;
  deleteEmployment: (id: any) => void;
}

function Employment({
  employment,
  handleEmployment,
  setEmployment,
  deleteEmployment,
}: Props) {
  const ui = () => {
    return (
      <div className="flex gap-2 cursor-pointer">
        <span className="text-2xl text-blue-500">
          <MdOutlineDeleteOutline />
        </span>
        <p>Delete</p>
      </div>
    );
  };
  return (
    <div className="grid gap-1 my-5">
      <div className="flex items-center  gap-2 ">
        <h1 className="text-xl  md:text-2xl font-bold">
          {employment[0].header}
        </h1>
        <div className="text-2xl text-gray-400 cursor-pointer hover:text-blue-500">
          <MdOutlineEdit />
        </div>
      </div>
      <p className="text-[0.9rem] md:text-[1rem] text-gray-500">
        Show your relevant experience (last 10 years). Use bullet points to note
        your ahivements. If possible-use number/facts (Achieved X, measured by
        Y, by doing Z)
      </p>
      <div className="grid gap-5 mt-4">
        {employment[0].fields?.map((field: any, index: any) => (
          <div key={field.id} className="">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex justify-between w-full items-center pr-3">
                    <div>
                      {field.jobTitle === "" ? (
                        <div className="font-bold">(Not Specified)</div>
                      ) : (
                        field.jobTitle
                      )}{" "}
                      {field.employer === "" ? "" : "at"}{" "}
                      {field.employer === "" ? "" : field.employer}
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
                              onDelete={deleteEmployment}
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
                          value={field.jobTitle}
                          onChange={(e) => {
                            let newData = [...employment];
                            newData[0].fields[index].jobTitle = e.target.value;
                            setEmployment(newData);
                          }}
                        />
                      </div>
                    </div>
                    <div className=" ">
                      <p className="text-[0.9rem] md:text-[1rem] text-gray-500 mb-1">
                        Employer
                      </p>
                      <div className="">
                        <Input
                          className="bg-gray-200 w-full md:w-/12"
                          value={field.employer}
                          onChange={(e) => {
                            let newData = [...employment];
                            newData[0].fields[index].employer = e.target.value;
                            setEmployment(newData);
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
                            let newData = [...employment];
                            newData[0].fields[index].startDate = e.target.value;
                            setEmployment(newData);
                          }}
                        />
                        <Input
                          className="bg-gray-200 w-1/2 md:w-/12"
                          value={field.endDate}
                          onChange={(e) => {
                            let newData = [...employment];
                            newData[0].fields[index].endDate = e.target.value;
                            setEmployment(newData);
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
                            let newData = [...employment];
                            newData[0].fields[index].city = e.target.value;
                            setEmployment(newData);
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
                        desc={employment[0].fields[index].description}
                        setSummary={(content: any) => {
                          let newData = [...employment];
                          newData[0].fields[index].description = content;
                          setEmployment(newData);
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
        onClick={handleEmployment}
        className=" bg-white text-[#1a91f0] font-bold text-md hover:bg-blue-100 py-6 mr-auto"
      >
        + Add employment
      </Button>
    </div>
  );
}

export default Employment;
