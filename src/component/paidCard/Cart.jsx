import React from "react";
import Feature from "./Feature";

const Cart = ({ cart }) => {
  const { name, price, description, features } = cart;
  return (
    <div className="justify-between flex-1 flex flex-col bg-cyan-600 border rounded-2xl p-4 space-y-3">
      <div className="bg-cyan-500 p-5 rounded-2xl">
        <h1 className="text-3xl">Name : {name}</h1>
        <p className="text-xl">Price : {price}</p>
      </div>
      <div className="bg-emerald-500 p-5 rounded-b-2xl">
        <p>Description : {description}</p>
        {features.map((feature,index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
          </div>
          <button className="btn w-full">Subscribe</button>
    </div>
  );
};

export default Cart;
