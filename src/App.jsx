import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

export default function App() {
  const [expenses, setExpenses] = useState([])

  function handleAdd(expense) {
    const newExpense = { ...expense, id: crypto.randomUUID() }
    setExpenses([newExpense, ...expenses])
  }

  function handleDelete(id) {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

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
      </section>
    </main>
  )
}
