import { db } from '@/db'
import { transactionsTable } from '@/db/schema'
import { auth } from '@clerk/nextjs/server'
import { and, eq } from 'drizzle-orm'
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
  const latestDate = new Date(year, month, 0)

  const transactions = await db.select().from(transactionsTable).where(
    and(eq(transactionsTable.userId, userId))
  )
}