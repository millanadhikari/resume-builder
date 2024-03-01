import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Props {
  ui: React.JSX.Element;
  onDelete: (id: any, id2?: any) => void;
  id: string;
  id2?: string;
}
export const Delete = ({ ui, onDelete, id, id2 }: Props) => {
  const handleDelete = () => {
    onDelete(id, id2);
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger>{ui}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Entry?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
            <div className="flex gap-4 justify-center pt-10">
              <Button
                onClick={handleDelete}
                className="py-5 focus:outline-none bg-white text-black border-2 border-gray-500 hover:text-blue-500 text-md hover:border-blue-500 hover:bg-white"
              >
                Delete
              </Button>
              <Button className="py-5 focus:outline-none bg-blue-500 text-md text-white border-2 border-blue-500 hover:bg-blue-400 ">
                Cancel
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Delete;
