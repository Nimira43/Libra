'use client'

import TransctionForm, { transactionFormSchema } from '@/components/transaction-form'
import { type Category } from '@/types/Category'
import { z } from 'zod'
import { createTransaction } from './actions'
import { format } from 'date-fns'
import { useToast } from '@/hooks/use-toast'

export default function NewTransactionForm ({
  categories
}: {
  categories: Category[]
}) {
  const {toast} = useToast()
  const handleSubmit = async(data: z.infer<typeof transactionFormSchema>) => {
    const result = await createTransaction({
      amount: data.amount,
      transactionDate: format(data.transactionDate, 'yyyy-MM-dd'),
      categoryId: data.categoryId,
      description: data.description
    })

    if (result.error) {
      toast({
        title: 'Error',
        description: result.message
      })     
    }
    console.log(result.id)
  }
  return (
    <TransctionForm 
      onSubmit={handleSubmit}  
      categories={categories} 
    />
  )
}