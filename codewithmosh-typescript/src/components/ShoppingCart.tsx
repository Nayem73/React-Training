interface Props {
  onClick: () => void;
  cart: {
    discount: number;
    items: {
      id: number;
      title: string;
      quantity: number;
    }[]
  }
}

function ShoppingCart({ onClick, cart }: Props) {
  return (
    <div>
      <button onClick={onClick}>Shopping Cart</button>
      {cart.items.map((item) =>
        <div key={item.id}>
          id:{item.id}
          <span> title:{item.title}</span>
          <span> quantity:{item.quantity}</span>
        </div>

      )}
    </div>
  );
}

export default ShoppingCart;
