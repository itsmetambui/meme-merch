import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"

import { AppState } from "../../reducers/rootReducer"
import { totalPriceSelector } from "../../reducers/cartSlice"
import CheckoutItem from "./CheckoutItem"
import StripeButton from "../../components/StripeButton"

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
      {cartItems.length ? (
        cartItems.map(cartItem => <CheckoutItem key={cartItem.id} {...cartItem} />)
      ) : (
        <span className="mt-4 text-xl text-center">Your cart is empty</span>
      )}
      <div className="mt-8 ml-auto text-2xl text-left">TOTAL: ${total}</div>
      <StripeButton price={total} />
      <div className="mt-8 text-xl text-center text-red-500">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
      </div>
    </CheckoutPageContainer>
  )
}

export default Checkout
