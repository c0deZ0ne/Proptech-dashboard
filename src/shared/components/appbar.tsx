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
    <header className="relative h-[82px]  bg-[#105B48] flex items-center text-white border-b border-[#176D58] sticky top-0 z-50 justify-between">
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
          <nav className="hidden lg:flex items-center gap-[24px]">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.label)}
                className="flex items-center transition-colors text-white hover:text-white cursor-pointer"
              >
                {item.icon}
              </button>
            ))}
          </nav>
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
