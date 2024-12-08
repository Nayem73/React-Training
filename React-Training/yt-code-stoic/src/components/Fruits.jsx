import Fruit from "./Fruit";

function Fruits() {
  const fruits = [
    {
      name: "Apple",
      color: "Red",
      price: 1.5,
    },
    {
      name: "Banana",
      color: "Yellow",
      price: 0.5,
    },
    {
      name: "Cherry",
      color: "Red",
      price: 3,
    },
  ];

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.name}>
            {/* {fruit.name} {fruit.color} {fruit.price} */}
            <Fruit
              key={fruit.name}
              name={fruit.name}
              color={fruit.color}
              price={fruit.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Fruits;
