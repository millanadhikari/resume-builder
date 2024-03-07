import Header from "@/components/header";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-full">
      <Header/>
      {children}
    </main>
  );
}

export default Layout;
