import { auth } from '@clerk/nextjs/server'
import 'server-only'

export async function getTransaction(transactionId: number) {
  const { userId } = await auth()

  if (!userId) {
    return null
  }  
}