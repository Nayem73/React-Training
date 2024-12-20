import { useState } from "react";
import Button from "./components/Button"
import Like from "./components/Like"

function App() {
  const [isRed, setIsRed] = useState<boolean>(true);

  return (
    <>
      <Button buttonText="Submit" />
      <Like onClick={() => {
        console.log('Like button clicked');
        setIsRed(!isRed)
      }}
        isRed={isRed}
      />
    </>
  )
}

export default App
