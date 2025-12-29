'use client'

import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import numeral from 'numeral'
import { format } from 'date-fns'
import { FiEdit2 } from 'react-icons/fi'

interface Transaction {
  id: number
  transactionDate: string | Date
  description: string
  transactionType: 'income' | 'expense' | null
  category: string | null
  amount: number | string
}

export default function TransactionsTable({
  transactions,
  showActions = false
}: {
  transactions: Transaction[]
  showActions?: boolean
}) {
  if (!transactions?.length) {
    return (
      <p className='py-10 text-center text-lg text-muted-foreground'>
        There are no transactions for this period
      </p>
    )
  }

  return (
    <Table className='mt-4'>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Amount</TableHead>
          {showActions && <TableHead />}
        </TableRow>
      </TableHeader>

      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>
              {format(transaction.transactionDate, 'dd MMMM yyyy')}
            </TableCell>

            <TableCell>{transaction.description}</TableCell>

            <TableCell className='uppercase'>
              <Badge
                className={
                  transaction.transactionType === 'income'
                    ? 'bg-green-600'
                    : 'bg-red-600'
                }
              >
                {transaction.transactionType}
              </Badge>
            </TableCell>

            <TableCell>{transaction.category}</TableCell>

            <TableCell>
              £{numeral(transaction.amount).format('0,0[.]00')}
            </TableCell>

            {showActions && (
              <TableCell className='text-right'>
                <Button
                  asChild
                  variant='outline'
                  size='icon'
                >
                  <Link href={`/dashboard/transactions/${transaction.id}`}>
                    <FiEdit2 />
                  </Link>
                </Button>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
