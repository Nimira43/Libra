import { db } from '@/db'
import { transactionsTable } from '@/db/schema'
import { auth } from '@clerk/nextjs/server'
import { desc, eq } from 'drizzle-orm'
import 'server-only'

export async function getRecentTransactions() {
  const { userId } = await auth()

  if (!userId) {
    return []
  }

  const transactions = await db.select().from(transactionsTable)
    .where(
      eq(
        transactionsTable.userId,
        userId
      )
    )
    .orderBy(
      desc(
        transactionsTable.transactionDate
      )
    )
}