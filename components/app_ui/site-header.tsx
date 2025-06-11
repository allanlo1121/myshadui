
import { ChevronRight, ChevronLeft } from 'lucide-react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"
import { ModeToggle } from "../ui/mode-toggle"
import { ModeSwitcher } from "@/components/ui/mode-switcher"
import { ThemeSelector } from "@/components/ui/theme-selector"


interface SiteHeaderProps {
    rightOpen: boolean;
    setRightOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


export function SiteHeader({ rightOpen, setRightOpen }: SiteHeaderProps) {
    const { open: leftOpen, setOpen: setLeftOpen } = useSidebar()

    const toggleRight = () => {
        // 切换右侧
        setRightOpen(o => !o)

        // 如果要「打开右侧」的同时「关闭左侧」
        if (!rightOpen) {
            setLeftOpen(false)
        }
    }
    return (
        <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
            <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
                <SidebarTrigger className="-ml-1" />
                <Separator
                    orientation="vertical"
                    className="mx-2 data-[orientation=vertical]:h-4"
                />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                            <BreadcrumbLink href="#">
                                指挥中心
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="ml-auto flex items-center gap-2">

                    <ThemeSelector />
                    <ModeSwitcher />
                    {/* 新增：右侧抽屉切换按钮 */}
                    <Button
                        variant="outline"
                        size="icon"
                        className='group/toggle size-8'
                        onClick={toggleRight}
                    >
                        {rightOpen ?
                            <ChevronRight className="w-4 h-4" /> :
                            <ChevronLeft className="w-4 h-4" />}
                    </Button>
                </div>
            </div>
        </header>
    )
}