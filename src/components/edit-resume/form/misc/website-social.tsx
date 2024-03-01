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
  socialLinks: SocialLink[];
  handleSocialLinks: () => void;
  setSocialLinks: React.Dispatch<React.SetStateAction<SocialLink[]>>;
  deleteSocialLinks: (id: any) => void;
}

function WebsiteSocial({
  socialLinks,
  handleSocialLinks,
  setSocialLinks,
  deleteSocialLinks,
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
          {socialLinks[0].header}
        </h1>
        <div className="text-2xl text-gray-400 cursor-pointer hover:text-blue-500">
          <MdOutlineEdit />
        </div>
      </div>
      <p className="text-[0.9rem] md:text-[1rem] text-gray-500">
        You can add links to websites you want hiring managers to see! Perhaps
        it will be a link to your portfolio, LinkedIn profile, or personal
        website.
      </p>
      <div className="grid gap-5 mt-4">
        {socialLinks[0].fields.map((field: any, index: any) => (
          <div key={field.id} className="">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {" "}
                  <div className="flex justify-between w-full items-center pr-3">

                  <div>
                    {field.label === "" ? (
                      <div className="font-bold">(Not Specified)</div>
                    ) : (
                      field.label
                    )}
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
                            onDelete={deleteSocialLinks}
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
                        Label
                      </p>
                      <div className="">
                        <Input
                          className="bg-gray-200 w-full md:w-/12"
                          value={field.label}
                          onChange={(e) => {
                            let newData = [...socialLinks];
                            newData[0].fields[index].label = e.target.value;
                            setSocialLinks(newData);
                          }}
                        />
                      </div>
                    </div>
                    <div className=" ">
                      <p className="text-[0.9rem] md:text-[1rem] text-gray-500 mb-1">
                        Link
                      </p>
                      <div className="">
                        <Input
                          className="bg-gray-200 w-full md:w-/12"
                          value={field.link}
                          onChange={(e) => {
                            let newData = [...socialLinks];
                            newData[0].fields[index].link = e.target.value;
                            setSocialLinks(newData);
                          }}
                        />
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
        onClick={handleSocialLinks}
        className=" bg-white text-[#1a91f0] font-bold text-md hover:bg-blue-100 py-6 mr-auto"
      >
        + Add link
      </Button>
    </div>
  );
}

export default WebsiteSocial;
