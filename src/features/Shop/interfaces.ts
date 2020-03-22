export interface CollectionItemProps {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface CollectionPreviewProps {
  id: number
  title: string
  routeName: string
  items: CollectionItemProps[]
}
