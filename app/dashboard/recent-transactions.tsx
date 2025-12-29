import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'lucide-react'

export default function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <span>Recent Transactions</span>
          <div>
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
    </Card>
  )
}