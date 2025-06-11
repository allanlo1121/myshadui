'use client';

import * as React from 'react';
import { AppSidebar } from "@/components/app_ui/app-sidebar";
import { RightSidebar } from '@/components/app_ui/right-sidebar';
import { ThemeProvider } from "@/components/ui/theme-provider"

import {
    SidebarInset,
    SidebarProvider,

} from "@/components/ui/sidebar"


import { SiteHeader } from "@/components/app_ui/site-header"


function LayoutContent({ children }: { children: React.ReactNode }) {
    const [rightOpen, setRightOpen] = React.useState(false);

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <SiteHeader rightOpen={rightOpen} setRightOpen={setRightOpen} />
                {children}
            </SidebarInset>
            {/* 右侧栏 */}
            <aside
                className={`flex-shrink-0 bg-white dark:bg-gray-800 border-l
              transition-[width] duration-200 ease-linear
              ${rightOpen ? 'w-72' : 'w-0 overflow-hidden'}`}
            >
                {/* 只有展开时才渲染内容，避免 tab 顺序问题 */}
                {rightOpen && (
                    <div className="p-4">
                        <h2 className="text-lg font-semibold">特定信息</h2>
                        {/* …放你的弹出详情… */}
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
