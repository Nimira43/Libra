import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getRecentTransactions } from '@/data/getRecentTransactions'
import Link from 'next/link'
import TransactionsTable from '@/components/transactions-table'

export default async function RecentTransactions() {
  const transactions = await getRecentTransactions()

  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex justify-between items-center'>
          <span>Recent Transactions</span>
          <div className='flex gap-2'>
            <Button
              asChild
              variant='outline'
            >
              <Link href='/dashboard/transactions'>View All</Link>
            </Button>
            <Button asChild>
              <Link href='/dashboard/transactions/new'>Create New</Link>
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!transactions?.length && (
            <p className='py-10 text-center text-lg text-muted-foreground'>
              You have no transactions yet. 
            </p>
          )}
          {!!transactions?.length && (
            <TransactionsTable 
              transactions={transactions}
              showActions={false}
            />
          )}
      </CardContent>
    </Card>
  )
}