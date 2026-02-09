"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Users, MessageSquare, MapPin, Lock, LogOut } from "lucide-react";
import { currentUser, profileMenuItems, ProfileMenuItem } from "@/data";

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="mr-3 h-4 w-4 text-gray-600" />,
  MessageSquare: <MessageSquare className="mr-3 h-4 w-4 text-gray-600" />,
  MapPin: <MapPin className="mr-3 h-4 w-4 text-gray-600" />,
  Lock: <Lock className="mr-3 h-4 w-4 text-gray-600" />,
  LogOut: <LogOut className="mr-3 h-4 w-4" />,
};

interface ProfileProps {
  initials?: string;
  className?: string;
  userName?: string;
  userEmail?: string;
}

const Profile = ({
  initials = currentUser.initials,
  className = "",
  userName = currentUser.userName,
  userEmail = currentUser.userEmail,
}: ProfileProps) => {
  return (
    <TooltipProvider delayDuration={300}>
      <DropdownMenu>
        <Tooltip>
          <TooltipTrigger asChild>
            <DropdownMenuTrigger asChild>
              <div
                className={`flex items-center gap-2 cursor-pointer group ${className} `}
              >
                <div className="w-[40px] h-[40px]  text-[23px] rounded-full bg-white text-brand-green flex items-center justify-center font-bold text-sm border-2 border-white/20 shadow-sm uppercase group-hover:border-white/40 profile-initials-ripple">
                  {initials}
                </div>
              </div>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="bg-brand-gray-soft text-white border w-[170px]"
            arrowClassName="bg-brand-gray-soft fill-brand-gray-soft"
          >
            <div className="text-md p-2 space-y-[5px]">
              <p className="font-semibold text-[16px] leading-[14.3px] text-brand-gray-dark  ">
                {userName}
              </p>
              <p className="text-[14px] leading-[14.3px] text-brand-gray-text">
                {userEmail}
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent align="end" className="w-[300px] p-2">
          {/* User Info Section */}
          <div className="flex items-center gap-3 px-2 py-3">
            <div className="w-[40px] h-[40px] rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-sm uppercase">
              {initials}
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-gray-900">{userName}</p>
              <p className="text-xs text-gray-500">{userEmail}</p>
            </div>
          </div>

          {/* Menu Items */}
          {profileMenuItems.map((item: ProfileMenuItem, index: number) => (
            <React.Fragment key={item.label}>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className={`cursor-pointer py-2.5 px-2 ${
                  item.isLogout
                    ? "text-red-600 focus:text-red-600 focus:bg-red-50"
                    : ""
                }`}
              >
                {iconMap[item.icon]}
                <span
                  className={`text-sm ${item.isLogout ? "font-medium" : "text-gray-700"}`}
                >
                  {item.label}
                </span>
              </DropdownMenuItem>
            </React.Fragment>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  );
};

export default Profile;
