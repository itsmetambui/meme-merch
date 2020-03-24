import React from "react"
import { useSelector } from "react-redux"

import { AppState } from "../../reducers/rootReducer"
import CollectionPreview from "./CollectionPreview"
import { collectionsSelector } from "../../reducers/shopSlice"

const CollectionOverview: React.FC = () => {
  const collections = collectionsSelector(
    useSelector((state: AppState) => state),
  )

  return (
    <div>
      {collections.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  )
}

export default CollectionOverview
