import { useState } from "react";

export default function () {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          value={name}
        />
      </form>
    </div>
  );
}
