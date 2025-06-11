import React from 'react'

//import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/cards/section-cards"
import { ChartAreaInteractive } from "@/components/charts/chart-area-interactive"
import { dayProgressData } from "@/lib/data"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col bg-accent text-foreground">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <div className='flex flex-col w-full  gap-4 lg:gap-6'>

            <div className="px-4 lg:px-6">
              <ChartAreaInteractive data={dayProgressData} />
            </div>
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive data={dayProgressData} />
            </div>



            {/* <DataTable data={data} /> */}
          </div>
        </div>
      </div>
    </div>

  )
}
