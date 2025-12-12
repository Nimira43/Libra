import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className='max-w-screen-xl mx-auto py-10'>
      <Link href='/dashboard/transactions/new'>
        Create New Transaction
      </Link>
    </div>
  )
}