'use client';
// apps/production-center/layout.tsx

import { AppSidebar } from "@/components/app_ui/app-sidebar";
import Topbar from "@/components/app_ui/topbar";
import SideNav from "@/components/app_ui/sidenav";
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { SiteHeader } from "@/components/app_ui/site-header"


function LayoutContent({ children }: { children: React.ReactNode }) {


    return (
        <SidebarProvider
            style={{
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
            } as React.CSSProperties}
        >
            <AppSidebar variant="inset" />

            {/* 主区域 */}
            <SidebarInset>
                <SiteHeader />
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
}

export default function ProductionCenterLayout({ children }: { children: React.ReactNode }) {

    return (


        <LayoutContent children={children} />

    );
}
