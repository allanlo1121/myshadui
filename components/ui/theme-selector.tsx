"use client"

import { THEMES } from "@/lib/themes"
import { useThemeConfig } from "@/components/ui/active-theme"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function ThemeSelector() {
    const { activeTheme, setActiveTheme } = useThemeConfig()

    return (
        <Select value={activeTheme} onValueChange={setActiveTheme}>
            <SelectTrigger size="sm" className="w-32">
                <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent align="end">
                {THEMES.map((theme) => (
                    <SelectItem key={theme.name} value={theme.value}>
                        {theme.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}