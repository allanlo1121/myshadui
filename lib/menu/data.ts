import {
    LayoutDashboard,
    Folder,
    Home,
    Settings,
    HardDrive,
    Factory,
    BarChart3,
    User,
    AudioWaveform,
    Command,
    Monitor,          // 实时监控
    FileText,         // 报表
    CalendarCheck,    // 考勤
    Frame,
    PieChart,
    Navigation,
} from "lucide-react";
import { CrecLogoIcon } from '@/components/icons/crec-logo';
import CrecLogo from '@/components/app_ui/crec-logo';
import { SidebarConfig } from "./types"; // 你也可以放在 utils/types.ts 等位置

export const sidebarData: SidebarConfig = {
    user: {
        name: "chengtong",
        email: "m@example.com",
        avatar: "/avatars/chengtong.jpg",
    },
    teams: [
        {
            name: "城通公司",
            logo: CrecLogo,
            plan: "Enterprise",
        },
        {
            name: "XX项目",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "XX工区",
            logo: Command,
            plan: "Free",
        },
    ],

    navMain: [
        {
            title: "首页",
            url: "/production-center",
            icon: LayoutDashboard,
        },
        {
            title: "指挥中心",
            url: "/production-center",
            icon: Factory,
            items:
                [
                    {
                        title: '总览',
                        url: '/production-center',
                        icon: LayoutDashboard,    // 总览
                    },
                    {
                        title: '盾构监控',
                        url: '/production-center/project-monitor',
                        icon: Monitor,             // 实时监控 → Monitor 图标 :contentReference[oaicite:1]{index=1}
                    },
                    {
                        title: '施工报表',
                        url: '/production-center/data-report',
                        icon: FileText,            // 施工报表 → FileText 图标
                    },
                    {
                        title: '人员考勤',
                        url: '/production-center/attendance',
                        icon: CalendarCheck,       // 人员考勤 → CalendarCheck 图标 :contentReference[oaicite:2]{index=2}
                    },
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
    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Navigation,
        },
    ],
};


