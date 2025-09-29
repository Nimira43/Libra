'use client'

import { Select, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Filters({
  year, 
  month,
  yearsRange
}: {
  year: number
  month: number
  yearsRange: number[]
}) {
  return (
    <>
      <Select>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
      </Select>

    </>
  )
}