import { MdOutlineDeleteOutline } from "react-icons/md";

export const ui = () => {
    return (
      <div className="flex gap-2 cursor-pointer">
        <span className="text-2xl text-blue-500">
          <MdOutlineDeleteOutline />
        </span>
        <p>Delete</p>
      </div>
    );
  };