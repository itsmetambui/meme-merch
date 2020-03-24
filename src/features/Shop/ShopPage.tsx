import React from "react"

import CollectionPreview from "./CollectionPreview"
import data from "../../config/shop-data"

const SHOP: React.FC = () => {
  return (
    <div className="shop-page">
      {data.collections.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  )
}

export default SHOP
