import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import {
  MdOutlineDeleteForever,
  MdOutlineEdit,
  MdOutlineModeEditOutline,
  MdOutlineMoreHoriz,
} from "react-icons/md";
import QuillEditor from "../../quill-editor";
import ExtraCurricular from "./extraCurricular";
import Internship from "./internship";
import Hobbies from "./hobbies";
import References from "./references";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Delete from "../ui/Delete";
import { ui } from "../ui/ui";

function Custom({
  custom,
  setCustom,
  item,
  deleteCustom,
  addCustom,
  addReference,
  index,
  addSubCustom,
  deleteSubCustom,
  addExtraCurricular,
}: any) {
  console.log("low", item);
  return (
    <div className="grid gap-1 my-5">
      <div className=" flex">
        <input
          className="text-xl md:text-2xl font-bold placeholder:text-black focus:outline-none bg-white"
          disabled={item.edit}
          type="text"
          value={item.header}
          placeholder={item.header !== "" ? item.header : "Untitled"}
          onChange={(e) => {
            const updatedCustom = [...custom];
            updatedCustom[index].header = e.target.value;
            setCustom(updatedCustom);
          }}
        />

        <div className="text-2xl flex gap-2 text-gray-400 cursor-pointer w-auto ">
          <span
            className="hover:text-blue-500"
            onClick={() => {
              const updatedCustom = [...custom];
              updatedCustom[index].edit = !updatedCustom[index].edit;
              setCustom(updatedCustom);
            }}
          >
            <MdOutlineEdit />{" "}
          </span>
          <span
            className="hover:text-blue-500"
            onClick={() => deleteCustom(item.id)}
          >
            <MdOutlineDeleteForever />
          </span>
        </div>
      </div>

      <div className="grid gap-5 mt-4">
        {item.fields.map(
          (obj: any, i: any) =>
            item.type == "custom" && (
              <div key={obj.id} className="">
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
                          {obj.activityName !== ""
                            ? obj.activityName
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
                                ? "Activity name, job title, book title etc."
                                : "Course"}
                            </p>
                            <div className="">
                              <Input
                                className="bg-gray-200 w-full md:w-/12"
                                value={obj.activityName}
                                onChange={(e) => {
                                  let newData = [...custom];

                                  newData[index].fields[i].activityName =
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

        {item.type === "course" && (
          <Courses
            item={item}
            custom={custom}
            index={index}
            setCustom={setCustom}
            deleteSubCustom={deleteSubCustom}
          />
        )}
        {item.type === "Extra-curricular Activities" && (
          <ExtraCurricular
            item={item}
            custom={custom}
            index={index}
            setCustom={setCustom}
            deleteSubCustom={deleteSubCustom}
          />
        )}

        {item.type === "internship" && (
          <Internship
            item={item}
            custom={custom}
            index={index}
            setCustom={setCustom}
            deleteSubCustom={deleteSubCustom}
          />
        )}
        {item.fields.map(
          (obj: any) =>
            Object.keys(obj)[1] === "like" && (
              <Hobbies
                item={item}
                key={obj}
                custom={custom}
                index={index}
                setCustom={setCustom}
              />
            )
        )}
        {/* {item.fields.map(
          (obj: any) =>
            Object.keys(obj)[1] === "fullName" && (
              <References
                item={item}
                key={obj}
                custom={custom}
                index={index}
                setCustom={setCustom}
              />
            )
        )} */}
        {item.type == "reference" && (
          <References
            item={item}
            key={item.id}
            custom={custom}
            index={index}
            setCustom={setCustom}
          />
        )}
      </div>

      {(item.type == "custom" || item.type == "course" || item.type=="internship") && (
        <Button
          onClick={() => addSubCustom(item.type)}
          className=" bg-white text-blue-500 font-bold text-md hover:bg-blue-100 py-6 mr-auto"
        >
          + Add one more item
        </Button>
      )}
      {item.type == "reference" && (
        <Button
          onClick={() => addReference("Custom Section")}
          className=" bg-white text-blue-500 font-bold text-md hover:bg-blue-100 py-6 mr-auto"
        >
          + Add one more reference
        </Button>
      )}

      {item.type == "Extra-curricular Activities" && (
        <Button
          onClick={() => addExtraCurricular()}
          className=" bg-white text-blue-500 font-bold text-md hover:bg-blue-100 py-6 mr-auto"
        >
          + Add one more activities
        </Button>
      )}
    </div>
  );
}

export default Custom;

const Courses = ({ item, custom, index, setCustom, deleteSubCustom }: any) => {
  return (
    <div className="grid gap-1 ">
      <div className="grid gap-5 mt-1">
        {item.fields.map(
          (obj: any, i: any) =>
            item.type === "course" && (
              <div key={i}>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <div className="flex justify-between w-full items-center pr-3">
                        <div>
                          {obj.course !== "" ? obj.course : "(Not Specified)"}
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
                        {" "}
                        <div className="grid gap-8 md:grid-cols-2 items-center ">
                          <div className=" ">
                            <p className="text-[0.9rem] md:text-[1rem] text-gray-500 mb-1">
                              Course
                            </p>
                            <div className="">
                              <Input
                                className="bg-gray-200 w-full md:w-/12"
                                value={obj.course}
                                onChange={(e) => {
                                  let newData = [...custom];

                                  newData[index].fields[i].course =
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
};
