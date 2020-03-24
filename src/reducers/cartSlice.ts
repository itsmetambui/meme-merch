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

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toogleCartDropdown: (state: CartState): void => {
      state.isCartDropdownOpen = !state.isCartDropdownOpen
    },
    addCartItem: (state: CartState, action: PayloadAction<CartItem>): void => {
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
    removeCartItem: (
      state: CartState,
      action: PayloadAction<{ id: number }>,
    ): void => {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload.id,
      )
    },
    updateCartItemQuantity: (
      state: CartState,
      action: PayloadAction<{ id: number; difference: number }>,
    ): void => {
      const { id: itemId, difference } = action.payload
      const itemIndex = state.cartItems.findIndex(
        cartItem => cartItem.id === itemId,
      )
      if (itemIndex !== -1) {
        const nextQuantity = state.cartItems[itemIndex].quantity + difference
        if (nextQuantity === 0) {
          state.cartItems = state.cartItems.filter(item => item.id !== itemId)
        } else {
          state.cartItems[itemIndex].quantity = nextQuantity
        }
      } else {
        throw new Error("Item ID is not available")
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

const totalPriceSelector = createSelector<
  AppState,
  CartItemWithQuantity[],
  number
>(selectCartItems, (items: CartItemWithQuantity[]) =>
  items.reduce(
    (acc: number, cur: CartItemWithQuantity) =>
      (acc += cur.quantity * cur.price),
    0,
  ),
)

const {
  toogleCartDropdown,
  addCartItem,
  removeCartItem,
  updateCartItemQuantity,
} = cartSlice.actions

export default cartSlice
export {
  toogleCartDropdown,
  addCartItem,
  removeCartItem,
  updateCartItemQuantity,
  totalCartItemSelector,
  totalPriceSelector,
}
