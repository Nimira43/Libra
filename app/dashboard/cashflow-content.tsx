'use client'

import { ChartContainer } from '@/components/ui/chart'
import { Bar, BarChart } from 'recharts'

export function CashflowContent({
  annualCashflow
}: {
  annualCashflow: {
    month: number
    income: number
    expenses: number
  } []
}) {
  return (
    <ChartContainer
      config={{
        income: {
          label: 'Income',
          color: '#167416',
        },
        expenses: {
          label: 'Expense',
          color: '#c12727',
        }
      }}
      className='w-full h-[300px]'
    >
      <BarChart data={annualCashflow}>
        <Bar
          dataKey='income'
          radius={3}
          fill='var(--color-income)'
        />
        <Bar
          dataKey='expenses'
          radius={3}
          fill='var(--color-expenses)'
        />
      </BarChart>
    </ChartContainer>
  )
}