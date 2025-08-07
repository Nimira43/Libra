import { auth } from '@clerk/nextjs/server'
import 'server-only'

export async function getTransactionsByMonth({
  month,
  year
}: {
  month: number
  year: number
}) {
  const {userId} = await auth()

  if (!userId) {
    return null
  }

  const earliestDate = new Date(year, month - 1, 1)
}