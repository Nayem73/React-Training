import { useState } from "react"
import ExpenseTracker from "./components/ExpenseTracker"

function App() {
  const [state, setState] = useState({
    tmpDetails: { description: "", amount: "", category: "" },
    details: [
      { description: "", amount: "", category: "" }
    ]
  })

  return (
    <div>
      <ExpenseTracker
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target);
          setState({
            ...state,
            tmpDetails: {
              ...state.tmpDetails,
              [e.target.name]: e.target.value
            }
          })
        }}
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setState(state);
          console.log("Add button clicked");
          console.log(state);
          {
            state.details.map((detail, index) => (
              <div key={index}>
                <p>{detail.description}</p>
                <p>{detail.amount}</p>
                <p>{detail.category}</p>
              </div>
            ))
          }
        }}
      />
    </div>
  )
}

export default App