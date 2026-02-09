"use client";

import * as React from "react";
import { ChevronLeft, X, ChevronRight } from "lucide-react";
import { CalendarBackIcon, CalenderNextIcon, CarlendarPrevIcon } from "./icons";

interface CalendarDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CalendarDrawer({ open, onOpenChange }: CalendarDrawerProps) {
  const [date, setDate] = React.useState<Date>(new Date());
  const [startDate, setStartDate] = React.useState<Date>(new Date()); // Start from today, now mutable

  // Navigate to previous 45-day period
  const previousPeriod = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() - 45);
    setStartDate(newStartDate);
  };

  // Navigate to next 45-day period
  const nextPeriod = () => {
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() + 45);
    setStartDate(newStartDate);
  };

  // Generate 45 consecutive days starting from today
  const generate45Days = () => {
    const days = [];
    for (let i = 0; i < 45; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      days.push(currentDate);
    }
    return days;
  };

  const monthAbbreviations = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const selectDate = (selectedDate: Date) => {
    setDate(selectedDate);
  };

  const isToday = (checkDate: Date) => {
    const today = new Date();
    return (
      checkDate.getDate() === today.getDate() &&
      checkDate.getMonth() === today.getMonth() &&
      checkDate.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (checkDate: Date) => {
    return (
      checkDate.getDate() === date.getDate() &&
      checkDate.getMonth() === date.getMonth() &&
      checkDate.getFullYear() === date.getFullYear()
    );
  };

  const formatDayLabel = (dateObj: Date) => {
    const day = dateObj.getDate();
    // If it's the first day of the month, show month abbreviation + day
    if (day === 1) {
      return `${monthAbbreviations[dateObj.getMonth()]} ${day}`;
    }
    return day.toString();
  };

  const days45 = generate45Days();

  // Calculate the starting day of week offset for the first day
  const firstDayOfWeek = startDate.getDay();
  const emptyDays = Array.from({ length: firstDayOfWeek }, (_, i) => i);

  if (!open) return null;

  return (
    <>
      {/* Calendar Drawer - positioned from the right edge of the page content */}
      <div className="fixed top-[82px] px-[260px] right-0 h-[calc(100vh-82px)] z-50 flex justify-end pointer-events-none">
        <div className="w-full  mx-auto  flex justify-end pointer-events-none">
          <div className="w-[390px] bg-brand-black-pure text-white border-l border-white/10  pointer-events-auto ">
            <div className="flex flex-row items-center justify-between px-6 py-4 border-b border-white/10 bg-brand-black-rich">
              <div
                className="flex items-center gap-2 cursor-pointer hover:opacity-80"
                onClick={() => onOpenChange(false)}
              >
                <CalendarBackIcon />
                <h2 className="text-white text-[16px] font-semibold">
                  Calendar
                </h2>
              </div>
              <button
                onClick={() => onOpenChange(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors  cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-start px-6 pt-8">
              <div className="w-full">
                <div className="flex items-center justify-center mb-6 relative">
                  <button
                    onClick={previousPeriod}
                    className="absolute left-0 p-2 hover:bg-white/10 rounded-md transition-colors opacity-50 hover:opacity-100"
                  >
                    <CarlendarPrevIcon />
                  </button>
                  <h2 className="text-[16px] font-semibold leading-[100%]">
                    {startDate.toLocaleDateString("en-US", {
                      month: "long",
                    })}
                  </h2>
                  <button
                    onClick={nextPeriod}
                    className="absolute right-0 p-2 hover:bg-white/10 rounded-md transition-colors opacity-50 hover:opacity-100"
                  >
                    <CalenderNextIcon />
                  </button>
                </div>

                {/* Day Names */}
                <div className="grid grid-cols-7 gap-1 mb-2  ">
                  {dayNames.map((day) => (
                    <div
                      key={day}
                      className="text-center relative text-brand-gray-smoke pl-[5.64px]  font-medium uppercase  flex "
                    >
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1  ">
                  {emptyDays.map((_, index) => (
                    <div key={`empty-${index}`} className="h-10" />
                  ))}
                  {days45.map((dayDate, index) => {
                    const dayLabel = formatDayLabel(dayDate);
                    const isFirstOfMonth = dayDate.getDate() === 1;

                    return (
                      <div
                        key={index}
                        className="relative h-[91px] w-[50.4px] pl-[5.8px] border border-white/3 border-b-none flex  text-sm font-normal transition-colors"
                      >
                        <button
                          onClick={() => selectDate(dayDate)}
                          className={`absolute ${isFirstOfMonth ? "w-[42px]" : "w-[28px]"} h-[16px] text-[9.9px] font-[9.9px] rounded-[200px] flex items-center justify-center top-[2px] left-[8px]
                          ${
                            isSelected(dayDate)
                              ? "bg-brand-blue text-white hover:bg-brand-blue"
                              : isToday(dayDate)
                                ? "bg-white/5 text-white underline underline-offset-4 hover:bg-white/10"
                                : "text-white hover:bg-white/10"
                          }
                        `}
                        >
                          {dayLabel}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
