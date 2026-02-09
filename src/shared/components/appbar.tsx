"use client";

import React from "react";
import {
  LayoutDashboard,
  List,
  Users,
  Bell,
  Search,
  Package,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { LogoIcon } from "./icons";

import { NavItem } from "@/shared/types";

import Profile from "./profile";
import { navItems } from "@/data";
import { CalendarDrawer } from "./calendar-drawer";
import { BudgetingModal } from "./budgeting-modal";
import Appcontainer from "./appcontainer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function Appbar() {
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false);
  const [isBudgetingOpen, setIsBudgetingOpen] = React.useState(false);

  const handleNavClick = (label: string) => {
    if (label === "Calendar") {
      setIsCalendarOpen(true);
    } else if (label === "Budgeting") {
      setIsBudgetingOpen(true);
    }
  };

  return (
    <header className="relative h-[82px]  bg-brand-green flex items-center text-white border-b border-brand-green-dark sticky top-0 z-50 justify-between">
      {/* Logo */}
      <Appcontainer className="flex items-center justify-between">
        <div
          className="relative flex items-center"
          style={{ width: "200px", height: "26px" }}
        >
          <LogoIcon width={200} height={26} />
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-[24px] justify-between">
          <TooltipProvider delayDuration={300}>
            <nav className="hidden lg:flex items-center gap-[24px]">
              {navItems.map((item, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild className="cursor-pointer">
                    <button
                      onClick={() => handleNavClick(item.label)}
                      className="flex items-center transition-colors text-white hover:text-white cursor-pointer"
                    >
                      {item.icon}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    className="bg-brand-gray-soft text-white border"
                    arrowClassName="bg-brand-gray-soft fill-brand-gray-soft"
                  >
                    <div className="text-md p-2">
                      <p className="font-semibold text-[14px] leading-[14.3px] text-brand-gray-dark">
                        {item.label}
                      </p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              ))}
            </nav>
          </TooltipProvider>
          {/* Profile */}

          <Profile />
        </div>

        <CalendarDrawer
          open={isCalendarOpen}
          onOpenChange={setIsCalendarOpen}
        />
        <BudgetingModal
          open={isBudgetingOpen}
          onOpenChange={setIsBudgetingOpen}
        />
      </Appcontainer>
    </header>
  );
}

export default Appbar;
