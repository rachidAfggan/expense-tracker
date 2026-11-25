import { useState } from 'react'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

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
      <ExpenseList expenses={expenses} />
    </main>
  )
}
