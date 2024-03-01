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
  item: any;
  internship: SocialLink[];
  handleInternship: () => void;
  setInternship: React.Dispatch<React.SetStateAction<SocialLink[]>>;
}

function Internship({
  custom,
  setCustom,
  item,
  deleteCustom,
  addCustom,
  index,
  deleteSubCustom,
}: any) {
  return (
    <div className="grid gap-1 my-5">
      <div className="grid gap-5 mt-4">
        {item.fields.map(
          (obj: any, i: any) =>
            Object.keys(obj)[1] === "internshipTitle" && (
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
                          {obj.internshipTitle !== ""
                            ? obj.internshipTitle
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
                              Internship Title
                            </p>
                            <div className="">
                              <Input
                                className="bg-gray-200 w-full md:w-/12"
                                value={obj.internshipTitle}
                                onChange={(e) => {
                                  let newData = [...custom];

                                  newData[index].fields[i].internshipTitle =
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

export default Internship;
