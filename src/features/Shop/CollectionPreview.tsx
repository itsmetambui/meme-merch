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
      <div className="flex flex-wrap justify-start -mx-8">
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <div
              key={item.id}
              className="w-full px-0 py-2 sm:px-8 sm:w-1/2 lg:w-1/4"
            >
              <CollectionItem {...item} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default CollectionPreview
