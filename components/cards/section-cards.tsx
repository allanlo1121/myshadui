import { TrendingDown, TrendingUp } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ProgressCard } from "./progress.card"

export function SectionCards() {

  const dayData ={
    title: "今日",
    current: 20,
    previous: 18,
    plan: 25,
    
  }
   const weekData ={
    title: "本周",
    current: 20,
    previous: 18,
    plan: 25,
    
  }
   const monthData ={
    title: "本月",
    current: 20,
    previous: 18,
    plan: 25,
    
  }
  const yearData ={
    title: "本年",
    current: 20,
    previous: 18,
    plan: 25,
  }
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-5">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>在建隧道</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            20
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <TrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            相比上月 <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            今年贯通隧道6条
          </div>
        </CardFooter>
      </Card>
      <ProgressCard {...dayData} />
      <ProgressCard {...weekData} />
      <ProgressCard {...monthData} />
      <ProgressCard {...yearData} />
    </div>
  )
}
