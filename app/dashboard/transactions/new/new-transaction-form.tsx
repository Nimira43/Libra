'use client'

import TransctionForm, { transactionFormSchema } from '@/components/transaction-form'
import { type Category } from '@/types/Category'
import { z } from 'zod'

export default function NewTransactionForm ({
  categories
}: {
  categories: Category[]
}) {
  const handleSubmit = async(data: z.infer<typeof transactionFormSchema>) => {

  }
  return (
    <TransctionForm 
      onSubmit={handleSubmit}  
      categories={categories} 
    />
  )
}