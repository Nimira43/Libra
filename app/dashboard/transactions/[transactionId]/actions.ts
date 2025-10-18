'use server'

import { transactionSchema } from '@/validation/transactionSchema'
import { auth } from '@clerk/nextjs/server'
import { z } from 'zod'

const updateTransactionSchema = transactionSchema.and(z.object({
  id: z.number()
}))

export async function updateTransaction(data: {
  id: number
  transactionDate: string
  description: string
  amount: number
  categoryId: number
}) {
  const {userId} = await auth()

  if (!userId) {
    return {
      error: true,
      message: 'Unauthorised'
    }
  }

  const validation = updateTransactionSchema.safeParse(data)

}