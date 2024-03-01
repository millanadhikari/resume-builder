import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useEffect } from "react";
import { MdOutlineEdit } from "react-icons/md";
import QuillEditor from "../../quill-editor";
import { Switch } from "@/components/ui/switch";

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

function References({
  custom,
  setCustom,
  item,
  deleteCustom,
  addCustom,
  index,
}: any) {
  
  const switchChange = () => {
    let newData = [...custom];
    newData[index].checked = !newData[index].checked;
    setCustom(newData);
  };

  useEffect(() => {
    console.log('achi', custom)
  }, [custom]);
  return (
    <div className="grid gap-1">
      <div className="flex gap-3">
        <Switch checked={item.checked} onCheckedChange={switchChange} />
        <p className="text-sm text-gray-400">
          I`&apos`d like to hide references and make them available only upon request.
        </p>
      </div>
      <div className="grid gap-5 mt-4">
        {item.fields.map(
          (obj: any, i: any) =>
            Object.keys(obj)[1] === "fullName" && (
              <div key={obj.id} className="">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      <div>
                        <div>
                          {/* {item.fields[0].activityName
                    ? item.fields[0].activityName !== ""
                      ? item.fields[0].activityName
                      : "(Not Specified)"
                    : item.fields.map((obj: any) =>
                        obj[1] !== "" ? obj[1] : "Not Specified"
                      )} */}
                          {item.fields[i].fullName !== ""
                            ? item.fields[i].fullName
                            : "(Not Specified)"}
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        <div className="grid gap-8 md:grid-cols-2 items-center ">
                          <div className=" ">
                            <p className="text-[0.9rem] md:text-[1rem] text-gray-500 mb-1">
                              {item.fields[0].header == "" || "Untitled"
                                ? "Referent's Full Name"
                                : "Course"}
                            </p>
                            <div className="">
                              <Input
                                className="bg-gray-200 w-full md:w-/12"
                                value={item.fields[i].fullName}
                                onChange={(e) => {
                                  let newData = [...custom];

                                  newData[index].fields[i].fullName =
                                    e.target.value;
                                  setCustom(newData);
                                }}
                              />
                            </div>
                          </div>
                          <div className=" ">
                            <p className="text-[0.9rem] md:text-[1rem] text-gray-500 mb-1">
                              Company
                            </p>
                            <div className="">
                              <Input
                                className="bg-gray-200 w-full md:w-/12"
                                value={item.fields[i].employer}
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
                              Phone
                            </p>
                            <div className="">
                              <Input
                                className="bg-gray-200 w-full md:w-/12"
                                value={item.fields[i].phone}
                                onChange={(e) => {
                                  let newData = [...custom];

                                  newData[index].fields[i].phone =
                                    e.target.value;
                                  setCustom(newData);
                                }}
                              />
                            </div>
                          </div>

                          <div className=" ">
                            <p className="text-[0.9rem] md:text-[1rem] text-gray-500 mb-1">
                              Email
                            </p>
                            <div className="">
                              <Input
                                className="bg-gray-200 w-full md:w-/12"
                                value={item.fields[i].email}
                                onChange={(e) => {
                                  let newData = [...custom];

                                  newData[index].fields[i].email =
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
}

export default References;
