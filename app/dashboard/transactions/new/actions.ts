'use server'

import { auth } from '@clerk/nextjs/server'
import { z } from 'zod'

const transactionSchema = z.object({
  amount: z
    .number()
    .positive('Amount must be greater than 0'),
  description: z
    .string()
    .min(3, 'Description must contain at least 3 characters')
    .max(300, 'Description must contain no more than 300 characters')
})

export const createTransaction = async (data: {
  amount: number
  transactionDate: string
  description: string
  categoryId: number
}) => {
  const {userId} = await auth()

  if (!userId) {
    return {
      error: true,
      message: 'Unauthorised'
    }
  }
}