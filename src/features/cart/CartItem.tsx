import React from "react"
import { CartItemWithQuantity } from "../../reducers/cartSlice"

const CartItem: React.FC<CartItemWithQuantity> = ({ name, price, imageUrl, quantity }) => {
  return (
    <div className="flex flex-row w-full h-20 mb-4">
      <img src={imageUrl} alt="cart item" style={{ width: "30%" }} />
      <div className="flex flex-col items-center justify-center flex-auto px-3 py-2 text-base">
        <span>{name}</span>
        <span>{`${quantity} X $${price}`}</span>
      </div>
    </div>
  )
}

export default CartItem
