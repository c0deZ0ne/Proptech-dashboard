import React from "react";

function Appcontainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-[1440px]  ${className} px-[78px]`}>
      {children}
    </div>
  );
}

export default Appcontainer;
