import RecentTransactions from './recent-transactions'

export default function DashboardPage() {
  return (
    <div className='max-w-screen-xl mx-auto py-5'>
      <h1 className='text-3xl font-medium pb-5'>Dashboard</h1>
      <RecentTransactions />
    </div>
  )
}