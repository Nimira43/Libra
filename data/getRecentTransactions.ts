import { auth } from '@clerk/nextjs/server'
import 'server-only'

export async function getRecentTransactions() {
  const { userId } = await auth()

  if (!userId) {
    return []
  }
}