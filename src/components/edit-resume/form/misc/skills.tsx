import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { MdOutlineEdit, MdOutlineModeEditOutline, MdOutlineMoreHoriz } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Delete from "../ui/Delete";
import { ui } from "../ui/ui";

interface Skills {
  header: string;
  edit: boolean;
  fields: any[];
  ability: any[]; // You might want to define a specific type for fields as well
}
interface Props {
  skills: Skills[];
  handleSkills: (label?: string) => void;
  deleteSkills: (id: any) => void;

  setSkills: React.Dispatch<React.SetStateAction<Skills[]>>;
}

function Skills({ skills, handleSkills, deleteSkills, setSkills }: Props) {
  return (
    <div className="grid gap-1 my-5">
      <div className="flex items-center  gap-2 ">
        <h1 className="text-xl  md:text-2xl font-bold">{skills[0].header}</h1>
        <div className="text-2xl text-gray-400 cursor-pointer hover:text-blue-500">
          <MdOutlineEdit />
        </div>
      </div>
      <p className="text-[0.9rem] md:text-[1rem] text-gray-500">
        Choose 5 important skills that show you fit the position. Make sure
        theyu match the key skills mentioned in the job listing (especially when
        applying via an online system).
      </p>
      <div className=" flex flex-wrap gap-4 mt-3">
        {skills[0].ability.map((item: any) => (
          <div
            key={item}
            onClick={() => handleSkills(item)}
            className="flex text-nowrap  gap-2 bg-gray-200 py-2 rounded-md text-sm hover:text-blue-500 cursor-pointer px-2 text-center"
          >
            <span>{item}</span>
            <span>+</span>
          </div>
        ))}
      </div>
      <div className="grid gap-5 mt-4">
        {skills[0].fields.map((field: any, index: any) => (
          <div key={field.id} className="">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex justify-between w-full items-center pr-3">
                    <div className="flex flex-col items-left text-left">
                      <div>
                        {field.label === "" ? (
                          <div className="font-bold">(Not Specified)</div>
                        ) : (
                          field.label
                        )}
                      </div>
                      <span className="text-gray-400">{field.level}</span>
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
                              onDelete={deleteSkills}
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
                        Skill
                      </p>
                      <div className="">
                        <Input
                          className="bg-gray-200 w-full md:w-/12"
                          value={field.label}
                          onChange={(e) => {
                            let newData = [...skills];
                            newData[0].fields[index].label = e.target.value;
                            setSkills(newData);
                          }}
                        />
                      </div>
                    </div>
                    <div className=" ">
                      {/* <p className="text-[0.9rem] md:text-[1rem] text-gray-500 mb-1">
                        Level
                      </p> */}
                      <div className="flex items-center mt-5">
                        {/* <Input
                          className="bg-gray-200 w-full md:w-/12"
                          value={field.level}
                          onChange={(e) => {
                            let newData = [...skills];
                            newData[0].fields[index].level = e.target.value;
                            setSkills(newData);
                          }}
                        /> */}
                        <Select
                          onValueChange={(value) => {
                            let newData = [...skills];
                            newData[0].fields[index].level = value;
                            setSkills(newData);
                          }}
                        >
                          <SelectTrigger className="w-full md:w-[180px]">
                            <SelectValue placeholder="Select a Level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Level</SelectLabel>
                              <SelectItem value="Novice">Novice</SelectItem>
                              <SelectItem value="Beginner">Beginner</SelectItem>
                              <SelectItem value="Skillfull">
                                Skillfull
                              </SelectItem>
                              <SelectItem value="Experienced">
                                Experienced
                              </SelectItem>
                              <SelectItem value="Expert">Expert</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
      <Button
        onClick={() => handleSkills()}
        className=" bg-white text-[#1a91f0] font-bold text-md hover:bg-blue-100 py-6 mr-auto"
      >
        + Add skill
      </Button>
    </div>
  );
}

export default Skills;

function SelectDemo({ skills }: any) {
  return (
    <Select>
      <SelectTrigger className="w-full md:w-[180px]">
        <SelectValue placeholder="Select a Level" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Level</SelectLabel>
          <SelectItem value="novice">Novice</SelectItem>
          <SelectItem value="beginner">Beginner</SelectItem>
          <SelectItem value="skillfull">Skillfull</SelectItem>
          <SelectItem value="experienced">Experienced</SelectItem>
          <SelectItem value="expert">Expert</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
