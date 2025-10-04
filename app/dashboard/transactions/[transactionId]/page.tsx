import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { getCategories } from '@/data/getCategories'
import Link from 'next/link'
import EditTransactionForm from './edit-transaction-form'

export default async function EditTransactionPage({
  params
}: {
  params: Promise<{transactionId: string}>
}) {
  const paramsValues = await params
  const transactionId = Number(paramsValues.transactionId)

  if (isNaN(transactionId)) {
    return (
      <div>Transaction not found.</div>
    )
  }

  const categories = await getCategories()

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
            <BreadcrumbLink asChild>
              <Link href='/dashboard/transactions'>
                Transactions
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              Edit Transaction
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Card className='mt-4 max-w-screen-md'>
        <CardHeader>
          <CardTitle>
            Edit Transaction
          </CardTitle>
        </CardHeader>
        <CardContent>
          <EditTransactionForm />
        </CardContent>
      </Card>
    </div>
  )
}