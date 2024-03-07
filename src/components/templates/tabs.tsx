'use client'
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SingleTemplate from "./template/singleTemplate";
import { TEMPLATES } from "@/lib/data";
import { useAppStore } from "@/store/store";

export function TabsDemo() {
  const { template, setTemplate } = useAppStore();

  const handleTemplate = (template:any) => {
    setTemplate(template)
  }
  return (
    <Tabs defaultValue="all-templates" className="w-full">
      <TabsList className="flex w-full  ">
        <TabsTrigger value="all-templates">ALL TEMPLATES</TabsTrigger>
        <TabsTrigger value="simple">SIMPLE</TabsTrigger>
        <TabsTrigger value="modern">MODERN</TabsTrigger>
        <TabsTrigger value="professional">PROFESSIONAL</TabsTrigger>
      </TabsList>
      <TabsContent value="all-templates" className="lg:w-full">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3 ">
          <>
            {TEMPLATES.map((template) => (
              <SingleTemplate handleTemplate={handleTemplate} key={template.id} template={template} />
            ))}
          </>
        </div>
      </TabsContent>

      <TabsContent value="simple" className="lg:w-full">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3 ">
          {TEMPLATES.map((template) => (
            <>
              {template.design === "Simple" && (
                <SingleTemplate handleTemplate={handleTemplate}  key={template.id} template={template} />
              )}
            </>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="modern" className="lg:w-full">
        {" "}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3 mx-auto ">
          {TEMPLATES.map((template, index) => (
            <>
              {template.design === "Modern" && (
                <SingleTemplate handleTemplate={handleTemplate} key={template.id} template={template} />
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
                <SingleTemplate handleTemplate={handleTemplate} key={template.id} template={template} />
              )}
            </>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
}
