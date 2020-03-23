import { createSlice /* PayloadAction */ } from "@reduxjs/toolkit"

export type AuthState = {
  isCartDropdownOpen: boolean
}

const initialState: AuthState = {
  isCartDropdownOpen: false,
}

const cartSlide = createSlice({
  name: "toogleCartDropdown",
  initialState,
  reducers: {
    toogleCartDropdown: state => {
      state.isCartDropdownOpen = !state.isCartDropdownOpen
    },
  },
})

export const { toogleCartDropdown } = cartSlide.actions

export default cartSlide
