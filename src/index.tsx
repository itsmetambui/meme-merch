import React, { Suspense, lazy, useEffect } from "react"
import ReactDOM from "react-dom"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { Provider, useSelector, useDispatch } from "react-redux"
import { I18nProvider } from "@lingui/react"
import { PersistGate } from "redux-persist/integration/react"

import { AppState } from "./reducers/rootReducer"
import * as serviceWorker from "./serviceWorker"
import store, { AppDispatch, persistor } from "./store"
import "./tailwind-generated.css"
import Header from "./features/header/Header"
import AuthPage from "./features/authentication/AuthPage"
import ShopPage from "./features/shop/ShopPage"
import CheckoutPage from "./features/checkout/CheckoutPage"
import { auth, createUserProfileDocument } from "./config/firebase"
import { setCurrentUser } from "./reducers/authSlice"

const HomePage = lazy(() => import("./features/home/HomePage"))

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
  const currentUser = useSelector((state: AppState) => state.auth.currentUser)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef?.onSnapshot(snapshot => {
          const data = snapshot.data()
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              email: data?.email,
              displayName: data?.displayName,
              createdAt: data?.createdAt.toDate().toJSON(),
            }),
          )
        })
      } else {
        dispatch(setCurrentUser(null))
      }
    })
    return () => unsubscribe()
  }, [dispatch])

  return (
    <Router>
      <PersistGate loading="Loading..." persistor={persistor}>
        <Suspense
          fallback={
            <div className="pt-12 text-center">
              <p>Loading...</p>
            </div>
          }
        >
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route
              path="/auth"
              render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
            />
          </Switch>
        </Suspense>
      </PersistGate>
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
