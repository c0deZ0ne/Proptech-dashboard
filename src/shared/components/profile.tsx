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

interface ProfileProps {
  initials?: string;
  className?: string;
  userName?: string;
  userEmail?: string;
}

const Profile = ({
  initials = "D",
  className = "",
  userName = "Dylan Frank",
  userEmail = "dylan96@mail.com",
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
                <div className="w-[40px] h-[40px] rounded-full bg-white text-primary flex items-center justify-center font-bold text-sm border-2 border-white/20 shadow-sm uppercase group-hover:border-white/40 transition-colors">
                  {initials}
                </div>
              </div>
            </DropdownMenuTrigger>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            className="bg-[#F9FAFB] text-white border w-[170px]"
            arrowClassName="bg-[#F9FAFB] fill-[#F9FAFB]"
          >
            <div className="text-md p-2 space-y-[5px]">
              <p className="font-semibold text-[16px] leading-[14.3px] text-[#292929]  ">
                {userName}
              </p>
              <p className="text-[14px] leading-[14.3px] text-[#525252]">
                {userEmail}
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
        <DropdownMenuContent align="end" className="w-[240px] p-2">
          {/* User Info Section */}
          <div className="flex items-center gap-3 px-2 py-3">
            <div className="w-[40px] h-[40px] rounded-full bg-[#105B48] text-white flex items-center justify-center font-bold text-sm uppercase">
              {initials}
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-gray-900">{userName}</p>
              <p className="text-xs text-gray-500">{userEmail}</p>
            </div>
          </div>

          <DropdownMenuSeparator />

          {/* Menu Items */}
          <DropdownMenuItem className="cursor-pointer py-2.5 px-2">
            <Users className="mr-3 h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-700">Teams</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer py-2.5 px-2">
            <MessageSquare className="mr-3 h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-700">Snagging</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer py-2.5 px-2">
            <MessageSquare className="mr-3 h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-700">Feedback</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer py-2.5 px-2">
            <MapPin className="mr-3 h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-700">Geo-Bucket</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer py-2.5 px-2">
            <Lock className="mr-3 h-4 w-4 text-gray-600" />
            <span className="text-sm text-gray-700">Change password</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* Logout */}
          <DropdownMenuItem className="cursor-pointer py-2.5 px-2 text-red-600 focus:text-red-600 focus:bg-red-50">
            <LogOut className="mr-3 h-4 w-4" />
            <span className="text-sm font-medium">Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
  );
};

export default Profile;
