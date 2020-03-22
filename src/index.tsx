import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider, useSelector } from "react-redux"
import { I18nProvider } from "@lingui/react"

import { AppState } from "./reducers/rootReducer"
import Shop from "./features/shop/Shop"
import * as serviceWorker from "./serviceWorker"
import store from "./store"
import "./tailwind-generated.css"
import Header from "./features/header/Header"
import AuthPage from "./features/authentication/AuthPage"

// Lazy loading main pages
const Home = lazy(() => import("./features/home/Home"))

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

const App: React.FC = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="pt-12 text-center">
            <p>Loading...</p>
          </div>
        }
      >
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/auth" component={AuthPage} />
        </Switch>
      </Suspense>
    </Router>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <I18nWrapper />
  </Provider>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
