import React from "react"
import { useParams, useHistory } from "react-router-dom"
import { useSelector } from "react-redux"

import CollectionItem from "./CollectionItem"
import { AppState } from "../../reducers/rootReducer"
import { collectionSelector } from "../../reducers/shopSlice"
import CustomButton from "../../components/CustomButton"

const CollectionPage = () => {
  const history = useHistory()
  const { collectionSlug } = useParams()
  const collection = collectionSelector(collectionSlug)(
    useSelector((state: AppState) => state),
  )

  if (collection === undefined)
    return (
      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="mb-16 text-2xl">
          Somethings is wrong, please go back to the shop
        </h1>
        <CustomButton onClick={() => history.push("/shop")} className="h-4">
          Go back
        </CustomButton>
      </div>
    )
  return (
    <div className="flex flex-col mb-8">
      <h2 className="mb-6 text-2xl">{collection.title}</h2>
      <div className="flex flex-wrap justify-start -mx-8">
        {collection.items.map(item => (
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

export default CollectionPage
