import { useState } from 'react'

const CATEGORIES = ['Food', 'Transport', 'Bills', 'Shopping', 'Other']

export default function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10))

  function handleSubmit(event) {
    event.preventDefault()
    onAdd({ title, amount: Number(amount), category, date })
    setTitle('')
    setAmount('')
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What did you buy?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        min="0"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">Add expense</button>
    </form>
  )
}
