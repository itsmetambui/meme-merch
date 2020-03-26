import React from "react"
import ReactDOM from "react-dom"
import { Provider, useSelector } from "react-redux"
import { I18nProvider } from "@lingui/react"
import { PersistGate } from "redux-persist/integration/react"

import { AppState } from "./reducers/rootReducer"
import * as serviceWorker from "./serviceWorker"
import store, { persistor } from "./store"
import "./tailwind-generated.css"
import App from "./App"

const I18nWrapper: React.FC = () => {
  const locale = useSelector((state: AppState) => state.locale)
  const catalogs = {
    [locale]: require(`./locales/${locale}/messages.js`).default,
  }

  return (
    <I18nProvider language={locale} catalogs={catalogs}>
      <App />
    </I18nProvider>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading="Loading..." persistor={persistor}>
      <I18nWrapper />
    </PersistGate>
  </Provider>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
