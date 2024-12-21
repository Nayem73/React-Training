import { useState } from "react";
import Button from "./components/Button"
import Like from "./components/Like"
import Game from "./components/Game";

function App() {
  const [isRed, setIsRed] = useState<boolean>(true);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
    }
  });

  return (
    <>
      <Button buttonText="Submit" />
      <Like onClick={() => {
        console.log('Like button clicked');
        setIsRed(!isRed)
      }}
        isRed={isRed}
      />

      <Game onClick={() => {
        console.log(`Game button clicked`);
        setGame({ ...game, player: { name: 'Not John' } })
      }}
        game={game}
      />
    </>
  )
}

export default App
