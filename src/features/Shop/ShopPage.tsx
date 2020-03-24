import React from "react"

import CollectionPreview from "./CollectionPreview"
import { useSelector } from "react-redux"
import { AppState } from "../../reducers/rootReducer"

const SHOP: React.FC = () => {
  const collections = useSelector((state: AppState) => state.shop.collections)
  return (
    <div className="shop-page">
      {collections.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  )
}

export default SHOP
