'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { format } from 'date-fns'
import { useState } from 'react'

export default function Filters({
  year, 
  month,
  yearsRange
}: {
  year: number
  month: number
  yearsRange: number[]
}) {
  const [selectedMonth, setSelectedMonth] = useState(month)
  const [selectedYear, setSelecteYear] = useState(year)

  return (
    <>
      <Select>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {Array.from({length: 12}).map((_, i) => (
            <SelectItem
              key={i}
              value={`i + 1`}
            >
              {format(new Date(selectedYear, i, 1), 'MMMM')}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}