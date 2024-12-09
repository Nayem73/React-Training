import { useState } from "react";

export default function () {
  const [name, setName] = useState("");
  function handleChange(event) {
    console.log(event.target.value);
    console.log(event);
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <input
          onChange={function temp(event) {
            return handleChange(event);
          }}
          type="text"
          value={name}
        />
      </form>
    </div>
  );
}
