import React from "react"
import styled from "styled-components"

import { CollectionItemProps } from "./interfaces"

const ItemContainer = styled.div`
  height: 350px;
`

const CollectionItem: React.FC<CollectionItemProps> = ({
  name,
  price,
  imageUrl,
}) => (
  <ItemContainer className="flex flex-col items-center">
    <div
      className="w-full h-full mb-1 bg-center bg-cover"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="flex justify-between w-full text-xl">
      <span>{name}</span>
      <span>{price}</span>
    </div>
  </ItemContainer>
)

export default CollectionItem
