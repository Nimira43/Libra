'use server'

import { auth } from '@clerk/nextjs/server'

export const createTransaction = async (data: {
  amount: number
  transactionDate: string
  description: string
  categoryId: number
}) => {
  const {userId} = await auth()

  if (!userId) {
    return (
      error: true,
      message: 'Unauthorised'
    )
  }

}