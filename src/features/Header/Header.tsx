import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useSelector } from "react-redux"

import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from "../../config/firebase"
import { AppState } from "../../reducers/rootReducer"
import CartIcon from "../cart/CartIcon"
import CartDropdown from "../cart/CartDropdown"

const HeaderContainer = styled.div`
  height: 70px;
`

const Header: React.FC = () => {
  const { currentUser } = useSelector((state: AppState) => state.auth)
  const { isCartDropdownOpen } = useSelector((state: AppState) => state.cart)

  return (
    <HeaderContainer className="relative flex justify-between w-full mb-6">
      <Link className="flex items-center" to="/">
        <Logo />
      </Link>
      <div className="flex items-center justify-end w-1/2 h-full">
        <Link className="px-4 py-4 text-xl" to="/shop">
          SHOP
        </Link>
        <Link className="px-4 py-4 text-xl" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <>
            <button
              className="px-4 py-4 text-xl"
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </button>
            <span className="px-4 py-4">{currentUser.email}</span>
          </>
        ) : (
          <Link className="px-4 py-4 text-xl" to="/auth">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartDropdownOpen && <CartDropdown />}
    </HeaderContainer>
  )
}

export default Header
