'use client'

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
    <div>Dropdowns: {year}, {month}</div>
  )
}