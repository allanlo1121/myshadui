"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A bar chart with a custom label"

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

interface TunnelCompletionSummary {
    name: string
    completed: number
    total: number
}

const chartConfig = {
    completed: {
        label: "completed",
        color: "var(--chart-2)",
    },
    plan: {
        label: "plan",
        color: "var(--chart-2)",
    },
    name: {
        color: "var(--background)",
    },
} satisfies ChartConfig

export function ChartBarLabelCustom({ data }: { data: TunnelCompletionSummary[] }) {



    return (
        <Card className="@container/card ">
            <CardHeader>
                <CardTitle>在建完成情况</CardTitle>
                <CardDescription>1 - 6月 2025</CardDescription>
            </CardHeader>
            <CardContent className="h-full flex items-center justify-center ">
                <ChartContainer config={chartConfig} className="h-full w-full min-h-[800px]">
                    <BarChart
                        accessibilityLayer
                        data={data}
                        layout="vertical"
                        margin={{
                            right: 4,
                        }}
                    >
                        <CartesianGrid horizontal={false} />
                        <YAxis
                            dataKey="name"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                            hide
                        />
                        <XAxis dataKey="completed" type="number" hide />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Bar
                            dataKey="completed"
                            layout="vertical"
                            fill="var(--color-completed)"
                            radius={4}
                        >
                            <LabelList
                                dataKey="name"
                                position="insideLeft"
                                offset={8}
                                className="fill-(--color-label)"
                                fontSize={12}
                            />
                            <LabelList
                                dataKey="completed"
                                position="right"
                                offset={8}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">

            </CardFooter>
        </Card>
    )
}
