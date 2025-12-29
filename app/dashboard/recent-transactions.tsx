// import { Button } from '@/components/ui/button'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
// import { getRecentTransactions } from '@/data/getRecentTransactions'
// import { Badge } from '@/components/ui/badge'
// import Link from 'next/link'
// import numeral from 'numeral'
// import { format } from 'date-fns'

// export default async function RecentTransactions() {
//   const transactions = await getRecentTransactions()

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className='flex justify-between items-center'>
//           <span>Recent Transactions</span>
//           <div className='flex gap-2'>
//             <Button
//               asChild
//               variant='outline'
//             >
//               <Link href='/dashboard/transactions'>View All</Link>
//             </Button>
//             <Button asChild>
//               <Link href='/dashboard/transactions/new'>Create New</Link>
//             </Button>
//           </div>
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         {!transactions?.length && (
//             <p className='py-10 text-center text-lg text-muted-foreground'>
//               There are no recent transactions for this month
//             </p>
//           )}
//           {!!transactions?.length && (
//             <Table className='mt-4'>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>
//                     Date
//                   </TableHead>
//                   <TableHead>
//                     Description
//                   </TableHead>
//                   <TableHead>
//                     Type
//                   </TableHead>
//                   <TableHead>
//                     Category
//                   </TableHead>
//                   <TableHead>
//                     Amount
//                   </TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {transactions.map(transaction => (
//                   <TableRow
//                     key={transaction.id}  
//                   >
//                     <TableCell>
//                       {format(transaction.transactionDate,'dd MMMM yyyy')}
//                     </TableCell>
//                     <TableCell>
//                       {transaction.description}
//                     </TableCell>
//                     <TableCell
//                       className='uppercase'
//                     >
//                       <Badge
//                         className={
//                           transaction.transactionType === 'income'
//                             ? 'bg-green-600'
//                             : 'bg-red-600'

//                         }
//                       >
//                         {transaction.transactionType}
//                       </Badge>
                      
//                     </TableCell>
//                     <TableCell>
//                       {transaction.category}
//                     </TableCell>
//                     <TableCell>
//                       £{numeral(transaction.amount).format('0,0[.]00')}
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           )}
//       </CardContent>
//     </Card>
//   )
// }


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
              There are no recent transactions for this month
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