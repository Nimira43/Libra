'use client'

import { addDays } from 'date-fns'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { BsCalendar3 } from 'react-icons/bs'
import { format } from 'date-fns'
import { Calendar } from './ui/calendar'

const transactionFormSchema = z.object({
  transactionType: z
    .enum(['income', 'expense']),
  categoryId: z.coerce
    .number()
    .positive('Please select a category.'),
  transactionDate: z.coerce
    .date()
    .max(addDays(new Date(), 1), 'Transaction date cannot be in the future.'),
  amount: z.coerce
    .number()
    .positive('Amount must be greater than 0.'),
  description: z
    .string()
    .min(3, 'Description must contain at least 3 characters')
    .max(300, 'Description must contain no more than 300 characters')
})

export default function TransctionForm() {
  const form = useForm<z.infer<typeof transactionFormSchema>>({
    resolver: zodResolver(transactionFormSchema),
    defaultValues: {
      amount: 0,
      categoryId: 0,
      description: '',
      transactionDate: new Date(),
      transactionType: 'income'
    },
  })

  const handleSubmit = async (
    data: z.infer<typeof transactionFormSchema>
  ) => {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <fieldset className='grid grid-cols-2 gap-y-5 gap-x-2'>
          <FormField
            control={form.control}
            name='transactionType'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>
                    Transaction Type
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className='bg-light'>
                        <SelectItem value='income'>
                          Income
                        </SelectItem>
                        <SelectItem value='expense'>
                          Expense
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name='categoryId'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>
                    Category
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value.toString()}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className='bg-light'>
                       
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <FormField
            control={form.control}
            name='transactionDate'
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>
                    Transaction Date
                  </FormLabel>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          className={cn('justify-start text-left font-normal', !field.value && 'text-muted-foreground'
                          )}
                        >
                          <BsCalendar3
                            className='mr-1 h-4 w-4 '
                          />
                          {field.value ? (
                            format(field.value, 'dd MMMM yyyy')
                          ) : (
                            <span>Pick a Date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0 bg-light'>
                        <Calendar
                          mode='single'
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                          disabled={{
                            after: new Date()
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
        </fieldset>
      </form>
    </Form>
  )
}
