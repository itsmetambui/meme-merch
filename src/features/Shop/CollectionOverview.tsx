import React from "react"
import { useSelector } from "react-redux"

import { AppState } from "../../reducers/rootReducer"
import CollectionPreview from "./CollectionPreview"

const CollectionOverview: React.FC = () => {
  const collections = useSelector((state: AppState) => state.shop.collections)

  return (
    <div>
      {collections.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  )
}

export default CollectionOverview
