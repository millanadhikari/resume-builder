import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import QuillEditor from "../../quill-editor";
import { Textarea } from "@/components/ui/textarea";

function Hobbies({
  custom,
  setCustom,
  item,
  deleteCustom,
  addCustom,
  index,
}: any) {
  return (
    <div className="grid gap-1 ">
      <div className="grid gap-5 ">
        {item.fields.map(
          (obj: any) =>
            Object.keys(obj)[1] === "like" && (
              <div className="">
                <div>
                  <div className="grid gap-8 md:grid-cols-2 items-center ">
                    <div className=" ">
                      <p className="text-[0.9rem] md:text-[1rem] text-gray-500 mb-1">
                        What do you like?
                      </p>
                      <div className="">
                        <Textarea
                          className="bg-gray-200 "
                          value={item.fields[0].like}
                          
                          placeholder="e.g. Skiing, Skydiving, Painting"
                          onChange={(e) => {
                            let newData = [...custom];

                            newData[index].fields[0].like = e.target.value;
                            setCustom(newData);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Hobbies;
