import { TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface ProgressCardProps {
    title: string;
    current: number;
    previous: number;
    plan?: number;
}

export function ProgressCard({ title, current, previous, plan }: ProgressCardProps) {
    const delta = current - previous;
    const trendUp = delta >= 0;
    const ratio = previous === 0 ? 0 : Math.abs((delta / previous) * 100);
    const roundedRatio = ratio.toFixed(1);

    return (
        <Card className="@container/card">
            <CardHeader>
                <CardDescription>{title}</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    {current} 环
                </CardTitle>
                <CardAction>
                    <Badge variant="outline" className="gap-1">
                        {trendUp ? <TrendingUp className="size-4 text-green-500" /> : <TrendingDown className="size-4 text-red-500" />}
                        {trendUp ? "+" : "-"}
                        {roundedRatio}%
                    </Badge>
                </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                    相比上期
                    {trendUp ? (
                        <TrendingUp className="size-4 text-green-500" />
                    ) : (
                        <TrendingDown className="size-4 text-red-500" />
                    )}{current - previous}环
                </div>
                {plan != null && (
                    <div className="text-muted-foreground">本期计划：{plan} 环</div>
                )}
            </CardFooter>
        </Card>
    );
}
