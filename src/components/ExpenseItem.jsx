export default function ExpenseItem({ expense, onDelete }) {
  return (
    <li>
      <span>
        {expense.title} <small>{expense.category} · {expense.date}</small>
      </span>
      <div className="item-actions">
        <strong>${expense.amount.toFixed(2)}</strong>
        <button
          type="button"
          className="delete-btn"
          aria-label={`Delete ${expense.title}`}
          onClick={() => onDelete(expense.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}
