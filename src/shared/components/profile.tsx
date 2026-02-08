import React from "react";

interface ProfileProps {
  initials?: string;
  className?: string;
}

const Profile = ({ initials = "D", className = "" }: ProfileProps) => {
  return (
    <div
      className={`flex items-center gap-2 cursor-pointer group ${className}`}
    >
      <div className="w-[40px] h-[40px] rounded-full bg-white text-primary flex items-center justify-center font-bold text-sm border-2 border-white/20 shadow-sm uppercase group-hover:border-white/40 transition-colors">
        {initials}
      </div>
    </div>
  );
};

export default Profile;

