import React, { Suspense, lazy, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { AppState } from "./reducers/rootReducer"
import { AppDispatch } from "./store"
import "./tailwind-generated.css"
import Header from "./features/header/Header"
import AuthPage from "./features/authentication/AuthPage"
import ShopPage from "./features/shop/ShopPage"
import CheckoutPage from "./features/checkout/CheckoutPage"
import { auth, createUserProfileDocument } from "./config/firebase"
import { setCurrentUser } from "./reducers/authSlice"

const HomePage = lazy(() => import("./features/home/HomePage"))

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
          <Route path="/auth" render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
