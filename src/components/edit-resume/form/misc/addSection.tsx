import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";

function AddSection() {
  return (
    <div>
      <div
        className="flex gap-3 items-center cursor-pointer"
        // onClick={() => addCustom()}
      >
        <span className="text-4xl text-[#1a91f0]">
          <MdOutlineDashboardCustomize />
        </span>
        <h2 className="text-md hover:text-[#1a91f0]">Custom Section</h2>
      </div>
    </div>
  );
}

export default AddSection;
