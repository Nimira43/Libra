'use client'

import { addDays } from 'date-fns'
import { z } from 'zod'

const transactionFormSchema = z.object({
  transactionType: z
    .enum(['income', 'expense']),
  categoryId: z.coerce
    .number()
    .positive('Please select a category.'),
  transactionDate: z.coerce
    .date()
    .max(addDays(new Date(), 1), 'Transaction date cannot be in the future.'),
  amount: z.coerce
    .number()
    .positive('Amount must be greater than 0.'),
  description: z
    .string()
    .min(3, 'Description must contain at least 3 characters')
    .max(300, 'Description must contain no more than 300 characters')
})

export default function TransctionForm() {
  return (
    <div>TransctionForm</div>
  )
}