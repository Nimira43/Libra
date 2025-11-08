'use client'

import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
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
        <Button 
          variant='destructive'
          size='icon'
        >
          <PiTrash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you sure?
          </AlertDialogTitle>

        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  )
}