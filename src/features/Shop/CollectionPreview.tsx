import React from "react"
import CollectionItem from "./CollectionItem"
import { CollectionPreviewProps } from "./interfaces"

const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  title,
  items,
}) => {
  return (
    <div className="flex flex-col mb-8">
      <h1 className="mb-6 text-2xl">{title.toUpperCase()}</h1>
      <div className="flex flex-wrap justify-between -mx-8">
        {items
          .filter((item, idx) => idx < 4)
          .map(collection => (
            <div
              key={collection.id}
              className="w-full px-0 sm:px-8 sm:w-1/2 md:w-1/4"
            >
              <CollectionItem {...collection} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview
