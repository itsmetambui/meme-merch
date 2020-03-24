import React from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

import { totalCartItemSelector } from "../../reducers/cartSlice"
import { AppState } from "../../reducers/rootReducer"
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"
import { toogleCartDropdown } from "../../reducers/cartSlice"
import { AppDispatch } from "../../store"

const CartIcon: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const totalCartItems = totalCartItemSelector(
    useSelector((state: AppState) => state),
  )
  return (
    <div
      onClick={() => dispatch(toogleCartDropdown())}
      className="relative flex items-center justify-center w-16 h-16 cursor-pointer"
    >
      <ShoppingIcon className="w-8 h-8" />
      <span className="absolute text-sm font-bold" style={{ bottom: 18 }}>
        {totalCartItems}
      </span>
    </div>
  )
}

export default CartIcon
