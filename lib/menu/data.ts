import {
    LayoutDashboard,
    Folder,
    Home,
    Settings,
    HardDrive,
    FileText,
    BarChart3,
    User,
} from "lucide-react";
import { SidebarConfig } from "./types"; // 你也可以放在 utils/types.ts 等位置

export const sidebarData: SidebarConfig = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [
        {
            title: "主页",
            url: "/dashboard",
            icon: LayoutDashboard,
            items: [
                { title: "总体情况", url: "/dashboard", icon: User },
                { title: "个人情况", url: "#", icon: Settings },
            ],
        },
        {
            title: "指挥中心",
            url: "/production-center",
            icon: HardDrive,
            items: [
                { title: "总览", url: "/production-center", icon: LayoutDashboard },
                { title: "施工进度", url: "/production-center/construction-progress", icon: Folder },
                { title: "任务调度", url: "/production-center/task-dispatch", icon: FileText },
                { title: "项目监控", url: "/production-center/project-monitor", icon: BarChart3 },
                { title: "施工报表", url: "/production-center/data-report", icon: FileText },
            ],
        },
        {
            title: "资源中心",
            url: "/resource-center",
            icon: Folder,
            items: [
                { title: "项目部", url: "/project/projects", icon: User },
                { title: "区间", url: "/resource-center/tunnel", icon: FileText },
                { title: "车站", url: "/resource-center/station", icon: FileText },
                { title: "盾构机", url: "/resource-center/tbm", icon: FileText },
                { title: "其他设备", url: "/resource-center/others", icon: FileText },
            ],
        },
        {
            title: "数据分析",
            url: "/project-manager/big-data",
            icon: BarChart3,
            items: [
                { title: "数据统计", url: "/project-manager/big-data/summary", icon: FileText },
                { title: "数据明细", url: "/project-manager/big-data/detail", icon: FileText },
                { title: "时效分析", url: "/project-manager/big-data/time-analysis", icon: FileText },
                { title: "报表统计", url: "/project-manager/big-data/work-report", icon: FileText },
            ],
        },
    ],
};
