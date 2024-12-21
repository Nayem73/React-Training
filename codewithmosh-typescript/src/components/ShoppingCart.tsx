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

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ShoppingCart({ onClick, cart, onChange }: Props) {


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

      <form>
        <label>Add item</label>
        <input type="text" onChange={onChange} />
      </form>

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
