'use client'

import TransctionForm from '@/components/transaction-form'
import { type Category } from '@/types/Category'

export default function NewTransactionForm ({
  categories
}: {
  categories: Category[]
}) {
  return (
    <TransctionForm />
  )
}