"use client";
import React, { useEffect, useState } from "react";
import { HiDocument } from "react-icons/hi"; // Import the document icon from react-icons
import { HiDocumentText } from "react-icons/hi2";

function PreviewIcon() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos < currentScrollPos) {
        setScrollDirection("down");
      } else if (prevScrollPos > currentScrollPos) {
        setScrollDirection("up");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`w-[290px] gap-5 py-4 flex  transition-width duration-200 justify-center items-center 
      bg-[#1a91f0] fixed right-5  bottom-5 rounded-full cursor-pointer
      hover:bg-blue-400 ${scrollDirection === "down" && "w-[72px] h-[70px]"}`}
    >
      <div
        className={`font-bold text-white text-lg ${
          scrollDirection === "down"
            ? "transform translate-x-full  opacity-0"
            : "transform-none delay-300"
        }`}
      >
        Preview & Download
      </div>
      <span
        className={`text-4xl text-white ${
          scrollDirection === "down" ? "opacity-100 mr-[105px]" : "opacity-100"
        }`}
      >
        <HiDocumentText />{" "}
      </span>
    </div>
  );
}

export default PreviewIcon;
