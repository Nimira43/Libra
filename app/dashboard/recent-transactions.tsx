import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function RecentTransactions() {
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
        Recent Transactions
      </CardContent>
    </Card>
  )
}