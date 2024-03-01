import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Person from "../icons/person";
import Home from "../icons/home";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full h-16 w-16 bg-gray-200 hover:ring-2 data-[state=open]:ring-2"
        >
          <Person />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 mr-10">
        <div className="grid gap-4">
          <div className="flex gap-4 items-center border-b-2 pb-4">
            <Home />
            <div className="space-y-1">
              <h4 className="font-medium leading-none">Dashboard</h4>
              <p className="text-sm text-muted-foreground">
                Your resumes and cover letters
              </p>
            </div>
          </div>
          <div className="px-10 grid gap-3">
            <div className="grid gap-2 ">
              <div className="cursor-pointer hover:text-blue-500">
                {/* <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              /> */}
                Account Settings
              </div>
            </div>

            <div className="grid gap-2">
              <div className="cursor-pointer hover:text-blue-500">
                {/* <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              /> */}
                Updates
              </div>
            </div>

            <div className="grid gap-2">
              <div className="cursor-pointer hover:text-blue-500">
                {/* <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              /> */}
                FAQ
              </div>
            </div>
            <div className="grid gap-2">
              <div className="cursor-pointer hover:text-blue-500">
                {/* <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              /> */}
                Log Out
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
