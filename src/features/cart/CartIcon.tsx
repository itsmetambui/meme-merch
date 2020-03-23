import React from "react"

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

const CartIcon: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-16 h-16 cursor-pointer">
      <ShoppingIcon className="w-8 h-8" />
      <span className="absolute text-sm font-bold" style={{ bottom: 18 }}>
        0
      </span>
    </div>
  )
}

export default CartIcon
