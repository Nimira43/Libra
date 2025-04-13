'use client'

import { addDays } from 'date-fns'
import { useForm } from 'react-hook-form'
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
  const form = useForm<z.infer<typeof transactionFormSchema>>({
    resolver: zodResolver(transactionFormSchema)
  })
  return (
    <div>TransctionForm</div>
  )
}

function zodResolver(transactionFormSchema: z.ZodObject<{ transactionType: z.ZodEnum<["income", "expense"]>; categoryId: z.ZodNumber; transactionDate: z.ZodDate; amount: z.ZodNumber; description: z.ZodString }, "strip", z.ZodTypeAny, { transactionType: "income" | "expense"; categoryId: number; transactionDate: Date; amount: number; description: string }, { transactionType: "income" | "expense"; categoryId: number; transactionDate: Date; amount: number; description: string }>): import("react-hook-form").Resolver<{ transactionType: "income" | "expense"; categoryId: number; transactionDate: Date; amount: number; description: string }, any, { transactionType: "income" | "expense"; categoryId: number; transactionDate: Date; amount: number; description: string }> | undefined {
  throw new Error('Function not implemented.')
}
