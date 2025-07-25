import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { z } from 'zod'

const searchSchema = z.object({
  year: z.coerce
    .number()
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
            <span>July 2025 Transactions</span>
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
        </CardContent>
      </Card>
    </div>
  )
}