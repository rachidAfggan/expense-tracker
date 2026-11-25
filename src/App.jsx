import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'

export default function App() {
  const [expenses, setExpenses] = useState([])

  function handleAdd(expense) {
    const newExpense = { ...expense, id: crypto.randomUUID() }
    setExpenses([newExpense, ...expenses])
  }

  return (
    <main>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdd={handleAdd} />
      <ul className="expense-list">
        {expenses.map((expense) => (
          <li key={expense.id}>
            <span>
              {expense.title} <small>({expense.category}, {expense.date})</small>
            </span>
            <strong>${expense.amount.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
      {expenses.length === 0 && <p>No expenses yet. Add your first one above.</p>}
    </main>
  )
}
