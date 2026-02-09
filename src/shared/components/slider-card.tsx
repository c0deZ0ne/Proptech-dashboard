"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface SliderCardProps {
  images: string[];
  label: string;
  title: string;
  badgeType?: "clicked" | "watched" | "featured";
  priority?: boolean;
}

const SliderCard: React.FC<SliderCardProps> = ({
  images,
  label,
  title,
  badgeType = "clicked",
  priority = false,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const badgeStyles = {
    clicked: "bg-[#4545FE/80] text-white",
    watched: "bg-[#111111/60] text-white",
    featured: "bg-[#F9FAFB/90] text-[#111111]",
  };

  return (
    <div className="relative w-[418px] h-[286px] rounded-[12px] overflow-hidden group">
      {/* Images Slider */}
      <div className="absolute inset-0 transition-transform duration-700 ease-in-out">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={title}
              fill
              sizes="(max-width: 418px) 100vw, 418px"
              priority={priority && index === 0}
              className="object-cover"
            />
            {/* High-Fidelity Overlay Gradient (from Figma: 180deg, 5% to 80%) */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 50%, rgba(0, 0, 0, 0.7) 100%)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Text Content Overlay */}
      <div className="absolute bottom-[24px] left-[20px] right-[20px] flex flex-col gap-y-1">
        {/* Tag right above title */}
        <span className="w-fit  py-[4px] rounded-[4px] text-[14px] leading-[100%] font-regular tracking-wider uppercase  text-white font-euclid">
          {label}
        </span>
        <h4 className="text-white text-[18px] font-semibold leading-[100%] font-euclid ">
          {title}
        </h4>
      </div>

      {/* Navigation Dots (Centered at bottom) */}
      <div className="absolute bottom-[9px] left-1/2 -translate-x-1/2 flex gap-1.5 ">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white w-[16px]" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {/* Controls (Hidden by default, shown on hover) */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default SliderCard;
