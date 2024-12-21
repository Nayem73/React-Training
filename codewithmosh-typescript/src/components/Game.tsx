interface Props {
  onClick: () => void;
  game: {
    id: number;
    player: {
      name: string;
    }
  }
}

function Game({ onClick, game }: Props) {
  return (
    <>
      <button onClick={onClick}>game button</button>
      <p>{game.player.name}</p>
    </>
  )
}

export default Game