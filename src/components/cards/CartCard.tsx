"use client"

import { useEffect, useState } from "react";

export default function CardCard() {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const savedQuantity = localStorage.getItem("quantity");
    if (savedQuantity) {
      setQuantity(parseInt(savedQuantity, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("quantity", quantity.toString());
  }, [quantity]);

  function addHandler() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  function removeHandler() {
    if (quantity <= 0) return;
    setQuantity((prevQuantity) => prevQuantity - 1);
  }

  return (
    <div className="flex mt-8">
      <button className="w-10 bg-gray-200" onClick={removeHandler}>
        -
      </button>
      <p className="text-center w-10 bg-gray-500 text-white"> {quantity} </p>
      <button className="w-10 bg-gray-200" onClick={addHandler}>
        +
      </button>
    </div>
  );
}