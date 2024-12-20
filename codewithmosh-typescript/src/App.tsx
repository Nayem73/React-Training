import Button from "./components/Button"
import Like from "./components/Like"

function App() {
  return (
    <>
      <Button buttonText="Submit" />
      <Like onClick={() => console.log('Like button clicked')} />
    </>
  )
}

export default App
