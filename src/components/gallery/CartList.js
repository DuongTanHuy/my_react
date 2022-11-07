import React from "react";
import { useGallery } from "../../contexts/gallery-context";

const CartList = () => {
  const { cart, handleRemoveFromCart } = useGallery();
  return (
    <div className="py-10 px-5 flex flex-col items-start gap-y-3">
      {cart.length > 0 &&
        cart.map((item) => (
          <div
            key={item.id}
            className="inline-flex gap-x-3 items-center justify-center"
          >
            <img
              src={item.url}
              className="w-10 h-10 rounded-full object-cover"
              alt=""
            />
            <button
              onClick={() => handleRemoveFromCart(item)}
              className="p-3 rounded-lg bg-red-400 text-white font-semibold text-sm"
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default CartList;
