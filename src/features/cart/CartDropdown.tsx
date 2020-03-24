import React from "react"
import styled from "styled-components"

import CustomButton from "../../components/CustomButton"

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
  return (
    <CartDropdownContainer className="absolute flex flex-col p-6 bg-white border border-black border-solid">
      <CartItemsContainer className="flex flex-col overflow-y-auto"></CartItemsContainer>
      <CustomButton className="mt-auto">GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
  )
}

export default CartDropdown
