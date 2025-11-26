'use client'

import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { PiTrash } from 'react-icons/pi'

export default function DeleteTransactionDialog({
  transactionId,
  transactionDate
}: {
  transactionId: number
  transactionDate: string
}) {
  const handleDeleteConfirm = async () => {
    
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button 
          variant='outline'
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
          <AlertDialogDescription>
            This transaction will be permanently deleted. This action cannot be undone. 
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
            <AlertDialogCancel>
              Cancel
            </AlertDialogCancel>
            <Button
              onClick={handleDeleteConfirm}            
            >
              Delete
            </Button>
          </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}