'use client'

import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

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

        </SelectContent>
      </Select>
    </>
  )
}