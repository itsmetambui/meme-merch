import localeSlice from "./localeSlice"
import { combineReducers, PayloadAction } from "@reduxjs/toolkit"
import authSlice from "./authSlice"
import cartSlide from "./cartSlice"
import directorySlice from "./directorySlice"

export type PayloadActionWithResolve<T> = {
  onResolve?: (data?: any) => void
} & PayloadAction<T>

const rootReducer = combineReducers({
  locale: localeSlice.reducer,
  auth: authSlice.reducer,
  cart: cartSlide.reducer,
  directory: directorySlice.reducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
