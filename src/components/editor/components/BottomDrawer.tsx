import * as React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { ImMenu4 } from "react-icons/im";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FaMinus } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { TEMPLATES } from "@/lib/data";
import { TiTick } from "react-icons/ti";

export function BottomDrawer({ template, setTemplate, colors, setColor }: any) {
  const [selected, setSelected] = React.useState("Toronto");
  const handleItemClick = (event: any, TEMPLATE: any) => {
    const target = event.target;
    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });

    setTemplate(TEMPLATE);
  };
  return (
    <div className="">
      <Drawer>
        <DrawerTrigger asChild>
          <span className="lg:hidden text-white text-4xl absolute top-5 left-5 cursor-pointer">
            {" "}
            <ImMenu4 />
          </span>
        </DrawerTrigger>
        <DrawerContent className="bg-[#0f141e] border-0 lg:hidden">
          <div className="mx-auto w-full py-6 ">
            <div className="text-white">
              <div className="flex flex-col justify-center items-center text-center ">
                <h1 className="font-semibold ">TEMPLATE</h1>
                <div className="flex gap-7 w-full mt-2 overflow-x-auto pl-64 md:pl-[410px] pr-64 no-scrollbar">
                  {TEMPLATES.map((TEMPLATE: any, index: any) => (
                    <p
                      key={TEMPLATE.id}
                      onClick={(e) => handleItemClick(e, TEMPLATE)}
                      className={`text-nowrap cursor-pointer text-gray-600 ${
                        template.id === TEMPLATE.id &&
                        "text-white font-semibold"
                      }`}
                    >
                      {TEMPLATE.name}
                    </p>
                  ))}
                </div>
              </div>
              <div className="text-center mt-6">
                <h1 className="font-semibold">ACCENT COLOR</h1>
                <div className="flex justify-center gap-4 mt-3">
                  {colors.map((color: any) => (
                    <div key={color}
                      onClick={() => setColor(color.color)}
                      className={`relative bg-${color.color} flex items-center justify-center ring-2 ring-gray-500 h-7 w-7 rounded-full cursor-pointer group`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className={`bg-white w-2 h-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:${
                            template.color == color.color
                              ? "opacity-0"
                              : "opacity-100"
                          }`}
                        ></div>
                      </div>
                      {template.color == color.color && (
                        <span className="">
                          <TiTick />
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col mt-6 items-center justify-center">
                <h1 className="font-bold">LINE SPACING</h1>
                <div className="text-white flex items-center justify-center gap-3">
                  <span className="cursor-pointer rounded-full hover:bg-gray-500 p-3">
                    <FaMinus />
                  </span>
                  <p>Aa</p>

                  <span className="cursor-pointer rounded-full hover:bg-gray-500 p-3">
                    <FiPlus />
                  </span>
                </div>
              </div>
            </div>
            <DrawerFooter></DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
