"use client";

import {
  Plus,
  ChevronRight,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
} from "lucide-react";
import StatCard from "@/shared/components/stat-card";
import {
  CardHomeIcon,
  HomeIcon,
  MessageIcon,
  UserIcon,
} from "@/shared/components/icons";
import SliderCard from "@/shared/components/slider-card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Appcontainer from "@/shared/components/appcontainer";

const data = [
  {
    name: "Jan",
    inflow: 35000000,
    mrr: 28000000,
    commission: 10000000,
    gmv: 15000000,
  },
  {
    name: "Feb",
    inflow: 5000000,
    mrr: 28000000,
    commission: 10000000,
    gmv: 8000000,
  },
  {
    name: "Mar",
    inflow: 14000000,
    mrr: 7000000,
    commission: 3000000,
    gmv: 10000000,
  },
  {
    name: "Apr",
    inflow: 14000000,
    mrr: 25000000,
    commission: 10000000,
    gmv: 12000000,
  },
  {
    name: "May",
    inflow: 10000000,
    mrr: 2000000,
    commission: 7000000,
    gmv: 5000000,
  },
  {
    name: "Jun",
    inflow: 36000000,
    mrr: 48000000,
    commission: 8000000,
    gmv: 20000000,
  },
  {
    name: "Jul",
    inflow: 23000000,
    mrr: 36000000,
    commission: 17000000,
    gmv: 15000000,
  },
  {
    name: "Aug",
    inflow: 23000000,
    mrr: 7000000,
    commission: 17000000,
    gmv: 12000000,
  },
  {
    name: "Sep",
    inflow: 36000000,
    mrr: 33000000,
    commission: 60000000,
    gmv: 18000000,
  },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-sm p-4 border border-border rounded-[12px] shadow-[0px_12px_24px_rgba(0,0,0,0.1)]">
        <p className="font-bold text-[14px] leading-[17.75px] text-[#111111] mb-3">
          {label}
        </p>
        <div className="space-y-3">
          {payload.map((entry: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-between gap-6"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />
                <span className="text-[11px] uppercase font-bold text-[#919191] tracking-wider">
                  {entry.name}
                </span>
              </div>
              <span className="text-[13px] font-bold text-[#111111]">
                ₦{entry.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const MetricItem = ({
  value,
  label,
  trend,
  color,
  trendUp = true,
}: {
  value: string;
  label: string;
  trend: string;
  color: string;
  trendUp?: boolean;
}) => (
  <div className="bg-white border border-border w-[189px] rounded-[12px] pl-[15px]  pt-[13px] justify-left  flex flex-col  h-[73px] ">
    <p className="text-[19px] font-semibold leading-[120%]" style={{ color }}>
      {value}
    </p>
    <div className="flex items-center justify-left gap-y-[8px] gap-x-[14.17px]">
      <p className=" font-regular text-[10px] whitespace-nowrap leading-[100%]  text-[#3D3D3D]  ">
        {label}
      </p>
      <span
        className={`flex items-center gap-1 text-[12px] font-regular pr-[15px] py-0.5 rounded-full`}
      >
        <div
          className={`w-[14px] h-[14px] rounded-full flex items-center justify-center ${trendUp ? "bg-[#12B76A]" : "bg-[#F04438]"}`}
        >
          {trendUp ? (
            <ArrowUp size={10} className="text-white" />
          ) : (
            <ArrowDown size={10} className="text-white" />
          )}
        </div>
        {trend}
      </span>
    </div>
  </div>
);

export default function Home() {
  return (
    <Appcontainer className="flex items-center justify-between ">
      <div className="flex flex-1 flex-col py-10 justify-between bg-[#F9FAFB]   ">
        <div className="flex flex-col mb-8">
          <h1 className="font-semibold text-[24px] leading-[30.43px] text-[#111111]">
            Welcome, Ahmed
          </h1>
        </div>

        <div className=" flex overflow-hidden  h-[325px] w-full  justify-between">
          {/* Sales Overview Card */}
          <div className="w-[857px] bg-white rounded-[16px] border border-border  shadow-[0px_1px_2px_rgba(16,24,40,0.05)] flex flex-col h-full">
            <div className="flex items-start justify-between  py-[16px] px-[22px] py-[22px]">
              <div>
                <h3 className="text-[#111111] mb-2 w-[146px] h-[25px] font-semibold text-[20px]">
                  Sales Overview
                </h3>
                <p className="text-[#919191] text-[12px] font-regular">
                  Showing overview Jan 2022 - Sep 2022
                </p>
              </div>
              <div className="flex flex-col items-end gap-y-[13px]   ">
                <button className=" cursor-pointer h-[46px] w-[177px] px-8 rounded-full border border-border text-[12px] font-medium text-[#111111] hover:bg-gray-50 transition-colors">
                  View Transactions
                </button>
                <div className="flex   h-[33px] w-[264px] gap-x-[12px]">
                  <button className=" cursor-pointer flex items-center justify-center w-[80px] h-[33px] text-[#3D3D3D] font-regular text-[14px] hover:bg-gray-50 transition-colors">
                    1 Week
                  </button>
                  <button className=" cursor-pointer flex items-center justify-center w-[80px] h-[33px] text-[#3D3D3D] font-regular text-[14px] hover:bg-gray-50 transition-colors">
                    1 Month
                  </button>
                  <button className=" cursor-pointer flex items-center justify-center rounded-[8px] w-[80px] h-[33px] bg-[#E4E4E4] text-[#3D3D3D] font-semibold text-[14px]">
                    1 Year
                  </button>
                </div>
              </div>
            </div>

            <div className="flex h-full  border-t border-border  space-x-[16px] px-[22px] py-[12px]">
              {/* Chart Area */}
              <div className=" w-[450px] relative group flex items-center h-full ">
                <div className="absolute left-[0px] z-10 w-[18px] h-[18px] bg-[#E4E4E4] rounded-full shadow-sm flex items-center justify-center cursor-pointer hover:bg-gray-50">
                  <ChevronLeft size={10} className="text-[#111111]" />
                </div>
                <ResponsiveContainer className="w-full h-full border-none  ">
                  <BarChart
                    data={data}
                    margin={{ top: 0, right: 20, left: 0, bottom: 0 }}
                    barGap={3}
                    className="border-none outline-none"
                  >
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#919191", fontSize: 12, fontWeight: 500 }}
                      dy={10}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#919191", fontSize: 12, fontWeight: 500 }}
                      tickFormatter={(value) =>
                        value === 0 ? "0" : `${value / 1000000}m`
                      }
                    />
                    <Tooltip
                      content={<CustomTooltip />}
                      cursor={{ fill: "#F9FAFB" }}
                    />
                    <Bar
                      name="Inflow"
                      dataKey="inflow"
                      fill="#4545FE"
                      radius={[2, 2, 0, 0]}
                      barSize={4}
                    />
                    <Bar
                      name="MRR"
                      dataKey="mrr"
                      fill="#12B76A"
                      radius={[2, 2, 0, 0]}
                      barSize={4}
                    />
                    <Bar
                      name="GMV"
                      dataKey="gmv"
                      fill="#F04438"
                      radius={[2, 2, 0, 0]}
                      barSize={4}
                    />
                  </BarChart>
                </ResponsiveContainer>
                {/* </div> */}
                <div className="w-[20px] relative h-full flex items-center justify-center pl-[9px] relative shadow-[-4px_0_8px_-4px_rgba(0,0,0,0.1)]">
                  <div className="z-10 w-[20px] absolute left-[9px] top-1/2 -translate-y-1/2 h-[18px] bg-[#E4E4E4] rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors shadow-sm">
                    <ChevronRight size={10} className="text-[#111111]" />
                  </div>
                </div>
              </div>
              {/* Metrics Grid */}
              <div className="w-[410px] grid grid-cols-2 gap-y-[14px] gap-x-[16px] ">
                <MetricItem
                  value="₦120,000,000.00"
                  label="Total Inflow"
                  trend="2.5%"
                  color="#4545FE"
                  trendUp={true}
                />
                <MetricItem
                  value="₦50,000,000.00"
                  label="MRR"
                  trend="2.5%"
                  color="#12B76A"
                  trendUp={true}
                />
                <MetricItem
                  value="₦200,000,000.00"
                  label="Commission Revenue"
                  trend="0.5%"
                  color="#14B8A6"
                  trendUp={false}
                />
                <MetricItem
                  value="₦100,000,000.00"
                  label="GMV"
                  trend="0.5%"
                  color="#F04438"
                  trendUp={false}
                />
              </div>
            </div>
          </div>

          {/* Side Column */}
          <div className="flex flex-col justify-between w-[407px] ">
            <StatCard
              title="Listings Overview"
              icon={<CardHomeIcon width={18} height={18} color="#4545FE" />}
            >
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-[#919191] text-[12px] font-medium mb-3">
                    Total
                  </p>
                  <p className="font-bold text-[24px] leading-[30.43px] text-[#111111]">
                    1.8k
                  </p>
                </div>
                <div>
                  <p className="text-[#919191] text-[12px] font-medium mb-3">
                    Active
                  </p>
                  <p className="font-bold text-[24px] leading-[30.43px] text-[#111111]">
                    80
                  </p>
                </div>
                <div>
                  <p className="text-[#919191] text-[12px] font-medium mb-3">
                    Archived
                  </p>
                  <p className="font-bold text-[24px] leading-[30.43px] text-[#111111]">
                    1k
                  </p>
                </div>
              </div>
            </StatCard>

            <StatCard
              title="Users Overview"
              icon={<UserIcon width={18} height={18} color="#4545FE" />}
            >
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-[#919191] text-[12px] font-medium mb-3">
                    Total
                  </p>
                  <p className="font-bold text-[24px] leading-[30.43px] text-[#111111]">
                    20.7k
                  </p>
                </div>
                <div>
                  <p className="text-[#919191] text-[12px] font-medium mb-3">
                    Riders
                  </p>
                  <p className="font-bold text-[24px] leading-[30.43px] text-[#111111]">
                    8.5k
                  </p>
                </div>
                <div>
                  <p className="text-[#919191] text-[12px] font-medium mb-3">
                    Subscribers
                  </p>
                  <p className="font-bold text-[24px] leading-[30.43px] text-[#111111]">
                    7.5k
                  </p>
                </div>
              </div>
            </StatCard>
          </div>
        </div>

        {/* Image Slider Gallery Row */}
        <div className="flex relative justify-between items-center w-full mt-8 pb-10 ">
          <div className="absolute right-[-10px] z-[10] top-[43px] ">
            <MessageIcon />
          </div>
          <SliderCard
            images={[
              "./images/house1.jpg",
              "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
            ]}
            label="MOST CLICKED"
            title="Urban Prime Plaza Premiere"
            badgeType="clicked"
          />
          <SliderCard
            images={[
              "./images/house2.jpg",
              "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
            ]}
            label="MOST WATCHLISTED"
            title="Urban Prime Plaza Premiere"
            badgeType="watched"
          />
          <SliderCard
            images={[
              "./images/house3.jpg",
              "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=800",
              "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
            ]}
            label="HOTTEST LISTING"
            title="Urban Prime Plaza Premiere"
            badgeType="featured"
          />
        </div>
      </div>
    </Appcontainer>
  );
}
