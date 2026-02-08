import { NavItem } from "@/shared/types";
import {
  BudgetingIcon,
  ShopIcon,
  PayoutCenterIcon,
  Toolbox,
  HomeIcon,
  UserIcon,
  RequestIcon,
  ScrollIcon,
  TaskListIcon,
  SearchStatusIcon,
  CalculatorIcon,
  CalendarIcon,
} from "@/shared/components/icons";

export const navItems: NavItem[] = [
  { icon: <CalculatorIcon />, label: "Budgeting" },
  // { icon: <BudgetingIcon width={30} height={30} />, label: "Budgeting" },
  { icon: <CalendarIcon />, label: "Calendar" },
  { icon: <SearchStatusIcon width={36} height={36} />, label: "Search" },
  { icon: <ShopIcon width={36} height={36} />, label: "Shop" },
  { icon: <PayoutCenterIcon width={36} height={36} />, label: "Payout" },
];
export const breadcrumpNavItems: NavItem[] = [
  { icon: <HomeIcon size={20} />, label: "Dashboard", isActive: true },
  { icon: <Toolbox width={20} height={20} />, label: "Listings" },
  { icon: <UserIcon width={20} height={20} />, label: "Users" },
  { icon: <RequestIcon width={20} height={20} />, label: "Request" },
  { icon: <ScrollIcon width={20} height={20} />, label: "Applications" },
  { icon: <TaskListIcon />, label: "Tasks" },
];
