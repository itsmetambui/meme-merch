import React from "react"
import { CollectionItemProps } from "./interfaces"
import "./CollectionItem.scss"

const CollectionItem: React.FC<CollectionItemProps> = ({
  name,
  price,
  imageUrl,
}) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
)

export default CollectionItem
