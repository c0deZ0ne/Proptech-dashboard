import React from "react";
import { ChevronRight } from "lucide-react";

interface StatCardProps {
  title: string;
  icon?: React.ReactNode;
  viewAllHref?: string;
  children: React.ReactNode;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  icon: Icon,
  viewAllHref = "#",
  children,
  className = "",
}) => {
  return (
    <div
      className={`bg-white w-full h-[152px] flex flex-col overflow-hidden rounded-[16px] border border-border shadow-[0px_1px_2px_rgba(16,24,40,0.05)] ${className}`}
    >
      <div className="flex items-center justify-between bg-[#F9FAFB] h-[50px] border-b border-border  p-[16px] w-full">
        <div className="flex items-center gap-2">
          {Icon && Icon}
          <h3 className="text-[16px] font-semibold leading-[14.3px] text-[#292929]">
            {title}
          </h3>
        </div>
        <a
          href={viewAllHref}
          className="flex items-center text-brand-blue text-[12px] font-semibold hover:underline gap-1"
        >
          View all <ChevronRight size={14} />
        </a>
      </div>
      <div className="flex-1  p-[16px]  text-[#525252] bg-white">
        {children}
      </div>
    </div>
  );
};

export default StatCard;
