import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type CurrentUser = {
  id: string
  displayName: string
  email: string
  createdAt: string
} | null

export type AuthState = {
  currentUser: CurrentUser
}

const initialState: AuthState = {
  currentUser: null,
}

const currentUserSlide = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<CurrentUser>) => {
      state.currentUser = action.payload
    },
  },
})

export const { setCurrentUser } = currentUserSlide.actions

export default currentUserSlide
