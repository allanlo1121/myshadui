import { LucideIcon } from "lucide-react";


export interface User {
  name: string;
  email: string;
  avatar: string;
}

export interface Team {
  name: string;
  logo: React.ElementType;
  plan: string;
}

export interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean; // 是否高亮显示
  items?: NavItem[]; // 支持多级嵌套
}

export interface projectNavItem {
  name: string;
  url: string;
  icon: LucideIcon;
 
}
export interface SidebarConfig {
  user: User;
  teams: Team[];
  navMain: NavItem[];
  projects:projectNavItem[]; // 可选的项目导航
}
