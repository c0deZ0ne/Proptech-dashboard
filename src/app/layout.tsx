import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";

const euclidCircularB = localFont({
  src: [
    {
      path: "../assets/fonts/euclid-circular-b/Euclid-Circular-B-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/euclid-circular-b/Euclid-Circular-B-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/euclid-circular-b/Euclid-Circular-B-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/euclid-circular-b/Euclid-Circular-B-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--euclid-font",
});

export const metadata: Metadata = {
  title: "Proptech Dashboard",
  description: "Modern analytics for property management",
};

import Appbar from "@/shared/components/appbar";
import Appcontainer from "@/shared/components/appcontainer";
import Breadcrump from "@/shared/components/breadcrump";
import { Toolbox } from "@/shared/components/icons";
import { breadcrumpNavItems } from "@/data";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={euclidCircularB.variable}>
      <body className="antialiased font-sans flex min-h-screen flex-col bg-[#F9FAFB] dark:bg-[#F9FAFB]">
        <Providers>
          <Appbar />
          <Breadcrump>
            <nav className="flex items-center h-ful w-full justify-between">
              {breadcrumpNavItems.map((item, index) => (
                <button
                  key={index}
                  className={`flex items-center space-x-[10px] h-[38px] px-[21px] rounded-[8px] transition-all
                      ${
                        item.isActive
                          ? "bg-[#176D5815] text-[#176D58] border border-[#176D5815]"
                          : "text-[#3D3D3D] hover:bg-gray-100"
                      }`}
                >
                  <span
                    className={
                      item.isActive ? "text-[#176D58]" : "text-gray-500"
                    }
                  >
                    {item.icon}
                  </span>
                  <span className="text-[14px] font-medium leading-[17.75px]">
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>
          </Breadcrump>
          {children}
        </Providers>
      </body>
    </html>
  );
}
