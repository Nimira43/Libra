'use server'

import { auth } from '@clerk/nextjs/server'

export async function updateTransaction({
  id,
  transactionDate,
  description,
  amount,
  categooryId
}: {
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

  

}