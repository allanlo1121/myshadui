
import { dayProgressData } from '@/lib/data'
import { ChartAreaInteractive } from '@/components/charts/ChartAreaInteractive'

import React from 'react'



export default function Page() {
    return (
        <div>Charts

            <div className='w-[1370px] h-[392px]'><ChartAreaInteractive data={dayProgressData} /></div>
        </div>
    )
}
