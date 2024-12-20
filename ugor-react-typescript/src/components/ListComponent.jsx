import React from "react";

const list = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tangerine",
  "Ugli fruit",
  "Vanilla bean",
  "Watermelon",
  "Xigua",
  "Yellow watermelon",
  "Zucchini",
];

function ListComponent() {
  return (
    <div>
      <ul>
        {list.map((index, soo, too, goo) => {
          return (
            <li>
              {index} {soo} {too} {goo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListComponent;
