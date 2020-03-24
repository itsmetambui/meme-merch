import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"

import rootReducer from "./reducers/rootReducer"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas/rootSaga"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [
  ...getDefaultMiddleware({
    thunk: false,
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  sagaMiddleware,
]

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`)
  middleware.push(logger)
}

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware,
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store)

export default store
