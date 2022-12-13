import React, { useState, useEffect } from "react";

// usestate defines state in functional components
// useffect acts as the componentmount , componentdidupdate and
// componentunmount in functional components
export default function Usestatef() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.warn(count);
  });
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
