import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import QuillEditor from "../../quill-editor";
import {
  MdOutlineDeleteForever,
  MdOutlineEdit,
  MdOutlineModeEditOutline,
  MdOutlineMoreHoriz,
} from "react-icons/md";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Delete from "../ui/Delete";
import { ui } from "../ui/ui";

function ExtraCurricular({
  custom,
  setCustom,
  item,
  deleteCustom,
  addCustom,
  index,
  deleteSubCustom,
}: any) {
  return (
    <div className="grid gap-1 ">
      <div className="grid gap-5 mt-1">
        {item.fields.map(
          (obj: any, i: any) =>
            item.type === "Extra-curricular Activities" && (
              <div className="">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <div className="flex justify-between w-full items-center pr-3">
                        <div>
                          {/* {item.fields[0].activityName
                      ? item.fields[0].activityName !== ""
                        ? item.fields[0].activityName
                        : "(Not Specified)"
                      : item.fields.map((obj: any) =>
                          obj[1] !== "" ? obj[1] : "Not Specified"
                        )} */}
                          {obj.functionTitle !== ""
                            ? obj.functionTitle
                            : "(Not Specified)"}
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
                                  id={item.id}
                                  id2={obj.id}
                                  ui={ui()}
                                  onDelete={deleteSubCustom}
                                />
                              </div>
                            </PopoverContent>
                          </Popover>
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <div className="grid gap-8 md:grid-cols-2 items-center ">
                          <div className=" ">
                            <p className="text-[0.9rem] md:text-[1rem] text-gray-500 mb-1">
                              {obj.header == "" || "Untitled"
                                ? "Function Title"
                                : "Course"}
                            </p>
                            <div className="">
                              <Input
                                className="bg-gray-200 w-full md:w-/12"
                                value={obj.functionTitle}
                                onChange={(e) => {
                                  let newData = [...custom];

                                  newData[index].fields[i].functionTitle =
                                    e.target.value;
                                  setCustom(newData);
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
                                value={obj.employer}
                                onChange={(e) => {
                                  let newData = [...custom];

                                  newData[index].fields[i].employer =
                                    e.target.value;
                                  setCustom(newData);
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
                                value={obj.startDate}
                                onChange={(e) => {
                                  let newData = [...custom];

                                  newData[index].fields[i].startDate =
                                    e.target.value;
                                  setCustom(newData);
                                }}
                              />
                              <Input
                                className="bg-gray-200 w-1/2 md:w-/12"
                                value={obj.endDate}
                                onChange={(e) => {
                                  let newData = [...custom];

                                  newData[index].fields[i].endDate =
                                    e.target.value;
                                  setCustom(newData);
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
                                value={obj.city}
                                onChange={(e) => {
                                  let newData = [...custom];

                                  newData[index].fields[i].city =
                                    e.target.value;
                                  setCustom(newData);
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
                            <QuillEditor />
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default ExtraCurricular;
