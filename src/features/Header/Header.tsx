import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { ReactComponent as Logo } from "../../assets/crown.svg"
import { auth } from "../../config/firebase"

const HeaderContainer = styled.div`
  height: 70px;
`

type HeaderProps = {
  userEmail?: string | null
}

const Header: React.FC<HeaderProps> = ({ userEmail }) => (
  <HeaderContainer className="flex justify-between w-full mb-6">
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
      {userEmail ? (
        <>
          <button className="px-4 py-4 text-xl" onClick={() => auth.signOut()}>
            SIGN OUT
          </button>
          <span className="px-4 py-4">{userEmail}</span>
        </>
      ) : (
        <Link className="px-4 py-4 text-xl" to="/auth">
          SIGN IN
        </Link>
      )}
    </div>
  </HeaderContainer>
)

export default Header
