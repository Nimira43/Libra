'use client'

import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import numeral from 'numeral'
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts'

export function CashflowContent({
  annualCashflow
}: {
  annualCashflow: {
    month: number
    income: number
    expenses: number
  } []
  }) {
  const today = new Date()
  
  const totalAnnualIncome = annualCashflow.reduce((
    prevValue: number,
    month
  ) => {
    return prevValue + month.income
  }, 0)
  
  const totalAnnualExpenses = annualCashflow.reduce((
    prevValue: number,
    month
  ) => {
    return prevValue + month.expenses
  }, 0)

  const balance = totalAnnualIncome  - totalAnnualExpenses

  return (
    <>
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
          <CartesianGrid vertical={false} />
          <YAxis tickFormatter={(value) => {
            return `£${numeral(value).format('0,0')}`
          }}/>
          <XAxis tickFormatter={(value) => {
            return (
              format(
                new Date(
                  today.getFullYear(),
                  value,
                  1
                ),
                'MMM'
              )
            )
          }} />
          <ChartTooltip
            content={
              <ChartTooltipContent
                labelFormatter={(value, payload) => {
                  const month = payload[0]?.payload?.month
                  return (
                    format(
                      new Date(
                        today.getFullYear(),
                        month - 1,
                        1
                      ),
                      'MMM'
                    )
                  )
                }}
              />
            }
          />
          <Legend
            verticalAlign='top'
            align='right'
            height={30}
            iconType='circle'
            formatter={(value) => {
              return (
                <span  className='text-dark capitalize font-medium'>
                  {value}
                </span>
              )
            }}
          />
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
      <div className='border-l px-4 flex flex-col gap-4 justify-center text-center'>
        <div>
          <span className='text-muted-foreground font-medium text-sm'>Income</span>
          <h2 className='text-3xl'>
            £{numeral(totalAnnualIncome).format('0,0[.]00')}
          </h2>
        </div>
        <div className='border-t' />
        <div>
          <span className='text-muted-foreground font-medium text-sm'>Expenses</span>
          <h2 className='text-3xl'>
            £{numeral(totalAnnualExpenses).format('0,0[.]00')}
          </h2>
        </div>
        <div className='border-t' />
        <div>
          <span className='text-muted-foreground font-medium text-sm'>Balance</span>
          <h2
            className={
              cn(
                'text-3xl font-bold',
                balance >= 0
                  ? 'text-[#167416]'
                  : 'text-[#c12727]'
              )
            }
          >
            £{numeral(balance).format('0,0[.]00')}
          </h2>
        </div>
      </div>
    </>
  )
}