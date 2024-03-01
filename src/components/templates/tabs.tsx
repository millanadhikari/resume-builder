import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SingleTemplate from "./template/singleTemplate";
import { TEMPLATES } from "@/lib/data";

export function TabsDemo() {
  return (
    <Tabs defaultValue="all-templates" className="w-full  ">
      <TabsList className="w-full flex ">
        <TabsTrigger value="all-templates">ALL TEMPLATES</TabsTrigger>
        <TabsTrigger value="simple">SIMPLE</TabsTrigger>
        <TabsTrigger value="modern">MODERN</TabsTrigger>
        <TabsTrigger value="professional">PROFESSIONAL</TabsTrigger>
      </TabsList>
      <TabsContent value="all-templates" className="lg:w-full">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3 ">
          <>
            {TEMPLATES.map((template) => (
              <SingleTemplate key={template.id} template={template} />
            ))}
          </>
        </div>
      </TabsContent>

      <TabsContent value="simple" className="lg:w-full">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3 ">
          {TEMPLATES.map((template) => (
            <>
              {template.design === "Simple" && (
                <SingleTemplate key={template.id} template={template} />
              )}
            </>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="modern" className="lg:w-full">
        {" "}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3 ">
          {TEMPLATES.map((template) => (
            <>
              {template.design === "Modern" && (
                <SingleTemplate key={template.id} template={template} />
              )}
            </>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="professional" className="lg:w-full">
        {" "}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3 ">
          {TEMPLATES.map((template) => (
            <>
              {template.design === "Professional" && (
                <SingleTemplate key={template.id} template={template} />
              )}
            </>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
