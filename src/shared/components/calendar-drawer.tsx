"use client";

import * as React from "react";
import { ChevronLeft, X, ChevronRight } from "lucide-react";

interface CalendarDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CalendarDrawer({ open, onOpenChange }: CalendarDrawerProps) {
  const [date, setDate] = React.useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date());

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0,
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1,
  ).getDay();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const previousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1),
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1),
    );
  };

  const selectDate = (day: number) => {
    setDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day));
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (day: number) => {
    return (
      day === date.getDate() &&
      currentMonth.getMonth() === date.getMonth() &&
      currentMonth.getFullYear() === date.getFullYear()
    );
  };

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  if (!open) return null;

  return (
    <>
      {/* Calendar Drawer - positioned from the right edge of the page content */}
      <div className="fixed top-[82px] px-[230px] right-0 h-[calc(100vh-82px)] z-50 flex justify-end pointer-events-none">
        <div className="w-full  mx-auto  flex justify-end pointer-events-none">
          <div className="w-[390px] bg-[#111111] text-white border-l border-white/10  pointer-events-auto ">
            {/* Header */}
            <div className="flex flex-row items-center justify-between px-6 py-4 border-b border-white/10">
              <div
                className="flex items-center gap-2 cursor-pointer hover:opacity-80"
                onClick={() => onOpenChange(false)}
              >
                <ChevronLeft className="size-5" />
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

            {/* Calendar Content */}
            <div className="flex-1 flex flex-col items-center justify-start px-6 pt-8">
              <div className="w-full">
                {/* Month Navigation */}
                <div className="flex items-center justify-center mb-6 relative">
                  <button
                    onClick={previousMonth}
                    className="absolute left-0 p-2 hover:bg-white/10 rounded-md transition-colors opacity-50 hover:opacity-100"
                  >
                    <ChevronLeft className="size-4" />
                  </button>
                  <h2 className="text-sm font-semibold">
                    {monthNames[currentMonth.getMonth()]}{" "}
                    {currentMonth.getFullYear()}
                  </h2>
                  <button
                    onClick={nextMonth}
                    className="absolute right-0 p-2 hover:bg-white/10 rounded-md transition-colors opacity-50 hover:opacity-100"
                  >
                    <ChevronRight className="size-4" />
                  </button>
                </div>

                {/* Day Names */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {dayNames.map((day) => (
                    <div
                      key={day}
                      className="text-center text-white/40 text-[11px] font-normal uppercase h-8 flex items-center justify-center"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {emptyDays.map((_, index) => (
                    <div key={`empty-${index}`} className="h-10" />
                  ))}
                  {days.map((day) => (
                    <button
                      key={day}
                      onClick={() => selectDate(day)}
                      className={`
                        h-10 w-full rounded-full flex items-center justify-center text-sm font-normal transition-colors
                        ${
                          isSelected(day)
                            ? "bg-[#4545FE] text-white hover:bg-[#4545FE]"
                            : isToday(day)
                              ? "bg-white/5 text-white underline underline-offset-4 hover:bg-white/10"
                              : "text-white hover:bg-white/10"
                        }
                      `}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
