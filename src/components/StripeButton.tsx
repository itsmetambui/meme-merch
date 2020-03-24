import React from "react"
import { useDispatch } from "react-redux"

import StripeCheckout, { Token } from "react-stripe-checkout"
import { AppDispatch } from "../store"
import { emptyCart } from "../reducers/cartSlice"
import CustomButton from "./CustomButton"

type StripeButtonProps = {
  price: number
}

const StripeButton: React.FC<StripeButtonProps> = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = "pk_test_kRYflQOM1BpzT27lmwZ8Xsd600LJT19a41"
  const dispatch = useDispatch<AppDispatch>()

  const onToken = (token: Token) => {
    console.log(token)
    dispatch(emptyCart())
    alert("Payment Succesful!")
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CROWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <CustomButton color="blue" disabled={price === 0}>
        Pay Now
      </CustomButton>
    </StripeCheckout>
  )
}

export default StripeButton
