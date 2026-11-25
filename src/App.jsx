import ExpenseForm from './components/ExpenseForm'

export default function App() {
  function handleAdd(expense) {
    // Temporary: the list and state come in the next step
    console.log('New expense:', expense)
  }

  return (
    <main>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAdd={handleAdd} />
    </main>
  )
}
