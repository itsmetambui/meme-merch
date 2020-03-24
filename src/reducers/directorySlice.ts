import { createSlice } from "@reduxjs/toolkit"

type Section = {
  id: number
  title: string
  imageUrl: string
  size?: string
  linkUrl: string
}

export type DirectoryState = {
  sections: Section[]
}

const initialState: DirectoryState = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "womens",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "hatmenss",
    },
  ],
}

const directorySlice = createSlice({
  name: "directory",
  initialState,
  reducers: {},
})

export default directorySlice
