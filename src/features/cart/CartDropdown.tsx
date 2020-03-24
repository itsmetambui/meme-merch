import React from "react"
import styled from "styled-components"

import CustomButton from "../../components/CustomButton"
import CartItem from "./CartItem"
import { useSelector, useDispatch } from "react-redux"
import { AppState } from "../../reducers/rootReducer"
import {
  CartItemWithQuantity,
  toogleCartDropdown,
} from "../../reducers/cartSlice"
import { useHistory } from "react-router-dom"

const CartDropdownContainer = styled.div`
  width: 260px;
  height: 400px;
  top: 80px;
  right: 0;
  z-index: 5;
`

const CartItemsContainer = styled.div`
  height: 280px;
`

const CartDropdown: React.FC = () => {
  const history = useHistory()
  const items = useSelector((state: AppState) => state.cart.cartItems)
  const dispatch = useDispatch()

  return (
    <CartDropdownContainer className="absolute flex flex-col p-6 bg-white border border-black border-solid">
      <CartItemsContainer className="flex flex-col overflow-y-auto">
        {items.length ? (
          items.map((item: CartItemWithQuantity) => (
            <CartItem key={item.id} {...item} />
          ))
        ) : (
          <span className="mt-20 text-xl text-center">Your cart is empty</span>
        )}
      </CartItemsContainer>
      <CustomButton
        onClick={() => {
          dispatch(toogleCartDropdown())
          history.push("/checkout")
        }}
        className="mt-auto"
      >
        GO TO CHECKOUT
      </CustomButton>
    </CartDropdownContainer>
  )
}

export default CartDropdown
