import { FieldValues, useForm } from "react-hook-form";

function ExpenseTracker() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Description:
          <input type="text" {...register('description')} />
        </label>
      </div>
      <div>
        <label>
          Amount:
          <input type="number" {...register('amount')} />
        </label>
      </div>
      <div>
        <label>
          Category:
          <input type="text" {...register('category')} />
        </label>
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

export default ExpenseTracker