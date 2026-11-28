import { useEffect, useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

const STORAGE_KEY = 'expenses'

function loadExpenses() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

export default function App() {
  const [expenses, setExpenses] = useState(loadExpenses)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses))
  }, [expenses])

  function handleAdd(expense) {
    const newExpense = { ...expense, id: crypto.randomUUID() }
    setExpenses([newExpense, ...expenses])
  }

  function handleDelete(id) {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  function handleClearAll() {
    if (window.confirm('Delete all expenses? This cannot be undone.')) {
      setExpenses([])
    }
  }

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <main>
      <h1>Expense Tracker</h1>
      <section className="card">
        <h2>New expense</h2>
        <ExpenseForm onAdd={handleAdd} />
      </section>
      <section className="card">
        <h2>Your expenses</h2>
        <ExpenseList expenses={expenses} onDelete={handleDelete} />
        {expenses.length > 0 && (
          <button className="clear-btn" onClick={handleClearAll}>
            Clear all
          </button>
        )}
        <p className="total">
          Total: <strong>${total.toFixed(2)}</strong>
        </p>
      </section>
    </main>
  )
}
