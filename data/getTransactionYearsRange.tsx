import { db } from '@/db'
import { transactionsTable } from '@/db/schema'
import { auth } from '@clerk/nextjs/server'
import { asc, eq } from 'drizzle-orm'
import 'server-only'

export async function getTransactionYearsRange() {
  const { userId } = await auth()

  if  (!userId) {
    return []
  }

  const [earliestTransaction] = await db
    .select()
    .from(transactionsTable)
    .where(eq(transactionsTable.userId, userId))
    .orderBy(asc(transactionsTable.transactionDate))
}