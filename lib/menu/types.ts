import { LucideIcon } from "lucide-react";

export interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  items?: NavItem[]; // 支持多级嵌套
}

export interface SidebarConfig {
  versions: string[];
  navMain: NavItem[];
}
