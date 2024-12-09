import { useState } from "react";

export default function () {
  const [name, setName] = useState("");
  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} type="text" value={name} />
      </form>
    </div>
  );
}
