'use client'

import { z } from 'zod'

const transactionFormSchema = z.object({
  transactionType: z.enum(['income', 'expense']),
  categoryId: z.coerce.number().positive('Please select a category'),
  transactionDate: z.coerce.date().max()

})

export default function TransctionForm() {
  return (
    <div>TransctionForm</div>
  )
}