'use client'

import TransctionForm, { transactionFormSchema } from '@/components/transaction-form'
import { type Category } from '@/types/Category'
import { z } from 'zod'
// import { format } from 'date-fns'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'

export default function EditTransactionForm ({
  categories,
  transaction
}: {
  categories: Category[]
  transaction: {
    id: number
    categoryId: number,
    amount: string,
    description: string
    transactionDate: string
  }
}) {
  const router = useRouter()
  const {toast} = useToast()
  const handleSubmit = async(data: z.infer<typeof transactionFormSchema>) => {
    const result: any = {}
    
    
    // await createTransaction({
    //   amount: data.amount,
    //   transactionDate: format(data.transactionDate, 'yyyy-MM-dd'),
    //   categoryId: data.categoryId,
    //   description: data.description


    if (result.error) {
      toast({
        title: 'Error',
        description: result.message,
        variant: 'destructive'
      }) 
      return;    
    }
    toast({
      title: 'Success',
      description: 'Transaction Updated.',
      className: 'bg-green-500 text-light'   
    }) 
    router.push(`
      /dashboard/transactions?month=${
        data.transactionDate.getMonth() + 1
      }&year=${data.transactionDate.getFullYear()}
    `)
  }
  return (
    <TransctionForm 
      defaultValues={{
        amount: Number(transaction.amount),
        categoryId: transaction.categoryId,
        description: transaction.description,
        transactionDate: new Date(transaction.transactionDate),
        transactionType: 
          categories.find(category => category.id === transaction.categoryId)
            ?.type ?? 'income',
      }}
      onSubmit={handleSubmit}  
      categories={categories} 
    />
  )
}