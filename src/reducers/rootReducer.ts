import localeSlice from "./localeSlice"
import tasksSlice from "./tasksSlice"
import { combineReducers, PayloadAction } from "@reduxjs/toolkit"
import authSlice from "./authSlice"

export type PayloadActionWithResolve<T> = {
  onResolve?: (data?: any) => void
} & PayloadAction<T>

const rootReducer = combineReducers({
  tasks: tasksSlice.reducer,
  locale: localeSlice.reducer,
  auth: authSlice.reducer,
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer
