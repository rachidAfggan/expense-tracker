import ExpenseItem from './ExpenseItem'

export default function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return <p>No expenses yet. Add your first one above.</p>
  }

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  )
}
