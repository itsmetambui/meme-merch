import React from "react"
import { useDispatch } from "react-redux"

import { AppDispatch } from "../../store"
import { removeCartItem, updateCartItemQuantity } from "../../reducers/cartSlice"

type CheckoutItemProps = {
  id: number
  name: string
  price: number
  imageUrl: string
  quantity: number
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ id, name, price, imageUrl, quantity }) => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className="flex flex-row items-center w-full py-4 border-b border-gray-500 border-b-solid">
      <div className="flex-1 pr-4">
        <img src={imageUrl} className="w-full h-40" alt="item" />
      </div>
      <div className="flex-1">
        <span>{name}</span>
      </div>
      <div className="flex-1 mr-4">
        <span
          className="px-2 text-xl font-bold cursor-pointer"
          onClick={() => dispatch(updateCartItemQuantity({ id, difference: -1 }))}
        >
          &lt;
        </span>
        <span>{quantity}</span>
        <span
          className="px-2 text-xl font-bold cursor-pointer"
          onClick={() => dispatch(updateCartItemQuantity({ id, difference: 1 }))}
        >
          &gt;
        </span>
      </div>
      <div className="flex-1">
        <span>${price}</span>
      </div>
      <div style={{ width: "8%" }}>
        <span
          className="px-2 text-xl font-bold cursor-pointer"
          onClick={() => dispatch(removeCartItem({ id }))}
        >
          &#10005;
        </span>
      </div>
    </div>
  )
}

export default CheckoutItem
