import React from "react"

import CollectionPreview from "./CollectionPreview"
import data from "../../config/shop-data"

const SHOP: React.FC = () => {
  return (
    <div className="shop-page">
      {data.collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default SHOP
