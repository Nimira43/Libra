'use client'

import { addDays } from 'date-fns'
import { z } from 'zod'

const transactionFormSchema = z.object({
  transactionType: z.enum(['income', 'expense']),
  categoryId: z.coerce.number().positive('Please select a category'),
  transactionDate: z.coerce.date().max(addDays(new Date(), 1), 'Transaction date cannot be in the future')
})

export default function TransctionForm() {
  return (
    <div>TransctionForm</div>
  )
}