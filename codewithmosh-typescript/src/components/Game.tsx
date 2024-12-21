interface Props {
  onClick: () => void;
  game: {
    id: number;
    player: {
      name: string;
    }
  }
  pizza: {
    name: string;
    toppings: string[];
  }
}

function Game({ onClick, game, pizza }: Props) {
  return (
    <>
      <button onClick={onClick}>game button</button>
      <p>{game.player.name}</p>
      <ul>
        {pizza.toppings.map((topping, index) => (
          <li key={index}>{topping}</li>
        ))}
      </ul>
    </>
  )
}

export default Game