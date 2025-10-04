export default async function EditTransactionPage({
  params
}: {
  params: Promise<{transactionId: string}>
}) {
  const paramsValues = await params


  return (
    <div>Edit Transaction: {paramsValues.transactionId}</div>
  )
}