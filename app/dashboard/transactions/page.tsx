import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getTransactionsByMonth } from '@/data/getTransactionsByMonth'
import { format } from 'date-fns'
import Link from 'next/link'
import { z } from 'zod'

const today = new Date()

const searchSchema = z.object({
  year: z.coerce
    .number()
    .min(today.getFullYear() - 100)
    .max(today.getFullYear() + 1)
    .catch(today.getFullYear()),
  month: z.coerce
    .number()
    .min(1)
    .max(12)
    .catch(today.getMonth() + 1)
})

export default async function TransactionsPage({
  searchParams
}: {
  searchParams: Promise<{
    year?: string
    month?: string
  }>
}) {
  const searchParamsValues = await searchParams
  const {month, year} = searchSchema.parse(searchParamsValues)
  
  const selectedDate = new Date(year, month - 1, 1)
  const transactions = await getTransactionsByMonth({month, year})

  console.log({transactions})

  return (
    <div className='max-w-screen-xl mx-auto py-10'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href='/dashboard'>
                Dashboard
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              Transactions
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className='mt-4'>
        <CardHeader>
          <CardTitle className='flex justify-between'>
            <span>{format(selectedDate, 'MMMM yyyy')} Transactions</span>
            <div>
              Dropdowns
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button asChild>
            <Link href='/dashboard/transactions/new'>
              New Transaction
            </Link>
          </Button>
          {!transactions?.length && (
            <p className='py-10 text-center text-lg text-muted-foreground'>
              There are no transaction for this month
            </p>
          )}
          {!!transactions?.length && (
            <Table className='mt-4'>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    Date
                  </TableHead>
                  <TableHead>
                    Description
                  </TableHead>
                  <TableHead>
                    Type
                  </TableHead>
                  <TableHead>
                    Category
                  </TableHead>
                  <TableHead>
                    Date
                  </TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map(transaction => (
                  <TableRow
                    key={transaction.id}  
                  >
                    <TableCell>
                      {format(transaction.transactionDate,'dd MMMM yyyy')}
                    </TableCell>
                    <TableCell>
                      {transaction.description}
                    </TableCell>
                    <TableCell>
                      {transaction.categoryId}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}