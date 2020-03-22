import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { ReactComponent as Logo } from "../../assets/crown.svg"

const HeaderContainer = styled.div`
  height: 70px;
`

const Header: React.FC = () => (
  <HeaderContainer className="flex justify-between w-full mb-6">
    <Link className="flex items-center" to="/">
      <Logo />
    </Link>
    <div className="flex items-center justify-end w-1/2 h-full">
      <Link className="px-4 py-4" to="/shop">
        SHOP
      </Link>
      <Link className="px-4 py-4" to="/shop">
        CONTACT
      </Link>
      <Link className="px-4 py-4" to="/auth">
        SIGNIN
      </Link>
    </div>
  </HeaderContainer>
)

export default Header
