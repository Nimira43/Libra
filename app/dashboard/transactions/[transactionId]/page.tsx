export default async function EditTransactionPage({
  params
}: {
  params: Promise<{transactionId: string}>
}) {
  const paramsValues = await params
  const transactionId = Number(paramsValues.transactionId)

  if (isNaN(transactionId)) {
    return (
      <div>Transaction not found.</div>
    )
  }


  return (
    <div>Edit Transaction: {paramsValues.transactionId}</div>
  )
}