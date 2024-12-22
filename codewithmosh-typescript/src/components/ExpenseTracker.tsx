import { useForm } from "react-hook-form";

function ExpenseTracker() {
  const { register, handleSubmit } = useForm();
  console.log(register('description'));

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <label>
        Description:
        <input type="text" {...register('description')} />
      </label>
      <label>
        Amount:
        <input type="number" {...register('amount')} />
      </label>
      <label>
        Category:
        <input type="text" {...register('category')} />
      </label>
      <button type="submit">Add</button>
    </form>
  )
}

export default ExpenseTracker