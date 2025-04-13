import Link from 'next/link'

export default function DashboardPage() {
  return (
    <Link href='/dashboard/transactions/new'>
      Create New Transaction
    </Link>
  )
}