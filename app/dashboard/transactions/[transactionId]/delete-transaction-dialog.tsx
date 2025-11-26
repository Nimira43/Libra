'use client'

import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { PiTrash } from 'react-icons/pi'
import { deleteTransaction } from './actions'
import { useToast } from '@/hooks/use-toast'

export default function DeleteTransactionDialog({
  transactionId,
  transactionDate
}: {
  transactionId: number
  transactionDate: string
}) {
  const { toast } = useToast()
  const handleDeleteConfirm = async () => {
    const result = await deleteTransaction(transactionId)
    
    if (result?.error) {
      toast({
        title: "Error",
        description: result.message,
        variant: 'destructive'
      })
      return
    }
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