import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import { CollectionItemProps } from "./interfaces"
import CustomButton from "../../components/CustomButton"
import { AppDispatch } from "../../store"
import { addCartItem } from "../../reducers/cartSlice"

const ItemContainer = styled.div`
  height: 350px;

  :hover .image {
    opacity: 0.8;
  }

  .add-to-cart-btn {
    bottom: 70px;
  }
`

const CollectionItem: React.FC<CollectionItemProps> = ({ id, name, price, imageUrl }) => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <ItemContainer className="relative flex flex-col items-center">
      <div
        className="w-full h-full mb-1 transition-all duration-300 bg-center bg-cover image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="flex justify-between w-full text-xl">
        <span>{name}</span>
        <span>${price}</span>
      </div>

      <CustomButton
        variant="text"
        className="absolute text-black bg-white opacity-75 add-to-cart-btn"
        onClick={() => dispatch(addCartItem({ id, name, price, imageUrl }))}
      >
        ADD TO CART
      </CustomButton>
    </ItemContainer>
  )
}

export default CollectionItem
