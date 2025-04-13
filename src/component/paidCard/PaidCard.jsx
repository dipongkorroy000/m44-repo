import React, { use } from "react";
import Cart from "./Cart";

const PaidCard = ({ cartPromise }) => {
  const cartData = use(cartPromise);

  return (
    <div className="space-y-3">
      <h2 className="text-5xl">Get our Course</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cartData.map((cart) => (
          <Cart key={cart.id} cart={cart}></Cart>
        ))}
      </div>
    </div>
  );
};

export default PaidCard;
