
interface Props {
  state: {
    details: {
      description: string
      amount: string
      category: string
    }[]
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

}

function ExpenseTracker({ state, onChange, onSubmit }: Props) {

  return (
    <form onSubmit={onSubmit}>
      <label>
        Description:
        <input type="text" name="description" onChange={onChange} />
      </label>
      <label>
        Amount:
        <input type="number" name="amount" onChange={onChange} />
      </label>
      <label>
        Category:
        <input type="text" name="category" onChange={onChange} />
      </label>
      <button type="submit">Add</button>
    </form>
  )
}

export default ExpenseTracker