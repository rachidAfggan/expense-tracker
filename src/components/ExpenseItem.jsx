export default function ExpenseItem({ expense }) {
  return (
    <li>
      <span>
        {expense.title} <small>{expense.category} · {expense.date}</small>
      </span>
      <strong>${expense.amount.toFixed(2)}</strong>
    </li>
  )
}
