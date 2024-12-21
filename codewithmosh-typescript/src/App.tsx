import { useState } from "react";
import Button from "./components/Button"
import Like from "./components/Like"
import Game from "./components/Game";
import ShoppingCart from "./components/ShoppingCart";
import Navbar from "./components/Navbar";

function App() {
  const [isRed, setIsRed] = useState(true);
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
    }
  });
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']
  })
  const [cart, setCart] = useState({
    discount: .1,
    items: [
      { id: 1, title: 'Product 1', quantity: 1 },
      { id: 2, title: 'Product 2', quantity: 1 },
    ]
  })

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
        console.log('Game button clicked');
        setGame({ ...game, player: { ...game.player, name: 'Not John' } })
        console.log('Pizza toppings adding button is also clicked')
        setPizza({ ...pizza, toppings: [...pizza.toppings, 'new topping'] })
      }}
        game={game}
        pizza={pizza}
      />

      <Navbar totalItems={cart.items.length} />
      <ShoppingCart onClick={() => {
        console.log('Shopping cart button clicked');
        setCart({
          ...cart, items:
            cart.items.map(item =>
              (item.id === 1) ? { ...item, quantity: 500 } : item
            )
        })
      }}
        cart={cart}

        onChange={(e) => {
          setCart({ ...cart, items: [...cart.items, { id: 3, title: e.target.value, quantity: 1 }] })
        }}

      />
    </>
  )
}

export default App
