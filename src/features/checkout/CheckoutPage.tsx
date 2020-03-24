import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

import { AppState } from "../../reducers/rootReducer"
import { totalPriceSelector } from "../../reducers/cartSlice"
import CheckoutItem from "./CheckoutItem"

const CheckoutPageContainer = styled.div`
  min-height: 90vh;
`

const Checkout: React.FC = () => {
  const cartItems = useSelector((state: AppState) => state.cart.cartItems)
  const total = totalPriceSelector(useSelector((state: AppState) => state))

  return (
    <CheckoutPageContainer className="flex flex-col items-center w-full mx-auto mt-12 md:w-3/4 lg:w-1/2">
      <div className="flex justify-between w-full px-2 py-4 border-b border-gray-500 border-b-solid">
        <div className="flex-1 capitalize">
          <span>Product</span>
        </div>
        <div className="flex-1 capitalize">
          <span>Description</span>
        </div>
        <div className="flex-1 capitalize">
          <span>Quantity</span>
        </div>
        <div className="flex-1 capitalize">
          <span>Price</span>
        </div>
        <div className="capitalize" style={{ width: "8%" }}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} {...cartItem} />
      ))}
      <div className="mt-8 ml-auto text-2xl text-left">TOTAL: ${total}</div>
    </CheckoutPageContainer>
  )
}

export default Checkout
