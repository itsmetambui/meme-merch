import React from "react"
import { Route, useRouteMatch } from "react-router-dom"
import CollectionOverview from "./CollectionOverview"
import CollectionPage from "./CollectionPage"

const SHOP: React.FC = () => {
  const match = useRouteMatch()

  return (
    <div>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionSlug`} component={CollectionPage} />
    </div>
  )
}

export default SHOP
