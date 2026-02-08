"use client";
import * as React from "react";
import {
  BarIcon,
  BudgetingIcon,
  CalculatorIcon,
  SettingTogleIcon,
  TrendUpIcon,
} from "./icons";
import Image from "next/image";

interface BudgetingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BudgetingModal({ open, onOpenChange }: BudgetingModalProps) {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center"
        onClick={() => onOpenChange(false)}
      >
        {/* Modal */}
        <div
          className="flex flex-col w-[438px] h-[559px]  bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Icon - Dark Blue Section with Background Image */}
          <div className="relative  w-full h-[213px] ">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-[213px] ">
              <Image
                src="/images/budgeting-modal.png"
                alt="Budgeting Background"
                fill
                className="object-cover"
              />
            </div>

            {/* Icon Container */}
            {/* <div className="flex justify-center relative z-10 absolute bottom-0 "> */}
            <div className="z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] self-center ">
              <CalculatorIcon width={66} height={60} className="text-white" />
            </div>
          </div>

          {/* Content - White Section */}
          <div className=" flex w-full h-[calc(100%-213px)]  flex-col gap-y-[23px]  px-[47px] py-[24px]  ">
            {/* Feature 1 */}
            <div className="flex items-center gap-x-[24px] gap-y-[24px] h-[70px]  justify-between">
              <SettingTogleIcon />
              <div className="flex flex-col gap-y-[4px] w-full justify-between">
                <span className=" flex text-[#191919] font-semibold text-[16px] leading-[100%]">
                  Set up annual budgets by account category
                </span>
                <span className="flex text-[#606060] h-[30px] text-[13px] font-regular leading-[100%]">
                  Allocate funds across income and expense lines with full
                  visibility.
                </span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-x-[24px] gap-y-[24px] h-[70px]  justify-between">
              <TrendUpIcon />
              <div className="flex flex-col gap-y-[4px] w-full justify-between">
                <span className=" flex text-[#191919] font-semibold text-[16px] leading-[100%]">
                  Track actuals vs budget in real time
                </span>
                <span className="flex text-[#606060] h-[30px] text-[13px] font-regular leading-[100%]">
                  See how your community is performing against plan, month by
                  month.
                </span>
              </div>
            </div>

            {/* Feature 3 */}

            <div className="flex items-center gap-x-[24px] gap-y-[24px] h-[70px]  justify-between">
              <BarIcon />
              <div className="flex flex-col gap-y-[4px] w-full justify-between">
                <span className=" flex text-[#191919] font-semibold text-[16px] leading-[100%]">
                  Adjust figures and forecast with ease
                </span>
                <span className="flex text-[#606060] h-[30px] text-[13px] font-regular leading-[100%]">
                  Edit amounts, apply percentage changes, or roll forward last
                  year's data—all in one place.
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <button className="w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white font-semibold py-3.5 px-6 rounded-full transition-colors text-[14px]">
                Create Budget
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
