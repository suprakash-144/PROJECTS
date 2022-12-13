import React, { useState } from "react";

export default function Usestatef() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <p>count : {count}</p>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        icerement
      </button>
    </div>
  );
}
