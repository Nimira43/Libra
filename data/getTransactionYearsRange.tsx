import { auth } from '@clerk/nextjs/server'
import 'server-only'

export async function getTransactionYearsRange() {
  const { userId } = await auth()

  if  (!userId) {
    return []
  }

  
}