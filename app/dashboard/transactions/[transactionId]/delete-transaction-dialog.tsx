'use client'

import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { PiTrash } from 'react-icons/pi'

export default function DeleteTransactionDialog({
  transactionId,
  transactionDate
}: {
  transactionId: number
  transactionDate: string
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <PiTrash />
        </Button>
      </AlertDialogTrigger>
    </AlertDialog>
  )
}