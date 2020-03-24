import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createSelector } from "@reduxjs/toolkit"

import { AppState } from "./rootReducer"

type CartItem = {
  id: number
  name: string
  imageUrl: string
  price: number
}

export type CartItemWithQuantity = CartItem & { quantity: number }

export type CartState = {
  isCartDropdownOpen: boolean
  cartItems: CartItemWithQuantity[]
}

const initialState: CartState = {
  isCartDropdownOpen: false,
  cartItems: [],
}

const cartSlide = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toogleCartDropdown: (state): void => {
      state.isCartDropdownOpen = !state.isCartDropdownOpen
    },
    addCartItem: (state, action: PayloadAction<CartItem>): void => {
      const itemId = action.payload.id
      const itemIndex = state.cartItems.findIndex(
        cartItem => cartItem.id === itemId,
      )
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity++
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        })
      }
    },
  },
})

const selectCartItems = (state: AppState): CartItemWithQuantity[] =>
  state.cart.cartItems
const totalCartItemSelector = createSelector<
  AppState,
  CartItemWithQuantity[],
  number
>(selectCartItems, (items: CartItemWithQuantity[]) =>
  items.reduce(
    (acc: number, cur: CartItemWithQuantity) => (acc += cur.quantity),
    0,
  ),
)

const { toogleCartDropdown, addCartItem } = cartSlide.actions

export default cartSlide
export { toogleCartDropdown, addCartItem, totalCartItemSelector }
