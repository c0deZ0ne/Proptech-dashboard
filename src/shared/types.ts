import React from "react";

export interface NavItem {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}
