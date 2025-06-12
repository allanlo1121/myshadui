'use client';

import * as React from 'react';
import { AppSidebar } from "@/components/app_ui/app-sidebar";
import { ThemeProvider } from "@/components/ui/theme-provider"

import {
    SidebarInset,
    SidebarProvider,

} from "@/components/ui/sidebar"


import { SiteHeader } from "@/components/app_ui/site-header"
import { ChartBarLabelCustom } from "@/components/charts/chart-bar-tunnels"
import { tunnels } from '@/lib/data';

const HEADER_HEIGHT = '4rem'

function LayoutContent({ children }: { children: React.ReactNode }) {
    const [rightOpen, setRightOpen] = React.useState(false);

    return (
        <SidebarProvider className='h-screen flex overflow-hidden' >
            <AppSidebar />
            <SidebarInset className="flex-1 relative flex flex-col">
                <SiteHeader rightOpen={rightOpen} setRightOpen={setRightOpen} />
                <div className="absolute inset-0 pt-16 flex-1 overflow-hide">{children}</div>
            </SidebarInset>
            {/* 右侧栏 */}
            <aside
                className={`flex-shrink-0 bg-white dark:bg-gray-800 border-l
              transition-[width] duration-200 ease-linear
              ${rightOpen ? 'w-72' : 'w-0 overflow-hidden'}`}
            >
                {/* 只有展开时才渲染内容，避免 tab 顺序问题 */}
                {rightOpen && (
                    <div className=" p-4 ">
                        <h2 className="text-lg font-semibold">特定信息</h2>
                        <ChartBarLabelCustom data={tunnels
                            .filter(tunnel => tunnel.status === "在建")
                            .map(tunnel => ({
                                name: tunnel.shortName || "未命名",
                                total: typeof tunnel.ringEnd === "number" ? tunnel.ringEnd : 0,
                                completed: typeof tunnel.currentRing === "number" ? tunnel.currentRing : 0,
                            }))} />

                    </div>
                )}
            </aside>

        </SidebarProvider >
    );
}

export default function ProductionCenterLayout({ children }: { children: React.ReactNode }) {

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <LayoutContent children={children} />
        </ThemeProvider>

    );
}
