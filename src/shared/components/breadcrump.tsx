import React from "react";
import Appcontainer from "./appcontainer";

function Breadcrump({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-[67px]  items-center bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.03)]">
      <Appcontainer className="flex items-center justify-between">
        {children}
      </Appcontainer>
    </div>
  );
}

export default Breadcrump;
