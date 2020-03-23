import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"

import rootReducer from "./reducers/rootReducer"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas/rootSaga"

const sagaMiddleware = createSagaMiddleware()

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`)
  middleware.push(logger)
}

const store = configureStore({
  reducer: rootReducer,
  middleware,
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch

export default store
