"use client";
import React, { useEffect, useState } from "react";
import { HiDocument } from "react-icons/hi"; // Import the document icon from react-icons

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
    <button className="fixed bottom-5 right-5 flex items-center bg-blue-500 text-white py-2 px-4 rounded-full transition-all duration-300">
      <span className={`mr-2 ${scrollDirection === 'down' ? 'transform translate-x-full' : 'transform-none'}`}>Preview</span>
      <HiDocument className={`text-xl ${scrollDirection === 'down' ? 'opacity-100' : 'opacity-0'}`} />
    </button>
  );
}

export default PreviewIcon;
