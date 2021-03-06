export type CollectionItemProps = {
  id: number
  name: string
  imageUrl: string
  price: number
}

export type CollectionPreviewProps = {
  id: number
  title: string
  slug: string
  items: CollectionItemProps[]
}
